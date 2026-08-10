"use client";

export default function AdminPage() {
  const metrics = [
    { title: "إجمالي المستخدمين", value: "2,184", icon: "👤" },
    { title: "العملاء الجدد", value: "164", icon: "🆕" },
    { title: "العملاء المهتمون", value: "61", icon: "🔥" },
    { title: "الصفقات المغلقة", value: "24", icon: "✅" },
    { title: "معدل الإغلاق", value: "31%", icon: "📈" },
    { title: "تحليلات الذكاء", value: "783", icon: "🤖" }
  ];

  return (
    <main className="container">
      <h1 style={{ marginBottom: "24px" }}>
        ⚙️ Admin Dashboard V5
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px"
        }}
      >
        {metrics.map((item) => (
          <div
            key={item.title}
            className="card"
          >
            <div
              style={{
                fontSize: "42px",
                marginBottom: "12px"
              }}
            >
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <div
              style={{
                marginTop: "12px",
                fontSize: "28px",
                fontWeight: "800",
                color: "#22c55e"
              }}
            >
              {item.value}
            </div>
          </div>
        ))}
      </div>

      <div
        className="card"
        style={{ marginTop: "24px" }}
      >
        <h2>📊 Platform Summary</h2>

        <p
          style={{
            marginTop: "12px",
            color: "#cbd5e1",
            lineHeight: "2"
          }}
        >
          المنصة تعمل بشكل مستقر مع نمو مستمر في العملاء
          واستخدام أدوات الذكاء الاصطناعي.
        </p>
      </div>
    </main>
  );
}
