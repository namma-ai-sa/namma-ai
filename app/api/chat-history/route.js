import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    const conversationId =
      searchParams.get("conversationId");

    const userId =
      searchParams.get("userId");

    if (!conversationId) {
      return NextResponse.json(
        {
          success: false,
          message: "يرجى إدخال conversationId"
        },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("chat_messages")
      .select("*")
      .eq("conversation_id", conversationId)
      .eq("user_id", userId)
      .order("created_at", {
        ascending: true
      });

    if (error) {
      return NextResponse.json(
        {
          success: false,
          message: error.message
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        messages: data || []
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message
      },
      { status: 500 }
    );
  }
}
