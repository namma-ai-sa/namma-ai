"use client";

export default function AdminPage() {
  const stats = [
    {
      title: "المستخدمون",
      value: "100+",
      icon: "👥",
      color: "#3b82f6",
    },
    {
      title: "المحادثات",
      value: "500+",
      icon: "💬",
      color: "#22c55e",
    },
    {
      title: "عملاء CRM",
      value: "50+",
      icon: "📊",
      color: "#f59e0b",
    },
    {
      title: "AI Seller",
      value: "نشط",
      icon: "🤖",
      color: "#8b5cf6",
    },
  ];

  return (
    <main
      className="container"
      style={{
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          marginBottom: "25px",
        }}
      >
        ⚡ لوحة تحكم NAMMA AI
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
        }}
      >
        {stats.map((item, i) => (
          <div
            key={i}
            className="card"
          >
            <div
              style={{
                fontSize: "36px",
                marginBottom: "10px",
              }}
            >
              {item.icon}
            </div>

            <div
              style={{
                color: "#94a3b8",
              }}
            >
              {item.title}
            </div>

            <div
              style={{
                color: item.color,
                fontSize: "30px",
                fontWeight: "700",
                marginTop: "10px",
              }}
            >
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
