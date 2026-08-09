import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({
        success: false,
        message: "البريد الإلكتروني مطلوب",
      });
    }

    const { data: user } = await supabase
      .from("users")
      .select("username")
      .eq("email", email)
      .maybeSingle();

    if (!user) {
      return NextResponse.json({
        success: false,
        message: "البريد غير موجود",
      });
    }

    return NextResponse.json({
      success: true,
      message: `اسم المستخدم: ${user.username}`,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
