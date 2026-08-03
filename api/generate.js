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

- عنوان جذاب
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
أنشئ محتوى سوشال ميديا عن:

${topic}

اكتب:

📱 منشور X

📸 منشور Instagram

🎵 منشور TikTok

🎤 منشور JACO

📘 منشور Facebook

💼 منشور LinkedIn

اجعل كل منشور مستقلاً وجاهزاً للنشر.
`;

    } else if (type === "video") {

      prompt = `
أنشئ محتوى فيديو عن:

${topic}

واكتب:

📺 فيديو يوتيوب

⚡ يوتيوب شورتس

📸 Instagram Reels

🎵 TikTok Video

🎤 JACO Video

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
- النص المقترح
- وصف كامل للمصمم
`;

    } else if (type === "plan") {

      prompt = `
أنشئ خطة محتوى شهر كامل عن:

${topic}

تحتوي على:

- أفكار مقالات
- أفكار فيديو
- أفكار سوشال ميديا

بشكل يومي ومرتب.
`;

    } else if (type === "analysis-content") {

      prompt = `
بناءً على التحليل التالي:

${topic}

أنشئ:

📝 10 أفكار مقالات

🎥 10 أفكار فيديو

📱 10 أفكار سوشال ميديا

🔍 أهم فرص SEO

📅 خطة محتوى شهر كامل

🚀 أهم 3 خطوات يجب تنفيذها فوراً

بشكل احترافي وعملي.
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
          max_tokens: 1200,
          temperature: 0.5,
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
