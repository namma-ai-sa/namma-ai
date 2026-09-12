"use client";

import Image from "next/image";
import Logo from "./Logo";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);

  const go = (path) => {
    setMobileMenuOpen(false);
    router.push(path);
  };

  return (
    <>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "18px 24px",
          background: "rgba(15,23,42,.92)",
          backdropFilter: "blur(28px)",
          boxShadow: "0 8px 32px rgba(15,23,42,.08)",
          borderBottom: "1px solid rgba(255,255,255,.6)",
          position: "sticky",
          top: 0,
          zIndex: 999,
        }}
      >
        <div
          onClick={() => go("/")}
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            padding: "8px 14px",
            borderRadius: "18px",
            boxShadow: "0 4px 20px rgba(255,255,255,.12)",
            background: "#FFFFFF",
          }}
        >
          <Logo />
          <div style={{position:"absolute"}}></div>
        </div>

        <div style={{ position: "relative" }}>
          <button
            onClick={() => setAccountMenuOpen(!accountMenuOpen)}
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(255,255,255,.1)",
              color: "#1E293B",
              padding: "12px 20px",
              borderRadius: "20px",
              backdropFilter: "blur(16px)",
              cursor: "pointer",
            }}
          >
            👤 حسابي
          </button>

          {accountMenuOpen && (
            <div
              style={{
                position: "absolute",
                top: "70px",
                left: "0",
                background: "rgba(17,24,39,.92)",
                border: "1px solid rgba(255,255,255,.1)",
                borderRadius: "20px",
                backdropFilter: "blur(16px)",
                padding: "12px",
                minWidth: "220px",
                boxShadow: "0 20px 40px rgba(0,0,0,.35)",
                zIndex: 2000,
              }}
            >
              <button style={drawerBtn} onClick={() => go("/profile")}>
                👤 الملف الشخصي
              </button>

              <button style={drawerBtn} onClick={() => go("/projects")}>
                📁 مشاريعي
              </button>

              <button style={drawerBtn} onClick={() => go("/crm")}>
                📊 CRM
              </button>

              <button style={drawerBtn} onClick={() => go("/billing")}>
                💳 الفوترة
              </button>

              <button style={drawerBtn} onClick={() => go("/security")}>
                🔐 الأمان
              </button>

              <button style={drawerBtn} onClick={() => go("/settings")}>
                ⚙️ الإعدادات
              </button>

              <button
                style={{
                  ...drawerBtn,
                  color: "#ef4444",
                }}
                onClick={() => go("/logout")}
              >
                🚪 تسجيل الخروج
              </button>
            </div>
          )}
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: "transparent",
            border: "none",
            color: "#1E293B",
            fontSize: "38px",
            cursor: "pointer",
          }}
        >
          ☰
        </button>
      </nav>

      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: "70px",
            right: "auto",
            left: "16px",
            background: "rgba(15,23,42,.92)",
            border: "1px solid #1f2937",
            borderRadius: "18px",
            boxShadow: "0 4px 20px rgba(255,255,255,.12)",
            backdropFilter: "blur(20px)",
            width: "280px",
            padding: "16px",
            boxShadow: "0 20px 60px rgba(0,0,0,.30)",
            zIndex: 1000,
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
  background: "transparent",
  border: "none",
  color: "#1E293B",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "700",
  letterSpacing: ".2px",
  transition: "all .25s ease",
};

const drawerBtn = {
  width: "100%",
  marginBottom: "6px",
  background: "rgba(255,255,255,.04)",
  border: "1px solid rgba(255,255,255,.08)",
  color: "#e5e7eb",
  padding: "12px 14px",
  borderRadius: "18px",
            boxShadow: "0 4px 20px rgba(255,255,255,.12)",
  textAlign: "right",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "700",
  letterSpacing: ".2px",
  transition: "all .25s ease",
  backdropFilter: "blur(8px)",
};