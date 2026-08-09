import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { business, customer } =
      await req.json();

    const analysis = `
تحليل العميل:

النشاط:
${business}

العميل:
${customer}

التوصية:

✅ عميل مهتم

الخطوة التالية:
حدد موعد مكالمة أو عرض مباشر.

درجة الفرصة:
8/10
`;

    return NextResponse.json({
      success: true,
      result: analysis,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
