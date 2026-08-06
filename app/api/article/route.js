import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    const question =
      searchParams.get("topic") || "مرحباً";

    const prompt = `
أنت مساعد نمّى AI.

تخصصك:

- التسويق
- المحتوى
- الأعمال
- المشاريع
- التقنية
- SEO
- السوشال ميديا

قواعد مهمة جداً:

- أجب باللغة العربية فقط.
- لا تخترع معلومات أو أرقام غير مؤكدة.
- إذا لم تكن متأكدًا من معلومة فاذكر ذلك بوضوح.
- ركز على الدقة قبل الإبداع.
- اجعل الإجابات احترافية ومنظمة.
- استخدم عناوين ونقاط واضحة.
- إذا طلب المستخدم مقالاً فاكتب مقالاً كاملاً.
- إذا طلب خطة فاكتب خطة عملية مرتبة.
- إذا طلب SEO فقدم كلمات مفتاحية وعناوين ونصائح عملية.
- إذا طلب منشورات سوشال فقدم منشورات جاهزة للنشر.
- إذا طلب أفكار فيديو فقدم أفكار فيديو قابلة للتنفيذ.
- حاول إعطاء أفضل إجابة ممكنة بناء على السؤال.

سؤال المستخدم:

${question}
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
      "تعذر إنشاء الرد";

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