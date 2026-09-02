export default function BillingPage() {
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
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            marginBottom: "10px",
          }}
        >
          💳 الفوترة والاشتراك
        </h1>

        <p
          style={{
            color: "#94a3b8",
            marginBottom: "40px",
          }}
        >
          إدارة خطتك الحالية والترقية عند الحاجة.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(280px,1fr))",
            gap: "24px",
          }}
        >
          <div
            style={{
              background: "#111827",
              border: "1px solid rgba(255,255,255,.08)",
              borderRadius: "24px",
              padding: "24px",
            }}
          >
            <h2>🌱 الخطة الحالية</h2>

            <h3
              style={{
                fontSize: "34px",
                marginTop: "12px",
              }}
            >
              Free
            </h3>

            <p style={{ color: "#94a3b8" }}>
              الحساب يعمل بالخطة المجانية.
            </p>
          </div>

          <div
            style={{
              background: "#111827",
              border: "1px solid rgba(255,255,255,.08)",
              borderRadius: "24px",
              padding: "24px",
            }}
          >
            <h2>🚀 الترقية</h2>

            <p style={{ color: "#94a3b8" }}>
              الانتقال إلى Pro أو Business
              عند جاهزية الإطلاق.
            </p>

            <button
              style={{
                marginTop: "20px",
                width: "100%",
                padding: "14px",
                border: "none",
                borderRadius: "16px",
                background: "#22c55e",
                color: "white",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              عرض الخطط
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
