"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const mainLinks = [
  ["لوحة التحكم", "/dashboard"],
  ["CRM", "/crm"],
  ["المشاريع", "/projects"],
  ["AI Seller", "/ai-seller"],
  ["واتساب", "/whatsapp-agent"],
  ["الأسعار", "/pricing"],
];

const accountLinks = [
  ["الملف الشخصي", "/profile"],
  ["مشاريعي", "/projects"],
  ["CRM", "/crm"],
  ["الفوترة", "/billing"],
  ["الأمان", "/security"],
  ["الإعدادات", "/settings"],
];

const mobileLinks = [
  ["الرئيسية", "/"],
  ["الأدوات", "/tools"],
  ["CRM", "/crm"],
  ["مساعد المبيعات", "/ai-seller"],
  ["وكيل واتساب", "/whatsapp-agent"],
  ["المشاريع", "/projects"],
  ["الأسعار", "/pricing"],
  ["عن المنصة", "/about"],
  ["تواصل معنا", "/contact"],
];

function Logo({ onClick }) {
  return (
    <button className="navbar-brand" onClick={onClick} aria-label="NAMMA AI">
      /namma-logo.png.png
    </button>
  );
}

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
      <nav className="navbar-v3" dir="rtl">
        <div className="navbar-inner">
          <Logo onClick={() => go("/")} />

          <div className="navbar-links" aria-label="التنقل الرئيسي">
            {mainLinks.map(([label, path]) => (
              <button key={path} onClick={() => go(path)}>{label}</button>
            ))}
          </div>

          <div className="navbar-actions">
            <button className="login-button" onClick={() => setAccountMenuOpen((open) => !open)}>
              حسابي <span className="user-dot">◉</span>
            </button>
            <button className="start-button" onClick={() => go("/register")}>ابدأ الآن <span>←</span></button>
          </div>

          <button className="menu-button" onClick={() => setMobileMenuOpen((open) => !open)} aria-label="فتح القائمة" aria-expanded={mobileMenuOpen}>
            <span /><span /><span />
          </button>
        </div>

        {accountMenuOpen && (
          <div className="account-menu">
            <div className="account-heading"><span>◉</span><div><b>حسابي</b><small>إدارة مساحة العمل</small></div></div>
            {accountLinks.map(([label, path]) => <button key={path} onClick={() => go(path)}>{label}<span>←</span></button>)}
            <button className="logout" onClick={() => go("/logout")}>تسجيل الخروج <span>↗</span></button>
          </div>
        )}
      </nav>

      {mobileMenuOpen && (
        <div className="mobile-menu" dir="rtl">
          <div className="mobile-menu-header"><span>القائمة الرئيسية</span><button onClick={() => setMobileMenuOpen(false)} aria-label="إغلاق القائمة">×</button></div>
          {mobileLinks.map(([label, path]) => <button key={path} onClick={() => go(path)}>{label}<span>←</span></button>)}
          <div className="mobile-actions"><button onClick={() => go("/login")}>تسجيل الدخول</button><button onClick={() => go("/register")}>ابدأ الآن</button></div>
        </div>
      )}

      <style jsx>{`
        @media(max-width:900px){.navbar-inner{width:calc(100% - 32px);min-height:70px}.navbar-links{display:none}.navbar-actions{margin-right:auto}.menu-button{display:block}.account-menu{top:64px;left:16px}}
      `}</style>
    </>
  );
}