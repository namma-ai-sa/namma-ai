import Navbar from "@/components/Navbar";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="px-6 py-20 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">تواصل معنا</h1>

        <p className="text-gray-400 mb-10">
          يسعدنا تواصلك معنا لأي استفسار أو اقتراح أو دعم فني.
        </p>

        <form className="flex flex-col gap-4 bg-[#0b0b12] p-6 rounded-xl border border-gray-800">

          <input
            type="text"
            placeholder="الاسم"
            className="p-3 rounded-lg bg-[#050509] border border-gray-700 text-white"
          />

          <input
            type="email"
            placeholder="البريد الإلكتروني"
            className="p-3 rounded-lg bg-[#050509] border border-gray-700 text-white"
          />

          <textarea
            placeholder="اكتب رسالتك..."
            className="p-3 rounded-lg bg-[#050509] border border-gray-700 text-white h-32"
          />

          <button className="py-3 bg-blue-600 hover:bg-blue-700 rounded-lg">
            إرسال الرسالة
          </button>

        </form>
      </main>
    </>
  );
}
