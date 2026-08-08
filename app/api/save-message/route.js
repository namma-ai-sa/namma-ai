import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      userId,
      conversationId,
      role,
      content
    } = body;

    const { data, error } = await supabase
      .from("chat_messages")
      .insert([
        {
          userId,
          conversation_id: conversationId,
          role,
          content
        }
      ])
      .select()
      .single();

    if (error) {
      return NextResponse.json(
        {
          success: false,
          message: error.message
        },
        {
          status: 500
        }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: data
      },
      {
        status: 200
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message
      },
      {
        status: 500
      }
    );
  }
}
