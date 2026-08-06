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
            padding: "100px 20px",
          }}
        >
          <div
            style={{
              color: "#60a5fa",
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            🌱 نمّى AI
          </div>

          <h1
            style={{
              fontSize: "72px",
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
              maxWidth: "800px",
              margin: "0 auto",
              color: "#cbd5e1",
              fontSize: "22px",
            }}
          >
            منصة عربية متكاملة تجمع أدوات كتابة المحتوى وتحسين SEO
            والسوشال ميديا والفيديو والتحليلات في مكان واحد.
          </p>

          <div style={{ marginTop: "40px" }}>
            <button
              style={{
                background:
                  "linear-gradient(135deg,#2563eb,#7c3aed)",
                color: "#fff",
                border: "none",
                padding: "18px 40px",
                borderRadius: "14px",
                fontSize: "18px",
                cursor: "pointer",
                boxShadow:
                  "0 0 30px rgba(59,130,246,.4)",
              }}
            >
              🚀 ابدأ الآن
            </button>
          </div>
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
            marginTop: "60px",
          }}
        >
          {tools.map((tool) => (
            <div
              key={tool}
              style={{
                background: "#111827",
                borderRadius: "18px",
                padding: "24px",
                textAlign: "center",
              }}
            >
              <h3>{tool}</h3>

              <p style={{ color: "#94a3b8" }}>
                أداة احترافية تساعدك على إنجاز مهامك
                بسرعة وكفاءة.
              </p>
            </div>
          ))}
        </section>

        <section
          style={{
            textAlign: "center",
            marginTop: "100px",
          }}
        >
          <h2 style={{ fontSize: "42px" }}>
            لماذا نمّى AI؟
          </h2>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "60px",
              flexWrap: "wrap",
              marginTop: "40px",
            }}
          >
            <div>
              <h1>15+</h1>
              <p>أداة ذكية</p>
            </div>

            <div>
              <h1>100%</h1>
              <p>واجهة عربية</p>
            </div>

            <div>
              <h1>24/7</h1>
              <p>جاهزة للعمل</p>
            </div>

            <div>
              <h1>5000+</h1>
              <p>عملية إنشاء محتوى</p>
            </div>
          </div>
        </section>

        <section
          style={{
            textAlign: "center",
            marginTop: "120px",
            paddingBottom: "80px",
          }}
        >
          <h2>🌱 ابدأ رحلتك مع نمّى AI</h2>

          <p
            style={{
              color: "#94a3b8",
              marginTop: "15px",
            }}
          >
            منصة عربية تساعدك على صناعة محتوى أفضل
            وتنمية أعمالك باستخدام الذكاء الاصطناعي.
          </p>
        </section>
      </main>
    </>
  );
}