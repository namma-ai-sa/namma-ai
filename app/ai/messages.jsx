"use client";

import { useEffect, useState } from "react";

export default function Messages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMessages() {
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
      } finally {
        setLoading(false);
      }
    }

    loadMessages();
  }, []);

  if (loading) {
    return null;
  }

  if (!messages.length) {
    return null;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        marginBottom: "20px",
      }}
    >
      {messages.slice(-10).map((message) => (
        <div
          key={message.id}
          style={{
            background:
              message.role === "user"
                ? "#1f2937"
                : "#111827",
            padding: "16px",
            borderRadius: "16px",
            whiteSpace: "pre-wrap",
            lineHeight: "1.8",
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
