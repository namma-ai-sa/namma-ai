export default async function handler(req, res) {

  try {

    const topic =
      req.query.topic || "موضوع عام";

    const prompt = `
أنت خبير صناعة محتوى وفيديو.

أنشئ فيديو احترافياً عن:

${topic}

يجب أن تتضمن الإجابة:

1. عنوان الفيديو
2. وصف الفيديو
3. الجمهور المستهدف
4. الخطاف الافتتاحي (Hook)
5. سكربت كامل للفيديو
6. فكرة فيديو قصير Shorts أو Reels
7. هاشتاقات مناسبة
8. دعوة لاتخاذ إجراء (CTA)

اكتب النتيجة باللغة العربية بشكل احترافي ومنظم.
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
      "تعذر إنشاء فكرة الفيديو";

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
