import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export async function GET() {
  try {
    const { count: users } = await supabase
      .from("users")
      .select("*", {
        count: "exact",
        head: true,
      });

    const { count: integrations } =
      await supabase
        .from("integrations")
        .select("*", {
          count: "exact",
          head: true,
        });

    const { count: conversations } =
      await supabase
        .from("conversations")
        .select("*", {
          count: "exact",
          head: true,
        });

    return NextResponse.json({
      success: true,
      metrics: {
        users: users || 0,
        conversations:
          conversations || 0,
        integrations:
          integrations || 0,
        projects: 0,
      },
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
