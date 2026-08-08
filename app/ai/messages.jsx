"use client";

import { useEffect, useState } from "react";
import { useConversation } from "./context/ConversationContext";

export default function Messages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const user = JSON.parse(
    localStorage.getItem("user") || "{}"
  );

  const { activeConversationId } =
    useConversation();

  useEffect(() => {
    if (!activeConversationId) return;

    async function loadMessages() {
      try {
        const response = await fetch(
          `/api/chat-history?conversationId=${activeConversationId}&userId=${user.id}`
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

    const interval = setInterval(
      loadMessages,
      1000
    );

    return () => clearInterval(interval);
  }, [activeConversationId]);

  if (loading) {
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
      {messages.map((message) => (
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
          }}
        >
          <strong>
            {message.role === "user"
              ? "👤 أنت"
              : "🤖 نمّى AI"}
          </strong>

          <p>{message.content}</p>
        </div>
      ))}
    </div>
  );
}
