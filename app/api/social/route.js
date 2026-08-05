import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const topic = searchParams.get("topic") || "موضوع عام";

    const prompt = `
أنت خبير تسويق وصناعة محتوى.

أنشئ محتوى سوشال ميديا احترافي حول:

${topic}

يجب أن تتضمن النتيجة:

1. منشور X
2. منشور Instagram
3. منشور TikTok
4. منشور Facebook
5. منشور LinkedIn
6. هاشتاقات مناسبة
7. دعوة لاتخاذ إجراء (CTA)
8. فكرة تصميم مرافقة للمنشور

اكتب المحتوى باللغة العربية بشكل احترافي وجاهز للنشر.
`;

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "deepseek/deepseek-chat",
          max_tokens: 1500,
          temperature: 0.6,
          messages: [
            {
              role: "user",
              content: prompt
            }
          ]
        })
      }
    );

    const data = await response.json();

    let result =
      data?.choices?.[0]?.message?.content ||
      "تعذر إنشاء محتوى السوشال";

    result = result
      .replace(/\\n/g, "\n")
      .replace(/\\"/g, '"')
      .replace(/\*\*/g, "")
      .replace(/#/g, "")
      .trim();

    return NextResponse.json({ result }, { status: 200 });

  } catch (error) {
    return NextResponse.json(
      { result: error.message },
      { status: 500 }
    );
  }
}
