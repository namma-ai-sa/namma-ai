"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Chat() {
  const router = useRouter();
  const [message, setMessage] = useState("");

  const handleSend = async () => {
    if (!message.trim()) return;

    const currentMessage = message;

    setMessage("");

    try {
      await fetch("/api/save-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "guest",
          conversationId: "main-chat",
          role: "user",
          content: currentMessage,
        }),
      });
    } catch (error) {
      console.error(error);
    }

    router.push(
      `/ai?q=${encodeURIComponent(currentMessage)}`
    );
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
          border: "1px solid rgba(255,255,255,.1)",
          borderRadius: "18px",
          padding: "15px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
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
            fontSize: "16px",
          }}
        />

        <button
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            fontSize: "22px",
          }}
        >
          🎤
        </button>

        <button
          onClick={handleSend}
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            color: "#60a5fa",
            fontSize: "24px",
          }}
        >
          ➜
        </button>
      </div>
    </div>
  );
}