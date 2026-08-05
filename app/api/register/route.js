import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, username, password } = body;

    if (!name || !username || !password) {
      return NextResponse.json(
        { success: false, message: "يرجى إدخال جميع البيانات المطلوبة" },
        { status: 400 }
      );
    }

    // التحقق من وجود المستخدم مسبقاً
    const { data: existingUser } = await supabase
      .from("users")
      .select("*")
      .eq("username", username)
      .single();

    if (existingUser) {
      return NextResponse.json(
        { success: false, message: "اسم المستخدم مستخدم مسبقاً" },
        { status: 400 }
      );
    }

    // إنشاء الحساب
    const { error } = await supabase
      .from("users")
      .insert([
        {
          name,
          username,
          password,
          account_type: "individual"
        }
      ]);

    if (error) {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "تم إنشاء الحساب" },
      { status: 200 }
    );

  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
