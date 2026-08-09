export default function PricingPage() {
  const plans = [
    {
      name: "Free",
      price: "0 ريال",
      features: [
        "20 رسالة يومياً",
        "الوصول الأساسي للأدوات",
        "محادثات محدودة",
      ],
      color: "#374151",
    },
    {
      name: "Pro",
      price: "49 ريال",
      features: [
        "رسائل غير محدودة",
        "جميع أدوات NAMMA AI",
        "SEO + Articles + Video",
      ],
      color: "#2563eb",
    },
    {
      name: "Business",
      price: "199 ريال",
      features: [
        "فرق العمل",
        "CRM",
        "AI Seller",
        "دعم أولوية",
      ],
      color: "#7c3aed",
    },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#030712",
        color: "white",
        padding: "40px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        💳 خطط NAMMA AI
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(280px,1fr))",
          gap: "20px",
        }}
      >
        {plans.map((plan, i) => (
          <div
            key={i}
            style={{
              background: "#111827",
              border: `2px solid ${plan.color}`,
              borderRadius: "20px",
              padding: "25px",
            }}
          >
            <h2>{plan.name}</h2>

            <h3>{plan.price}</h3>

            <ul>
              {plan.features.map(
                (feature, index) => (
                  <li key={index}>
                    ✅ {feature}
                  </li>
                )
              )}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
