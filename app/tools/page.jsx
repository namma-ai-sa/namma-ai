import Sidebar from "@/components/Sidebar";

export default function ToolsPage() {
  return (
    <main className="flex">
      <Sidebar />

      <div className="flex-1 p-10">
        <h1 className="text-3xl font-semibold mb-6">جميع الأدوات</h1>
        <p className="text-gray-400">
          اختر أي أداة من القائمة على اليسار للبدء في استخدامها.
        </p>
      </div>
    </main>
  );
}
