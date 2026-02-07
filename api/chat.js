const fs = require('fs');
const path = require('path');

// Load thesis context at module level (cached across invocations)
let thesisContext = null;

function loadThesisContext() {
  if (thesisContext === null) {
    try {
      const contextPath = path.join(process.cwd(), '_build', 'thesis-context.txt');
      thesisContext = fs.readFileSync(contextPath, 'utf-8');
    } catch (error) {
      console.error('Failed to load thesis context:', error);
      thesisContext = '';
    }
  }
  return thesisContext;
}

// In-memory rate limiting
const rateLimitMap = new Map();
const RATE_LIMIT = 10; // requests per minute
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute in ms

function checkRateLimit(ip) {
  const now = Date.now();

  // Clean up old entries
  for (const [key, data] of rateLimitMap.entries()) {
    if (now - data.firstRequest > RATE_LIMIT_WINDOW) {
      rateLimitMap.delete(key);
    }
  }

  // Check current IP
  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, { count: 1, firstRequest: now });
    return true;
  }

  const data = rateLimitMap.get(ip);

  // Reset if window has passed
  if (now - data.firstRequest > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, firstRequest: now });
    return true;
  }

  // Check if limit exceeded
  if (data.count >= RATE_LIMIT) {
    return false;
  }

  // Increment count
  data.count++;
  return true;
}

function buildSystemPrompt(thesisText) {
  return `You are an AI assistant for the PhD thesis "Unraveling Hidden Patterns of Brain Activity: A Journey Through Hemodynamic Deconvolution in Functional MRI" by Eneko Uruñuela.

Your role is to answer questions about this thesis based solely on its content.

THESIS CONTENT:

${thesisText}

INSTRUCTIONS:
- Answer questions based on the thesis content above
- Cite specific chapters or sections when relevant
- Be academic, precise, and thorough
- Keep responses concise but comprehensive
- If you don't know the answer based on the thesis content, clearly state that
- Do not make up information or extrapolate beyond what is written
- You may synthesize information from multiple chapters when relevant
- Use proper terminology from the thesis`;
}

function mapMessagesToGemini(messages) {
  // Gemini uses "user" and "model" roles
  return messages.map(msg => ({
    role: msg.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: msg.content }]
  }));
}

module.exports = async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Rate limiting
  const ip = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || 'unknown';
  if (!checkRateLimit(ip)) {
    return res.status(429).json({
      error: 'Rate limit exceeded. Please try again in a minute.'
    });
  }

  try {
    // Parse request body
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Invalid request: messages array required' });
    }

    // Truncate to last 20 messages
    const truncatedMessages = messages.slice(-20);

    // Load thesis context
    const thesisText = loadThesisContext();

    if (!thesisText) {
      return res.status(500).json({
        error: 'Thesis context not available. Please try again later.'
      });
    }

    // Check for API key
    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({
        error: 'API configuration error'
      });
    }

    // Build system prompt
    const systemPrompt = buildSystemPrompt(thesisText);

    // Map messages to Gemini format
    const geminiContents = mapMessagesToGemini(truncatedMessages);

    // Call Gemini API
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: geminiContents,
        systemInstruction: {
          parts: [{ text: systemPrompt }]
        },
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 2048,
        }
      })
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Gemini API error:', response.status, errorData);
      return res.status(500).json({
        error: 'Failed to generate response. Please try again later.'
      });
    }

    const data = await response.json();

    // Extract reply from Gemini response
    if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
      console.error('Unexpected Gemini response structure:', data);
      return res.status(500).json({
        error: 'Unexpected response from AI model'
      });
    }

    const reply = data.candidates[0].content.parts[0].text;

    return res.status(200).json({ reply });

  } catch (error) {
    console.error('Error in chat handler:', error);
    return res.status(500).json({
      error: 'Internal server error. Please try again later.'
    });
  }
};
