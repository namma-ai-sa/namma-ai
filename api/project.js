import fs from "fs";
import path from "path";

export default async function handler(req, res) {

  try {

    const username =
      req.query.username;

    const projectName =
      req.query.name;

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

    const project =
      user.projects.find(
        p => p.name === projectName
      );

    if (!project) {

      return res.status(404).json({
        success: false,
        message: "المشروع غير موجود"
      });

    }

    return res.status(200).json({
      success: true,
      project
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      error: error.message
    });

  }

}
