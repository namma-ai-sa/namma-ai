"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {

  const router = useRouter();
  const [open,setOpen] = useState(false);

  const go = (path) => {
    setOpen(false);
    router.push(path);
  };

  return (
    <>
      <nav
        style={{
          display:"flex",
          justifyContent:"space-between",
          alignItems:"center",
          padding:"18px 24px",
          background:"rgba(2,6,23,.9)",
          backdropFilter:"blur(12px)",
          borderBottom:"1px solid rgba(255,255,255,.08)",
          position:"sticky",
          top:0,
          zIndex:999
        }}
      >

        <div
          onClick={() => go("/")}
          style={{
            cursor:"pointer",
            color:"#22c55e",
            fontSize:"28px",
            fontWeight:"800"
          }}
        >
          🌱 نمّى AI
        </div>

        <div className="desktop-menu">

          <button style={linkStyle} onClick={() => go("/")}>الرئيسية</button>
          <button style={linkStyle} onClick={() => go("/tools")}>الأدوات</button>
          <button style={linkStyle} onClick={() => go("/projects")}>المشاريع</button>
          <button style={linkStyle} onClick={() => go("/pricing")}>الأسعار</button>
          <button style={linkStyle} onClick={() => go("/about")}>عن المنصة</button>
          <button style={linkStyle} onClick={() => go("/contact")}>تواصل معنا</button>

        </div>

        <div className="desktop-auth">

          <button
            onClick={() => go("/login")}
            style={{
              background:"transparent",
              border:"1px solid rgba(255,255,255,.15)"
            }}
          >
            دخول
          </button>

          <button
            onClick={() => go("/register")}
          >
            إنشاء حساب
          </button>

        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

      </nav>

      {open && (

        <div
          style={{
            position:"fixed",
            top:"70px",
            right:"12px",
            left:"12px",
            background:"#111827",
            border:"1px solid #1f2937",
            borderRadius:"18px",
            padding:"16px",
            zIndex:1000
          }}
        >

          <button style={drawerBtn} onClick={() => go("/")}>الرئيسية</button>
          <button style={drawerBtn} onClick={() => go("/tools")}>الأدوات</button>
          <button style={drawerBtn} onClick={() => go("/crm")}>CRM</button>
          <button style={drawerBtn} onClick={() => go("/ai-seller")}>مساعد المبيعات</button>
          <button style={drawerBtn} onClick={() => go("/whatsapp-agent")}>وكيل واتساب</button>
          <button style={drawerBtn} onClick={() => go("/projects")}>المشاريع</button>
          <button style={drawerBtn} onClick={() => go("/pricing")}>الأسعار</button>
          <button style={drawerBtn} onClick={() => go("/about")}>عن المنصة</button>
          <button style={drawerBtn} onClick={() => go("/contact")}>تواصل معنا</button>
          <button style={drawerBtn} onClick={() => go("/login")}>دخول</button>
          <button style={drawerBtn} onClick={() => go("/register")}>إنشاء حساب</button>

        </div>

      )}

    </>
  );
}

const linkStyle = {
  background:"transparent",
  border:"none",
  color:"#cbd5e1",
  cursor:"pointer",
  fontSize:"15px"
};

const drawerBtn = {
  width:"100%",
  marginBottom:"10px"
};
