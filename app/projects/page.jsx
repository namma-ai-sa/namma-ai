"use client";

import { useEffect, useState } from "react";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadProjects = async () => {
    try {
      const res = await fetch("/api/projects");
      const data = await res.json();
      setProjects(data.projects || []);
    } catch (err) {
      console.error("Error loading projects:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadProjects();
  }, []);

  return (
    <main className="min-h-screen bg-[#050509] text-white px-6 py-10">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl font-semibold mb-6">مشاريعي 📁</h1>

        <a
          href="/projects/new"
          className="inline-block mb-6 p-3 rounded-lg bg-violet-600 hover:bg-violet-700 transition"
        >
          + إنشاء مشروع جديد
        </a>

        {loading ? (
          <p className="text-gray-400">جاري تحميل المشاريع...</p>
        ) : projects.length === 0 ? (
          <p className="text-gray-400">لا يوجد مشاريع حتى الآن.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <a
                key={project.id}
                href={`/projects/${project.id}`}
                className="group rounded-xl border border-gray-800 bg-[#0b0b12] p-5 hover:border-violet-500 transition"
              >
                <h2 className="text-lg font-semibold group-hover:text-violet-300">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-400 mt-2">
                  {project.description || "بدون وصف"}
                </p>
              </a>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
