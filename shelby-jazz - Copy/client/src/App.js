 import React, { useState } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    // Logic to send a message
  };

  return (
    <div className="app">
      <div className="sidebar">
        <div className="header">
          <h2>Shelby Jazz</h2>
        </div>
        <div className="contacts">
          <div className="contact">
            <img src="contact-avatar.jpg" alt="Contact Avatar" />
            <div className="contact-info">
              <h3>Contact Name</h3>
              <p>Last Message</p>
            </div>
          </div>
          {/* Add more contact components as needed */}
        </div>
      </div>
      <div className="chat">
        <div className="header">
          <h3>Contact Name</h3>
        </div>
        <div className="chat-body">
          <div className="message received">
            <p>Hello! How are you?</p>
            <span>10:00 AM</span>
          </div>
          <div className="message sent">
            <p>I'm good. Thanks for asking!</p>
            <span>10:02 AM</span>
          </div>
          {/* Render more messages dynamically */}
        </div>
        <div className="input-box">
          <form onSubmit={handleSendMessage}>
            <input type="text" placeholder="Type a message" />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
