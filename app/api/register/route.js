import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      name,
      username,
      email,
      password,
    } = body;

    if (
      !name ||
      !username ||
      !email ||
      !password
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "جميع الحقول مطلوبة",
        },
        {
          status: 400,
        }
      );
    }

    const { data: existingUser } =
      await supabase
        .from("users")
        .select("*")
        .eq("email", email)
        .maybeSingle();

    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          message:
            "البريد مستخدم مسبقاً",
        }
      );
    }

    const { error } =
      await supabase
        .from("users")
        .insert([
          {
            name,
            username,
            email,
            password,
          },
        ]);

    if (error) {
      return NextResponse.json(
        {
          success: false,
          message: error.message,
        }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "تم إنشاء الحساب بنجاح",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
