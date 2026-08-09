"use client";

export default function Cards() {
  const cards = [
    { icon: "📝", title: "مقال احترافي" },
    { icon: "📈", title: "تحليل SEO" },
    { icon: "📱", title: "محتوى سوشال" },
    { icon: "🎥", title: "أفكار فيديو" },
    { icon: "🎨", title: "تصميم وصور" },
    { icon: "📊", title: "خطة تسويق" },
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
