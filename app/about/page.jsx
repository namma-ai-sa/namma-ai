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
          marginBottom: "80px",
        }}
      >
        /namma-logo.png

        <h1
          style={{
            fontSize: "64px",
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
        <h2>التكاملات القادمة</h2>

        <p>
          نعمل على تحويل NAMMA AI إلى منصة أعمال متكاملة تستطيع التواصل
          مع أشهر الأنظمة والخدمات المستخدمة داخل الشركات.
        </p>

        <ul>
          <li>🚀 LinkedIn لإدارة المحتوى والنشر والتحليلات</li>
          <li>🚀 Microsoft 365 و Teams و Outlook</li>
          <li>🚀 Google Workspace و Gmail و Drive</li>
          <li>🚀 Telegram و Slack</li>
          <li>🚀 Stripe والفوترة والاشتراكات</li>
          <li>🚀 أدوات الذكاء الاصطناعي والأتمتة</li>
        </ul>
      </section>

      <section style={{ marginBottom: "70px" }}>
        <h2>مستقبل المنصة</h2>

        <p>
          هدفنا أن يستطيع صاحب الشركة الدخول إلى NAMMA AI وطلب أي مهمة
          بلغة طبيعية، لتقوم المنصة بتحليل البيانات وتنفيذ العمل وربط
          الأنظمة المختلفة تلقائياً.
        </p>

        <div
          style={{
            background: "#F8F7F4",
            border: "1px solid rgba(36,52,87,.12)",
            padding: "24px",
            borderRadius: "18px",
            marginTop: "24px",
            fontWeight: "700",
            fontSize: "20px",
          }}
        >
          "أنشئ خطة محتوى 30 يوم، جهّز المنشورات، وجدول النشر على LinkedIn."
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