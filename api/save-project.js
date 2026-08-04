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
      path.join(
        process.cwd(),
        "users.json"
      );

    const raw =
      fs.readFileSync(
        filePath,
        "utf8"
      );

    const data =
      JSON.parse(raw);

    const username =
      req.body.username;

    const user =
      data.users.find(
        u => u.username === username
      );

    if (!user) {

      return res.status(404).json({
        success: false,
        message: "المستخدم غير موجود"
      });

    }

    const newProject = {

      id:
        Date.now().toString(),

      name:
        req.body.name || "مشروع جديد",

      status:
        req.body.status || "جديد",

      progress:
        Number(req.body.progress || 0),

      lastTask:
        req.body.lastTask || "-",

      nextTask:
        req.body.nextTask || "-"

    };

    user.projects.push(
      newProject
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
      project: newProject
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      error: error.message
    });

  }

}
