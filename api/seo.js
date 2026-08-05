export default async function handler(req, res) {

  try {

    const topic =
      req.query.topic || "موضوع عام";

    const prompt = `
أنت خبير SEO محترف.

أنشئ خطة SEO احترافية حول:

${topic}

يجب أن تتضمن الإجابة:

1. عنوان SEO
2. Meta Description
3. الكلمات المفتاحية الرئيسية
4. الكلمات المفتاحية الثانوية
5. الكلمات طويلة الذيل
6. اقتراح عناوين للمقال
7. بنية H1 و H2 و H3
8. فرص تحسين الظهور في محركات البحث
9. اقتراح روابط داخلية
10. اقتراح CTA مناسب

اكتب النتيجة بالعربية وبشكل منظم.
`;

    const response =
      await fetch(
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
      "تعذر إنشاء خطة SEO";

    result = result
      .replace(/\\n/g, "\n")
      .replace(/\\"/g, '"')
      .replace(/\*\*/g, "")
      .replace(/#/g, "")
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
