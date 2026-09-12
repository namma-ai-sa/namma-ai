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
    async function loadUser() {
      try {
        const response = await fetch("/api/me");
        const data = await response.json();

        if (data.success) {
          setUserId(data.user.id);
        }
      } catch (error) {
        console.error(error);
      }
    }

    loadUser();
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
        background: "#111827",
        border: "1px solid #374151",
        borderRadius: "20px",
        padding: "20px",
      }}
    >
      <h2
        style={{
          color: "#fff",
          marginBottom: "15px",
        }}
      >
         كيف أستطيع مساعدتك اليوم؟
      </h2>

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="اكتب سؤالك أو طلبك هنا..."
        style={{
          width: "100%",
          minHeight: "140px",
          background: "#030712",
          color: "#fff",
          border: "1px solid #374151",
          borderRadius: "14px",
          padding: "16px",
        }}
      />

      <button
        onClick={handleSend}
        disabled={loading}
        style={{
          marginTop: "12px",
        }}
      >
        {loading ? "جاري الإرسال..." : "✨ إرسال"}
      </button>
    </div>
  );
}
