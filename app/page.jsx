"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  const router = useRouter();
  const [prompt, setPrompt] = useState("");

  const tools = [
    "📝 كتابة المقالات",
    "📈 تحسين SEO",
    "🎥 صناعة الفيديو",
    "📱 السوشال ميديا",
    "🎨 الهوية البصرية",
    "💡 توليد الأفكار",
  ];

  const handleSubmit = () => {
    if (!prompt.trim()) return;

    router.push(
      `/ai?q=${encodeURIComponent(prompt)}`
    );
  };

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
                value={prompt}
                onChange={(e) =>
                  setPrompt(e.target.value)
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSubmit();
                  }
                }}
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
                onClick={handleSubmit}
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
                onClick={() =>
                  setPrompt("اكتب مقالاً احترافياً")
                }
              >
                💡 كتابة مقال
              </button>

              <button
                onClick={() =>
                  setPrompt("أنشئ خطة SEO كاملة")
                }
              >
                📈 تحليل SEO
              </button>

              <button
                onClick={() =>
                  setPrompt("اكتب سيناريو فيديو")
                }
              >
                🎥 سيناريو فيديو
              </button>

              <button
                onClick={() =>
                  setPrompt("أنشئ منشورات سوشال ميديا")
                }
              >
                📱 منشورات سوشال
              </button>

              <button
                onClick={() =>
                  setPrompt("أنشئ هوية بصرية")
                }
              >
                🎨 هوية بصرية
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}