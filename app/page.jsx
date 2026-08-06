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

          <div
            style={{
              marginTop: "40px",
              maxWidth: "750px",
              marginInline: "auto",
            }}
          >
            <div
              style={{
                background: "#111827",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "18px",
                padding: "18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "15px",
              }}
            >
              <input
                type="text"
                placeholder="اكتب طلبك هنا..."
                style={{
                  flex: 1,
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  color: "white",
                  fontSize: "18px",
                }}
              />

              <span
                style={{
                  fontSize: "24px",
                  cursor: "pointer",
                  color: "#60a5fa",
                }}
              >
                ➜
              </span>
            </div>

            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                flexWrap: "wrap",
              }}
            >
              <button
                style={{
                  background: "#111827",
                  border: "1px solid rgba(255,255,255,.1)",
                  color: "white",
                  padding: "10px 16px",
                  borderRadius: "999px",
                  cursor: "pointer",
                }}
              >
                💡 كتابة مقال
              </button>

              <button
                style={{
                  background: "#111827",
                  border: "1px solid rgba(255,255,255,.1)",
                  color: "white",
                  padding: "10px 16px",
                  borderRadius: "999px",
                  cursor: "pointer",
                }}
              >
                📈 تحليل SEO
              </button>

              <button
                style={{
                  background: "#111827",
                  border: "1px solid rgba(255,255,255,.1)",
                  color: "white",
                  padding: "10px 16px",
                  borderRadius: "999px",
                  cursor: "pointer",
                }}
              >
                🎥 سيناريو فيديو
              </button>

              <button
                style={{
                  background: "#111827",
                  border: "1px solid rgba(255,255,255,.1)",
                  color: "white",
                  padding: "10px 16px",
                  borderRadius: "999px",
                  cursor: "pointer",
                }}
              >
                📱 منشورات سوشال
              </button>

              <button
                style={{
                  background: "#111827",
                  border: "1px solid rgba(255,255,255,.1)",
                  color: "white",
                  padding: "10px 16px",
                  borderRadius: "999px",
                  cursor: "pointer",
                }}
              >
                🎨 هوية بصرية
              </button>
            </div>
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
                أداة احترافية تساعدك على إنجاز مهامك بسرعة وكفاءة.
              </p>
            </div>
          ))}
        </section>

        <section
          style={{
            marginTop: "100px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "42px",
              marginBottom: "40px",
            }}
          >
            لماذا نمّى AI؟
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(220px,1fr))",
              gap: "20px",
            }}
          >
            <div
              style={{
                background: "#111827",
                padding: "24px",
                borderRadius: "18px",
              }}
            >
              <h3>⚡ سرعة فائقة</h3>
              <p>أنجز المحتوى خلال ثوانٍ.</p>
            </div>

            <div
              style={{
                background: "#111827",
                padding: "24px",
                borderRadius: "18px",
              }}
            >
              <h3>🎯 نتائج دقيقة</h3>
              <p>محتوى احترافي جاهز للاستخدام.</p>
            </div>

            <div
              style={{
                background: "#111827",
                padding: "24px",
                borderRadius: "18px",
              }}
            >
              <h3>🌍 عربي بالكامل</h3>
              <p>مصمم خصيصًا للمستخدم العربي.</p>
            </div>

            <div
              style={{
                background: "#111827",
                padding: "24px",
                borderRadius: "18px",
              }}
            >
              <h3>🔒 موثوق وآمن</h3>
              <p>واجهة مستقرة وسهلة الاستخدام.</p>
            </div>
          </div>
        </section>

        <section
          style={{
            textAlign: "center",
            marginTop: "100px",
          }}
        >
          <h2 style={{ fontSize: "42px" }}>
            أرقام تتحدث عن نفسها
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
            منصة عربية تساعدك على صناعة محتوى أفضل وتنمية أعمالك باستخدام الذكاء الاصطناعي.
          </p>
        </section>
      </main>
    </>
  );
}