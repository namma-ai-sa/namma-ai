"use client";

import Navbar from "./components/Navbar";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const features = [
    {
      icon: "📊",
      title: "CRM الذكي",
      desc: "إدارة العملاء والمتابعات وتحسين فرص الإغلاق."
    },
    {
      icon: "🤖",
      title: "البائع الذكي",
      desc: "تحليل احتمالية الشراء وتوصيات المبيعات."
    },
    {
      icon: "📱",
      title: "WhatsApp Agent",
      desc: "تحليل المحادثات واقتراح الردود المناسبة."
    },
    {
      icon: "⚡",
      title: "لوحة الإدارة",
      desc: "إحصائيات ومؤشرات أداء المنصة بالكامل."
    }
  ];

  return (
    <>
      <Navbar />
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg,#020617,#0f172a,#111827)",
        color: "white",
        padding: "40px 20px"
      }}
    >
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
          paddingTop: "60px"
        }}
      >
        <div
          style={{
            color: "#22c55e",
            fontWeight: "bold",
            marginBottom: "20px"
          }}
        >
          🌱 NAMMA AI
        </div>

        <h1
          style={{
            fontSize: "64px",
            fontWeight: "900",
            marginBottom: "20px"
          }}
        >
          منصة عربية للمبيعات
          <br />
          والذكاء الاصطناعي
        </h1>

        <p
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            color: "#cbd5e1",
            lineHeight: "2",
            fontSize: "20px"
          }}
        >
          اجمع CRM والبائع الذكي ووكيل واتساب وصناعة المحتوى
          في منصة واحدة تساعدك على زيادة المبيعات وتحسين تجربة العملاء.
        </p>

        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "40px"
          }}
        >
          <button
            onClick={() => router.push("/register")}
            style={{
              padding: "16px 32px",
              border: "none",
              borderRadius: "14px",
              background: "#22c55e",
              color: "white",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            ابدأ مجاناً
          </button>

          <button
            onClick={() => router.push("/pricing")}
            style={{
              padding: "16px 32px",
              borderRadius: "14px",
              border: "1px solid rgba(255,255,255,.15)",
              background: "transparent",
              color: "white",
              cursor: "pointer"
            }}
          >
            عرض الأسعار
          </button>
        </div>
      </section>

      <section
        style={{
          maxWidth: "1200px",
          margin: "80px auto"
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px"
          }}
        >
          {features.map((item) => (
            <div
              key={item.title}
              style={{
                background: "rgba(255,255,255,.04)",
                border: "1px solid rgba(255,255,255,.08)",
                borderRadius: "20px",
                padding: "30px"
              }}
            >
              <div
                style={{
                  fontSize: "48px",
                  marginBottom: "12px"
                }}
              >
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p
                style={{
                  color: "#cbd5e1",
                  lineHeight: "1.8"
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main></>
  );
}
