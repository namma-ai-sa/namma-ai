export default async function handler(req, res) {

  try {

    const topic = req.query.topic || "موضوع عام";

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
          max_tokens: 800,
          temperature: 0.7,
          messages: [
            {
              role: "user",
              content: `
أنت كاتب محتوى عربي محترف.

قواعد مهمة جداً:

- اكتب باللغة العربية الفصحى فقط.
- ممنوع استخدام أي لغة أخرى.
- ممنوع استخدام الصينية.
- ممنوع استخدام كلمات إنجليزية عشوائية.
- لا تضف روابط.
- لا تذكر أسماء مواقع غير مطلوبة.
- اجعل التنسيق واضحاً ومرتباً.

الموضوع:
${topic}

أنشئ المحتوى التالي:

📝 عنوان جذاب

📝 مقدمة احترافية

📝 مقال مفصل مكون من عدة فقرات

🔍 10 كلمات SEO

📱 منشور X احترافي

🎥 فكرة فيديو

🎨 فكرة صورة

واكتب الرد بالعربية فقط.
`
            }
          ]
        })
      }
    );

    const data = await response.json();

    const article =
      data?.choices?.[0]?.message?.content ||
      "لم يتم إنشاء محتوى";

    return res.status(200).json({
      article
    });

  } catch (error) {

    return res.status(500).json({
      article: `خطأ: ${error.message}`
    });

  }

}
