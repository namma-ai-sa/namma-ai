"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const features = [
    {
      icon: "📊",
      title: "CRM الذكي",
      desc: "إدارة العملاء والمتابعات وتحسين فرص الإغلاق.",
      path: "/crm"
    },
    {
      icon: "🤖",
      title: "البائع الذكي",
      desc: "تحليل احتمالية الشراء وتوصيات المبيعات.",
      path: "/ai-seller"
    },
    {
      icon: "📱",
      title: "WhatsApp Agent",
      desc: "تحليل المحادثات واقتراح الردود المناسبة.",
      path: "/whatsapp-agent"
    },
    {
      icon: "⚡",
      title: "لوحة الإدارة",
      desc: "إحصائيات ومؤشرات أداء المنصة بالكامل.",
      path: "/admin"
    }
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#020617",
        color: "white",
        padding: "20px"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px"
        }}
      >
        <button
          onClick={() => router.push("/login")}
          style={{
            background: "#22c55e",
            border: "none",
            padding: "10px 14px",
            borderRadius: "10px",
            color: "white"
          }}
        >
          ☰
        </button>

        <h2 style={{ margin: 0 }}>
          🌱 نمّى AI
        </h2>
      </div>

      <section
        style={{
          textAlign: "center",
          maxWidth: "900px",
          margin: "0 auto"
        }}
      >
        <h1>
          منصة عربية للمبيعات
          والذكاء الاصطناعي
        </h1>

        <p
          style={{
            color: "#cbd5e1",
            lineHeight: "2"
          }}
        >
          اجمع CRM والبائع الذكي ووكيل واتساب وصناعة المحتوى
          في منصة واحدة.
        </p>
      </section>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          marginTop: "40px"
        }}
      >
        {features.map((item) => (
          <div
            key={item.title}
            onClick={() => router.push(item.path)}
            style={{
              cursor: "pointer",
              background: "rgba(255,255,255,.04)",
              border: "1px solid rgba(255,255,255,.08)",
              borderRadius: "20px",
              padding: "24px"
            }}
          >
            <div style={{ fontSize: "50px" }}>
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p
              style={{
                color: "#cbd5e1"
              }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          marginTop: "30px",
          justifyContent: "center"
        }}
      >
        <button onClick={() => router.push("/login")}>
          تسجيل الدخول
        </button>

        <button onClick={() => router.push("/register")}>
          إنشاء حساب
        </button>

        <button onClick={() => router.push("/forgot-password")}>
          نسيت كلمة المرور
        </button>

        <button onClick={() => alert("Face ID Coming Soon")}>
          بصمة الوجه
        </button>
      </div>
    </main>
  );
}
