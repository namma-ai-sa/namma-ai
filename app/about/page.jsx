import Image from "next/image";
export default function AboutPage() {
  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "100px 24px",
        color: "#243457",
        lineHeight: "2",
      }}
    >
      <section
        style={{
          textAlign: "center",
          marginBottom: "35px",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "900",
            marginBottom: "24px",
          }}
        >
          عن NAMMA AI
        </h1>

        <p
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            fontSize: "24px",
            color: "#243457",
          }}
        >
          منصة أعمال عربية موحدة تجمع المبيعات والتسويق والذكاء الاصطناعي
          وإدارة العملاء والمشاريع والأتمتة داخل نظام واحد.
        </p>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2>رؤيتنا</h2>

        <p>
          نؤمن أن الشركات لا ينبغي أن تعتمد على عشرات التطبيقات المختلفة
          لإدارة أعمالها اليومية. لهذا السبب يتم بناء NAMMA AI ليكون
          مركز قيادة موحد يجمع كل الأنظمة والبيانات والأدوات داخل منصة
          واحدة سهلة وقوية.
        </p>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2>ماذا تقدم NAMMA AI؟</h2>

<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: "20px",
    marginTop: "24px",
  }}
>
  {[
    ["📊", "CRM", "إدارة العملاء والمتابعات"],
    ["🤖", "AI Seller", "تحليل فرص البيع"],
    ["📱", "WhatsApp", "إدارة المحادثات"],
    ["📁", "Projects", "إدارة المشاريع والفرق"],
    ["📈", "Analytics", "التحليلات ولوحات التحكم"],
    ["⚡", "Automation", "أتمتة المهام والعمليات"],
  ].map(([icon, title, text]) => (
    <div
      key={title}
      style={{
        background: "rgba(255,255,255,.75)",
        border: "1px solid rgba(36,52,87,.08)",
        borderRadius: "18px",
        padding: "20px",
        boxShadow: "0 10px 30px rgba(0,0,0,.05)",
      }}
    >
      <div style={{ fontSize: "32px", marginBottom: "10px" }}>
        {icon}
      </div>

      <h3
        style={{
          marginBottom: "8px",
          color: "#243457",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          color: "#334155",
          margin: 0,
        }}
      >
        {text}
      </p>
    </div>
  ))}
</div>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2>من يخدم NAMMA AI؟</h2>

        <p>
          تم تصميم NAMMA AI لمساعدة مختلف أنواع المستخدمين على إدارة أعمالهم ونموهم من مكان واحد.
        </p>

        <ul>
          <li>🏢 الشركات لإدارة العملاء والمبيعات والمشاريع.</li>
          <li>🚀 رواد الأعمال لتنظيم العمليات واتخاذ القرارات.</li>
          <li>🎨 صناع المحتوى للتخطيط والإدارة وتحليل الأداء.</li>
          <li>📈 فرق التسويق للحملات والمحتوى والمتابعة.</li>
          <li>💼 فرق المبيعات لإدارة العملاء والفرص والإيرادات.</li>
          <li>⚡ أتمتة الأعمال والمهام اليومية.</li>
        </ul>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2>كيف يمكن أن يساعدك NAMMA AI؟</h2>

        <p>
          هدفنا أن يستطيع صاحب الشركة الدخول إلى NAMMA AI وطلب أي مهمة
          بلغة طبيعية، لتقوم المنصة بتحليل البيانات وتنفيذ العمل وربط
          الأنظمة المختلفة تلقائياً.
        </p>

        <div
          style={{
            background: "rgba(255,255,255,.65)",
            border: "1px solid rgba(36,52,87,.12)",
            padding: "32px",
            borderRadius: "18px",
            marginTop: "24px",
            fontWeight: "700",
            fontSize: "22px",
          }}
        >
          "ساعدني على إدارة العملاء والمشاريع والمبيعات واقترح الخطوات التالية للنمو."
        </div>

        <p style={{ marginTop: "24px" }}>
          ليقوم NAMMA AI بإعداد الخطة والمحتوى والتحليلات وجدولة النشر
          ومتابعة النتائج من مكان واحد.
        </p>
      </section>

      <section>
        <h2>لماذا NAMMA AI؟</h2>

        <ul>
          <li>✅ منصة عربية</li>
          <li>✅ واجهة موحدة</li>
          <li>✅ ذكاء اصطناعي عملي</li>
          <li>✅ أتمتة متقدمة</li>
          <li>✅ قابلة للتوسع مع نمو الشركة</li>
          <li>✅ مصممة للشركات ورواد الأعمال</li>
        </ul>
      </section>
    </main>
  );
}