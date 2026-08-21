"use client";

import { useState } from "react";

export default function GuestPage() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  async function askAI() {
    if (!message.trim()) return;

    setLoading(true);
    setReply("");

    try {
      const res = await fetch("/api/guest-chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setReply(data.message);
      } else {
        setReply("حدث خطأ أثناء إنشاء الرد");
      }
    } catch {
      setReply("فشل الاتصال بالخادم");
    }

    setLoading(false);
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050509",
        color: "white",
        padding: "40px 20px",
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
            marginBottom: "12px",
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
          اسأل أي سؤال وجرب الذكاء الاصطناعي قبل التسجيل.
        </p>

        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="كيف أزيد مبيعات شركتي؟"
          style={{
            width: "100%",
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
            marginTop: "15px",
            padding: "14px 24px",
            border: "none",
            borderRadius: "12px",
            background: "#22c55e",
            color: "white",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          {loading ? "جاري التفكير..." : "🚀 جرب الآن"}
        </button>

        {reply && (
          <div
            style={{
              marginTop: "25px",
              background: "#111827",
              borderRadius: "16px",
              padding: "20px",
              whiteSpace: "pre-wrap",
            }}
          >
            <strong>🤖 نمّى AI</strong>

            <div style={{ marginTop: "12px" }}>
              {reply}
            </div>

            <div
              style={{
                marginTop: "20px",
                color: "#22c55e",
                fontWeight: "bold",
              }}
            >
              🚀 للاستمرار بشكل غير محدود قم بإنشاء حساب مجاني
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
