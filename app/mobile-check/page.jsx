export default function MobileCheck() {
  return (
    <main
      className="container"
      style={{
        paddingTop:"40px"
      }}
    >
      <h1>
        📱 Mobile Responsive Check
      </h1>

      <div
        className="mobile-grid"
        style={{
          display:"grid",
          gridTemplateColumns:
            "repeat(3,1fr)",
          gap:"20px",
          marginTop:"20px"
        }}
      >
        <div className="card">
          CRM
        </div>

        <div className="card">
          AI Seller
        </div>

        <div className="card">
          WhatsApp
        </div>
      </div>
    </main>
  );
}
