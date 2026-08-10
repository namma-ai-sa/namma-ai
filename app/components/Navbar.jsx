"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          background: "#0f172a",
          borderBottom: "1px solid rgba(255,255,255,.08)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 20px"
        }}
      >
        <button
          onClick={() => setOpen(true)}
          style={{
            background: "transparent",
            border: "none",
            color: "white",
            fontSize: "24px",
            cursor: "pointer"
          }}
        >
          ☰
        </button>

        <div
          style={{
            color: "#22c55e",
            fontWeight: "800",
            fontSize: "20px"
          }}
        >
          🌱 نمّى AI
        </div>
      </nav>

      {open && (
        <>
          <div
            onClick={() => setOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,.55)",
              zIndex: 1001
            }}
          />

          <div
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              width: "320px",
              height: "100%",
              background: "#111827",
              zIndex: 1002,
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "14px"
            }}
          >
            <button
              onClick={() => setOpen(false)}
              style={{
                width: "fit-content"
              }}
            >
              ✕
            </button>

            /الرئيسية</Link>
            /toolsالأدوات</Link>
            /crmCRM</Link>
            /ai-sellerالبائع الذكي</Link>
            /whatsapp-agentواتساب</Link>
            /dashboardلوحة التحكم</Link>
            /pricingالأسعار</Link>

            <hr />

            /loginتسجيل الدخول</Link>
            /registerإنشاء حساب</Link>
            /forgot-passwordنسيت كلمة المرور</Link>
            /forgot-usernameنسيت اسم المستخدم</Link>
          </div>
        </>
      )}
    </>
  );
}
