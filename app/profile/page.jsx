export default function ProfilePage() {
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
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "800",
            marginBottom: "20px",
          }}
        >
          👤 الملف الشخصي
        </h1>

        <p style={{ color: "#94a3b8" }}>
          إدارة بيانات الحساب الشخصية.
        </p>
      </div>
    </main>
  );
}
