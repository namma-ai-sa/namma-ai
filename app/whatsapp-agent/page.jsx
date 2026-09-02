"use client";

import { useState } from "react";

export default function WhatsAppAgentPage() {
  const [result, setResult] = useState("");

  function analyze() {
    setResult(`
🎯 Intent Score: 91%

🔥 Lead Temperature: Hot

💰 Closing Probability: 82%

💬 Suggested Reply:
شكراً لتواصلك، يسعدنا مساعدتك واختيار الحل الأنسب لاحتياجك.

⚠️ Possible Objections:
- الميزانية
- التوقيت
- المقارنة مع المنافسين

🚀 Next Action:
إرسال عرض وتحديد موعد متابعة خلال 24 ساعة.
`);
  }

  return (
    <main className="container">
      <h1 style={{ marginBottom: "24px" }}>
        📱 WhatsApp Agent Premium
      </h1>

      <div className="card"
        style={{
          background: "#111827",
          border: "1px solid rgba(255,255,255,.08)",
          borderRadius: "24px",
          padding: "24px"
        }}>
        <textarea
          style={{
            width: "100%",
            background: "#030712",
            color: "white",
            border: "1px solid rgba(255,255,255,.08)",
            borderRadius: "16px",
            padding: "16px"
          }}
          rows="8"
          placeholder="ألصق المحادثة هنا..."
        />

        <br />
        <br />

        <button onClick={analyze}>
          تحليل المحادثة
        </button>
      </div>

      {result && (
        <div
          className="card"
        style={{
          background: "#111827",
          border: "1px solid rgba(255,255,255,.08)",
          borderRadius: "24px",
          padding: "24px"
        }}
          style={{
            marginTop: "24px",
            whiteSpace: "pre-wrap",
            border: "1px solid rgba(34,197,94,.35)",
            borderRadius: "24px",
            padding: "24px",
            background: "#111827"
          }}
        >
          {result}
        </div>
      )}
    </main>
  );
}
