"use client";

import { useState } from "react";

export default function SocialContentPage() {
  const [topic, setTopic] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const generateSocialContent = async () => {
    if (!topic) return;

    setLoading(true);
    setResult("");

    try {
      const res = await fetch(`/api/social?topic=${encodeURIComponent(topic)}`);
      const data = await res.json();
      setResult(data.result || "لم يتم إنشاء المحتوى");
    } catch (err) {
      setResult("حدث خطأ أثناء إنشاء المحتوى");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-[#050509] text-white px-6 py-10">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-2xl font-semibold mb-6">محتوى شبكات التواصل 📱</h1>

        <div className="flex flex-col gap-4 mb-6">
          <input
            type="text"
            placeholder="اكتب موضوع المنشور..."
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full p-3 rounded-lg bg-[#0b0b12] border border-gray-700 text-white"
          />

          <button
            onClick={generateSocialContent}
            disabled={loading}
            className="p-3 rounded-lg bg-violet-600 hover:bg-violet-700 transition"
          >
            {loading ? "جاري إنشاء المحتوى..." : "إنشاء المحتوى"}
          </button>
        </div>

        {result && (
          <div className="whitespace-pre-wrap bg-[#0b0b12] p-5 rounded-xl border border-gray-800 text-gray-300">
            {result}
          </div>
        )}
      </div>
    </main>
  );
}
