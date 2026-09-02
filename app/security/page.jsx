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
            background: "#111827",
            border: "1px solid rgba(255,255,255,.08)",
            borderRadius: "24px",
            padding: "24px",
            marginBottom: "24px",
            boxShadow:
              "0 20px 50px rgba(0,0,0,.35)"
          }}
        >
          <h2>🖥️ الأجهزة الموثوقة</h2>

          <p>✅ Current Device</p>
          <p>✅ Browser Session Active</p>
          <p>⚠️ Passkeys غير مفعلة بعد</p>
        </div>

        <div
          style={{
            background: "#111827",
            border: "1px solid rgba(255,255,255,.08)",
            borderRadius: "24px",
              boxShadow:
                "0 20px 50px rgba(0,0,0,.35)",
              transition:
                "all .25s ease",
            padding: "24px",
            marginBottom: "24px",
          }}
        >
          <h2>🛡️ فحص الأمان</h2>

          <p>✅ كلمة المرور مفعلة</p>
          <p>✅ الحساب نشط</p>
          <p>⚠️ المصادقة الثنائية غير مفعلة</p>
          <p>⚠️ Passkeys غير مفعلة</p>
        </div>

        <div
          style={{
            background: "#111827",
            border: "1px solid rgba(255,255,255,.08)",
            borderRadius: "24px",
              boxShadow:
                "0 20px 50px rgba(0,0,0,.35)",
              transition:
                "all .25s ease",
            padding: "24px",
            marginBottom: "24px",
          }}
        >
          <h2>💡 توصيات الأمان</h2>

          <p>• تفعيل المصادقة الثنائية</p>
          <p>• تفعيل Passkeys</p>
          <p>• مراجعة الجلسات بشكل دوري</p>
        </div>

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
              boxShadow:
                "0 20px 50px rgba(0,0,0,.35)",
              transition:
                "all .25s ease",
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
              boxShadow:
                "0 20px 50px rgba(0,0,0,.35)",
              transition:
                "all .25s ease",
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
              boxShadow:
                "0 20px 50px rgba(0,0,0,.35)",
              transition:
                "all .25s ease",
              padding: "24px",
            }}
          >
            <h2>👆 Passkeys & Face ID</h2>
            <p style={{ color: "#94a3b8" }}>
              جاهزة للمرحلة القادمة من NAMMA AI
            </p>
          </div>

          <div
            style={{
              background: "#111827",
              border: "1px solid rgba(255,255,255,.08)",
              borderRadius: "24px",
              boxShadow:
                "0 20px 50px rgba(0,0,0,.35)",
              transition:
                "all .25s ease",
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
