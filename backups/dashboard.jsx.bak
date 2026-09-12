"use client";

export default function Dashboard() {
  const stats = [
    {
      title: "المحادثات",
      value: "∞",
      icon: "💬",
    },
    {
      title: "الأدوات",
      value: "15",
      icon: "🛠️",
    },
    {
      title: "المشاريع",
      value: "∞",
      icon: "📁",
    },
  ];

  return (
    <div
      style={{
        marginBottom: "20px",
      }}
    >
      <div
        style={{
          marginBottom: "25px",
        }}
      >
        <h2
          style={{
            color: "white",
            fontSize: "28px",
            marginBottom: "10px",
          }}
        >
          🌱 أهلاً بك في NAMMA AI
        </h2>

        <p
          style={{
            color: "#94a3b8",
          }}
        >
          ماذا تريد أن تنجز اليوم؟
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(180px,1fr))",
          gap: "15px",
        }}
      >
        {stats.map((item, i) => (
          <div
            key={i}
            style={{
              background: "#111827",
              border: "1px solid #374151",
              borderRadius: "16px",
              padding: "20px",
            }}
          >
            <div
              style={{
                fontSize: "26px",
                marginBottom: "10px",
              }}
            >
              {item.icon}
            </div>

            <div
              style={{
                color: "#94a3b8",
                fontSize: "14px",
              }}
            >
              {item.title}
            </div>

            <div
              style={{
                color: "white",
                fontSize: "26px",
                fontWeight: "bold",
              }}
            >
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
