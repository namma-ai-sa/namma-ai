"use client";

import { useRouter } from "next/navigation";

export default function ToolsPage() {
  const router = useRouter();

  const tools = [
    { name: "SEO", icon: "🔍", path: "/tools/seo" },
    { name: "Articles", icon: "✍️", path: "/tools/article" },
    { name: "Ads", icon: "📢", path: "/tools/ad-generator" },
    { name: "Video", icon: "🎬", path: "/tools/video" },
    { name: "Social", icon: "📱", path: "/tools/social" },
    { name: "Hashtags", icon: "🏷️", path: "/tools/hashtags" },
    { name: "Ideas", icon: "💡", path: "/tools/ideas" },
    { name: "Brand", icon: "🧠", path: "/tools/brand-identity" },
    { name: "Website", icon: "🌐", path: "/tools/website" },
    { name: "Ecommerce", icon: "🛍️", path: "/tools/ecommerce" },
    { name: "Audience", icon: "🎯", path: "/tools/audience" },
    { name: "Competitor", icon: "⚔️", path: "/tools/competitor" }
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#030712",
        color: "white",
        padding: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "800",
            marginBottom: "12px",
          }}
        >
          🚀 NAMMA AI Tools
        </h1>

        <p
          style={{
            color: "#94a3b8",
            marginBottom: "40px",
          }}
        >
          جميع أدوات الذكاء الاصطناعي والتسويق في مكان واحد. • 12 أداة متاحة
        </p>


        <div
          style={{
            background: "#111827",
            border: "1px solid rgba(255,255,255,.08)",
            borderRadius: "24px",
            padding: "24px",
            marginBottom: "32px",
            boxShadow:
              "0 20px 50px rgba(0,0,0,.35)"
          }}
        >
          <h2>⭐ الأدوات المميزة</h2>

          <p>🔍 SEO Generator</p>
          <p>✍️ Article Writer</p>
          <p>📢 Ad Generator</p>
          <p>🤖 AI Seller</p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "24px",
          }}
        >
          {tools.map((tool) => (
            <div
              key={tool.path}
              onClick={() => router.push(tool.path)}
              style={{
                background: "#111827",
                border: "1px solid rgba(255,255,255,.08)",
                borderRadius: "24px",
                padding: "24px",
                cursor: "pointer",
                boxShadow:
                  "0 20px 50px rgba(0,0,0,.35)",
                transition: "all .25s ease",
              }}
            >
              <div
                style={{
                  fontSize: "46px",
                  marginBottom: "12px",
                }}
              >
                {tool.icon}
              </div>

              <h3>{tool.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
