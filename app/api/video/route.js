import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    const idea =
      searchParams.get("idea") || "فيديو تسويقي";

    const prompt = `
أنت خبير صناعة محتوى فيديو وتسويق.

أنشئ سكربت فيديو احترافي حول:

${idea}

يجب أن يتضمن:

1. عنوان الفيديو
2. Hook قوي
3. التعليق الصوتي
4. تقسيم المشاهد
5. CTA
6. مدة الفيديو

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
        "تعذر إنشاء الفيديو",
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
