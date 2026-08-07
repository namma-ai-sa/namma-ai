"use client";

import { useEffect, useState } from "react";

export default function Messages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const loadMessages = async () => {
      try {
        const response = await fetch(
          "/api/chat-history?conversationId=main-chat"
        );

        const data = await response.json();

        if (data.success) {
          setMessages(data.messages || []);
        }
      } catch (error) {
        console.error(error);
      }
    };

    loadMessages();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
      }}
    >
      {messages.map((message) => (
        <div
          key={message.id}
          style={{
            background:
              message.role === "user"
                ? "#1f2937"
                : "#111827",
            padding: "15px",
            borderRadius: "16px",
            whiteSpace: "pre-wrap",
          }}
        >
          <strong>
            {message.role === "user"
              ? "👤 أنت"
              : "🤖 نمّى AI"}
          </strong>

          <p style={{ marginTop: "10px" }}>
            {message.content}
          </p>
        </div>
      ))}
    </div>
  );
}
