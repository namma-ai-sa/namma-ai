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
        🤖 AI Seller V4
      </h1>

      <div className="card">
        <textarea
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
