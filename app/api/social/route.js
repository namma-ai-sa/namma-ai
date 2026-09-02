import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    const input =
      searchParams.get("input") || "";

    const prompt = `
أنت خبير تسويق ومحتوى سوشيال ميديا.

أنشئ من المحتوى التالي:

${input}

1. منشور Facebook
2. Caption Instagram
3. منشور LinkedIn
4. منشور X
5. Hashtags مناسبة
6. أفضل CTA

أجب بالعربية فقط.
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
          temperature: 0.7,
          max_tokens: 1800,
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

    return NextResponse.json({
      result:
        data?.choices?.[0]?.message?.content ||
        "تعذر إنشاء المحتوى",
    });

  } catch (error) {
    return NextResponse.json(
      { result: error.message },
      { status: 500 }
    );
  }
}
