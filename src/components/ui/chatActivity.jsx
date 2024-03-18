import React, { useState } from "react";
import { Input } from "./input";
import { Button } from "./button";
import { postMessage } from "../../services/api";

export const ChatActivity = ({ initMessage }) => {
  console.log(initMessage, "init");
  const ai = { text: initMessage, type: "ai" };
  const [messages, setMessages] = useState([ai]);
  const [inputValue, setInputValue] = useState("");

  const handleMessageSend = async () => {
    if (inputValue.trim() === "") return;
    const newMessage = { text: inputValue, type: "user" };
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    const responseMessage = await postMessage(2, inputValue);
    setInputValue("");
    const aiResponse = { text: responseMessage, type: "ai" };
    setMessages((prevMessages) => [...prevMessages, aiResponse]);
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={message.type === "ai" ? " text-primary-primary" : ""}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center p-4">
        <Input
          className="flex-1 mr-2"
          type="text"
          placeholder="Escribir tu mensaje acá"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button variant="outline" onClick={handleMessageSend}>
          Send
        </Button>
      </div>
    </div>
  );
};
