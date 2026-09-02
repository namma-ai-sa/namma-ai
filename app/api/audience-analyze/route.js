import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const input = searchParams.get("input") || "";

    const prompt = `
حلل الجمهور التالي:

${input}

اذكر:
- الفئة المستهدفة
- الاهتمامات
- نقاط الألم
- أفضل القنوات التسويقية
- استراتيجية الوصول

بالعربية فقط.
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
          messages: [{ role: "user", content: prompt }]
        })
      }
    );

    const data = await response.json();

    return NextResponse.json({
      result: data?.choices?.[0]?.message?.content || "تعذر التحليل"
    });

  } catch (error) {
    return NextResponse.json({ result: error.message }, { status: 500 });
  }
}
