import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="px-6 py-20 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">عن المنصة</h1>

        <p className="text-gray-400 leading-8 mb-6">
          منصة AI Marketing Suite هي منصة متكاملة تضم 15 أداة قوية تساعدك في تحليل المحتوى،
          كتابة الإعلانات، إنشاء الأفكار، تحليل المتاجر الإلكترونية، تطوير الهوية البصرية،
          وصناعة محتوى احترافي باستخدام الذكاء الاصطناعي.
        </p>

        <p className="text-gray-400 leading-8 mb-6">
          تم تصميم المنصة لتكون سهلة الاستخدام، سريعة، وتناسب المسوقين، صناع المحتوى،
          أصحاب المشاريع، والمتاجر الإلكترونية.
        </p>

        <p className="text-gray-400 leading-8">
          هدفنا هو مساعدتك على النمو، زيادة المبيعات، وتحسين جودة المحتوى باستخدام أدوات
          ذكية مبنية على أحدث تقنيات الذكاء الاصطناعي.
        </p>
      </main>
    </>
  );
}
