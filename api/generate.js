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
          max_tokens: 600,
          temperature: 0.7,
          messages: [
            {
              role: "user",
              content: `
أنت خبير محتوى عربي.

اكتب باللغة العربية فقط.

ممنوع:
- الإنجليزية
- الصينية
- الروابط
- Markdown
- ###

الموضوع:

${topic}

اكتب الرد بهذا الترتيب فقط:

📝 المقال:
اكتب مقالاً قصيراً ومفيداً.

🔍 SEO:
اكتب 10 كلمات مفتاحية.

📱 منشور X:
اكتب منشوراً جذاباً.

🎥 فكرة فيديو:
اكتب فكرة فيديو قصيرة.

🎨 فكرة صورة:
اكتب فكرة صورة قصيرة.

اجعل الرد مرتباً وواضحاً.
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
