import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full py-4 px-6 bg-[#0b0b12] border-b border-gray-800 flex justify-between items-center">
      <Link href="/" className="text-xl font-semibold">
        AI Marketing Suite
      </Link>

      <div className="flex gap-6 text-gray-300">
        <Link href="/tools">الأدوات</Link>
        <Link href="/pricing">الأسعار</Link>
        <Link href="/about">عن المنصة</Link>
        <Link href="/contact">تواصل معنا</Link>
      </div>
    </nav>
  );
}
