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

    return NextResponse.json({
      success: true,
      project: data
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

export async function POST(req) {
  try {
    const body = await req.json();

    const { title, description } = body;

    if (!title) {
      return NextResponse.json(
        {
          success: false,
          message: "اسم المشروع مطلوب"
        },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("projects")
      .insert([
        {
          project_name: title,
          status: "active",
          progress: 0,
          last_task: description || "",
          next_task: ""
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
      project: data
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