import supabase from "./supabase.js";

export default async function handler(req, res) {

  if (req.method !== "POST") {

    return res.status(405).json({
      success: false
    });

  }

  try {

    const {
      username,
      password
    } = req.body;

    const { data: user, error } =
      await supabase
        .from("users")
        .select("*")
        .eq("username", username)
        .eq("password", password)
        .single();

    if (error || !user) {

      return res.status(401).json({
        success: false,
        message:
          "اسم المستخدم أو كلمة المرور غير صحيحة"
      });

    }

    return res.status(200).json({
      success: true,
      user: {
        username: user.username,
        name: user.name
      }
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message
    });

  }

}
