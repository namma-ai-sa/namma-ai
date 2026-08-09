"use client";

export default function Cards({ onSelect }) {
  const cards = [
    {
      icon: "📝",
      title: "مقال احترافي",
      prompt: "اكتب مقال احترافي عن:",
    },
    {
      icon: "📈",
      title: "تحليل SEO",
      prompt: "أنشئ خطة SEO كاملة لـ:",
    },
    {
      icon: "📱",
      title: "محتوى سوشال",
      prompt: "أنشئ منشورات سوشال ميديا لـ:",
    },
    {
      icon: "🎥",
      title: "أفكار فيديو",
      prompt: "أنشئ أفكار وسكربت فيديو عن:",
    },
    {
      icon: "🎨",
      title: "تصميم وصور",
      prompt: "أنشئ فكرة تصميم وصورة عن:",
    },
    {
      icon: "📊",
      title: "خطة تسويق",
      prompt: "أنشئ خطة تسويق كاملة لـ:",
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
          onClick={() => onSelect(card.prompt)}
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
