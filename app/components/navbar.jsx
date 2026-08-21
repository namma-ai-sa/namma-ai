"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);

  const go = (path) => {
    setMobileMenuOpen(false);
    setAccountMenuOpen(false);
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
          background: "rgba(2,6,23,.95)",
          backdropFilter: "blur(12px)",
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
            color: "#22c55e",
            fontSize: "28px",
            fontWeight: "800",
          }}
        >
          🌱 نمّى AI
        </div>

        <div className="desktop-menu">
          <button style={linkStyle} onClick={() => go("/")}>
            الرئيسية
          </button>

          <button style={linkStyle} onClick={() => go("/crm")}>
            CRM
          </button>

          <button style={linkStyle} onClick={() => go("/ai-seller")}>
            البائع الذكي
          </button>

          <button style={linkStyle} onClick={() => go("/whatsapp-agent")}>
            واتساب
          </button>

          <button style={linkStyle} onClick={() => go("/projects")}>
            المشاريع
          </button>
        </div>

        <div
          style={{
            position: "relative",
          }}
        >
          <button
            onClick={() => setAccountMenuOpen(!accountMenuOpen)}
            style={{
              background: "rgba(255,255,255,.06)",
              border: "1px solid rgba(255,255,255,.1)",
              color: "white",
              padding: "10px 16px",
              borderRadius: "12px",
              cursor: "pointer",
            }}
          >
            👤 حسابي
          </button>

          {accountMenuOpen && (
            <div
              style={{
                position: "absolute",
                top: "60px",
                left: 0,
                minWidth: "240px",
                background: "#111827",
                border: "1px solid rgba(255,255,255,.08)",
                borderRadius: "16px",
                padding: "12px",
                zIndex: 3000,
                boxShadow: "0 20px 40px rgba(0,0,0,.4)",
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

              <button style={drawerBtn} onClick={() => go("/dashboard")}>
                ⚡ لوحة التحكم
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
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>
      </nav>

      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: "75px",
            right: "12px",
            left: "12px",
            background: "#111827",
            border: "1px solid rgba(255,255,255,.08)",
            borderRadius: "18px",
            padding: "18px",
            zIndex: 2000,
          }}
        >
          <button style={drawerBtn} onClick={() => go("/")}>
            🏠 الرئيسية
          </button>

          <button style={drawerBtn} onClick={() => go("/crm")}>
            📊 CRM
          </button>

          <button style={drawerBtn} onClick={() => go("/ai-seller")}>
            🤖 البائع الذكي
          </button>

          <button style={drawerBtn} onClick={() => go("/whatsapp-agent")}>
            📱 وكيل واتساب
          </button>

          <button style={drawerBtn} onClick={() => go("/projects")}>
            📁 المشاريع
          </button>

          <button style={drawerBtn} onClick={() => go("/dashboard")}>
            ⚡ لوحة التحكم
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
};