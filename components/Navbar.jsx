"use client";

import { useRouter } from "next/navigation";

export default function Navbar() {

  const router = useRouter();

  return (
    <nav
      style={{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        gap:"20px",
        padding:"18px 24px",
        background:"rgba(2,6,23,.9)",
        backdropFilter:"blur(12px)",
        borderBottom:
          "1px solid rgba(255,255,255,.08)",
        position:"sticky",
        top:0,
        zIndex:999
      }}
    >

      <div
        onClick={() => router.push("/")}
        style={{
          cursor:"pointer",
          color:"#60a5fa",
          fontSize:"28px",
          fontWeight:"bold"
        }}
      >
        🌱 نمّى AI
      </div>

      <div
        style={{
          display:"flex",
          gap:"20px",
          alignItems:"center",
          flexWrap:"wrap"
        }}
      >

        <button
          onClick={() => router.push("/")}
          style={linkStyle}
        >
          الرئيسية
        </button>

        <button
          onClick={() => router.push("/crm")}
          style={linkStyle}
        >
          CRM
        </button>

        <button
          onClick={() => router.push("/ai-seller")}
          style={linkStyle}
        >
          AI Seller
        </button>

        <button
          onClick={() => router.push("/whatsapp-agent")}
          style={linkStyle}
        >
          WhatsApp Agent
        </button>

        <button
          onClick={() => router.push("/admin")}
          style={linkStyle}
        >
          Admin
        </button>

      </div>

      <div
        style={{
          display:"flex",
          gap:"10px"
        }}
      >

        <button
          style={{
            padding:"10px 16px",
            borderRadius:"12px",
            border:
              "1px solid rgba(255,255,255,.15)",
            background:"transparent",
            color:"white",
            cursor:"pointer"
          }}
        >
          دخول
        </button>

        <button
          style={{
            padding:"10px 16px",
            borderRadius:"12px",
            border:"none",
            background:"#22c55e",
            color:"white",
            fontWeight:"bold",
            cursor:"pointer"
          }}
        >
          إنشاء حساب
        </button>

      </div>

    </nav>
  );
}

const linkStyle = {
  background:"transparent",
  border:"none",
  color:"#cbd5e1",
  cursor:"pointer",
  fontSize:"15px"
};
