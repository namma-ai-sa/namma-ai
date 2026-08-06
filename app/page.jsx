import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            color: "#60a5fa",
            marginBottom: "20px",
            fontSize: "20px",
          }}
        >
          🚀 NAMMA AI
        </div>

        <h1
          style={{
            fontSize: "56px",
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
            margin: "0 auto 50px",
            color: "#cbd5e1",
            fontSize: "20px",
          }}
        >
          أنشئ المقالات والأفكار وخطط المحتوى وتحسين SEO والسوشال ميديا من منصة واحدة.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
            marginTop: "50px",
          }}
        >
          {[
            "📝 كتابة المقالات",
            "📈 تحسين SEO",
            "🎥 صناعة الفيديو",
            "📱 السوشال ميديا",
            "🎨 الهوية البصرية",
            "💡 توليد الأفكار",
          ].map((item) => (
            <div
              key={item}
              style={{
                background: "#111827",
                padding: "24px",
                borderRadius: "16px",
              }}
            >
              <h3>{item}</h3>
              <p style={{ color: "#94a3b8" }}>
                أداة احترافية تساعدك على إنجاز أعمالك بسرعة.
              </p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}