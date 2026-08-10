"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  const [prompt, setPrompt] = useState("");

  const apps = [
    { icon: "📊", title: "CRM", path: "/crm" },
    { icon: "🤖", title: "AI Seller", path: "/ai-seller" },
    { icon: "📱", title: "WhatsApp Agent", path: "/whatsapp-agent" },
    { icon: "⚡", title: "Admin Dashboard", path: "/admin" }
  ];

  function handleSubmit() {
    if (!prompt.trim()) return;
    router.push(`/ai?q=${encodeURIComponent(prompt)}`);
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top,#0f172a,#020617)",
        color: "white",
        padding: "40px 20px"
      }}
    >
      <section
        style={{
          textAlign: "center",
          maxWidth: "1000px",
          margin: "0 auto"
        }}
      >
        <div
          style={{
            fontSize: "24px",
            marginBottom: "20px"
          }}
        >
          🌱 نمّى AI
        </div>

        <h1
          style={{
            fontSize: "72px",
            fontWeight: "800",
            marginBottom: "20px",
            lineHeight: "1.2"
          }}
        >
          ذكاء الأعمال
          <br />
          في منصة واحدة
        </h1>

        <p
          style={{
            color: "#cbd5e1",
            maxWidth: "700px",
            margin: "0 auto",
            fontSize: "22px",
            lineHeight: "1.9"
          }}
        >
          منصة عربية متكاملة تجمع CRM و AI Seller و WhatsApp Agent
          لمساعدتك على إدارة العملاء ورفع المبيعات وتحسين المتابعة.
        </p>

        <div
          style={{
            display: "flex",
            gap: "12px",
            marginTop: "35px",
            maxWidth: "800px",
            marginInline: "auto"
          }}
        >
          <input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="اكتب طلبك..."
            style={{
              flex: 1,
              padding: "16px",
              borderRadius: "14px",
              border: "1px solid rgba(255,255,255,.1)",
              background: "#0f172a",
              color: "white"
            }}
          />

          <button
            onClick={handleSubmit}
            style={{
              padding: "16px 28px",
              borderRadius: "14px",
              border: "none",
              background: "#22c55e",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            ابدأ الآن
          </button>
        </div>
      </section>

      <section
        style={{
          maxWidth: "1200px",
          margin: "70px auto 0"
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "30px"
          }}
        >
          ⚡ التطبيقات
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: "20px"
          }}
        >
          {apps.map((app) => (
            <div
              key={app.path}
              onClick={() => router.push(app.path)}
              style={{
                cursor: "pointer",
                textAlign: "center",
                padding: "30px",
                borderRadius: "20px",
                background: "rgba(255,255,255,.03)",
                border: "1px solid rgba(255,255,255,.08)"
              }}
            >
              <div
                style={{
                  fontSize: "52px",
                  marginBottom: "10px"
                }}
              >
                {app.icon}
              </div>

              <h3>{app.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
