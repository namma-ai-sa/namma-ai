"use client";

import React from "react";

const tools = [
  {
    key: "analyze",
    name: "تحليل المواقع",
    description: "حلل موقعك واكتشف نقاط القوة والضعف وفرص تحسين SEO.",
    href: "/tools/analyze",
  },
  {
    key: "article",
    name: "كتابة المقالات",
    description: "إنشاء مقالات عربية احترافية للأعمال والمحتوى التسويقي.",
    href: "/tools/article",
  },
  {
    key: "video",
    name: "أفكار وسكربتات الفيديو",
    description: "إنشاء سكربتات فيديو كاملة + أفكار Shorts و Reels.",
    href: "/tools/video",
  },
  {
    key: "seo",
    name: "خطط SEO",
    description: "بناء خطط SEO متكاملة بالعربية للكلمات المفتاحية والمحتوى.",
    href: "/tools/seo",
  },
  {
    key: "social",
    name: "محتوى السوشال ميديا",
    description: "منشورات جاهزة للنشر لكل المنصات مع هاشتاقات و CTA.",
    href: "/tools/social",
  },
  {
    key: "plan",
    name: "خطة محتوى 30 يوماً",
    description: "خطة عملية ومتنوعة للمحتوى لمدة شهر كامل.",
    href: "/tools/plan",
  },
  {
    key: "projects",
    name: "مشاريعي",
    description: "إدارة المشاريع، الحالة، التقدم، آخر مهمة، المهمة التالية.",
    href: "/projects",
  },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#050509] text-white">
      <div className="max-w-6xl mx-auto px-6 py-10">
        
        {/* Header */}
        <header className="mb-10 flex flex-col gap-3">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            نمّى Ai 🌱
          </h1>
          <p className="text-sm md:text-base text-gray-400 max-w-xl">
            منصة عربية ذكية لصناعة المحتوى، التحليل، وقيادة المشاريع
            باحترافية لأصحاب الأعمال وصناع المحتوى.
          </p>
        </header>

        {/* Tools Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <a
              key={tool.key}
              href={tool.href}
              className="group rounded-xl border border-gray-800 bg-gradient-to-br from-[#0b0b12] to-[#050509] p-5 flex flex-col justify-between hover:border-violet-500 hover:shadow-[0_0_25px_rgba(139,92,246,0.35)] transition-all duration-200"
            >
              <div className="flex flex-col gap-3">
                <h2 className="text-lg font-semibold group-hover:text-violet-300">
                  {tool.name}
                </h2>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {tool.description}
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                <span>اضغط للدخول إلى الأداة</span>
                <span className="text-violet-400 group-hover:text-violet-300">
                  →
                </span>
              </div>
            </a>
          ))}
        </section>
      </div>
    </main>
  );
}
