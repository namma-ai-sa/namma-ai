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
        background:"rgba(2,6,23,.85)",
        backdropFilter:"blur(16px)",
        borderBottom:"1px solid rgba(255,255,255,.08)",
        position:"sticky",
        top:0,
        zIndex:999
      }}
    >

      <div
        onClick={() => router.push("/")}
        style={{
          cursor:"pointer",
          color:"#22c55e",
          fontSize:"28px",
          fontWeight:"800"
        }}
      >
        🌱 نمّى AI
      </div>

      <div
        style={{
          display:"flex",
          gap:"18px",
          flexWrap:"wrap"
        }}
      >
        <button style={linkStyle} onClick={() => router.push("/")}>الرئيسية</button>
        <button style={linkStyle} onClick={() => router.push("/tools")}>الأدوات</button>
        <button style={linkStyle} onClick={() => router.push("/projects")}>المشاريع</button>
        <button style={linkStyle} onClick={() => router.push("/pricing")}>الأسعار</button>
        <button style={linkStyle} onClick={() => router.push("/about")}>عن المنصة</button>
        <button style={linkStyle} onClick={() => router.push("/contact")}>تواصل معنا</button>
      </div>

      <div
        style={{
          display:"flex",
          gap:"10px"
        }}
      >
        <button
          onClick={() => router.push("/login")}
          style={{
            background:"transparent",
            border:"1px solid rgba(255,255,255,.15)"
          }}
        >
          دخول
        </button>

        <button
          onClick={() => router.push("/register")}
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
