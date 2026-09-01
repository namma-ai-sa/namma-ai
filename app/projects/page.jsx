"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    loadProjects();
  }, []);

  async function loadProjects() {
    try {
      const res = await fetch("/api/projects");
      const data = await res.json();

      if (data.success) {
        setProjects(data.projects || []);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const activeProjects = projects.filter(
    (p) => p.status === "active"
  ).length;

  const completedProjects = projects.filter(
    (p) => p.status === "completed"
  ).length;

  const filteredProjects = projects.filter((p) => {
    const matchesSearch =
      (p.project_name || "")
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesFilter =
      filter === "all"
        ? true
        : p.status === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <main className="min-h-screen bg-[#050509] text-white p-10">
      <div className="max-w-6xl mx-auto">

        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold">
              📁 مشاريعي
            </h1>
            <p className="text-gray-400 mt-2">
              إدارة وتتبع جميع مشاريعك من مكان واحد
            </p>
          </div>

        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">

          <input
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="ابحث عن مشروع..."
            className="flex-1 bg-[#0b0b12] border border-gray-800 rounded-2xl px-4 py-3"
          />

          <select
            value={filter}
            onChange={(e) =>
              setFilter(e.target.value)
            }
            className="bg-[#0b0b12] border border-gray-800 rounded-2xl px-4 py-3"
          >
            <option value="all">كل المشاريع</option>
            <option value="active">النشطة</option>
            <option value="completed">المكتملة</option>
          </select>

        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-8">

          <div className="bg-[#0b0b12] border border-gray-800 rounded-2xl p-5">
            <div className="text-3xl">📊</div>
            <div className="text-2xl font-bold mt-2">
              {projects.length}
            </div>
            <div className="text-gray-400">
              إجمالي المشاريع
            </div>
          </div>

          <div className="bg-[#0b0b12] border border-gray-800 rounded-2xl p-5">
            <div className="text-3xl">🟢</div>
            <div className="text-2xl font-bold mt-2">
              {activeProjects}
            </div>
            <div className="text-gray-400">
              مشاريع نشطة
            </div>
          </div>

          <div className="bg-[#0b0b12] border border-gray-800 rounded-2xl p-5">
            <div className="text-3xl">✅</div>
            <div className="text-2xl font-bold mt-2">
              {completedProjects}
            </div>
            <div className="text-gray-400">
              مشاريع مكتملة
            </div>
          </div>

        </div>

        {loading ? (
          <p className="text-gray-400">
            جاري تحميل المشاريع...
          </p>
        ) : projects.length === 0 ? (
          <div className="bg-[#0b0b12] border border-gray-800 rounded-2xl p-8 text-center">
            لا توجد مشاريع حالياً
          </div>
        ) : (
          <div className="grid gap-5">

            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-[#0b0b12] border border-gray-800 rounded-2xl p-6 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3">
                  📁 {project.project_name}
                </h3>

                <p className="text-gray-400 mb-4">
                  {project.last_task || "لا يوجد وصف"}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex-1 mr-4">
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-500"
                        style={{
                          width: `${project.progress || 0}%`
                        }}
                      />
                    </div>
                    <div className="text-sm text-gray-400 mt-2">
                      التقدم: {project.progress || 0}%
                    </div>
                  </div>

                  <span className="text-green-400">
                    {project.status === "active"
                      ? "🟢 نشط"
                      : project.status === "completed"
                      ? "✅ مكتمل"
                      : project.status}
                  </span>
                </div>
              </div>
            ))}

          </div>
        )}
      </div>
    </main>
  );
}
