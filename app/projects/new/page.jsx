"use client";

import { useState } from "react";

export default function NewProjectPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const createProject = async () => {
    if (!title) {
      setMessage("يرجى إدخال اسم المشروع");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/project", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          description,
        }),
      });

      const data = await res.json();

      if (data.success) {
        window.location.href = "/projects"; // رجوع لقائمة المشاريع
      } else {
        setMessage("حدث خطأ أثناء إنشاء المشروع");
      }
    } catch (err) {
      setMessage("حدث خطأ أثناء الاتصال بالخادم");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-[#050509] text-white px-6 py-10">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-3xl font-semibold mb-6">إنشاء مشروع جديد 📁</h1>

        <div className="flex flex-col gap-4 mb-6">

          <input
            type="text"
            placeholder="اسم المشروع..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 rounded-lg bg-[#0b0b12] border border-gray-700 text-white"
          />

          <textarea
            placeholder="وصف المشروع (اختياري)..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 rounded-lg bg-[#0b0b12] border border-gray-700 text-white h-32"
          />

          <button
            onClick={createProject}
            disabled={loading}
            className="p-3 rounded-lg bg-violet-600 hover:bg-violet-700 transition"
          >
            {loading ? "جاري الإنشاء..." : "إنشاء المشروع"}
          </button>

          {message && (
            <p className="text-red-400 mt-2">{message}</p>
          )}
        </div>
      </div>
    </main>
  );
}
