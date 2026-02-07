#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Define chapter order from _toc.yml
const CHAPTER_ORDER = [
  'abstract',
  'acronyms',
  'introduction',
  'synthesis-analysis',
  'stability',
  'multivariate',
  'multi-subject',
  'low-rank',
  'conclusion',
  'supplementary'
];

// Path configuration
const SITE_CONTENT_DIR = path.join(__dirname, '..', '_build', 'site', 'content');
const OUTPUT_FILE = path.join(__dirname, '..', '_build', 'thesis-context.txt');

/**
 * Recursively extract text from mdast nodes
 * @param {Object} node - mdast node
 * @returns {string} extracted text
 */
function extractText(node) {
  if (!node) return '';

  // Handle text nodes
  if (node.type === 'text') {
    return node.value || '';
  }

  // Handle inline math nodes
  if (node.type === 'inlineMath') {
    return `$${node.value || ''}$`;
  }

  // Handle display math nodes
  if (node.type === 'math') {
    return `$$${node.value || ''}$$`;
  }

  // Recursively process children
  if (Array.isArray(node.children)) {
    const childTexts = node.children.map(child => extractText(child));

    // Add spacing between paragraphs
    if (node.type === 'paragraph') {
      return childTexts.join('') + '\n\n';
    }

    // Add spacing for block-level elements
    if (node.type === 'block' || node.type === 'root') {
      return childTexts.join('');
    }

    return childTexts.join('');
  }

  return '';
}

/**
 * Load and extract text from a chapter JSON file
 * @param {string} chapterSlug - chapter slug (filename without .json)
 * @returns {Object} { title, text } or null if file doesn't exist
 */
function extractChapterText(chapterSlug) {
  const jsonPath = path.join(SITE_CONTENT_DIR, `${chapterSlug}.json`);

  if (!fs.existsSync(jsonPath)) {
    console.warn(`Warning: ${jsonPath} not found, skipping...`);
    return null;
  }

  try {
    const content = fs.readFileSync(jsonPath, 'utf8');
    const data = JSON.parse(content);

    const title = data.frontmatter?.title || chapterSlug;
    const text = extractText(data.mdast);

    return { title, text: text.trim() };
  } catch (error) {
    console.error(`Error processing ${jsonPath}:`, error.message);
    return null;
  }
}

/**
 * Main function
 */
function main() {
  console.log('Extracting thesis context from mdast JSON files...\n');

  // Ensure output directory exists
  const outputDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Extract text from all chapters
  const sections = [];

  for (const chapterSlug of CHAPTER_ORDER) {
    console.log(`Processing: ${chapterSlug}...`);
    const chapter = extractChapterText(chapterSlug);

    if (chapter) {
      sections.push(`# ${chapter.title}\n\n${chapter.text}`);
    }
  }

  // Combine all sections
  const fullText = sections.join('\n\n\n');

  // Write to output file
  fs.writeFileSync(OUTPUT_FILE, fullText, 'utf8');

  // Calculate statistics
  const charCount = fullText.length;
  const wordCount = fullText.split(/\s+/).filter(word => word.length > 0).length;

  console.log('\n' + '='.repeat(60));
  console.log('Extraction complete!');
  console.log('='.repeat(60));
  console.log(`Output file: ${OUTPUT_FILE}`);
  console.log(`Total characters: ${charCount.toLocaleString()}`);
  console.log(`Total words: ${wordCount.toLocaleString()}`);
  console.log('='.repeat(60));
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { extractText, extractChapterText };
