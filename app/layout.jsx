import "./globals.css";

export const metadata = {
  title: "AI Marketing Suite",
  description: "منصة أدوات الذكاء الاصطناعي لصنّاع المحتوى والمسوقين",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-[#050509] text-white">
        {children}
      </body>
    </html>
  );
}
