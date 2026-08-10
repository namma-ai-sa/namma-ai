"use client";

import { useState } from "react";

export default function PublishHubPage() {
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("");

  function publish() {
    setStatus(`
✅ المحتوى جاهز للنشر

📘 Facebook
✅ جاهز

📸 Instagram
✅ جاهز

💼 LinkedIn
✅ جاهز

𝕏 X
✅ جاهز

📅 Schedule
جاهز للجدولة
`);
  }

  return (
    <main className="container">
      <h1 style={{ marginBottom: "24px" }}>
        📢 Publish Hub V1
      </h1>

      <div className="card">
        <textarea
          rows="8"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="اكتب المحتوى هنا..."
        />

        <br />
        <br />

        <button onClick={publish}>
          مراجعة وتجهيز النشر
        </button>
      </div>

      {status && (
        <div
          className="card"
          style={{
            marginTop: "24px",
            whiteSpace: "pre-wrap"
          }}
        >
          {status}
        </div>
      )}
    </main>
  );
}
