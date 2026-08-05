export default async function handler(req, res) {

  try {

    const question =
      req.query.topic || "مرحباً";

    const prompt = `
أنت NAMMA AI.

أجب على المستخدم باللغة العربية.

القواعد:

- إذا كان السؤال معلومة عامة فأجب مباشرة.
- إذا طلب مقالاً فاكتب مقالاً احترافياً.
- إذا طلب خطة فاكتب خطة.
- إذا طلب أفكار فيديو فأعطه أفكار فيديو.
- إذا طلب محتوى سوشال فأعطه محتوى سوشال.
- لا تخترع معلومات.
- إذا لم تكن متأكداً من معلومة اذكر ذلك بوضوح.
- اجعل الإجابة واضحة ومرتبة ومهنية.

سؤال المستخدم:

${question}
`;

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Authorization":
            `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type":
            "application/json"
        },
        body: JSON.stringify({
          model: "deepseek/deepseek-chat",
          max_tokens: 1500,
          temperature: 0.5,
          messages: [
            {
              role: "user",
              content: prompt
            }
          ]
        })
      }
    );

    const data =
      await response.json();

    let result =
      data?.choices?.[0]?.message?.content ||
      "تعذر إنشاء الرد";

    result = result
      .replace(/\\n/g,"\n")
      .replace(/\\"/g,'"')
      .replace(/\*\*/g,"")
      .replace(/#/g,"")
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
