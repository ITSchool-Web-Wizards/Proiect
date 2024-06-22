'use client'

import { useState } from "react";

const HomePage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const fetchResponse = async () => {
    try {
      const response = await fetch(`https://api.openai.com/v1/chat/completions`, {
        method: "POST",
        headers: {
          Authorization: `Bearer`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content:
                "You are a personal math tutor. Write and run code to answer math questions.",
            },
            { role: "user", content: input },
          ],
          temperature: 0.21,
          max_tokens: 125,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      return result.choices[0].message.content.trim();
    } catch (error) {
      console.error("Fetching response failed:", error);
      return "Error getting response.";
    }
  };

  const sendMessage = async () => {
    const userMessage = input;
    setMessages([...messages, { text: userMessage, sender: 'user' }]);
    setInput('');

    const botResponse = await fetchResponse();
    setMessages(messages => [...messages, { text: botResponse, sender: "bot" }]);
  };

  return (
    <div>
      <div className="chatbox">
        {messages.map((msg, index) => (
          <p key={index} className={msg.sender === 'user' ? 'user-msg' : 'bot-msg'}>
            {msg.text}
          </p>
        ))}
      </div>
      <input type="text" value={input} onChange={handleInput} placeholder="Type your message..." />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default HomePage;
