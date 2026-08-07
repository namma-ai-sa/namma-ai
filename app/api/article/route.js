import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    const question =
      searchParams.get("topic") || "مرحبا";

    const prompt = `
أنت مساعد نمّى AI.

أجب باللغة العربية فقط.

سؤال المستخدم:

${question}
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
          model:
            "nvidia/nemotron-3-ultra-550b-a55b:free",
          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
          temperature: 0.2,
          max_tokens: 1000,
        }),
      }
    );

    const data = await response.json();

    const result =
      data?.choices?.[0]?.message?.content ||
      "تعذر إنشاء الرد";

    return NextResponse.json(
      {
        result,
        debug: data,
      },
      {
        status: 200,
      }
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