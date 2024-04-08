import { useState, useEffect } from 'react';
import { IoMdCloseCircle } from 'react-icons/io';

function ChatbotWindow({ chatOpen, setChatOpen }) {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = async () => {
    // Logic to send the message
    console.log('Message sent:', message);
    const response = await fetch('/api/query', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }), // Add action property to request body
    });
    const answer = await response.text();
    const answer_parsed = JSON.parse(answer).response;
    setResponse(answer_parsed);

    console.log('Response:', answer_parsed);
    setMessage('');
  };

  return (
    <div className="fixed z-[100] h-full w-full pb-4">
      {/* Add drop shadow to the div */}
      <div className="relative flex items-center justify-center p-6 max-[770px]:w-[100%] max-[770px]:p-4">
        <div className=" w-[40%] max-[1400px]:w-[50%] h-[700px] mx-auto bg-gray-100 rounded-lg shadow-lg max-[770px]:w-[95%]">
          <div className="relative">
            <button onClick={() => setChatOpen(false)} className="absolute top-2 right-2">
              <IoMdCloseCircle />
            </button>
          </div>
          {/* Chat Messages */}
          <div className="p-6 h-[90%]">
            <div className="flex-1 overflow-y-auto bg-white rounded-md h-[100%]">
              <div className="h-full p-6">
                <p>{response}</p>
              </div>
            </div>
          </div>
          {/* Input Box and Send Button */}
          <div className="relative px-6 bottom-0 flex h-[50px]">
            <input
              type="text"
              value={message}
              onChange={handleMessageChange}
              className="flex-1 p-2 mr-2 rounded-md"
            />
            <button onClick={sendMessage} className="p-2 text-white bg-blue-500 rounded-md z-[100]">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatbotWindow;
