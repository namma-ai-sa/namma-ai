export default async function handler(req, res) {

  try {

    const topic =
      req.query.topic || "موضوع عام";

    const prompt = `
أنت خبير استراتيجية محتوى وتسويق.

أنشئ خطة محتوى احترافية لمدة 30 يوماً حول:

${topic}

يجب أن تتضمن:

1. اليوم
2. نوع المحتوى
3. الفكرة الرئيسية
4. المنصة الأنسب
5. الهدف من المحتوى
6. CTA مقترح
7. ملاحظات تنفيذية

اجعل الخطة عملية وواقعية ومتنوعة.

اكتب الإجابة باللغة العربية وبشكل منظم.
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
            max_tokens: 1800,
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
      "تعذر إنشاء الخطة";

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
