"use client";

import { useState } from "react";

export default function EcommerceAnalyzePage() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [message, setMessage] = useState("");

  const analyzeStore = async () => {
    if (!input) {
      setMessage("يرجى إدخال رابط المتجر أو وصفه");
      return;
    }

    setLoading(true);
    setMessage("");
    setResult("");

    try {
      const res = await fetch(`/api/ecommerce-analyze?input=${encodeURIComponent(input)}`);
      const data = await res.json();

      if (data.result) {
        setResult(data.result);
      } else {
        setMessage("لم يتم تحليل المتجر");
      }
    } catch (err) {
      setMessage("حدث خطأ أثناء التحليل");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-[#050509] text-white px-6 py-10">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-2xl font-semibold mb-6">تحليل المتجر الإلكتروني 🛒</h1>

        <div className="flex flex-col gap-4 mb-6">

          <textarea
            placeholder="اكتب رابط المتجر أو وصفه..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full p-3 rounded-lg bg-[#0b0b12] border border-gray-700 text-white h-32"
          />

          <button
            onClick={analyzeStore}
            disabled={loading}
            className="p-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition"
          >
            {loading ? "جاري التحليل..." : "تحليل المتجر"}
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
