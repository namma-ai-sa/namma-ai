"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleLogin() {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (data.success) {
      window.location.href = "/ai";
    } else {
      setMessage(data.message);
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#050509",
        color: "white",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          background: "#0b0b12",
          border: "1px solid #222",
          borderRadius: "20px",
          padding: "32px",
        }}
      >
        <h1 style={{ textAlign: "center" }}>
          نمّى AI
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#334155",
            marginBottom: "24px",
          }}
        >
          مرحباً بعودتك
        </p>

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="البريد الإلكتروني"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "12px",
            borderRadius: "10px",
          }}
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="كلمة المرور"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "16px",
            borderRadius: "10px",
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "12px",
            background: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          تسجيل الدخول
        </button>

        {message && (
          <p
            style={{
              color: "#ef4444",
              marginTop: "12px",
              textAlign: "center",
            }}
          >
            {message}
          </p>
        )}
      </div>
    </main>
  );
}
