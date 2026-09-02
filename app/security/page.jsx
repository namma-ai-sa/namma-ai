import PremiumCard from "../components/PremiumCard";
import PremiumButton from "../components/PremiumButton";
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
            background:"#111827",
            border:"1px solid rgba(255,255,255,.08)",
            borderRadius:"24px",
            padding:"24px",
            marginBottom:"24px",
            boxShadow:"0 20px 50px rgba(0,0,0,.35)"
          }}
        >
          <h2>🛡 Security Score</h2>

          <div
            style={{
              fontSize:"56px",
              fontWeight:"800",
              color:"#22c55e",
              textShadow:"0 0 24px rgba(34,197,94,.4)"
            }}
          >
            85/100
          </div>

          <p style={{color:"#94a3b8"}}>
            الحماية جيدة جداً ويمكن رفعها بتفعيل Passkeys مستقبلاً.
          </p>
        </div>

<div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        
        <div
          style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
            gap:"20px",
            marginBottom:"24px"
          }}
        >
          <div style={{
            background:"#111827",
            border:"1px solid rgba(255,255,255,.08)",
            borderRadius:"24px",
            padding:"20px"
          }}>
            <h2>🔑</h2>
            <h3>Passkeys</h3>
            <p>Pending</p>
          </div>

          <div style={{
            background:"#111827",
            border:"1px solid rgba(255,255,255,.08)",
            borderRadius:"24px",
            padding:"20px"
          }}>
            <h2>👆</h2>
            <h3>Face ID</h3>
            <p>Ready</p>
          </div>

          <div style={{
            background:"#111827",
            border:"1px solid rgba(255,255,255,.08)",
            borderRadius:"24px",
            padding:"20px"
          }}>
            <h2>🖐</h2>
            <h3>Fingerprint</h3>
            <p>Ready</p>
          </div>

          <div style={{
            background:"#111827",
            border:"1px solid rgba(255,255,255,.08)",
            borderRadius:"24px",
            padding:"20px"
          }}>
            <h2>📱</h2>
            <h3>Sessions</h3>
            <p>1 Active</p>
          </div>
        </div>

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



        
        
        <PremiumCard
          style={{
            marginBottom: "24px"
          }}
        >
          <h2>🛡️ مستوى الأمان</h2>

          <div
            style={{
              fontSize: "42px",
              fontWeight: "800",
              color: "#22c55e",
              textShadow:
                "0 0 20px rgba(34,197,94,.35)"
            }}
          >
            Advanced
          </div>

          <p style={{ color: "#94a3b8" }}>
            الحساب محمي بكلمة مرور مشفرة وجلسات مراقبة.
          </p>
        </PremiumCard>

<PremiumCard
          style={{
            marginBottom: "24px"
          }}
        >
          <h2>📱 الجلسات النشطة</h2>

          <p>🟢 Current Browser Session</p>
          <p>💻 Desktop Session Active</p>

          <PremiumButton style={{ marginTop: "16px", background: "#ef4444" }}>
            تسجيل خروج جميع الأجهزة
          </PremiumButton>
        </PremiumCard>

<PremiumCard
          style={{
            marginBottom: "24px"
          }}
        >
          <h2>🔐 Passkeys & Biometrics</h2>

          <p>👆 Face ID: قريباً</p>
          <p>🖐 Fingerprint: قريباً</p>
          <p>🔑 Passkeys: قيد التجهيز</p>

          <PremiumButton style={{ marginTop: "16px" }}>
            Enable Passkey
          </PremiumButton>
        </PremiumCard>

        <PremiumCard
          style={{
            marginBottom: "24px"
          }}
        >
          <h2>🖥️ الأجهزة الموثوقة</h2>

          <p>✅ Current Device</p>
          <p>✅ Browser Session Active</p>
          <p>⚠️ Passkeys غير مفعلة بعد</p>
        </PremiumCard>

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
