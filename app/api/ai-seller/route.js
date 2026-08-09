import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { business, customer } =
      await req.json();

    const prompt = `
أنت خبير مبيعات محترف.

حلل العميل التالي:

النشاط التجاري:
${business}

بيانات العميل:
${customer}

أعطني:

1- درجة الاهتمام من 10
2- احتمالية الشراء
3- الاعتراضات المحتملة
4- أفضل رسالة مبيعات
5- الخطوة التالية
6- فرصة إغلاق الصفقة
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
      result:
        data?.choices?.[0]?.message
          ?.content ||
        "لا توجد نتيجة",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
