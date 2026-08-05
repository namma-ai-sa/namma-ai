import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const topic = searchParams.get("topic") || "موضوع عام";

    const prompt = `
أنت خبير تصميم وإنتاج محتوى بصري.

أنشئ فكرة صورة احترافية حول:

${topic}

يجب أن تتضمن الإجابة:

1. عنوان الفكرة
2. وصف المشهد
3. أسلوب التصميم
4. الألوان المقترحة
5. عناصر الصورة
6. Prompt احترافي جاهز لتوليد الصورة بالذكاء الاصطناعي

اكتب الإجابة باللغة العربية وبشكل مرتب وواضح.
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
          temperature: 0.5,
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
      "تعذر إنشاء فكرة الصورة";

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
