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
      name,
      username,
      password
    } = req.body;

    const { data: existingUser } =
      await supabase
        .from("users")
        .select("*")
        .eq("username", username)
        .single();

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "اسم المستخدم مستخدم مسبقاً"
      });
    }

    const { error } =
      await supabase
        .from("users")
        .insert([
          {
            name,
            username,
            password,
            account_type: "individual"
          }
        ]);

    if (error) {
      return res.status(500).json({
        success: false,
        message: error.message
      });
    }

    return res.status(200).json({
      success: true,
      message: "تم إنشاء الحساب"
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message
    });

  }

}
