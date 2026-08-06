import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    const topic =
      searchParams.get("topic") || "موضوع عام";

    const prompt = `
أنت خبير محتوى وتسويق رقمي ضمن منصة نمّى AI.

مهم جداً:

- أجب باللغة العربية فقط.
- لا تخترع معلومات أو إحصائيات غير مؤكدة.
- ركز على الوضوح والتأثير والإقناع.
- اجعل المحتوى جاهزاً للنشر مباشرة.
- خصص أسلوب الكتابة لكل منصة.
- استخدم أفضل الممارسات الحديثة لمنصات التواصل الاجتماعي.
- ركز على جذب الانتباه وتحفيز التفاعل.

أنشئ محتوى احترافياً حول:

${topic}

يجب أن تتضمن النتيجة:

1. منشور منصة X
2. منشور Instagram
3. منشور TikTok
4. منشور Facebook
5. منشور LinkedIn
6. هاشتاقات مناسبة
7. CTA مناسب
8. فكرة تصميم مرافقة
9. أفكار لتحسين التفاعل
10. أفضل وقت مقترح للنشر

اكتب المحتوى بشكل احترافي ومنظم.
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
          temperature: 0.3,
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
      "تعذر إنشاء محتوى التواصل الاجتماعي";

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