import fs from "fs";
import path from "path";

export default async function handler(req, res) {

  if (req.method !== "POST") {

    return res.status(405).json({
      success: false,
      message: "Method Not Allowed"
    });

  }

  try {

    const filePath =
      path.join(process.cwd(), "users.json");

    const raw =
      fs.readFileSync(filePath, "utf8");

    const data =
      JSON.parse(raw);

    const {
      username,
      password
    } = req.body;

    const user =
      data.users.find(
        u =>
          u.username === username &&
          u.password === password
      );

    if (!user) {

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
      error: error.message
    });

  }

}
