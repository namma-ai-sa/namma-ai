"use client";

import { useState, useEffect } from "react";
import { useConversation } from "./context/ConversationContext";

export default function Chat() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState(null);

  const { activeConversationId } =
    useConversation();

  useEffect(() => {
    const user = JSON.parse(
      localStorage.getItem("user") || "{}"
    );

    if (user.id) {
      setUserId(user.id);
    }
  }, []);

  const handleSend = async () => {
    if (
      !message.trim() ||
      loading ||
      !activeConversationId ||
      !userId
    ) {
      return;
    }

    const currentMessage = message;

    setMessage("");
    setLoading(true);

    try {
      await fetch(
        "/api/update-conversation-title",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            conversationId:
              activeConversationId,
            title: currentMessage.slice(
              0,
              40
            ),
          }),
        }
      );

      await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          userId,
          message: currentMessage,
          conversationId:
            activeConversationId,
        }),
      });
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <div
      style={{
        marginTop: "30px",
        position: "sticky",
        bottom: "20px",
      }}
    >
      <div
        style={{
          background: "#111827",
          border:
            "1px solid rgba(255,255,255,.1)",
          borderRadius: "18px",
          padding: "15px",
          display: "flex",
          gap: "12px",
        }}
      >
        <input
          type="text"
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
          placeholder="اكتب رسالتك..."
          style={{
            flex: 1,
            background: "transparent",
            border: "none",
            outline: "none",
            color: "white",
          }}
        />

        <button
          onClick={handleSend}
          disabled={loading}
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            color: "#60a5fa",
            fontSize: "24px",
          }}
        >
          {loading ? "..." : "➜"}
        </button>
      </div>
    </div>
  );
}
