import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap

const MessageInput = ({ onSend }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSend(message);
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex align-items-center mt-3 container">
      <input
        type="text"
        className="form-control me-2 flex-grow-1 p-3"
        style={{ fontSize: "18px" }}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button type="submit" className="btn btn-primary px-4 py-3">Send</button>
    </form>
  );
};

export default MessageInput;
