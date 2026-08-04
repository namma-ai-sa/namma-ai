import fs from "fs";
import path from "path";

export default async function handler(req, res) {

  try {

    const filePath =
      path.join(process.cwd(), "memory.json");

    const raw =
      fs.readFileSync(filePath, "utf8");

    const data =
      JSON.parse(raw);

    return res.status(200).json({
      projects: data.projects || []
    });

  } catch (error) {

    return res.status(500).json({
      error: error.message
    });

  }

}
