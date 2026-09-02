import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import bcrypt from "bcryptjs";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export async function POST(req) {
  try {
    const {
      email,
      password,
    } = await req.json();

    const { data: user } =
      await supabase
        .from("users")
        .select("*")
        .eq("email", email)
        .single();

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message:
            "بيانات الدخول غير صحيحة",
        },
        {
          status: 401,
        }
      );
    }

    const validPassword =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!validPassword) {
      return NextResponse.json(
        {
          success: false,
          message:
            "بيانات الدخول غير صحيحة",
        },
        {
          status: 401,
        }
      );
    }

    return NextResponse.json({
      success: true,
      user,
    });

  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
