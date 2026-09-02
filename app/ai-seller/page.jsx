"use client";

import { useState } from "react";

export default function AISellerPage() {
  const [result, setResult] = useState("");

  async function analyze() {
    setResult(`
🎯 درجة الاهتمام: 87%

💰 احتمالية الشراء: 78%

⚠️ الاعتراض المتوقع:
السعر والوقت المناسب للشراء

📢 العرض المقترح:
تقديم عرض محدود المدة

✉️ الرسالة المقترحة:
مرحباً، لاحظنا اهتمامك بالخدمة ونود تقديم عرض خاص يساعدك على اتخاذ القرار المناسب.

🚀 الخطوة التالية:
متابعة خلال 24 ساعة
`);
  }

  return (
    <main className="container">
      <h1 style={{ marginBottom: "24px" }}>
        🤖 AI Seller Premium
      </h1>

      <div className="card"
        style={{
          border: "1px solid rgba(255,255,255,.08)",
          borderRadius: "24px",
          padding: "24px",
          background: "#111827"
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
          placeholder="اكتب معلومات العميل هنا..."
        />

        <br />
        <br />

        <button onClick={analyze}>
          تحليل العميل
        </button>
      </div>

      {result && (
        <div
          className="card"
        style={{
          border: "1px solid rgba(255,255,255,.08)",
          borderRadius: "24px",
          padding: "24px",
          background: "#111827"
        }}
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
