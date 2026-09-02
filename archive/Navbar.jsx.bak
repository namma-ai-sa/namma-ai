"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "الرئيسية" },
    { href: "/tools", label: "الأدوات" },
    { href: "/crm", label: "CRM" },
    { href: "/ai-seller", label: "البائع الذكي" },
    { href: "/whatsapp-agent", label: "واتساب" },
    { href: "/pricing", label: "الأسعار" },
    { href: "/about", label: "عن المنصة" },
    { href: "/contact", label: "تواصل معنا" }
  ];

  return (
    <>
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          background: "#0b1220",
          borderBottom: "1px solid rgba(255,255,255,.1)",
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        /
          🌱 نمّى AI
        </Link>

        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >
          {links.map((item) => (
            {item.href}
              {item.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          style={{
            background: "#111827",
            color: "white",
            border: "1px solid rgba(255,255,255,.1)",
            borderRadius: "10px",
            padding: "8px 12px",
            cursor: "pointer"
          }}
        >
          ☰
        </button>
      </nav>

      {open && (
        <div
          style={{
            background: "#111827",
            borderBottom: "1px solid rgba(255,255,255,.1)",
            padding: "20px"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px"
            }}
          >
            {links.map((item) => (
              {item.href}
                {item.label}
              </Link>
            ))}

            <hr />

            /loginتسجيل الدخول</Link>
            /registerإنشاء حساب</Link>
            /dashboardلوحة التحكم</Link>
          </div>
        </div>
      )}
    </>
  );
}
