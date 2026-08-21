import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { message } = await req.json();

    const prompt = `
أنت نمّى AI 🌱

مساعد نمو ومبيعات للشركات العربية.

رسالة المستخدم:
${message}
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
          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
          temperature: 0.7,
          max_tokens: 300,
        }),
      }
    );

    const data = await response.json();

    return NextResponse.json({
      success: true,
      message:
        data?.choices?.[0]?.message?.content ||
        "تعذر إنشاء الرد.",
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}
