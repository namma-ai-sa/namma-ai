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
        📱 WhatsApp Agent V4
      </h1>

      <div className="card">
        <textarea
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
