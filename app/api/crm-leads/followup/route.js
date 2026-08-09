import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export async function POST(req) {

  const {
    id,
    notes,
    last_followup,
    next_followup
  } = await req.json();

  const { error } = await supabase
    .from("crm_leads")
    .update({
      notes,
      last_followup,
      next_followup
    })
    .eq("id", id);

  if (error) {
    return NextResponse.json({
      success:false,
      message:error.message
    });
  }

  return NextResponse.json({
    success:true
  });
}
