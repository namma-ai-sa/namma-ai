import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export async function GET(req) {

  const url = new URL(req.url);

  const leadId =
    url.searchParams.get(
      "leadId"
    );

  const { data } =
    await supabase
      .from("crm_timeline")
      .select("*")
      .eq("lead_id", leadId)
      .order("id", {
        ascending:false
      });

  return NextResponse.json({
    success:true,
    items:data || []
  });
}

export async function POST(req) {

  const body =
    await req.json();

  const { error } =
    await supabase
      .from("crm_timeline")
      .insert([body]);

  if(error){
    return NextResponse.json({
      success:false,
      message:error.message
    });
  }

  return NextResponse.json({
    success:true
  });
}
