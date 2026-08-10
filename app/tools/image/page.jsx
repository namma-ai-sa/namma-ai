"use client";

import { useState } from "react";

export default function ImageStudioPage() {
  const [result, setResult] = useState("");

  function generateImagePrompt() {
    setResult(`
📸 Square Post

تصميم احترافي لمنصة NAMMA AI بأسلوب SaaS حديث،
ألوان خضراء وزرقاء، واجهة عربية، إضاءة احترافية.

📱 Story

تصميم عمودي يبرز الذكاء الاصطناعي العربي
وإدارة العملاء وتحسين المبيعات.

🖼 Banner

بانر تسويقي احترافي يعرض CRM والبائع الذكي
ووكيل واتساب في لوحة واحدة.

🎯 Ad Creative

إعلان احترافي يركز على زيادة المبيعات
وتحسين متابعة العملاء.
`);
  }

  return (
    <main className="container">
      <h1 style={{ marginBottom: "24px" }}>
        🎨 Image Studio V1
      </h1>

      <div className="card">
        <textarea
          rows="8"
          placeholder="اكتب وصف الصورة المطلوبة..."
        />

        <br />
        <br />

        <button onClick={generateImagePrompt}>
          إنشاء التصور
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
