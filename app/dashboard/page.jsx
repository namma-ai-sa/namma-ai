"use client";

import PremiumCard from "../components/PremiumCard";

export default function DashboardPage() {
  const stats = [
    {
      title: "العملاء",
      value: "1,248",
      icon: "👥",
      color: "#22c55e",
            textShadow:
              "0 0 20px rgba(34,197,94,.45)"
    },
    {
      title: "الفرص الساخنة",
      value: "328",
      icon: "🔥",
      color: "#f97316"
    },
    {
      title: "المتابعات",
      value: "89",
      icon: "📅",
      color: "#3b82f6"
    },
    {
      title: "معدل الإغلاق",
      value: "27%",
      icon: "📈",
      color: "#a855f7"
    },
    {
      title: "الإيرادات",
      value: "245,000 ر.س",
      icon: "💰",
      color: "#eab308"
    }
  ];

  return (
    <main
      style={{
        padding: "32px",
        color: "white"
      }}
    >
      <h1
        style={{
          fontSize: "36px",
          fontWeight: "800",
          marginBottom: "30px"
        }}
      >
        ⚡ Dashboard Premium
      </h1>


      <PremiumCard
        style={{
          marginBottom: "24px"
        }}
      >
        <h2>🛰️ حالة منصة NAMMA AI</h2>

        <p>✅ CRM جاهز</p>
        <p>✅ Projects جاهزة</p>
        <p>✅ Security مفعلة</p>
        <p>✅ Billing جاهز</p>
        <p>✅ AI Seller جاهز</p>
      </PremiumCard>

      <PremiumCard
        style={{
          marginBottom: "24px"
        }}
      >
        <h2>🚀 NAMMA Score</h2>

        <div
          style={{
            fontSize: "52px",
            fontWeight: "800",
            color: "#22c55e"
          }}
        >
          92%
        </div>

        <p style={{ color: "#94a3b8" }}>
          أداء المنصة ممتاز ويقترب من الجاهزية الكاملة.
        </p>
      </PremiumCard>

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
            style={{
              background: "#111827",
              border: "1px solid rgba(255,255,255,.08)",
              borderRadius: "24px",
              padding: "24px",
              transition: "all .25s ease",
              boxShadow:
                "0 20px 50px rgba(0,0,0,.20)"
            }}
          >
            <div
              style={{
                fontSize: "42px"
              }}
            >
              {item.icon}
            </div>

            <h3
              style={{
                marginTop: "12px"
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                fontSize: "30px",
                fontWeight: "800",
                color: item.color
              }}
            >
              {item.value}
            </p>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(350px,1fr))",
          gap: "20px",
          marginTop: "30px"
        }}
      >
        <div
          style={{
            background: "#111827",
            borderRadius: "18px",
            padding: "24px"
          }}
        >
          <h2>📊 ملخص CRM</h2>

          <ul
            style={{
              marginTop: "16px",
              lineHeight: "2"
            }}
          >
            <li>عميل جديد: شركة الريادة</li>
            <li>عميل جديد: مؤسسة النخبة</li>
            <li>صفقة مفتوحة: 85,000 ر.س</li>
            <li>موعد متابعة غداً 10:00 صباحاً</li>
          </ul>
        </div>

        <div
          style={{
            background: "#111827",
            borderRadius: "18px",
            padding: "24px"
          }}
        >
          <h2>🤖 AI Insights</h2>

          <ul
            style={{
              marginTop: "16px",
              lineHeight: "2"
            }}
          >
            <li>أفضل فرصة إغلاق خلال 24 ساعة.</li>
            <li>يوجد 18 عميلاً يحتاج متابعة.</li>
            <li>نسبة التحويل ارتفعت 12% هذا الأسبوع.</li>
            <li>واتساب يحقق أعلى استجابة.</li>
          </ul>
        </div>
      </div>

      <div
        style={{
          background: "#111827",
          borderRadius: "18px",
          padding: "24px",
          marginTop: "30px"
        }}
      >
        <h2>⚡ إجراءات سريعة</h2>

        <ul
          style={{
            marginTop: "16px",
            lineHeight: "2"
          }}
        >
          <li>➕ إنشاء مشروع جديد</li>
          <li>👥 فتح CRM</li>
          <li>🤖 تشغيل البائع الذكي</li>
          <li>📱 فتح وكيل واتساب</li>
        </ul>
      </div>

      <div
        style={{
          background: "#111827",
          borderRadius: "18px",
          padding: "24px",
          marginTop: "20px"
        }}
      >
        <h2>📋 آخر النشاطات</h2>

        <ul
          style={{
            marginTop: "16px",
            lineHeight: "2"
          }}
        >
          <li>تم إنشاء مشروع جديد.</li>
          <li>تم تحديث حالة مشروع.</li>
          <li>تم فتح CRM.</li>
          <li>تم استخدام البائع الذكي.</li>
        </ul>
      </div>

    </main>
  );
}