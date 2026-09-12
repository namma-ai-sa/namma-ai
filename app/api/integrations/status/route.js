import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import jwt from "jsonwebtoken";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export async function GET(req) {
  try {
    const token =
      req.cookies.get("namma_token")?.value;

    if (!token) {
      return NextResponse.json(
        { success: false },
        { status: 401 }
      );
    }

    const user = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    const { data, error } =
      await supabase
        .from("user_integrations")
        .select("provider,status")
        .eq("user_id", user.id);

    if (error) throw error;

    return NextResponse.json({
      success: true,
      integrations: data || [],
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
