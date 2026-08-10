"use client";

import { useState } from "react";

export default function VideoStudioPage() {
  const [result, setResult] = useState("");

  function generateVideo() {
    setResult(`
🎬 عنوان الفيديو
كيف تضاعف مبيعاتك باستخدام NAMMA AI

🎙️ التعليق الصوتي
اكتشف منصة عربية متكاملة تساعدك على إدارة العملاء وتحليل المحادثات وتحسين فرص البيع.

🎥 المشهد 1
شعار NAMMA AI مع ظهور الخدمات.

🎥 المشهد 2
عرض CRM وإدارة العملاء.

🎥 المشهد 3
عرض AI Seller وتحليل العملاء.

🎥 المشهد 4
عرض WhatsApp Agent وتحليل المحادثات.

🎥 المشهد 5
دعوة للتسجيل والبدء مجاناً.

⏱️ المدة
30 ثانية
`);
  }

  return (
    <main className="container">
      <h1 style={{ marginBottom: "24px" }}>
        🎬 Video Studio V1
      </h1>

      <div className="card">
        <textarea
          rows="8"
          placeholder="اكتب فكرة الفيديو..."
        />

        <br />
        <br />

        <button onClick={generateVideo}>
          إنشاء الفيديو
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
