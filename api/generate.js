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
          model: "qwen/qwen-2.5-7b-instruct",
          max_tokens: 600,
          messages: [
            {
              role: "user",
              content: `
أنت كاتب محتوى عربي محترف.

مهم جداً:

- اكتب بالعربية فقط.
- ممنوع استخدام الصينية.
- ممنوع استخدام أي لغة غير العربية.
- لا تضع روابط.
- لا تضع أسماء مواقع.
- اجعل الرد واضحاً ومنظماً.

الموضوع:
${topic}

أنشئ الأقسام التالية:

📝 مقال احترافي

- عنوان جذاب
- مقدمة
- 3 إلى 5 عناوين فرعية
- خاتمة

🔍 كلمات SEO

اذكر 10 كلمات مفتاحية فقط.

📱 منشور X

منشور احترافي قصير.

🎥 فكرة فيديو

عنوان الفيديو + فكرة مختصرة.

🎨 فكرة صورة

وصف صورة مناسبة للمحتوى.

اجعل الرد مرتباً بالعربية فقط.
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
