export default async function handler(req, res) {

  try {export default async function handler(req, res) {

  try {

    const topic = req.query.topic || "موضوع عام";

    const prompt = `
اكتب باللغة العربية فقط.

الموضوع:

${topic}

يجب أن يكون الرد بهذا الشكل تماماً:

===ARTICLE===
مقال احترافي كامل

===SEO===
10 كلمات مفتاحية SEO
عنوان SEO
وصف SEO

===SOCIAL===
منشور X
منشور Instagram
منشور TikTok
منشور JACO
منشور Facebook
منشور LinkedIn

===VIDEO===
عنوان الفيديو
الوصف
الهاشتاقات
السكربت

===IMAGE===
فكرة الصورة
الألوان
وصف التصميم

===PLAN===
خطة محتوى لمدة 30 يوماً

لا تضف أي أقسام أخرى.
`;

    const response =
      await fetch(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Authorization":
              `Bearer ${process.env.OPENROUTER_API_KEY}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            model: "deepseek/deepseek-chat",
            max_tokens: 2500,
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

    let content =
      data?.choices?.[0]?.message?.content ||
      "";

    content = content
      .replace(/#/g, "")
      .replace(/\*\*/g, "")
      .replace(/---/g, "");

    let article = "";
    let seo = "";
    let social = "";
    let video = "";
    let image = "";
    let plan = "";

    const articleMatch =
      content.match(
        /===ARTICLE===([\s\S]*?)===SEO===/
      );

    const seoMatch =
      content.match(
        /===SEO===([\s\S]*?)===SOCIAL===/
      );

    const socialMatch =
      content.match(
        /===SOCIAL===([\s\S]*?)===VIDEO===/
      );

    const videoMatch =
      content.match(
        /===VIDEO===([\s\S]*?)===IMAGE===/
      );

    const imageMatch =
      content.match(
        /===IMAGE===([\s\S]*?)===PLAN===/
      );

    const planMatch =
      content.match(
        /===PLAN===([\s\S]*)/
      );

    article =
      articleMatch?.[1]?.trim() ||
      "لم يتم إنشاء المقال";

    seo =
      seoMatch?.[1]?.trim() ||
      "لم يتم إنشاء SEO";

    social =
      socialMatch?.[1]?.trim() ||
      "لم يتم إنشاء محتوى السوشال";

    video =
      videoMatch?.[1]?.trim() ||
      "لم يتم إنشاء محتوى الفيديو";

    image =
      imageMatch?.[1]?.trim() ||
      "لم يتم إنشاء فكرة الصورة";

    plan =
      planMatch?.[1]?.trim() ||
      "لم يتم إنشاء خطة المحتوى";

    return res.status(200).json({

      article,
      seo,
      social,
      video,
      image,
      plan

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
`;

    } else if (type === "video") {

      prompt = `
أنشئ محتوى فيديو عن:

${topic}

واكتب:

📺 فيديو يوتيوب

⚡ يوتيوب شورتس

📸 Reels

🎵 TikTok

ويتضمن:

- عنوان
- وصف
- هاشتاقات
- سكربت
`;

    } else if (type === "image") {

      prompt = `
أنشئ فكرة صورة احترافية عن:

${topic}

واكتب:

- فكرة الصورة
- الألوان
- وصف المصمم
`;

    } else if (type === "plan") {

      prompt = `
أنشئ خطة محتوى شهرية عن:

${topic}
`;

    } else {

      prompt = `
اكتب باللغة العربية فقط.

عن:

${topic}

أنشئ بالترتيب:

📝 مقال

🔍 SEO

📱 سوشال

🎥 فيديو

🎨 صورة

📊 خطة محتوى

واجعل كل قسم مستقلاً.
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
          max_tokens: 1800,
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

    let content =
      data?.choices?.[0]?.message?.content ||
      "لم يتم إنشاء محتوى";

    content = content
      .replace(/#/g, "")
      .replace(/\*\*/g, "")
      .replace(/---/g, "");

    return res.status(200).json({

      article: content,

      seo: content,

      social: content,

      video: content,

      image: content,

      plan: content

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
