export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "15px",
        padding: "20px",
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
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "16px",
          color: "#cbd5e1",
          fontSize: "15px",
        }}
      >
        <span>الأدوات</span>
        <span>المشاريع</span>
        <span>الأسعار</span>
        <span>عن المنصة</span>
      </div>
    </nav>
  );
}