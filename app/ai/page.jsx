import Chat from "./chat";

export default async function AIPage(props) {
  const searchParams = await props.searchParams;

  const question =
    searchParams?.q || "لم يتم إدخال طلب بعد";

  let result = "";

  if (
    question &&
    question !== "لم يتم إدخال طلب بعد"
  ) {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SITE_URL}/api/article?topic=${encodeURIComponent(question)}`,
        {
          cache: "no-store",
        }
      );

      const data = await response.json();

      result =
        data?.result ||
        "تعذر الحصول على نتيجة";
    } catch {
      result = "حدث خطأ أثناء إنشاء المحتوى";
    }
  }

  return (
    <main
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "40px 20px",
        color: "white",
      }}
    >
      <h1>🌱 نمّى AI</h1>

      <div
        style={{
          marginTop: "30px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <div
          style={{
            background: "#1f2937",
            padding: "20px",
            borderRadius: "16px",
          }}
        >
          <strong>👤 أنت</strong>

          <p style={{ marginTop: "10px" }}>
            {question}
          </p>
        </div>

        <div
          style={{
            background: "#111827",
            padding: "20px",
            borderRadius: "16px",
            whiteSpace: "pre-wrap",
            lineHeight: "1.8",
          }}
        >
          <strong>🤖 نمّى AI</strong>

          <p style={{ marginTop: "10px" }}>
            {result}
          </p>
        </div>

        <Chat />
      </div>
    </main>
  );
}
