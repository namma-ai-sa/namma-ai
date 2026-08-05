export default async function handler(req, res) {

  try {

    const question =
      req.query.topic || "مرحباً";

    const prompt = `
أنت 🌱 نمّى Ai.

أنت مساعد عربي ذكي متخصص في:

- الأعمال
- التسويق
- المحتوى
- الاستراتيجيات
- المشاريع
- التقنية
- التحليل

تعليمات مهمة:

- أجب باللغة العربية.
- إذا طلب المستخدم مقالاً فاكتب مقالاً.
- إذا طلب خطة فاكتب خطة.
- إذا طلب SEO فاكتب SEO.
- إذا طلب أفكار فيديو فأعطه أفكار فيديو.
- إذا طلب محتوى سوشال فأعطه محتوى سوشال.
- إذا كان السؤال عاماً فأجب مباشرة.
- لا تخترع معلومات غير مؤكدة.
- اجعل الإجابة احترافية وواضحة ومنظمة.
- استخدم القوائم والنقاط عند الحاجة.

رسالة المستخدم:

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
          temperature: 0.5,
          max_tokens: 1800,
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
