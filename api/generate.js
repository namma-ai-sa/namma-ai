export default async function handler(req, res) {

  try {

    const topic = req.query.topic || "موضوع عام";

    const prompt = `
اكتب بالعربية عن:

${topic}

وأرجع:

📝 مقال

🔍 SEO

📱 سوشال

🎥 فيديو

🎨 صورة

📊 خطة محتوى
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

    return res.status(200).json({

      article:
        data?.choices?.[0]?.message?.content ||
        "لم يتم إنشاء محتوى",

      seo: "سيتم فصل SEO قريباً",

      social: "سيتم فصل السوشال قريباً",

      video: "سيتم فصل الفيديو قريباً",

      image: "سيتم فصل الصور قريباً",

      plan: "سيتم فصل الخطة قريباً"

    });

  } catch (error) {

    return res.status(500).json({

      article: `خطأ: ${error.message}`,
      seo: "",
      social: "",
      video: "",
      image: "",
      plan: ""

    });

  }

}
