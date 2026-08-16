"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        style={{
          background: "#0f172a",
          color: "#fff",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 16px",
          borderBottom: "1px solid rgba(255,255,255,.1)",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        /
          🌱 نمّى AI
        </Link>

        <button
          onClick={() => setOpen(!open)}
          style={{
            background: "transparent",
            border: "none",
            color: "#fff",
            fontSize: "28px",
            cursor: "pointer",
          }}
        >
          ☰
        </button>
      </nav>

      {open && (
        <>
          <div
            onClick={() => setOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,.4)",
              zIndex: 999,
            }}
          />

          <div
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              width: "280px",
              height: "100vh",
              background: "#111827",
              zIndex: 1000,
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              boxShadow: "-5px 0 20px rgba(0,0,0,.3)",
            }}
          >
            <button
              onClick={() => setOpen(false)}
              style={{
                alignSelf: "flex-end",
                background: "transparent",
                border: "none",
                color: "#fff",
                fontSize: "28px",
                cursor: "pointer",
              }}
            >
              ✕
            </button>

            /الرئيسية</Link>
            /dashboardلوحة التحكم</Link>
            /crmCRM</Link>
            /aiالذكاء الاصطناعي</Link>
            /projectsالمشاريع</Link>
            /pricingالأسعار</Link>
            /aboutمن نحن</Link>
            /contactاتصل بنا</Link>

            <div
              style={{
                marginTop: "20px",
                borderTop: "1px solid rgba(255,255,255,.1)",
                paddingTop: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              /login
                تسجيل الدخول
              </Link>

              /register
                إنشاء حساب
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontSize: "16px",
};

const buttonStyle = {
  background: "#2563eb",
  color: "#fff",
  textDecoration: "none",
  textAlign: "center",
  padding: "12px",
  borderRadius: "10px",
};
