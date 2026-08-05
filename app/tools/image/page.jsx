"use client";

import { useState } from "react";

export default function ImageToolPage() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [message, setMessage] = useState("");

  const generateImage = async () => {
    if (!prompt) {
      setMessage("يرجى كتابة وصف الصورة");
      return;
    }

    setLoading(true);
    setMessage("");
    setImageUrl("");

    try {
      const res = await fetch(`/api/image?prompt=${encodeURIComponent(prompt)}`);
      const data = await res.json();

      if (data.url) {
        setImageUrl(data.url);
      } else {
        setMessage("لم يتم إنشاء الصورة");
      }
    } catch (err) {
      setMessage("حدث خطأ أثناء إنشاء الصورة");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-[#050509] text-white px-6 py-10">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-2xl font-semibold mb-6">توليد الصور 🖼️</h1>

        <div className="flex flex-col gap-4 mb-6">

          <textarea
            placeholder="اكتب وصف الصورة التي تريد توليدها..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full p-3 rounded-lg bg-[#0b0b12] border border-gray-700 text-white h-32"
          />

          <button
            onClick={generateImage}
            disabled={loading}
            className="p-3 rounded-lg bg-violet-600 hover:bg-violet-700 transition"
          >
            {loading ? "جاري توليد الصورة..." : "توليد الصورة"}
          </button>

          {message && <p className="text-red-400">{message}</p>}
        </div>

        {imageUrl && (
          <div className="mt-6">
            <img
              src={imageUrl}
              alt="Generated"
              className="rounded-xl border border-gray-800"
            />
          </div>
        )}
      </div>
    </main>
  );
}
