"use client";

import { useState, useRef, useEffect } from "react";

export default function GuestPage() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const FREE_MESSAGES = 3;
  const remainingMessages =
    FREE_MESSAGES -
    messages.filter(
      (m) => m.role === "user"
    ).length;

  async function askAI() {
    if (
      !message.trim() ||
      loading ||
      remainingMessages <= 0
    ) {
      return;
    }

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
            marginBottom: "15px",
          }}
        >
          جرّب الذكاء الاصطناعي قبل التسجيل.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
            gap: "12px",
            marginBottom: "25px",
          }}
        >
          {[
            "📈 زيادة المبيعات",
            "📱 كتابة رسائل واتساب",
            "🎯 إنشاء خطط تسويقية",
            "🤖 تحليل العملاء",
          ].map((item) => (
            <div
              key={item}
              style={{
                background: "#111827",
                border: "1px solid #374151",
                borderRadius: "14px",
                padding: "12px",
                textAlign: "center",
              }}
            >
              {item}
            </div>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "12px",
            marginBottom: "20px",
          }}
        >
          {[
            "⭐ 5000+ رسالة",
            "👥 300+ عميل",
            "⚡ تحسين المتابعة 90%",
          ].map((item) => (
            <div
              key={item}
              style={{
                background: "#111827",
                border: "1px solid #374151",
                borderRadius: "12px",
                padding: "12px",
                textAlign: "center",
              }}
            >
              {item}
            </div>
          ))}
        </div>

        <div
          style={{
            textAlign: "center",
            marginBottom: "25px",
            color: "#22c55e",
            fontWeight: "bold",
          }}
        >
          🎁 المتبقي من التجربة المجانية:
          {" "}
          {remainingMessages}
          /3
        </div>

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

              <div
                style={{
                  marginTop: "25px",
                  display: "flex",
                  gap: "10px",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                {[
                  "📈 كيف أزيد المبيعات؟",
                  "📱 اكتب رسالة واتساب",
                  "🎯 أعطني خطة تسويق",
                  "🤖 حلل نشاطي التجاري",
                ].map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => {
                      setMessage(
                        prompt
                          .replace("📈 ", "")
                          .replace("📱 ", "")
                          .replace("🎯 ", "")
                          .replace("🤖 ", "")
                      );
                    }}
                    style={{
                      background: "#111827",
                      border: "1px solid #374151",
                      color: "white",
                      padding: "10px 14px",
                      borderRadius: "999px",
                      cursor: "pointer",
                    }}
                  >
                    {prompt}
                  </button>
                ))}
              </div>
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
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: "bold",
                    marginBottom: "8px",
                    opacity: 0.8,
                  }}
                >
                  {item.role === "user"
                    ? "👤 أنت"
                    : "🤖 نمّى AI"}
                </div>

                {item.content}

                {item.role === "assistant" && (
                  <div
                    style={{
                      marginTop: "10px",
                    }}
                  >
                    <button
                      onClick={() =>
                        navigator.clipboard.writeText(
                          item.content
                        )
                      }
                      style={{
                        background: "transparent",
                        border: "1px solid #4b5563",
                        color: "#cbd5e1",
                        padding: "6px 10px",
                        borderRadius: "8px",
                        cursor: "pointer",
                      }}
                    >
                      📋 نسخ الرد
                    </button>

                    <button
                      onClick={() =>
                        window.open(
                          "https://wa.me/?text=" +
                            encodeURIComponent(
                              item.content
                            ),
                          "_blank"
                        )
                      }
                      style={{
                        background: "#22c55e",
                        border: "none",
                        color: "white",
                        padding: "6px 10px",
                        borderRadius: "8px",
                        cursor: "pointer",
                        marginRight: "8px",
                      }}
                    >
                      📱 واتساب
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}

          {loading && (
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                marginBottom: "15px",
              }}
            >
              <div
                style={{
                  maxWidth: "80%",
                  padding: "14px",
                  borderRadius: "16px",
                  background: "#1f2937",
                }}
              >
                🤖 نمّى AI يكتب...
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />

          {messages.length >= 3 && (
            <div
              style={{
                marginTop: "20px",
                textAlign: "center",
                color: "#22c55e",
                fontWeight: "bold",
              }}
            >
              <button
                onClick={() => {
                  window.location.href =
                    "/register";
                }}
                style={{
                  background: "#22c55e",
                  color: "white",
                  border: "none",
                  borderRadius: "12px",
                  padding: "14px 22px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                🚀 ابدأ مجاناً الآن
              </button>
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
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                askAI();
              }
            }}
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
            disabled={
              loading ||
              remainingMessages <= 0
            }
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
            {loading
              ? "..."
              : remainingMessages <= 0
              ? "انتهت التجربة"
              : "إرسال"}
          </button>
        </div>
      </div>
    </main>
  );
}