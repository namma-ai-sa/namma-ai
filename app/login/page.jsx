"use client";

import { useState, useEffect } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) {
      window.location.href = "/ai";
    }
  }, []);

  async function handleLogin() {
    setMessage("");

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
      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      window.location.href = "/ai";
    } else {
      setMessage(data.message || "فشل تسجيل الدخول");
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
          🌱 نمّى AI
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#94a3b8",
            marginBottom: "24px",
          }}
        >
          تسجيل الدخول
        </p>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="البريد الإلكتروني"
        />

        <br />
        <br />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="كلمة المرور"
        />

        <br />
        <br />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            background: "#2563eb",
          }}
        >
          تسجيل الدخول
        </button>

        <div
          style={{
            marginTop: "15px",
            textAlign: "center",
          }}
        >
          /forgot-password
            نسيت كلمة المرور؟
          </a>
        </div>

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
