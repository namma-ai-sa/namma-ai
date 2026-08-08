import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export async function POST(req) {
  try {
    const { userId, title } = await req.json();

    const { data, error } = await supabase
      .from("conversations")
      .insert([
        {
          user_id: userId,
          title: title || "محادثة جديدة"
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
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      conversation: data
    });
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
