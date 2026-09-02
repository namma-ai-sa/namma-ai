"use client";

import { useState } from "react";

export default function PublishHubPage() {
  const [content, setContent] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function publish() {
    if (!content) return;

    setLoading(true);

    try {
      const res = await fetch(
        `/api/social?input=${encodeURIComponent(content)}`
      );

      const data = await res.json();

      setResult(data.result || "");
    } catch {
      setResult("حدث خطأ أثناء إنشاء المحتوى");
    }

    setLoading(false);
  }

  return (
    <main className="container">
      <h1 style={{ marginBottom: "24px" }}>
        📢 Publish Hub Premium
      </h1>

      <div className="card">
        <textarea
          rows="8"
          value={content}
          onChange={(e) =>
            setContent(e.target.value)
          }
          placeholder="اكتب المحتوى هنا..."
        />

        <br />
        <br />

        <button onClick={publish}>
          {loading
            ? "جاري الإنشاء..."
            : "إنشاء محتوى السوشيال"}
        </button>
      </div>

      {result && (
        <div
          className="card"
          style={{
            marginTop: "24px",
            whiteSpace: "pre-wrap"
          }}
        >
          {result}
        </div>
      )}
    </main>
  );
}
