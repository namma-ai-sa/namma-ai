import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export async function GET() {
  const { data, error } = await supabase
    .from("automation_tasks")
    .select("*")
    .order("id", { ascending: false });

  if (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }

  return NextResponse.json({
    success: true,
    tasks: data || [],
  });
}

export async function POST(req) {
  const body = await req.json();

  const { data, error } = await supabase
    .from("automation_tasks")
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
    task: data,
  });
}
