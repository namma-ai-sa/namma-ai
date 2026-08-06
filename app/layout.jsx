import "./globals.css";

export const metadata = {
  title: "🌱 نمّى AI",
  description: "منصة عربية للذكاء الاصطناعي وصناعة المحتوى والتسويق الرقمي",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        {children}
      </body>
    </html>
  );
}