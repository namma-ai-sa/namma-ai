export default async function handler(req, res) {

  try {

    const topic = req.query.topic || "موضوع عام";
    const type = req.query.type || "all";

    let prompt = "";

    if (type === "article") {

      prompt = `
اكتب مقالاً احترافياً بالعربية عن:

${topic}

يتضمن:
- عنوان
- مقدمة
- محتوى
- خاتمة
`;

    } else if (type === "seo") {

      prompt = `
اعطني 10 كلمات SEO فقط عن:

${topic}

بدون شرح إضافي.
`;

    } else if (type === "social") {

      prompt = `
أنشئ محتوى سوشال ميديا عن:

${topic}

واكتب:

📱 منشور X

📸 منشور Instagram

🎵 منشور TikTok

🎤 منشور JACO

📘 منشور Facebook

💼 منشور LinkedIn

اجعل كل منصة بمنشور منفصل وجاهز للنشر.
`;

    } else if (type === "video") {

      prompt = `
أنشئ محتوى فيديو عن:

${topic}

واكتب:

📺 فيديو يوتيوب

⚡ يوتيوب شورتس

📸 Instagram Reels

🎵 TikTok

🎤 JACO

ويتضمن لكل منصة:

- عنوان
- وصف
- هاشتاقات
- فكرة المشاهد
- سكربت مختصر
`;

    } else if (type === "image") {

      prompt = `
أنشئ فكرة صورة احترافية عن:

${topic}

واكتب:

- فكرة الصورة
- الألوان المناسبة
- نص الصورة
- وصف كامل للمصمم
`;

    } else if (type === "plan") {

      prompt = `
أنشئ خطة محتوى لمدة 30 يوماً عن:

${topic}

تشمل:

- أفكار مقالات
- أفكار فيديو
- أفكار سوشال ميديا
- أفكار حملات تسويقية

بشكل يومي.
`;

    } else {

      prompt = `
اكتب باللغة العربية فقط.

عن:

${topic}

أنشئ:

📝 مقال

🔍 SEO

📱 محتوى X

📸 محتوى Instagram

🎵 محتوى TikTok

🎤 محتوى JACO

📘 محتوى Facebook

💼 محتوى LinkedIn

🎥 خطة فيديو

🎨 فكرة صورة

📊 خطة محتوى

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
          max_tokens: 800,
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
