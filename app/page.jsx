"use client";

import Navbar from "./components/Navbar";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const features = [
    {
      icon: "📊",
      title: "CRM الذكي",
      desc: "إدارة العملاء والمتابعات وتحسين فرص الإغلاق.",
      path: "/crm",
    },
    {
      icon: "🤖",
      title: "البائع الذكي",
      desc: "تحليل احتمالية الشراء وتوصيات المبيعات.",
      path: "/ai-seller",
    },
    {
      icon: "📱",
      title: "وكيل واتساب",
      desc: "تحليل المحادثات واقتراح الردود المناسبة.",
      path: "/whatsapp-agent",
    },
    {
      icon: "⚡",
      title: "لوحة الإدارة",
      desc: "إحصائيات ومؤشرات أداء المنصة بالكامل.",
      path: "/dashboard",
    }
  ];

  const stats = [
    {
      icon: "📈",
      value: "+5000",
      label: "رسالة محللة"
    },
    {
      icon: "👥",
      value: "+300",
      label: "عميل نشط"
    },
    {
      icon: "🤖",
      value: "24/7",
      label: "مساعد ذكي"
    },
    {
      icon: "⚡",
      value: "90%",
      label: "تحسين المتابعة"
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
            paddingTop: "80px"
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "10px 18px",
              border: "1px solid rgba(34,197,94,.3)",
              background: "rgba(34,197,94,.08)",
              borderRadius: "999px",
              color: "#22c55e",
              fontWeight: "700",
              marginBottom: "25px"
            }}
          >
            ⭐ أكثر من 5000 رسالة تم تحليلها
          </div>

          <h1
            style={{
              fontSize: "88px",
              textShadow: "0 0 30px rgba(34,197,94,.25)",
              fontWeight: "900",
              lineHeight: "1.2",
              marginBottom: "24px"
            }}
          >
            شغّل شركة كاملة
            <br />
            بذكاء اصطناعي واحد
          </h1>

          <p
            style={{
              maxWidth: "850px",
              margin: "0 auto",
              color: "#cbd5e1",
              fontSize: "22px",
              lineHeight: "2"
            }}
          >
            CRM + WhatsApp + AI + Analytics

            كل أدوات النمو والمبيعات والتسويق
            داخل منصة واحدة مصممة للشركات العربية.
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
                padding: "18px 38px",
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
                padding: "18px 38px",
                borderRadius: "14px",
                border: "1px solid rgba(255,255,255,.15)",
                background: "transparent",
                color: "white",
                cursor: "pointer"
              }}
            >
              شاهد الأسعار
            </button>

            <button
              onClick={() => router.push("/guest")}
              style={{
                padding: "18px 38px",
                borderRadius: "14px",
                border: "none",
                background: "#2563eb",
                color: "white",
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              🤖 جرّب نمّى AI
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
                "repeat(auto-fit,minmax(220px,1fr))",
              gap: "20px"
            }}
          >
            {stats.map((item) => (
              <div
                key={item.label}
                style={{
                  background: "rgba(255,255,255,.04)",
                  border:
                    "1px solid rgba(255,255,255,.08)",
                  borderRadius: "20px",
                  padding: "24px",
                  textAlign: "center"
                }}
              >
                <h2
                  style={{
                    color: "#22c55e",
                    fontSize: "48px",
                    fontWeight: "900"
                  }}
                >
                  <div
                  style={{
                    fontSize: "32px",
                    marginBottom: "10px",
                  }}
                >
                  {item.icon}
                </div>

                {item.value}
                </h2>

                <p
                  style={{
                    color: "#cbd5e1"
                  }}
                >
                  {item.label}
                </p>
              </div>
            ))}
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
                onClick={() => router.push(item.path)}
                style={{
                  background: "rgba(255,255,255,.04)",
                  border:
                    "1px solid rgba(255,255,255,.08)",
                  borderRadius: "20px",
                  padding: "36px",
                  cursor: "pointer",
                  transition: "all .2s ease",
                  boxShadow: "0 10px 30px rgba(0,0,0,.25)",
                  transform: "translateY(0)"
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
                    lineHeight: "1.8",
                    marginBottom: "18px",
                  }}
                >
                  {item.desc}
                </p>

                <div
                  style={{
                    color: "#22c55e",
                    fontWeight: "700",
                  }}
                >
                  🚀 افتح الأداة
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          style={{
            maxWidth: "1200px",
            margin: "100px auto",
            padding: "0 20px",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,.04)",
              border: "1px solid rgba(255,255,255,.08)",
              borderRadius: "28px",
              padding: "40px",
              textAlign: "center",
              boxShadow: "0 20px 60px rgba(0,0,0,.35)",
            }}
          >
            <div
              style={{
                color: "#22c55e",
                fontWeight: "700",
                marginBottom: "12px",
              }}
            >
              🤖 جرّب نمّى AI مباشرة
            </div>

            <h2
              style={{
                fontSize: "42px",
                marginBottom: "20px",
              }}
            >
              اسأل عن المبيعات والتسويق والعملاء
            </h2>

            <div
              style={{
                maxWidth: "700px",
                margin: "0 auto",
                background: "#0f172a",
                border: "1px solid rgba(255,255,255,.08)",
                borderRadius: "18px",
                padding: "18px",
                color: "#cbd5e1",
              }}
            >
              كيف أزيد مبيعات شركتي خلال 30 يوم؟
            </div>

            <button
              onClick={() => router.push("/guest")}
              style={{
                marginTop: "24px",
                background: "#22c55e",
                color: "white",
                border: "none",
                borderRadius: "14px",
                padding: "16px 32px",
                cursor: "pointer",
                fontWeight: "700",
                fontSize: "16px",
              }}
            >
              🚀 ابدأ التجربة الآن
            </button>
          </div>
        </section>
      </main>
    </>
  );

}
