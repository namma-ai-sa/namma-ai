export default async function handler(req, res) {

  try {

    const topic = req.query.topic || "موضوع عام";
    const type = req.query.type || "all";

    let prompt = "";

    if (type === "article") {

      prompt = `
اكتب مقالاً عربياً احترافياً عن:

${topic}

يتضمن:
- عنوان
- مقدمة
- محتوى
- خاتمة
`;

    } else if (type === "seo") {

      prompt = `
اعطني فقط:

10 كلمات SEO

مرتبطة بـ:

${topic}

بدون شرح إضافي.
`;

    } else if (type === "social") {

      prompt = `
اكتب منشور X احترافي جاهز للنشر عن:

${topic}

مع هاشتاقات مناسبة.
`;

    } else if (type === "youtube") {

      prompt = `
أنشئ محتوى يوتيوب كامل عن:

${topic}

يتضمن:

عنوان الفيديو

وصف الفيديو

الكلمات المفتاحية

الهاشتاقات

سكربت مختصر

فكرة الصورة المصغرة.
`;

    } else if (type === "image") {

      prompt = `
أنشئ فكرة صورة احترافية عن:

${topic}

بشكل مختصر وواضح.
`;

    } else if (type === "plan") {

      prompt = `
أنشئ خطة محتوى أسبوعية عن:

${topic}

تشمل:

7 أفكار محتوى
7 أفكار فيديو
7 أفكار سوشال ميديا
`;

    } else {

      prompt = `
اكتب باللغة العربية فقط.

الموضوع:

${topic}

أنشئ:

📝 مقال قصير

🔍 10 كلمات SEO

📱 منشور X

🎥 محتوى يوتيوب كامل

🎨 فكرة صورة

📊 خطة محتوى مختصرة

بشكل مرتب وواضح.
`;

    }

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
              content: prompt
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
