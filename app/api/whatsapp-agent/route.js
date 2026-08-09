import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { message } = await req.json();

    const prompt = `
أنت خبير مبيعات واتساب محترف.

حلل رسالة العميل التالية:

${message}

أعطني:

1. نية العميل
2. درجة الاهتمام من 10
3. الاعتراضات المحتملة
4. رد جاهز للإرسال
5. أفضل خطوة متابعة
6. احتمالية إغلاق الصفقة
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
          temperature: 0.4,
          max_tokens: 1200,
        }),
      }
    );

    const data = await response.json();

    return NextResponse.json({
      success: true,
      reply:
        data?.choices?.[0]?.message?.content ||
        "لا توجد نتيجة",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
