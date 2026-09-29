import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("integration_providers")
      .select("*")
      .eq("enabled", true)
      .order("provider");

    if (error) throw error;

    console.log("PROVIDERS:", data);
    console.log("ERROR:", error);
    return NextResponse.json({
      success: true,
      providers: data || [],
    });
  } catch (error) {
    console.log("PROVIDERS:", data);
    console.log("ERROR:", error);
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
