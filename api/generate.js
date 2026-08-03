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

اكتب بالعربية فقط.

ممنوع استخدام أي لغة أخرى.

ممنوع الصينية أو الإنجليزية إلا عند الضرورة.

الموضوع:
${topic}

الرد يجب أن يحتوي فقط على:

📝 مقال قصير

🔍 SEO

📱 منشور X

🎥 فكرة فيديو

🎨 فكرة صورة

ويكون مختصرًا وواضحًا.
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
