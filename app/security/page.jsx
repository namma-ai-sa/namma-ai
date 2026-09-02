export default function SecurityPage() {
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
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            marginBottom: "12px",
          }}
        >
          🔐 الأمان والحساب
        </h1>

        <p
          style={{
            color: "#94a3b8",
            marginBottom: "40px",
          }}
        >
          إدارة إعدادات الأمان والخصوصية الخاصة بحسابك.
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
            <h2>🔑 كلمة المرور</h2>
            <p style={{ color: "#94a3b8" }}>
              آخر تحديث: غير متوفر حالياً
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
            <h2>📱 المصادقة الثنائية</h2>
            <p style={{ color: "#94a3b8" }}>
              قريباً في NAMMA AI
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
            <h2>👆 Passkeys</h2>
            <p style={{ color: "#94a3b8" }}>
              جاهزة للتطوير مستقبلاً
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
            <h2>🖥️ الجلسات النشطة</h2>
            <p style={{ color: "#94a3b8" }}>
              سيتم عرض الأجهزة المسجلة هنا
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
