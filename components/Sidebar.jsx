import Link from "next/link";

export default function Sidebar() {
  const tools = [
    { name: "تحليل الفيديو", path: "/tools/video" },
    { name: "تحليل السوشال", path: "/tools/social" },
    { name: "تحليل المواقع", path: "/tools/website" },
    { name: "كتابة الإعلانات", path: "/tools/ad-generator" },
    { name: "تحليل المنافسين", path: "/tools/competitor" },
    { name: "خطة محتوى 30 يوم", path: "/tools/content-plan" },
    { name: "تحليل الجمهور", path: "/tools/audience" },
    { name: "مولّد الأفكار", path: "/tools/ideas" },
    { name: "مولّد الوصف", path: "/tools/description" },
    { name: "مولّد العناوين", path: "/tools/title-generator" },
    { name: "مولّد الهاشتاقات", path: "/tools/hashtags" },
    { name: "مولّد الكابتشن", path: "/tools/caption-generator" },
    { name: "تحليل المتجر الإلكتروني", path: "/tools/ecommerce" },
    { name: "أفكار المنتجات", path: "/tools/product-ideas" },
    { name: "تحليل الهوية البصرية", path: "/tools/brand-identity" },
  ];

  return (
    <aside className="w-64 min-h-screen bg-[#0b0b12] border-r border-gray-800 p-6">
      <h2 className="text-lg font-semibold mb-4">الأدوات</h2>

      <div className="flex flex-col gap-3">
        {tools.map((tool, i) => (
          <Link
            key={i}
            href={tool.path}
            className="text-gray-300 hover:text-white transition"
          >
            {tool.name}
          </Link>
        ))}
      </div>
    </aside>
  );
}
