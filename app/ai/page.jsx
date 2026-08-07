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
          background: "#111827",
          borderRadius: "20px",
          padding: "30px",
          minHeight: "300px",
          marginTop: "20px",
        }}
      >
        <h2>نتيجة الطلب</h2>

        <div
          style={{
            background: "#1f2937",
            padding: "15px",
            borderRadius: "12px",
            marginTop: "20px",
          }}
        >
          <strong>سؤال المستخدم:</strong>

          <p>{question}</p>
        </div>

        <div
          style={{
            background: "#0f172a",
            padding: "20px",
            borderRadius: "12px",
            marginTop: "20px",
            whiteSpace: "pre-wrap",
            lineHeight: "1.8",
          }}
        >
          <strong>نتيجة نمّى AI:</strong>

          <p>
            {result ||
              "جاري إنشاء المحتوى..."}
          </p>
        </div>
      </div>
    </main>
  );
}