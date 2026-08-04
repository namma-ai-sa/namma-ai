export default async function handler(req, res) {

  try {

    const topic = req.query.topic || "موضوع عام";

    const prompt = `
أنشئ محتوى سوشال ميديا احترافي عن:

${topic}

يتضمن:

📱 منشور X

📸 منشور Instagram

🎵 منشور TikTok

🎤 منشور JACO

📘 منشور Facebook

💼 منشور LinkedIn
`;

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "deepseek/deepseek-chat",
          messages: [
            {
              role: "user",
              content: prompt
            }
          ]
        })
      }
    );

    const data = await response.json();

    return res.status(200).json({
      result:
        data?.choices?.[0]?.message?.content ||
        "لم يتم إنشاء محتوى السوشال"
    });

  } catch (error) {

    return res.status(500).json({
      result: `خطأ: ${error.message}`
    });

  }

}
