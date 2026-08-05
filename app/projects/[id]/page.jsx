"use client";

import { useEffect, useState } from "react";

export default function ProjectPage({ params }) {
  const { id } = params;

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const loadProject = async () => {
    try {
      const res = await fetch(`/api/project?id=${id}`);
      const data = await res.json();
      setProject(data.project || null);
    } catch (err) {
      console.error("Error loading project:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadProject();
  }, []);

  const saveProject = async () => {
    setSaving(true);
    setMessage("");

    try {
      const res = await fetch("/api/save-project", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(project),
      });

      const data = await res.json();

      if (data.success) {
        setMessage("تم حفظ التعديلات بنجاح");
      } else {
        setMessage("حدث خطأ أثناء الحفظ");
      }
    } catch (err) {
      setMessage("حدث خطأ أثناء الاتصال بالخادم");
    }

    setSaving(false);
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-[#050509] text-white px-6 py-10">
        <p className="text-gray-400">جاري تحميل المشروع...</p>
      </main>
    );
  }

  if (!project) {
    return (
      <main className="min-h-screen bg-[#050509] text-white px-6 py-10">
        <p className="text-red-400">المشروع غير موجود</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050509] text-white px-6 py-10">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-3xl font-semibold mb-6">{project.title}</h1>

        <div className="flex flex-col gap-4 mb-6">

          <textarea
            value={project.description}
            onChange={(e) =>
              setProject({ ...project, description: e.target.value })
            }
            className="w-full p-3 rounded-lg bg-[#0b0b12] border border-gray-700 text-white h-32"
          />

          <input
            type="text"
            value={project.lastTask || ""}
            placeholder="آخر مهمة..."
            onChange={(e) =>
              setProject({ ...project, lastTask: e.target.value })
            }
            className="w-full p-3 rounded-lg bg-[#0b0b12] border border-gray-700 text-white"
          />

          <input
            type="text"
            value={project.nextTask || ""}
            placeholder="المهمة التالية..."
            onChange={(e) =>
              setProject({ ...project, nextTask: e.target.value })
            }
            className="w-full p-3 rounded-lg bg-[#0b0b12] border border-gray-700 text-white"
          />

          <select
            value={project.status || "in-progress"}
            onChange={(e) =>
              setProject({ ...project, status: e.target.value })
            }
            className="w-full p-3 rounded-lg bg-[#0b0b12] border border-gray-700 text-white"
          >
            <option value="in-progress">قيد التنفيذ</option>
            <option value="completed">مكتمل</option>
            <option value="paused">متوقف مؤقتًا</option>
          </select>

          <button
            onClick={saveProject}
            disabled={saving}
            className="p-3 rounded-lg bg-violet-600 hover:bg-violet-700 transition"
          >
            {saving ? "جاري الحفظ..." : "حفظ التعديلات"}
          </button>

          {message && (
            <p className="text-green-400 mt-2">{message}</p>
          )}
        </div>
      </div>
    </main>
  );
}
