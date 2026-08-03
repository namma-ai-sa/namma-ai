export default async function handler(req, res) {

  try {

    const url = req.query.url;

    if (!url) {

      return res.status(400).json({
        result: "يرجى إدخال رابط الموقع"
      });

    }

    const prompt = `
حلل الموقع التالي:

${url}

تعليمات مهمة جداً:

- لا تخترع اسم الموقع.
- استخدم اسم النطاق فقط إذا لم تعرف الاسم الحقيقي.
- لا تستخدم Markdown.
- لا تستخدم ### أو ** أو ---.
- لا تضف معلومات غير مؤكدة.
- اكتب العربية فقط.
- اجعل التحليل عملياً ومختصراً.

أعطني النتائج بهذا الترتيب:

📊 ملخص الموقع

✅ نقاط القوة

⚠️ نقاط الضعف

🔍 فرص تحسين SEO

📝 10 أفكار مقالات جديدة

🎥 10 أفكار فيديو

📱 10 أفكار سوشال ميديا

📅 خطة محتوى أسبوعية

وفي النهاية أضف:

🚀 أهم 3 خطوات أنصح بتنفيذها فوراً لتحسين الموقع.
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
          max_tokens: 1800,
          temperature: 0.3,
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

    const result =
      data?.choices?.[0]?.message?.content ||
      "لم يتم الحصول على نتيجة";

    return res.status(200).json({
      result
    });

  } catch (error) {

    return res.status(500).json({
      result: `خطأ: ${error.message}`
    });

  }

}
