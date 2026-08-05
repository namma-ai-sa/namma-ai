"use client";

import { useState } from "react";

export default function WebsiteAnalyzePage() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [message, setMessage] = useState("");

  const analyzeWebsite = async () => {
    if (!input) {
      setMessage("يرجى إدخال رابط الموقع");
      return;
    }

    setLoading(true);
    setMessage("");
    setResult("");

    try {
      const res = await fetch(`/api/website-analyze?input=${encodeURIComponent(input)}`);
      const data = await res.json();

      if (data.result) {
        setResult(data.result);
      } else {
        setMessage("لم يتم تحليل الموقع");
      }
    } catch (err) {
      setMessage("حدث خطأ أثناء التحليل");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-[#050509] text-white px-6 py-10">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-2xl font-semibold mb-6">تحليل المواقع 🌐</h1>

        <div className="flex flex-col gap-4 mb-6">

          <input
            type="text"
            placeholder="أدخل رابط الموقع..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full p-3 rounded-lg bg-[#0b0b12] border border-gray-700 text-white"
          />

          <button
            onClick={analyzeWebsite}
            disabled={loading}
            className="p-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition"
          >
            {loading ? "جاري التحليل..." : "تحليل الموقع"}
          </button>

          {message && <p className="text-red-400">{message}</p>}
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
