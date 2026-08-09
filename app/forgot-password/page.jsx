"use client";

import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit() {
    const res = await fetch(
      "/api/forgot-password",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      }
    );

    const data = await res.json();

    setMessage(data.message);
  }

  return (
    <main
      style={{
        maxWidth: "500px",
        margin: "80px auto",
        color: "white",
      }}
    >
      <h1>نسيت كلمة المرور</h1>

      <input
        type="email"
        placeholder="البريد الإلكتروني"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <br />
      <br />

      <button
        onClick={handleSubmit}
      >
        بحث
      </button>

      <p>{message}</p>
    </main>
  );
}
