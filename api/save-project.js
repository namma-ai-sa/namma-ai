import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export default async function handler(req, res) {

  if (req.method !== "POST") {

    return res.status(405).json({
      success: false
    });

  }

  try {

    const {
      username,
      name,
      status,
      progress,
      lastTask,
      nextTask
    } = req.body;

    const { data, error } =
      await supabase
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

      return res.status(500).json({
        success: false,
        message: error.message
      });

    }

    return res.status(200).json({
      success: true,
      project: data
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message
    });

  }

}
