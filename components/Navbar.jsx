export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        background: "#111827",
      }}
    >
      <h2>🚀 NAMMA AI</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <span>الأدوات</span>
        <span>المشاريع</span>
        <span>الأسعار</span>
        <span>عن المنصة</span>
        <span>تواصل معنا</span>
      </div>
    </nav>
  );
}