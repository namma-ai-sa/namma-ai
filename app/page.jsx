import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function HomePage() {
  const tools = [
    "📝 كتابة المقالات",
    "📈 تحسين SEO",
    "📱 محتوى السوشال",
    "🎥 صناعة الفيديو",
    "🎨 الصور الإبداعية",
    "💡 توليد الأفكار",
  ];

  return (
    <>
      <Navbar />

      <main
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px 20px",
        }}
      >
        <section
          style={{
            textAlign: "center",
            padding: "100px 20px",
          }}
        >
          <div
            style={{
              display: "inline-block",
              background: "#1e293b",
              padding: "10px 18px",
              borderRadius: "999px",
              color: "#60a5fa",
              marginBottom: "25px",
            }}
          >
            🚀 NAMMA AI
          </div>

          <h1
            style={{
              fontSize: "64px",
              lineHeight: "1.2",
              marginBottom: "24px",
            }}
          >
            منصة الذكاء الاصطناعي
            <br />
            للمسوقين وصناع المحتوى
          </h1>

          <p
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              fontSize: "22px",
              color: "#cbd5e1",
            }}
          >
            أنشئ المقالات، وطور السوشال ميديا، وحلل المنافسين،
            وحسّن ظهورك في محركات البحث من منصة واحدة.
          </p>

          <div
            style={{
              marginTop: "40px",
              display: "flex",
              justifyContent: "center",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >
            /tools
              <button
                style={{
                  background: "#2563eb",
                  color: "#fff",
                  border: "none",
                  padding: "15px 30px",
                  borderRadius: "12px",
                  cursor: "pointer",
                }}
              >
                ابدأ الآن 🚀
              </button>
            </Link>

            /projects
              <button
                style={{
                  background: "#1f2937",
                  color: "#fff",
                  border: "none",
                  padding: "15px 30px",
                  borderRadius: "12px",
                  cursor: "pointer",
                }}
              >
                استعرض المشاريع
              </button>
            </Link>
          </div>
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
            marginTop: "50px",
          }}
        >
          {tools.map((tool) => (
            <div
              key={tool}
              style={{
                background: "#111827",
                borderRadius: "16px",
                padding: "24px",
              }}
            >
              <h3>{tool}</h3>

              <p
                style={{
                  color: "#94a3b8",
                }}
              >
                أداة ذكية تساعدك على إنجاز أعمالك بسرعة وكفاءة.
              </p>
            </div>
          ))}
        </section>

        <section
          style={{
            textAlign: "center",
            marginTop: "90px",
          }}
        >
          <h2
            style={{
              fontSize: "42px",
            }}
          >
            لماذا NAMMA AI؟
          </h2>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "40px",
              flexWrap: "wrap",
              marginTop: "40px",
            }}
          >
            <div>
              <h3>15+</h3>
              <p>أداة متخصصة</p>
            </div>

            <div>
              <h3>100%</h3>
              <p>واجهة عربية</p>
            </div>

            <div>
              <h3>24/7</h3>
              <p>جاهزة للاستخدام</p>
            </div>
          </div>
        </section>

        <section
          style={{
            textAlign: "center",
            marginTop: "100px",
            padding: "60px 20px",
            background: "#111827",
            borderRadius: "20px",
          }}
        >
          <h2>جاهز للانطلاق؟</h2>

          <p
            style={{
              color: "#cbd5e1",
            }}
          >
            ابدأ رحلتك مع NAMMA AI اليوم واستخدم جميع الأدوات من مكان واحد.
          </p>

          /tools
            <button
              style={{
                background: "#2563eb",
                color: "#fff",
                border: "none",
                padding: "15px 30px",
                borderRadius: "12px",
                cursor: "pointer",
                marginTop: "20px",
              }}
            >
              ابدأ مجاناً
            </button>
          </Link>
        </section>
      </main>
    </>
  );
}