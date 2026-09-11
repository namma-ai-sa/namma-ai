export default function IntegrationsPage() {
  const integrations = [
    {
      icon: "💼",
      name: "Microsoft 365",
      description: "Teams, Outlook, OneDrive, Calendar",
    },
    {
      icon: "📧",
      name: "Google Workspace",
      description: "Gmail, Drive, Meet, Calendar",
    },
    {
      icon: "💬",
      name: "WhatsApp",
      description: "إدارة المحادثات والعملاء",
    },
    {
      icon: "🚀",
      name: "LinkedIn",
      description: "المحتوى والتحليلات والنشر",
    },
    {
      icon: "📨",
      name: "Telegram",
      description: "تنبيهات وأتمتة ذكية",
    },
    {
      icon: "🤝",
      name: "Slack",
      description: "تعاون الفرق والإشعارات",
    },
    {
      icon: "💳",
      name: "Stripe",
      description: "الاشتراكات والفوترة",
    },
    {
      icon: "🤖",
      name: "OpenAI",
      description: "قدرات الذكاء الاصطناعي",
    },
  ];

  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "80px 24px",
        color: "#243457",
      }}
    >
      <section
        style={{
          textAlign: "center",
          marginBottom: "60px",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "900",
            marginBottom: "16px",
          }}
        >
          مركز التكاملات
        </h1>

        <p
          style={{
            maxWidth: "750px",
            margin: "0 auto",
            fontSize: "20px",
            color: "#64748B",
          }}
        >
          اربط NAMMA AI بأدواتك المفضلة واجمع العملاء
          والمشاريع والتسويق والمبيعات داخل نظام موحد.
        </p>
      </section>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
          gap: "20px",
        }}
      >
        {integrations.map((item) => (
          <div
            key={item.name}
            style={{
              background: "rgba(255,255,255,.75)",
              border: "1px solid rgba(36,52,87,.08)",
              borderRadius: "20px",
              padding: "24px",
              boxShadow: "0 10px 30px rgba(0,0,0,.05)",
            }}
          >
            <div
              style={{
                fontSize: "36px",
                marginBottom: "12px",
              }}
            >
              {item.icon}
            </div>

            <h3
              style={{
                marginBottom: "10px",
              }}
            >
              {item.name}
            </h3>

            <p
              style={{
                color: "#64748B",
              }}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <section
        style={{
          marginTop: "60px",
          background: "rgba(255,255,255,.7)",
          border: "1px solid rgba(36,52,87,.08)",
          borderRadius: "24px",
          padding: "32px",
          textAlign: "center",
        }}
      >
        <h2>رؤية NAMMA AI</h2>

        <p
          style={{
            color: "#64748B",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          الهدف هو أن تعمل جميع تطبيقات أعمالك معاً من مكان واحد،
          بحيث تستطيع إدارة العملاء والمشاريع والتسويق والمبيعات
          والتحليلات والأتمتة دون الحاجة للتنقل بين عشرات الأدوات المختلفة.
        </p>
      </section>
    </main>
  );
}