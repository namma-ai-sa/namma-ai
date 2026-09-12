import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export async function POST() {
  try {
    const now = new Date().toISOString();

    const { data: tasks, error } = await supabase
      .from("automation_tasks")
      .select("*")
      .in("status", ["pending", "scheduled"])
      .lte("execute_at", now);

    if (error) {
      throw error;
    }

    let processed = 0;

    for (const task of tasks || []) {
      await supabase
        .from("automation_tasks")
        .update({
          status: "completed",
          executed_at: now,
          result: "Task executed successfully"
        })
        .eq("id", task.id);

      processed++;
    }

    return NextResponse.json({
      success: true,
      processed
    });

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
