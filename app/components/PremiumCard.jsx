export default function PremiumCard({
  children,
  style = {}
}) {
  return (
    <div
      style={{
        background: "#111827",
        border:
          "1px solid rgba(255,255,255,.08)",
        borderRadius: "24px",
        boxShadow:
          "0 20px 50px rgba(0,0,0,.35)",
        padding: "24px",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
