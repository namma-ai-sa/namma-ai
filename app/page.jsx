import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function HomePage() {
  const tools = [
    "📝 كتابة المقالات",
    "📈 تحسين SEO",
    "🎥 صناعة الفيديو",
    "📱 محتوى السوشال",
    "🎨 الهوية البصرية",
    "💡 توليد الأفكار",
  ];

  return (
    <>
      <Navbar />

      <main className="container">
        <section
          style={{
            textAlign: "center",
            padding: "100px 20px",
          }}
        >
          <div
            style={{
              color: "#60a5fa",
              marginBottom: "20px",
              fontSize: "18px",
            }}
          >
            🚀 NAMMA AI
          </div>

          <h1
            style={{
              fontSize: "60px",
              lineHeight: "1.2",
              marginBottom: "20px",
            }}
          >
            منصة الذكاء الاصطناعي
            <br />
            للمسوقين وصناع المحتوى
          </h1>

          <p
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              color: "#cbd5e1",
              fontSize: "20px",
            }}
          >
            أنشئ المقالات والأفكار وخطط المحتوى وتحسين SEO والسوشال
            ميديا من مكان واحد.
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
                  padding: "14px 26px",
                  border: "none",
                  borderRadius: "10px",
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
                  padding: "14px 26px",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
              >
                المشاريع
              </button>
            </Link>
          </div>
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
          }}
        >
          {tools.map((tool) => (
            <div
              key={tool}
              style={{
                background: "#111827",
                padding: "24px",
                borderRadius: "16px",
              }}
            >
              <h3>{tool}</h3>

              <p style={{ color: "#94a3b8" }}>
                أداة ذكية تساعدك في إنشاء نتائج احترافية بسرعة.
              </p>
            </div>
          ))}
        </section>

        <section
          style={{
            textAlign: "center",
            marginTop: "90px",
            paddingBottom: "80px",
          }}
        >
          <h2 style={{ fontSize: "40px" }}>
            لماذا NAMMA AI؟
          </h2>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "40px",
              flexWrap: "wrap",
              marginTop: "30px",
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
      </main>
    </>
  );
}