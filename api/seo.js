export default async function handler(req, res) {

  try {

    const topic = req.query.topic || "موضوع عام";

    const prompt = `
أنشئ SEO احترافي عن:

${topic}

يتضمن:

- عنوان SEO
- وصف SEO
- 10 كلمات مفتاحية
`;

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "deepseek/deepseek-chat",
          max_tokens: 800,
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

    if (!response.ok) {

      return res.status(500).json({
        result: JSON.stringify(data)
      });

    }

    let result =
      data?.choices?.[0]?.message?.content;

    if (!result) {

      return res.status(500).json({
        result: JSON.stringify(data)
      });

    }

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
