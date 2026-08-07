export default async function AIPage({ searchParams }) {
  const question = searchParams?.q || "";

  return (
    <main
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "40px 20px",
        color: "white",
      }}
    >
      <h1
        style={{
          marginBottom: "20px",
        }}
      >
        🌱 نمّى AI
      </h1>

      <div
        style={{
          background: "#111827",
          borderRadius: "20px",
          padding: "30px",
          minHeight: "300px",
        }}
      >
        <h2>نتيجة الطلب</h2>

        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            borderRadius: "12px",
            background: "#1f2937",
          }}
        >
          <strong>سؤال المستخدم:</strong>
          <p>{question || "لم يتم إدخال طلب بعد"}</p>
        </div>

        <div
          style={{
            marginTop: "20px",
            color: "#94a3b8",
          }}
        >
          سيتم ربط الذكاء الاصطناعي هنا في الخطوة التالية.
        </div>
      </div>
    </main>
  );
}