import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    const topic =
      searchParams.get("topic") || "موضوع عام";

    const prompt = `
أنت كاتب محتوى عربي محترف وخبير SEO ضمن منصة NAMMA AI.

أنشئ مقالاً احترافياً حول:

${topic}

يجب أن يتضمن:

1. عنوان رئيسي جذاب
2. مقدمة احترافية
3. عناوين H2
4. عناوين H3 عند الحاجة
5. محتوى تفصيلي ومنظم
6. نصائح عملية
7. خاتمة
8. CTA مناسب
9. كلمات مفتاحية مقترحة

أجب باللغة العربية فقط.
`;

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization:
            `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "deepseek/deepseek-chat",
          temperature: 0.5,
          max_tokens: 2500,
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

    const result =
      data?.choices?.[0]?.message?.content ||
      "تعذر إنشاء المقال";

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
