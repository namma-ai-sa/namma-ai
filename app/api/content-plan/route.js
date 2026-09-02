import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    const input =
      searchParams.get("input") || "";

    const prompt = `
أنت خبير تسويق وصناعة محتوى.

أنشئ خطة محتوى احترافية لمدة 30 يومًا لهذا النشاط:

${input}

يجب أن تتضمن:

1. أفكار يومية
2. نوع المحتوى
3. الهدف من المنشور
4. CTA مقترح
5. أفكار Reels
6. أفكار Stories

أجب باللغة العربية فقط.
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

    return NextResponse.json({
      result:
        data?.choices?.[0]?.message?.content ||
        "تعذر إنشاء الخطة",
    });

  } catch (error) {
    return NextResponse.json(
      {
        result: error.message,
      },
      { status: 500 }
    );
  }
}
