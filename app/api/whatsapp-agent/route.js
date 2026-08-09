import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { message } = await req.json();

    return NextResponse.json({
      success: true,
      reply: `تم تحليل الرسالة:\n\n${message}\n\nالتوصية: متابعة العميل وعرض المنتج المناسب.`,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
