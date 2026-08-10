"use client";

import { useState } from "react";

export default function ToolsPage() {
  const [result, setResult] = useState("");

  function generate() {
    setResult(`
📸 منشور إنستغرام

نساعدك على تنمية أعمالك باستخدام الذكاء الاصطناعي.

📢 منشور X

جرّب منصة NAMMA AI لإدارة العملاء وتحسين المبيعات.

💬 رسالة واتساب

مرحباً، يسعدنا تقديم حلول ذكية تساعدك على زيادة المبيعات وتحسين التواصل مع العملاء.

🏷️ هاشتاقات

#نمى_AI
#الذكاء_الاصطناعي
#التسويق_الرقمي
#إدارة_العملاء
`);
  }

  return (
    <main className="container">
      <h1
        style={{
          marginBottom: "24px"
        }}
      >
        🚀 Content Studio V1
      </h1>

      <div className="card">
        <textarea
          rows="8"
          placeholder="اكتب وصف النشاط أو المنتج..."
        />

        <br />
        <br />

        <button onClick={generate}>
          إنشاء المحتوى
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
