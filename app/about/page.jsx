import Image from "next/image";
export default function AboutPage() {
  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "100px 24px",
        color: "#1E293B",
        lineHeight: "2",
      }}
    >
      <section
        style={{
          textAlign: "center",
          marginBottom: "80px",
        }}
      >
        <div style={{ marginBottom: "24px" }}>
          /namma-logo.png
        </div>
        <h1
          style={{
            fontSize: "56px",
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
            color: "#475569",
          }}
        >
          منصة أعمال عربية موحدة تجمع المبيعات والتسويق والذكاء الاصطناعي
          وإدارة العملاء والمشاريع والأتمتة داخل نظام واحد.
        </p>
      </section>

      <section style={{ marginBottom: "70px" }}>
        <h2>رؤيتنا</h2>

        <p>
          نؤمن أن الشركات لا ينبغي أن تعتمد على عشرات التطبيقات المختلفة
          لإدارة أعمالها اليومية. لهذا السبب يتم بناء NAMMA AI ليكون
          مركز قيادة موحد يجمع كل الأنظمة والبيانات والأدوات داخل منصة
          واحدة سهلة وقوية.
        </p>
      </section>

      <section style={{ marginBottom: "70px" }}>
        <h2>ماذا تقدم NAMMA AI؟</h2>

        <ul>
          <li>✅ إدارة العملاء CRM</li>
          <li>✅ البائع الذكي AI Seller</li>
          <li>✅ وكيل واتساب الذكي</li>
          <li>✅ إدارة المشاريع والفرق</li>
          <li>✅ التحليلات ولوحات التحكم</li>
          <li>✅ أتمتة العمليات والمهام</li>
          <li>✅ صناعة المحتوى والتسويق</li>
        </ul>
      </section>

      <section style={{ marginBottom: "70px" }}>
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

      <section style={{ marginBottom: "70px" }}>
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
            padding: "24px",
            borderRadius: "18px",
            marginTop: "24px",
            fontWeight: "700",
            fontSize: "20px",
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