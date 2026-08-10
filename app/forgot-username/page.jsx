"use client";

import { useState } from "react";

export default function ForgotUsernamePage() {

  const [email,setEmail] =
    useState("");

  const [message,setMessage] =
    useState("");

  async function handleSubmit() {

    const res =
      await fetch(
        "/api/forgot-username",
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
          👤 نسيت اسم المستخدم
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
          بحث
        </button>

        <p>{message}</p>

      </div>

    </main>
  );
}
