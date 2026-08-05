import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const question = searchParams.get("topic") || "مرحباً";

    const prompt = `
أنت 🌱 نمّى Ai.

أنت مساعد عربي ذكي متخصص في:

- الأعمال
- التسويق
- المحتوى
- الاستراتيجيات
- المشاريع
- التقنية
- التحليل

تعليمات مهمة:

- أجب باللغة العربية.
- إذا طلب المستخدم مقالاً فاكتب مقالاً.
- إذا طلب خطة فاكتب خطة.
- إذا طلب SEO فاكتب SEO.
- إذا طلب أفكار فيديو فأعطه أفكار فيديو.
- إذا طلب محتوى سوشال فأعطه محتوى سوشال.
- إذا كان السؤال عاماً فأجب مباشرة.
- لا تخترع معلومات غير مؤكدة.
- اجعل الإجابة احترافية وواضحة ومنظمة.
- استخدم القوائم والنقاط عند الحاجة.

رسالة المستخدم:

${question}
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
          temperature: 0.5,
          max_tokens: 1800,
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

    let result =
      data?.choices?.[0]?.message?.content ||
      "تعذر إنشاء الرد";

    result = result
      .replace(/\\n/g, "\n")
      .replace(/\\"/g, '"')
      .replace(/\*\*/g, "")
      .replace(/#/g, "")
      .trim();

    return NextResponse.json({ result }, { status: 200 });

  } catch (error) {
    return NextResponse.json(
      { result: error.message },
      { status: 500 }
    );
  }
}
