import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    const username = searchParams.get("username");
    const projectName = searchParams.get("name");

    if (!username || !projectName) {
      return NextResponse.json(
        {
          success: false,
          message: "يرجى إدخال اسم المستخدم واسم المشروع"
        },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("username", username)
      .eq("project_name", projectName)
      .single();

    if (error || !data) {
      return NextResponse.json(
        {
          success: false,
          message: "المشروع غير موجود"
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        project: {
          name: data.project_name,
          status: data.status,
          progress: data.progress,
          lastTask: data.last_task,
          nextTask: data.next_task
        }
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
