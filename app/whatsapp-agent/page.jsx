"use client";

import { useState } from "react";

export default function WhatsAppAgentPage() {
  const [message,setMessage] = useState("");
  const [result,setResult] = useState("");

  async function analyze() {
    const res = await fetch(
      "/api/whatsapp-agent",
      {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          message
        })
      }
    );

    const data = await res.json();
    setResult(data.reply || "");
  }

  return (
    <main
      style={{
        maxWidth:"800px",
        margin:"40px auto",
        color:"white"
      }}
    >
      <h1>📱 WhatsApp Agent</h1>

      <textarea
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
        placeholder="رسالة العميل..."
      />

      <br /><br />

      <button onClick={analyze}>
        تحليل
      </button>

      <pre>{result}</pre>
    </main>
  );
}
