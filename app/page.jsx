import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="px-6 py-20 text-center">
        <h1 className="text-4xl font-bold mb-6">
          منصة أدوات الذكاء الاصطناعي للمسوقين وصنّاع المحتوى
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto mb-10">
          15 أداة قوية تساعدك في التحليل، الكتابة، الأفكار، التسويق، المحتوى، المتاجر الإلكترونية، والهوية البصرية.
        </p>

        <Link
          href="/tools"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white"
        >
          ابدأ الآن
        </Link>
      </main>
    </>
  );
}
