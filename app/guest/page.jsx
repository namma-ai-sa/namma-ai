"use client";

import { useState } from "react";

export default function GuestPage() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  async function askAI() {
    if (!message.trim() || loading) return;

    const userMessage = message;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: userMessage,
      },
    ]);

    setMessage("");
    setLoading(true);

    try {
      const res = await fetch("/api/guest-chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
        }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            data.message ||
            "تعذر إنشاء الرد.",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "حدث خطأ أثناء الاتصال بالخادم.",
        },
      ]);
    }

    setLoading(false);
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050509",
        color: "white",
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "48px",
            marginBottom: "10px",
          }}
        >
          🤖 جرّب نمّى AI
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#94a3b8",
            marginBottom: "30px",
          }}
        >
          جرّب الذكاء الاصطناعي قبل التسجيل.
        </p>

        <div
          style={{
            background: "#111827",
            borderRadius: "20px",
            padding: "20px",
            minHeight: "400px",
            marginBottom: "20px",
            border: "1px solid #374151",
          }}
        >
          {messages.length === 0 && (
            <div
              style={{
                color: "#94a3b8",
                textAlign: "center",
                marginTop: "120px",
              }}
            >
              اسأل أي سؤال عن المبيعات أو التسويق أو العملاء.
            </div>
          )}

          {messages.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent:
                  item.role === "user"
                    ? "flex-end"
                    : "flex-start",
                marginBottom: "15px",
              }}
            >
              <div
                style={{
                  maxWidth: "80%",
                  padding: "14px",
                  borderRadius: "16px",
                  background:
                    item.role === "user"
                      ? "#2563eb"
                      : "#1f2937",
                  whiteSpace: "pre-wrap",
                }}
              >
                {item.content}
              </div>
            </div>
          ))}

          {messages.length >= 3 && (
            <div
              style={{
                marginTop: "20px",
                textAlign: "center",
                color: "#22c55e",
                fontWeight: "bold",
              }}
            >
              🚀 أنشئ حساباً مجاناً لحفظ المحادثات
              واستخدام المنصة بالكامل.
            </div>
          )}
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <input
            value={message}
            onChange={(e) =>
              setMessage(e.target.value)
            }
            placeholder="كيف أزيد مبيعات شركتي؟"
            style={{
              flex: 1,
              padding: "16px",
              borderRadius: "12px",
              border: "1px solid #374151",
              background: "#111827",
              color: "white",
            }}
          />

          <button
            onClick={askAI}
            disabled={loading}
            style={{
              padding: "16px 24px",
              border: "none",
              borderRadius: "12px",
              background: "#22c55e",
              color: "white",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            {loading ? "..." : "إرسال"}
          </button>
        </div>
      </div>
    </main>
  );
}