"use client";

import { useState, useEffect } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) {
      window.location.href = "/ai";
    }
  }, []);

  async function handleLogin() {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
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
          padding: "30px",
        }}
      >
        <h1 style={{ textAlign: "center" }}>
          🌱 نمّى AI
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#94a3b8",
            marginBottom: "25px",
          }}
        >
          مرحباً بعودتك
        </p>

        <input
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleLogin();
            }
          }}
          placeholder="اسم المستخدم"
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "10px",
            marginBottom: "15px",
          }}
        />

        <input
          type="password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleLogin();
            }
          }}
          placeholder="كلمة المرور"
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "10px",
            marginBottom: "20px",
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "14px",
            background: "#2563eb",
            border: "none",
            borderRadius: "10px",
            color: "white",
            cursor: "pointer",
          }}
        >
          تسجيل الدخول
        </button>

        {message && (
          <p
            style={{
              color: "#ef4444",
              marginTop: "15px",
              textAlign: "center",
            }}
          >
            {message}
          </p>
        )}

        <div
          style={{
            marginTop: "25px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            textAlign: "center",
          }}
        >
          /forgot-password
            نسيت كلمة المرور؟
          </a>

          /forgot-username
            نسيت اسم المستخدم؟
          </a>

          /register
            إنشاء حساب جديد
          </a>
        </div>
      </div>
    </main>
  );
}
