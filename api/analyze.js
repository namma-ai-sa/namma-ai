export default async function handler(req, res) {

  try {

    const url = req.query.url;

    if (!url) {
      return res.status(400).json({
        result: "يرجى إدخال رابط الموقع"
      });
    }

    const prompt = `
حلل هذا الموقع:

${url}

وأعطني:

✅ وصف الموقع

✅ نقاط القوة

✅ نقاط الضعف

✅ أفكار مقالات جديدة

✅ أفكار فيديوهات

✅ تحسينات SEO

✅ خطة محتوى أسبوعية

اكتب بالعربية فقط.
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
          max_tokens: 800,
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
      result:
        data?.choices?.[0]?.message?.content ||
        "لم يتم الحصول على نتيجة"
    });

  } catch (error) {

    return res.status(500).json({
      result: error.message
    });

  }

}
