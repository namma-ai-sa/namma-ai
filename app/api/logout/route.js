import { NextResponse } from "next/server";

export async function POST() {
  try {
    // بما أن النظام لا يستخدم جلسات حقيقية من Supabase Auth،
    // فإن تسجيل الخروج يكون من جهة العميل فقط.
    return NextResponse.json(
      {
        success: true,
        message: "تم تسجيل الخروج بنجاح"
      },
      { status: 200 }
    );

  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message
      },
      { status: 500 }
    );
  }
}
