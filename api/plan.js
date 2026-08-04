export default async function handler(req, res) {

  try {

    const topic = req.query.topic || "موضوع عام";

    const prompt = `
أنشئ خطة محتوى لمدة 30 يوماً عن:

${topic}

تتضمن:

- اليوم
- نوع المحتوى
- الفكرة
- المنصة
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
          max_tokens: 1200,
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

    let result =
      data?.choices?.[0]?.message?.content ||
      "لم يتم إنشاء الخطة";

    result = result
      .replace(/\\n/g, "\n")
      .replace(/\\"/g, '"')
      .replace(/#/g, "")
      .replace(/\*\*/g, "")
      .replace(/---/g, "")
      .trim();

    return res.status(200).json({
      result
    });

  } catch (error) {

    return res.status(500).json({
      result: error.message
    });

  }

}
