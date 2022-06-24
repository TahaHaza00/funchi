import React from 'react';
import "./index.css"
import { Link } from "react-router-dom"

const PrivateChat = () => {
  
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh'
      }}
    >
      <div>
        <input placeholder="Enter a Password" className="chat_password_box" required/>
        <Link to="/private-chat-room"><button className="create_button">Create</button></Link>
      </div>
    </div>
  );
};

export default PrivateChat;
