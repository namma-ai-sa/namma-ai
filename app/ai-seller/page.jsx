"use client";

import { useState } from "react";

export default function AISellerPage() {
  const [business,setBusiness]=useState("");
  const [customer,setCustomer]=useState("");
  const [result,setResult]=useState("");

  async function analyze() {
    const res = await fetch(
      "/api/ai-seller",
      {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          business,
          customer
        })
      }
    );

    const data = await res.json();
    setResult(data.result || "");
  }

  return (
    <main
      style={{
        maxWidth:"800px",
        margin:"40px auto",
        color:"white"
      }}
    >
      <h1>🤖 AI Seller</h1>

      <textarea
        placeholder="نشاطك التجاري"
        value={business}
        onChange={(e)=>setBusiness(e.target.value)}
      />

      <br /><br />

      <textarea
        placeholder="بيانات العميل"
        value={customer}
        onChange={(e)=>setCustomer(e.target.value)}
      />

      <br /><br />

      <button onClick={analyze}>
        تحليل العميل
      </button>

      <pre>{result}</pre>
    </main>
  );
}
