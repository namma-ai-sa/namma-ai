export default function PricingPage() {
  const plans = [
    {
      name: "🌱 Free",
      price: "0 ريال",
      popular: false,
      features: [
        "3 رسائل مجانية للتجربة",
        "الوصول الأساسي",
        "استكشاف المنصة",
      ],
      color: "#374151",
    },
    {
      name: "🚀 Pro",
      price: "49 ريال",
      popular: true,
      features: [
        "AI غير محدود",
        "CRM كامل",
        "إدارة المشاريع",
        "البائع الذكي",
        "وكيل واتساب",
      ],
      color: "#22c55e",
    },
    {
      name: "🏢 Business",
      price: "199 ريال",
      popular: false,
      features: [
        "فرق العمل",
        "صلاحيات متعددة",
        "تقارير متقدمة",
        "دعم أولوية",
      ],
      color: "#7c3aed",
    },
    {
      name: "👑 Enterprise",
      price: "تواصل معنا",
      popular: false,
      features: [
        "حلول مخصصة",
        "تكاملات خاصة",
        "دعم مخصص",
        "بنية للشركات الكبرى",
      ],
      color: "#f59e0b",
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
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "48px",
            marginBottom: "12px",
          }}
        >
          💳 خطط NAMMA AI
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#94a3b8",
            marginBottom: "50px",
          }}
        >
          اختر الخطة المناسبة لنمو أعمالك
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(280px,1fr))",
            gap: "24px",
          }}
        >
          {plans.map((plan, i) => (
            <div
              key={i}
              style={{
                background: "#111827",
                border: `2px solid ${plan.color}`,
                borderRadius: "24px",
                padding: "30px",
                position: "relative",
                boxShadow:
                  "0 20px 50px rgba(0,0,0,.35)",
              }}
            >
              {plan.popular && (
                <div
                  style={{
                    position: "absolute",
                    top: "-12px",
                    left: "20px",
                    background: "#22c55e",
                    color: "white",
                    padding: "6px 14px",
                    borderRadius: "999px",
                    fontSize: "12px",
                    fontWeight: "700",
                  }}
                >
                  الأكثر شعبية
                </div>
              )}

              <h2>{plan.name}</h2>

              <h3
                style={{
                  fontSize: "36px",
                  marginTop: "10px",
                  marginBottom: "20px",
                }}
              >
                {plan.price}
              </h3>

              <ul
                style={{
                  padding: 0,
                  listStyle: "none",
                }}
              >
                {plan.features.map(
                  (feature, index) => (
                    <li
                      key={index}
                      style={{
                        marginBottom: "12px",
                      }}
                    >
                      ✅ {feature}
                    </li>
                  )
                )}
              </ul>

              <button
                style={{
                  width: "100%",
                  marginTop: "20px",
                  padding: "14px",
                  borderRadius: "16px",
                  border: "none",
                  background: plan.color,
                  color: "white",
                  fontWeight: "700",
                  cursor: "pointer",
                }}
              >
                ابدأ الآن
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
