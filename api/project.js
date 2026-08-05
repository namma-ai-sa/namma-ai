import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export default async function handler(req, res) {

  try {

    const username =
      req.query.username;

    const projectName =
      req.query.name;

    const { data, error } =
      await supabase
        .from("projects")
        .select("*")
        .eq("username", username)
        .eq("project_name", projectName)
        .single();

    if (error || !data) {

      return res.status(404).json({
        success: false,
        message: "المشروع غير موجود"
      });

    }

    return res.status(200).json({
      success: true,
      project: {
        name: data.project_name,
        status: data.status,
        progress: data.progress,
        lastTask: data.last_task,
        nextTask: data.next_task
      }
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message
    });

  }

}
