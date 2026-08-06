import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    const topic =
      searchParams.get("topic") || "موضوع عام";

    const prompt = `
أنت خبير SEO محترف ضمن منصة نمّى AI.

مهم جداً:

- أجب باللغة العربية فقط.
- لا تخترع أرقاماً أو بيانات أو إحصائيات غير مؤكدة.
- إذا لم تتوفر معلومات مؤكدة فاذكر ذلك بوضوح.
- ركز على الدقة قبل الإبداع.
- استخدم أفضل ممارسات SEO الحديثة.
- اجعل النتيجة منظمة وسهلة التطبيق.

أنشئ خطة SEO احترافية حول:

${topic}

يجب أن تتضمن:

1. عنوان SEO
2. Meta Description
3. الكلمات المفتاحية الرئيسية
4. الكلمات المفتاحية الثانوية
5. الكلمات طويلة الذيل
6. عناوين مقترحة للمحتوى
7. هيكل H1 و H2 و H3
8. فرص تحسين الظهور
9. أفكار للروابط الداخلية
10. CTA مناسب
11. أخطاء SEO يجب تجنبها

اكتب النتيجة بشكل احترافي ومنظم.
`;

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "deepseek/deepseek-chat",
          temperature: 0.2,
          max_tokens: 2000,
          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
        }),
      }
    );

    const data = await response.json();

    let result =
      data?.choices?.[0]?.message?.content ||
      "تعذر إنشاء خطة SEO";

    result = result
      .replace(/\\n/g, "\n")
      .replace(/\\"/g, '"')
      .replace(/\*\*/g, "")
      .replace(/#/g, "")
      .trim();

    return NextResponse.json(
      { result },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        result: error.message,
      },
      { status: 500 }
    );
  }
}