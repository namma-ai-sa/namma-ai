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
  max_tokens: 300,
  messages: [

            {
              role: "user",
              content: `
أنت كاتب محتوى عربي محترف.

اكتب باللغة العربية الفصحى فقط.

ممنوع استخدام أي لغة أخرى.

اكتب محتوى مفصل واحترافي عن:

${topic}

ويجب أن يحتوي على:

📝 عنوان جذاب

📝 مقدمة

📝 5 عناوين فرعية

📝 خاتمة

🔍 10 كلمات SEO

📱 منشور X احترافي

🎥 فكرة فيديو يوتيوب

🎨 فكرة صورة

اجعل المحتوى منظمًا وواضحًا.
`
`

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
