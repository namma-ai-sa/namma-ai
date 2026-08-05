import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export default async function handler(req, res) {

  try {

    const username =
      req.query.username;

    const { data, error } =
      await supabase
        .from("projects")
        .select("*")
        .eq("username", username);

    if (error) {

      return res.status(500).json({
        success: false,
        message: error.message
      });

    }

    return res.status(200).json({
      success: true,
      projects: data || []
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message
    });

  }

}
