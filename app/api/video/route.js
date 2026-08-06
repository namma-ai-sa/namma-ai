import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    const topic =
      searchParams.get("topic") || "موضوع عام";

    const prompt = `
أنت خبير صناعة فيديو وتسويق محتوى ضمن منصة نمّى AI.

مهم جداً:

- أجب باللغة العربية فقط.
- لا تخترع معلومات أو إحصائيات غير مؤكدة.
- ركز على الدقة والوضوح.
- اجعل المحتوى مناسباً للنشر والتنفيذ مباشرة.
- استخدم أفضل الممارسات الحديثة للفيديو القصير والطويل.
- ركز على جذب انتباه المشاهد منذ الثواني الأولى.

أنشئ خطة فيديو احترافية حول:

${topic}

يجب أن تتضمن:

1. عنوان الفيديو
2. وصف الفيديو
3. الجمهور المستهدف
4. الخطاف الافتتاحي (Hook)
5. سكربت كامل للفيديو
6. تقسيم المشاهد
7. فكرة فيديو قصير Shorts أو Reels
8. CTA مناسب
9. هاشتاقات مقترحة
10. نصائح لزيادة المشاهدات
11. أخطاء يجب تجنبها

اكتب النتيجة بشكل احترافي ومنظم.
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
          temperature: 0.2,
          max_tokens: 2000,
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

    let result =
      data?.choices?.[0]?.message?.content ||
      "تعذر إنشاء خطة الفيديو";

    result = result
      .replace(/\\n/g, "\n")
      .replace(/\\"/g, '"')
      .replace(/\*\*/g, "")
      .replace(/#/g, "")
      .trim();

    return NextResponse.json(
      { result },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        result: error.message,
      },
      { status: 500 }
    );
  }
}