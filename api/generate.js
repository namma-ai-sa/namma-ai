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
          max_tokens: 450,
          temperature: 0.7,
          messages: [
            {
              role: "user",
              content: `

أنت خبير تسويق وكاتب محتوى عربي محترف.

اكتب باللغة العربية فقط.

ممنوع:
- الإنجليزية
- الصينية
- الروابط
- Markdown
- ###
- ***
- ----

الموضوع:

${topic}

أعطني فقط:

📝 مقال قصير من 120 إلى 180 كلمة

🔍 10 كلمات SEO

📱 منشور X قصير وجذاب

🎥 فكرة فيديو قصيرة

🎨 فكرة صورة قصيرة

اجعل الرد مختصراً ومنظماً.
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
