export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        background: "#0b1220",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <h2
        style={{
          margin: 0,
          color: "#60a5fa",
          fontSize: "28px",
        }}
      >
        🌱 نمّى AI
      </h2>

      <div
        style={{
          display: "flex",
          gap: "24px",
          color: "#cbd5e1",
        }}
      >
        <span>الأدوات</span>
        <span>الأسعار</span>
        <span>عن المنصة</span>
        <span>تواصل معنا</span>
      </div>
    </nav>
  );
}