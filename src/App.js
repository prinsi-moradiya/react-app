import React, { useState } from "react";
import MessageList from "./components/MessageList";
import MessageInput from "./components/MessageInput";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [messages, setMessages] = useState([]);

  const handleSend = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="App">
      <h1>Real-time Chat App</h1>
      <MessageList messages={messages} />
      <MessageInput onSend={handleSend} />
    </div>
  );
};

export default App;
