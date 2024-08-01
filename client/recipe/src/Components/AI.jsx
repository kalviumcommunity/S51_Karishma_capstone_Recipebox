import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { FiSend } from 'react-icons/fi';
import "./AI.css"
import Logo from "../assets/logo.png"


const genAI = new GoogleGenerativeAI('AIzaSyCFfpdz5bAURoNrU66et1UT-c4KSfBiEQc');

const AI = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const chatEndRef = useRef(null);
  const inputRef = useRef(null);

  const sendMessage = async () => {
    if (input.trim() === '') return;

    const userMessage = { text: input, sender: 'user' };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const result = await model.generateContent(input);
      const aiResponse = result.response.text();
      const aiMessage = { text: aiResponse, sender: 'ai' };
      setMessages(prevMessages => [...prevMessages, aiMessage]);
    } catch (error) {
      console.error('Error generating AI response:', error);
      setError('Failed to get AI response. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    inputRef.current?.focus();
  }, [messages]);

  const MessageBubble = ({ message }) => (
    <div className={`message-bubble ${message.sender === 'user' ? 'user-message' : 'ai-message'}`}>
      <div className={`message-content ${message.sender === 'user' ? 'user-text' : 'ai-text'}`}>
        <p>{message.text}</p>
      </div>
    </div>
  );

  return (
    <div className="ai-container">
      <div className="ai-header">
        <img className='ai-logo' src={Logo} alt="" />
        <h1 className='ai-logo-header'>Recipe Box</h1>
      </div>
      <div className="ai-messages">
        {messages.map((message, index) => (
          <MessageBubble key={index} message={message} />
        ))}
        {isLoading && (
          <div className="loading-spinner"></div>
        )}
        {error && (
          <div className="error-message">{error}</div>
        )}
        <div ref={chatEndRef} />
      </div>
      <div className="ai-input">
        <div className="input-container">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && !isLoading && sendMessage()}
            placeholder="Type your message..."
            disabled={isLoading}
          />
          <button
            onClick={sendMessage}
            className={`send-button ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="loading-spinner"></div>
            ) : (
              <FiSend />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AI;
