"use client";

import { useState, useEffect } from "react";
import { useConversation } from "./context/ConversationContext";

export default function Chat({
  initialMessage = "",
}) {
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

  useEffect(() => {
    if (initialMessage) {
      setMessage(initialMessage);
    }
  }, [initialMessage]);

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
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            conversationId:
              activeConversationId,
            title:
              currentMessage.slice(0, 40),
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
        position: "sticky",
        bottom: "0",
        background: "#030712",
        paddingTop: "10px",
      }}
    >
      <div
        style={{
          background: "#111827",
          border:
            "1px solid rgba(255,255,255,.08)",
          borderRadius: "24px",
          padding: "14px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          boxShadow:
            "0 10px 30px rgba(0,0,0,.25)",
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
          placeholder="اسأل نمّى AI عن المبيعات والتسويق والعملاء..."
          style={{
            flex: 1,
            background: "transparent",
            border: "none",
            outline: "none",
            color: "white",
            fontSize: "16px",
          }}
        />

        <button
          onClick={handleSend}
          disabled={loading}
          style={{
            border: "none",
            cursor: "pointer",
            background: "#22c55e",
            color: "white",
            width: "50px",
            height: "50px",
            borderRadius: "14px",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          {loading ? "..." : "➜"}
        </button>
      </div>

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "12px",
          flexWrap: "wrap",
        }}
      >
        {[
          "اعطني خطة تسويق",
          "كيف أزيد المبيعات؟",
          "حلل العملاء",
          "اكتب عرض سعر",
        ].map((item) => (
          <button
            key={item}
            onClick={() => setMessage(item)}
            style={{
              border:
                "1px solid rgba(255,255,255,.08)",
              background: "#111827",
              color: "#cbd5e1",
              borderRadius: "999px",
              padding: "8px 14px",
              cursor: "pointer",
            }}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}