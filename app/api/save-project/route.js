import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export async function POST(req) {
  try {
    const body = await req.json();

    const { username, name, status, progress, lastTask, nextTask } = body;

    if (!username || !name) {
      return NextResponse.json(
        { success: false, message: "يرجى إدخال اسم المستخدم واسم المشروع" },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("projects")
      .insert([
        {
          username,
          project_name: name,
          status,
          progress,
          last_task: lastTask,
          next_task: nextTask
        }
      ])
      .select()
      .single();

    if (error) {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, project: data },
      { status: 200 }
    );

  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
