import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    const input =
      searchParams.get("input") || "";

    const prompt = `
أنت خبير إعلانات وتسويق عربي محترف ضمن منصة NAMMA AI.

أنشئ إعلاناً احترافياً بناءً على الوصف التالي:

${input}

يجب أن يتضمن:

1. عنوان إعلاني جذاب
2. نص الإعلان
3. عرض القيمة
4. CTA واضح
5. نسخة قصيرة للسوشيال ميديا
6. هاشتاقات مناسبة

اكتب النتيجة باللغة العربية فقط.
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
          temperature: 0.7,
          max_tokens: 1500,
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
      "تعذر إنشاء الإعلان";

    return NextResponse.json(
      { result },
      { status: 200 }
    );

  } catch (error) {
    return NextResponse.json(
      {
        result: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
