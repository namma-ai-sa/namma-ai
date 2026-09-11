export default function IntegrationsPage() {
  const integrations = [
    "LinkedIn",
    "Microsoft 365",
    "Google Workspace",
    "WhatsApp",
    "Telegram",
    "Slack",
    "Stripe",
    "OpenAI",
  ];

  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "80px 24px",
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          fontWeight: "900",
          color: "#243457",
          marginBottom: "16px",
        }}
      >
        Integrations Hub
      </h1>

      <p
        style={{
          color: "#64748B",
          fontSize: "20px",
          marginBottom: "40px",
        }}
      >
        اربط NAMMA AI مع الأدوات والتطبيقات التي تستخدمها يومياً.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
        }}
      >
        {integrations.map((item) => (
          <div
            key={item}
            style={{
              background: "rgba(255,255,255,.75)",
              border: "1px solid rgba(36,52,87,.08)",
              borderRadius: "18px",
              padding: "24px",
              boxShadow: "0 10px 30px rgba(0,0,0,.05)",
            }}
          >
            <h3>{item}</h3>

            <p style={{ color: "#64748B" }}>
              التكامل قيد التطوير.
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
