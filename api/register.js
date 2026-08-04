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

    const filePath = path.join(
      process.cwd(),
      "users.json"
    );

    if (!fs.existsSync(filePath)) {
      return res.status(500).json({
        success: false,
        message: "users.json غير موجود"
      });
    }

    const raw = fs.readFileSync(
      filePath,
      "utf8"
    );

    const data = JSON.parse(raw);

    if (!data.users) {
      return res.status(500).json({
        success: false,
        message: "صيغة users.json غير صحيحة"
      });
    }

    const {
      name,
      username,
      password
    } = req.body;

    if (
      !name ||
      !username ||
      !password
    ) {
      return res.status(400).json({
        success: false,
        message: "جميع الحقول مطلوبة"
      });
    }

    const exists =
      data.users.find(
        u =>
          u.username.toLowerCase() ===
          username.toLowerCase()
      );

    if (exists) {
      return res.status(400).json({
        success: false,
        message: "اسم المستخدم مستخدم مسبقاً"
      });
    }

    const newUser = {
      name,
      username,
      password,
      projects: []
    };

    data.users.push(
      newUser
    );

    fs.writeFileSync(
      filePath,
      JSON.stringify(
        data,
        null,
        2
      ),
      "utf8"
    );

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
