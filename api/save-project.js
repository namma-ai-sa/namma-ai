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
      path.join(process.cwd(), "memory.json");

    const raw =
      fs.readFileSync(filePath, "utf8");

    const memory =
      JSON.parse(raw);

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
        req.body.nextTask || "-",

      notes: []

    };

    memory.projects.push(
      newProject
    );

    fs.writeFileSync(
      filePath,
      JSON.stringify(
        memory,
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
