"use client";

import { useState } from "react";

export default function IdeasGeneratorPage() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [message, setMessage] = useState("");

  const generateIdeas = async () => {
    if (!input) {
      setMessage("يرجى إدخال وصف الحساب أو المشروع أو المجال");
      return;
    }

    setLoading(true);
    setMessage("");
    setResult("");

    try {
      const res = await fetch(`/api/ideas-generator?input=${encodeURIComponent(input)}`);
      const data = await res.json();

      if (data.result) {
        setResult(data.result);
      } else {
        setMessage("لم يتم إنشاء الأفكار");
      }
    } catch (err) {
      setMessage("حدث خطأ أثناء إنشاء الأفكار");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-[#050509] text-white px-6 py-10">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-2xl font-semibold mb-6">مولّد الأفكار 💡</h1>

        <div className="flex flex-col gap-4 mb-6">

          <textarea
            placeholder="اكتب وصف الحساب أو المشروع أو المجال..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full p-3 rounded-lg bg-[#0b0b12] border border-gray-700 text-white h-32"
          />

          <button
            onClick={generateIdeas}
            disabled={loading}
            className="p-3 rounded-lg bg-yellow-600 hover:bg-yellow-700 transition"
          >
            {loading ? "جاري الإنشاء..." : "إنشاء أفكار"}
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
