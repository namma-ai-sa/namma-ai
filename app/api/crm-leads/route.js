import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export async function GET() {
  const { data } = await supabase
    .from("crm_leads")
    .select("*")
    .order("id", { ascending: false });

  return NextResponse.json({
    success: true,
    leads: data || []
  });
}

export async function POST(req) {
  const body = await req.json();

  const { error } = await supabase
    .from("crm_leads")
    .insert([body]);

  if (error) {
    return NextResponse.json({
      success: false,
      message: error.message
    });
  }

  return NextResponse.json({
    success: true
  });
}
