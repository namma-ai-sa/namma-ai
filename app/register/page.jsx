"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [name, setName] =
    useState("");

  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [message, setMessage] =
    useState("");

  async function handleRegister() {
    const response = await fetch(
      "/api/register",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          name,
          username,
          password,
        }),
      }
    );

    const data =
      await response.json();

    setMessage(data.message);
  }

  return (
    <main
      style={{
        maxWidth: "500px",
        margin: "50px auto",
        color: "white",
      }}
    >
      <h1>إنشاء حساب</h1>

      <input
        placeholder="الاسم"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <br />
      <br />

      <input
        placeholder="اسم المستخدم"
        value={username}
        onChange={(e) =>
          setUsername(e.target.value)
        }
      />

      <br />
      <br />

      <input
        type="password"
        placeholder="كلمة المرور"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <br />
      <br />

      <button
        onClick={handleRegister}
      >
        إنشاء حساب
      </button>

      <p>{message}</p>
    </main>
  );
}
