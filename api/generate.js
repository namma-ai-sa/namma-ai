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
          max_tokens: 700,
          temperature: 0.7,
          messages: [
            {
              role: "user",
              content: `

أنت خبير تسويق رقمي وصناعة محتوى.

اكتب باللغة العربية فقط.

ممنوع:
- الإنجليزية إلا للمصطلحات الضرورية
- الصينية
- الروابط
- Markdown

الموضوع:

${topic}

أنشئ المحتوى التالي:

📝 مقال قصير

🔍 10 كلمات SEO

📱 منشور X جاهز للنشر

🎥 قسم يوتيوب كامل ويحتوي على:

- عنوان الفيديو
- وصف الفيديو
- كلمات مفتاحية
- هاشتاقات
- سكربت مختصر للفيديو
- فكرة الصورة المصغرة Thumbnail

🎨 فكرة صورة للمقال

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
