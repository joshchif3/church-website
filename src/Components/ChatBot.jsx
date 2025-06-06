import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiMessageSquare, FiX, FiSend } from 'react-icons/fi';

const ChatBot = ({ darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I help you today?', sender: 'bot' },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;
    
    setMessages([...messages, { text: inputValue, sender: 'user' }]);
    setInputValue('');
    
    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: 'Thanks for your message. Our team will get back to you soon.', 
        sender: 'bot' 
      }]);
    }, 1000);
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg ${
          darkMode ? 'bg-primary-dark text-white' : 'bg-primary-light text-white'
        }`}
      >
        {isOpen ? <FiX size={24} /> : <FiMessageSquare size={24} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: 'spring', damping: 25 }}
            className={`fixed bottom-24 right-6 z-40 w-80 rounded-lg shadow-xl overflow-hidden ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <div className={`p-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <h3 className="font-bold">Church Assistant</h3>
            </div>

            <div className="h-64 p-4 overflow-y-auto">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-3 flex ${
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-xs p-3 rounded-lg ${
                      message.sender === 'user'
                        ? darkMode
                          ? 'bg-primary-dark'
                          : 'bg-primary-light'
                        : darkMode
                        ? 'bg-gray-700'
                        : 'bg-gray-200'
                    } ${
                      message.sender === 'user' ? 'text-white' : ''
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 border-t flex">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className={`flex-grow p-2 rounded-l-md border ${
                  darkMode ? 'bg-gray-700 border-gray-600' : 'border-gray-300'
                }`}
              />
              <button
                onClick={handleSendMessage}
                className={`p-2 rounded-r-md ${
                  darkMode ? 'bg-primary-dark' : 'bg-primary-light'
                } text-white`}
              >
                <FiSend />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;