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
          background: "#EAE7E1",
          backdropFilter: "blur(20px)",
          boxShadow: "0 20px 50px rgba(0,0,0,.25)",
          borderBottom: "1px solid rgba(255,255,255,.08)",
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
          }}
        >
         <div style={{background:"rgba(255,255,255,.95)",padding:"8px 12px",borderRadius:"14px",boxShadow:"0 8px 24px rgba(0,0,0,.15)",display:"flex",alignItems:"center"}}><Logo /></div>
        </div>

        <div className="desktop-menu">
          <button style={linkStyle} onClick={() => go("/dashboard")}>
            🏠 Dashboard
          </button>

          <button style={linkStyle} onClick={() => go("/crm")}>
            👥 CRM
          </button>

          <button style={linkStyle} onClick={() => go("/projects")}>
            📁 Projects
          </button>

          <button style={linkStyle} onClick={() => go("/ai-seller")}>
            🤖 AI Seller
          </button>

          <button style={linkStyle} onClick={() => go("/whatsapp-agent")}>
            📱 WhatsApp
          </button>

          <button style={linkStyle} onClick={() => go("/pricing")}>
            💳 Pricing
          </button>
        </div>

        <div style={{ position: "relative" }}>
          <button
            onClick={() => setAccountMenuOpen(!accountMenuOpen)}
            style={{
              background: "rgba(255,255,255,.06)",
              border: "1px solid rgba(255,255,255,.1)",
              color: "white",
              padding: "10px 16px",
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
                minWidth: "260px",
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
            color: "white",
            fontSize: "24px",
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
            right: "12px",
            left: "12px",
            background: "#111827",
            border: "1px solid #1f2937",
            borderRadius: "18px",
            padding: "16px",
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
  color: "#cbd5e1",
  cursor: "pointer",
  fontSize: "15px",
};

const drawerBtn = {
  width: "100%",
  marginBottom: "10px",
  background: "rgba(255,255,255,.04)",
  border: "1px solid rgba(255,255,255,.08)",
  color: "#e5e7eb",
  padding: "14px 16px",
  borderRadius: "14px",
  textAlign: "right",
  cursor: "pointer",
  fontSize: "15px",
  backdropFilter: "blur(8px)",
};