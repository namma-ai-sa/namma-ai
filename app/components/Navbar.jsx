"use client";

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
          background: "rgba(2,6,23,.72)",
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
          /namma-logo.png.png
        </div>

        <div className="desktop-menu">
          <button style={linkStyle} onClick={() => go("/dashboard")}>🏠 Dashboard</button>
          <button style={linkStyle} onClick={() => go("/crm")}>👥 CRM</button>
          <button style={linkStyle} onClick={() => go("/projects")}>📁 Projects</button>
          <button style={linkStyle} onClick={() => go("/ai-seller")}>🤖 AI Seller</button>
          <button style={linkStyle} onClick={() => go("/whatsapp-agent")}>📱 WhatsApp</button>
          <button style={linkStyle} onClick={() => go("/pricing")}>💳 Pricing</button>
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
