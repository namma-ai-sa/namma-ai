import { NextResponse } from "next/server";

export async function POST(req) {
  try {

    const {
      name,
      email,
      phone,
      status
    } = await req.json();

    const prompt = `
أنت مستشار مبيعات محترف.

حلل بيانات العميل التالية:

الاسم:
${name}

البريد:
${email}

الجوال:
${phone}

الحالة:
${status}

أعطني:

1- درجة الاهتمام من 10
2- احتمالية الإغلاق
3- أفضل خطوة متابعة
4- اعتراضات متوقعة
5- رسالة جاهزة للعميل
`;

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "deepseek/deepseek-chat",
          messages: [
            {
              role: "user",
              content: prompt
            }
          ],
          temperature: 0.4,
          max_tokens: 1200
        })
      }
    );

    const data = await response.json();

    return NextResponse.json({
      success: true,
      result:
        data?.choices?.[0]?.message?.content ||
        "لا توجد نتيجة"
    });

  } catch(error) {

    return NextResponse.json({
      success:false,
      message:error.message
    });

  }
}
