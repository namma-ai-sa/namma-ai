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
      <img className="navbar-logo-image" src="/namma-logo.png.png" alt="نمّى NAMMA AI" />
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
          <div className="mobile-menu-brand"><img src="/namma-logo.png.png" alt="نمّى NAMMA AI" /></div><div className="mobile-menu-header"><span>القائمة الرئيسية</span><button onClick={() => setMobileMenuOpen(false)} aria-label="إغلاق القائمة">×</button></div>
          {mobileLinks.map(([label, path]) => <button key={path} onClick={() => go(path)}>{label}<span>←</span></button>)}
          <div className="mobile-actions"><button onClick={() => go("/login")}>تسجيل الدخول</button><button onClick={() => go("/register")}>ابدأ الآن</button></div>
        </div>
      )}

      <style jsx>{`
        .navbar-v3{position:sticky;top:0;z-index:999;width:100%;border-bottom:1px solid #e2e8f0;background:rgba(248,250,247,.9);backdrop-filter:blur(18px);box-shadow:0 8px 25px rgba(15,23,42,.05);font-family:Tahoma,Arial,sans-serif}.navbar-inner{width:min(1200px,calc(100% - 40px));min-height:78px;margin:auto;display:flex;align-items:center;gap:30px}.navbar-brand{display:flex;align-items:center;padding:0;border:0;background:transparent;cursor:pointer;text-align:right}.navbar-logo-image{display:block;width:132px;height:auto;max-height:42px;object-fit:contain}.navbar-links{display:flex;align-items:center;gap:4px;margin-right:auto}.navbar-links button,.login-button{padding:10px 11px;border:0;background:transparent;color:#64748b;font-size:12px;font-weight:700;cursor:pointer;transition:color .2s,background .2s}.navbar-links button:hover{color:#15803d;background:#f0fdf4;border-radius:6px}.navbar-actions{display:flex;align-items:center;gap:9px}.login-button{border:1px solid #e2e8f0;border-radius:6px;background:#fff;color:#0f172a}.login-button:hover{border-color:#bbf7d0;color:#15803d}.user-dot{margin-right:5px;color:#15803d}.start-button{padding:12px 17px;border:0;border-radius:6px;background:#15803d;color:#fff;font-size:12px;font-weight:800;cursor:pointer;box-shadow:0 7px 16px rgba(21,128,61,.18);transition:transform .2s,box-shadow .2s}.start-button:hover{transform:translateY(-2px);box-shadow:0 11px 22px rgba(21,128,61,.26)}.start-button span{margin-right:9px;font-size:16px}.menu-button{display:none;margin-right:auto;width:40px;height:40px;padding:9px;border:1px solid #e2e8f0;border-radius:6px;background:#fff;cursor:pointer}.menu-button span{display:block;width:19px;height:2px;margin:4px auto;border-radius:2px;background:#0f172a}.account-menu{position:absolute;top:70px;left:max(20px,calc((100% - 1200px) / 2));width:245px;padding:10px;border:1px solid #e2e8f0;border-radius:9px;background:#fff;box-shadow:0 20px 45px rgba(15,23,42,.14)}.account-heading{display:flex;align-items:center;gap:10px;padding:10px 9px 13px;border-bottom:1px solid #f1f5f9}.account-heading>span{display:grid;place-items:center;width:31px;height:31px;border-radius:7px;background:#f0fdf4;color:#15803d}.account-heading b,.account-heading small{display:block}.account-heading b{font-size:12px}.account-heading small{margin-top:4px;color:#64748b;font-size:10px}.account-menu button,.mobile-menu button{display:flex;align-items:center;justify-content:space-between;width:100%;padding:11px 10px;border:0;border-radius:5px;background:transparent;color:#0f172a;text-align:right;font-size:12px;cursor:pointer}.account-menu button:hover,.mobile-menu>button:hover{background:#f0fdf4;color:#15803d}.account-menu .logout{margin-top:5px;border-top:1px solid #f1f5f9;border-radius:0;color:#dc2626}.mobile-menu{display:none}
        @media(max-width:900px){.navbar-inner{width:calc(100% - 32px);min-height:70px}.navbar-links{display:none}.navbar-actions{margin-right:auto}.menu-button{display:block}.account-menu{top:64px;left:16px}}
        @media(max-width:560px){.navbar-inner{gap:12px}.navbar-actions{display:none}.navbar-logo-image{width:116px;max-height:38px}.mobile-menu{position:fixed;top:70px;right:12px;left:12px;z-index:998;display:block;padding:12px;border:1px solid #e2e8f0;border-radius:9px;background:#fff;box-shadow:0 20px 45px rgba(15,23,42,.14)}.mobile-menu-brand{display:flex;align-items:center;padding:8px 10px 14px;border-bottom:1px solid #f1f5f9}.mobile-menu-brand img{display:block;width:125px;height:auto;max-height:38px;object-fit:contain}.mobile-menu-header{display:flex;align-items:center;justify-content:space-between;padding:12px 10px;border-bottom:1px solid #f1f5f9;color:#64748b;font-size:11px;font-weight:800}.mobile-menu-header button{display:block;width:auto;padding:0;color:#64748b;font-size:24px;line-height:1}.mobile-menu>button{padding:13px 10px}.mobile-actions{display:flex;gap:8px;margin-top:8px;padding-top:11px;border-top:1px solid #f1f5f9}.mobile-actions button{justify-content:center;background:#f8fafc}.mobile-actions button:last-child{background:#15803d;color:#fff}}
      `}</style>
      <style jsx>{`
        .navbar-logo-image{display:block;width:auto;height:40px;max-height:40px;max-width:100%;object-fit:contain}.mobile-menu-brand img{display:block;width:auto;height:40px;max-height:40px;max-width:100%;object-fit:contain}
      `}</style>
    </>
  );
}