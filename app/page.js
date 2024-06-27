"use client";

// https://medium.com/@jeremydickey/how-to-integrate-openai-in-your-react-projects-467b5dda1f38
// https://medium.com/bina-nusantara-it-division/understanding-react-query-11e56960e90c
// https://ninza7.medium.com/building-an-ai-chatbot-with-react-next-js-tailwind-css-and-openai-2e2bb0ca6b17
// https://developer.mozilla.org/en-US/docs/Web/API/Response/ok
// https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables

import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// import { generateChatResponse } from './pages/api/openai';

const themes = {
  corporate: "corporate",
  night: "night",
};

const HomePage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [theme, setTheme] = useState(themes.corporate);

  const fetchResponse = async (userInput) => {
    try {
      const response = await fetch("/api/route", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: userInput }),
      });
      if (!response.ok) {
        const errorText = await response.text();
        toast.error(`Failed to fetch data: ${errorText}`);
        throw new Error(`HTTP error ${response.status}: ${errorText}`);
      }
      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {

      toast.error(`Error getting response: ${error.message}`);
      throw error;
  };
}

  const toggleTheme = () => {
    const newTheme =
      theme === themes.corporate ? themes.night : themes.corporate;
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const sendMessage = async () => {
    if (!input.trim()) {
      toast.warn("Please enter a message before sending.");
      return;
    }

    const userMessage = input.trim();
    setMessages([...messages, { text: userMessage, sender: "user" }]);
    setInput("");

    try {
      const botResponse = await fetchResponse(userMessage);
      setMessages((messages) => [
        ...messages,
        { text: botResponse, sender: "bot" },
      ]);
    } catch (error) {
      toast.error(`Failed to send message: ${error.message}`);
    }
  };

  return (
    <div className="app-container">
      <div className="theme-toggle" aria-label="Toggle theme">
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            className="theme-controller"
            value="synthwave"
            onClick={toggleTheme}
          />

          {/* sun icon */}
          <svg
            className="swap-off h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-on h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </div>
      <div className="chat-container">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <h1>Welcome to the Math Professor GPT Application!</h1>
        <div className="chatbox">
          {messages.map((msg, index) => (
            <p
              key={index}
              className={msg.sender === "user" ? "user-msg" : "bot-msg"}
            >
              {msg.text}
            </p>
          ))}
        </div>
        <div className="input-area">
          <input
            type="text"
            value={input}
            onChange={handleInput}
            placeholder="Type your message..."
          />
          <button
            className="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900"
            onClick={sendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
