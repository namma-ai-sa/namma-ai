import Navbar from "@/components/Navbar";

export default function HomePage() {
  const tools = [
    "📝 كتابة المقالات",
    "📈 تحسين SEO",
    "🎥 صناعة الفيديو",
    "📱 السوشال ميديا",
    "🎨 الهوية البصرية",
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
            padding: "80px 20px",
          }}
        >
          <div
            style={{
              color: "#60a5fa",
              fontSize: "18px",
              marginBottom: "20px",
              fontWeight: "bold",
            }}
          >
            🚀 NAMMA AI
          </div>

          <h1
            style={{
              fontSize: "64px",
              lineHeight: "1.2",
              marginBottom: "25px",
            }}
          >
            حوّل أفكارك إلى محتوى
            <br />
            ومحتواك إلى نمو حقيقي
          </h1>

          <p
            style={{
              fontSize: "22px",
              color: "#cbd5e1",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            منصة عربية متكاملة تضم أدوات المقالات وSEO والسوشال
            ميديا والفيديو والصور والتحليلات في مكان واحد.
          </p>

          <div
            style={{
              marginTop: "40px",
            }}
          >
            <button
              style={{
                background: "#2563eb",
                color: "#fff",
                border: "none",
                padding: "16px 32px",
                borderRadius: "12px",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              🚀 ابدأ الآن
            </button>
          </div>
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
            marginTop: "60px",
          }}
        >
          {tools.map((tool) => (
            <div
              key={tool}
              style={{
                background: "#131c2f",
                borderRadius: "16px",
                padding: "24px",
                textAlign: "center",
              }}
            >
              <h3>{tool}</h3>

              <p
                style={{
                  color: "#94a3b8",
                }}
              >
                أداة احترافية تساعدك على إنجاز مهامك بسرعة وكفاءة.
              </p>
            </div>
          ))}
        </section>

        <section
          style={{
            textAlign: "center",
            marginTop: "80px",
            padding: "40px",
          }}
        >
          <h2>لماذا NAMMA AI؟</h2>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "50px",
              flexWrap: "wrap",
              marginTop: "30px",
            }}
          >
            <div>
              <h3>15+</h3>
              <p>أداة ذكية</p>
            </div>

            <div>
              <h3>100%</h3>
              <p>واجهة عربية</p>
            </div>

            <div>
              <h3>24/7</h3>
              <p>جاهزة للعمل</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}