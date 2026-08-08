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
    <main>
      <h1>تسجيل الدخول</h1>

      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="اسم المستخدم"
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="كلمة المرور"
      />

      <button onClick={handleLogin}>
        دخول
      </button>

      <p>{message}</p>
    </main>
  );
}
