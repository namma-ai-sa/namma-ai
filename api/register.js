import fs from "fs";
import path from "path";

export default async function handler(req, res) {

  if (req.method !== "POST") {

    return res.status(405).json({
      success: false
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

    const {
      name,
      username,
      password
    } = req.body;

    const exists =
      data.users.find(
        u => u.username === username
      );

    if (exists) {

      return res.status(400).json({
        success:false,
        message:"اسم المستخدم مستخدم مسبقاً"
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
      success:true
    });

  } catch (error) {

    return res.status(500).json({
      success:false,
      error:error.message
    });

  }

}
