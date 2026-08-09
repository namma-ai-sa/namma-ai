"use client";

import { useRouter } from "next/navigation";

export default function Cards({ onSelect }) {
  const router = useRouter();

  const cards = [
    {
      icon: "📝",
      title: "مقال احترافي",
      prompt: "اكتب مقال احترافي عن:",
      path: "/tools/article",
    },
    {
      icon: "📈",
      title: "تحليل SEO",
      prompt: "أنشئ خطة SEO كاملة لـ:",
      path: "/tools/seo",
    },
    {
      icon: "📱",
      title: "محتوى سوشال",
      prompt: "أنشئ منشورات سوشال ميديا لـ:",
      path: "/tools/social",
    },
    {
      icon: "🎥",
      title: "أفكار فيديو",
      prompt: "أنشئ أفكار وسكربت فيديو عن:",
      path: "/tools/video",
    },
    {
      icon: "🎨",
      title: "تصميم وصور",
      prompt: "أنشئ فكرة تصميم وصورة عن:",
      path: "/tools/image",
    },
    {
      icon: "📊",
      title: "خطة تسويق",
      prompt: "أنشئ خطة تسويق كاملة لـ:",
      path: "/tools/plan",
    },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit,minmax(180px,1fr))",
        gap: "15px",
        marginBottom: "20px",
      }}
    >
      {cards.map((card, i) => (
        <div
          key={i}
          onClick={() => {
            if (onSelect) {
              onSelect(card.prompt);
            }

            setTimeout(() => {
              router.push(card.path);
            }, 200);
          }}
          style={{
            background: "#111827",
            border: "1px solid #374151",
            borderRadius: "16px",
            padding: "20px",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              fontSize: "30px",
              marginBottom: "10px",
            }}
          >
            {card.icon}
          </div>

          <div
            style={{
              color: "white",
              fontWeight: "bold",
            }}
          >
            {card.title}
          </div>
        </div>
      ))}
    </div>
  );
}
