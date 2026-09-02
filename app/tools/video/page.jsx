"use client";

import { useState } from "react";

export default function VideoStudioPage() {
  const [idea, setIdea] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function generateVideo() {
    if (!idea) return;

    setLoading(true);

    try {
      const res = await fetch(
        `/api/video?idea=${encodeURIComponent(idea)}`
      );

      const data = await res.json();

      setResult(data.result || "");
    } catch {
      setResult("حدث خطأ أثناء إنشاء الفيديو");
    }

    setLoading(false);
  }

  return (
    <main className="container">
      <h1 style={{ marginBottom: "24px" }}>
        🎬 Video Studio Premium
      </h1>

      <div className="card">
        <textarea
          rows="8"
          value={idea}
          onChange={(e) =>
            setIdea(e.target.value)
          }
          placeholder="اكتب فكرة الفيديو..."
        />

        <br /><br />

        <button onClick={generateVideo}>
          {loading
            ? "جاري الإنشاء..."
            : "إنشاء الفيديو"}
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
