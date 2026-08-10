"use client";

import { useState } from "react";

export default function ForgotPasswordPage() {

  const [email,setEmail] =
    useState("");

  const [message,setMessage] =
    useState("");

  async function handleSubmit() {

    const res =
      await fetch(
        "/api/forgot-password",
        {
          method:"POST",
          headers:{
            "Content-Type":
            "application/json"
          },
          body:JSON.stringify({
            email
          })
        }
      );

    const data =
      await res.json();

    setMessage(
      data.message || ""
    );
  }

  return (
    <main
      style={{
        minHeight:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        padding:"20px"
      }}
    >

      <div
        className="card"
        style={{
          width:"100%",
          maxWidth:"450px"
        }}
      >

        <h1>
          🔑 نسيت كلمة المرور
        </h1>

        <br />

        <input
          type="email"
          placeholder="البريد الإلكتروني"
          value={email}
          onChange={(e)=>
            setEmail(
              e.target.value
            )
          }
        />

        <br /><br />

        <button
          onClick={handleSubmit}
        >
          متابعة
        </button>

        <p>{message}</p>

      </div>

    </main>
  );
}
