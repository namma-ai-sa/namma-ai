"use client";

import { useState } from "react";

export default function RegisterPage() {

  const [name,setName] = useState("");
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [message,setMessage] = useState("");

  async function handleRegister() {

    const res = await fetch(
      "/api/register",
      {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          name,
          username,
          password
        })
      }
    );

    const data = await res.json();

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

        <h1
          style={{
            textAlign:"center",
            marginBottom:"20px"
          }}
        >
          🌱 نمّى AI
        </h1>

        <input
          placeholder="الاسم"
          value={name}
          onChange={(e)=>
            setName(e.target.value)
          }
        />

        <br /><br />

        <input
          placeholder="اسم المستخدم"
          value={username}
          onChange={(e)=>
            setUsername(e.target.value)
          }
        />

        <br /><br />

        <input
          type="password"
          placeholder="كلمة المرور"
          value={password}
          onChange={(e)=>
            setPassword(e.target.value)
          }
        />

        <br /><br />

        <button
          onClick={handleRegister}
        >
          إنشاء حساب
        </button>

        {message && (
          <p
            style={{
              marginTop:"15px"
            }}
          >
            {message}
          </p>
        )}

      </div>

    </main>
  );
}
