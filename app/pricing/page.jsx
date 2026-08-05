import Navbar from "@/components/Navbar";

export default function PricingPage() {
  return (
    <>
      <Navbar />

      <main className="px-6 py-20 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">خطط الأسعار</h1>

        <p className="text-gray-400 mb-10">
          اختر الخطة المناسبة لك وابدأ باستخدام أدوات الذكاء الاصطناعي بكل سهولة.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-[#0b0b12] border border-gray-800 p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">الخطة المجانية</h2>
            <p className="text-gray-400 mb-4">استخدام محدود للأدوات</p>
            <p className="text-3xl font-bold mb-6">0 ريال</p>
            <button className="w-full py-2 bg-gray-700 rounded-lg">ابدأ الآن</button>
          </div>

          <div className="bg-[#0b0b12] border border-gray-800 p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">الخطة الشهرية</h2>
            <p className="text-gray-400 mb-4">استخدام كامل لجميع الأدوات</p>
            <p className="text-3xl font-bold mb-6">49 ريال</p>
            <button className="w-full py-2 bg-blue-600 rounded-lg">اشترك الآن</button>
          </div>

          <div className="bg-[#0b0b12] border border-gray-800 p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">الخطة السنوية</h2>
            <p className="text-gray-400 mb-4">أفضل قيمة + خصم 30٪</p>
            <p className="text-3xl font-bold mb-6">399 ريال</p>
            <button className="w-full py-2 bg-green-600 rounded-lg">اشترك الآن</button>
          </div>

        </div>
      </main>
    </>
  );
}
