import fs from "fs";
import path from "path";

export default async function handler(req, res) {

  try {

    const filePath = path.join(process.cwd(), "memory.json");

    const memory = JSON.parse(
      fs.readFileSync(filePath, "utf8")
    );

    const project =
      memory.projects?.[0] || null;

    if (!project) {

      return res.status(404).json({
        error: "لا يوجد مشروع محفوظ"
      });

    }

    return res.status(200).json({

      project: {
        id: project.id,
        name: project.name,
        status: project.status,
        progress: project.progress,
        lastTask: project.lastTask,
        nextTask: project.nextTask,
        notes: project.notes
      }

    });

  } catch (error) {

    return res.status(500).json({
      error: error.message
    });

  }

}
