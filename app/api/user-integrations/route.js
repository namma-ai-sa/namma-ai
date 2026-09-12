import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export async function GET(req) {
  const { searchParams } = new URL(req.url);

  const userId =
    searchParams.get("userId");

  const { data, error } =
    await supabase
      .from("user_integrations")
      .select("*")
      .eq("user_id", userId);

  if (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }

  return NextResponse.json({
    success: true,
    integrations: data || [],
  });
}

export async function POST(req) {
  const body = await req.json();

  const { data, error } =
    await supabase
      .from("user_integrations")
      .insert([body])
      .select()
      .single();

  if (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }

  return NextResponse.json({
    success: true,
    integration: data,
  });
}
