"use client";

export default function DashboardPage() {
  const stats = [
    { title: "إجمالي العملاء", value: "1,248", icon: "👥" },
    { title: "العملاء المهتمون", value: "328", icon: "🔥" },
    { title: "المتابعات", value: "89", icon: "📞" },
    { title: "معدل الإغلاق", value: "27%", icon: "📈" }
  ];

  return (
    <main className="container">
      <h1
        style={{
          marginBottom: "24px"
        }}
      >
        ⚡ Dashboard V4
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(240px,1fr))",
          gap: "20px"
        }}
      >
        {stats.map((item) => (
          <div
            key={item.title}
            className="card"
          >
            <div
              style={{
                fontSize: "42px",
                marginBottom: "10px"
              }}
            >
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                marginTop: "10px",
                color: "#22c55e"
              }}
            >
              {item.value}
            </p>
          </div>
        ))}
      </div>

      <div
        className="card"
        style={{
          marginTop: "24px"
        }}
      >
        <h2>🤖 AI Insights</h2>

        <p
          style={{
            marginTop: "12px",
            lineHeight: "2",
            color: "#cbd5e1"
          }}
        >
          العملاء ذوو الاحتمالية الأعلى للإغلاق يجب
          متابعتهم خلال 24 ساعة القادمة.
        </p>
      </div>
    </main>
  );
}
