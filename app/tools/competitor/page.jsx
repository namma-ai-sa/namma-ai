"use client";

import { useState } from "react";

export default function CompetitorAnalyzePage() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [message, setMessage] = useState("");

  const analyzeCompetitor = async () => {
    if (!input) {
      setMessage("يرجى إدخال رابط المنافس أو وصفه");
      return;
    }

    setLoading(true);
    setMessage("");
    setResult("");

    try {
      const res = await fetch(`/api/competitor-analyze?input=${encodeURIComponent(input)}`);
      const data = await res.json();

      if (data.result) {
        setResult(data.result);
      } else {
        setMessage("لم يتم تحليل المنافس");
      }
    } catch (err) {
      setMessage("حدث خطأ أثناء التحليل");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-[#050509] text-white px-6 py-10">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-2xl font-semibold mb-6">تحليل المنافسين 🥇</h1>

        <div className="flex flex-col gap-4 mb-6">

          <textarea
            placeholder="أدخل رابط المنافس أو وصفه..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full p-3 rounded-lg bg-[#0b0b12] border border-gray-700 text-white h-32"
          />

          <button
            onClick={analyzeCompetitor}
            disabled={loading}
            className="p-3 rounded-lg bg-red-600 hover:bg-red-700 transition"
          >
            {loading ? "جاري التحليل..." : "تحليل المنافس"}
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
