import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    const url = searchParams.get("url");

    if (!url) {
      return NextResponse.json(
        {
          result: "يرجى إدخال رابط الموقع",
        },
        {
          status: 400,
        }
      );
    }

    const prompt = `
أنت مستشار نمو وتسويق رقمي وخبير تحليل مواقع ضمن منصة نمّى AI.

مهم جداً:

- أجب باللغة العربية فقط.
- لا تخترع معلومات غير مؤكدة.
- لا تنسب خدمات أو منتجات للموقع دون دليل.
- إذا لم تتمكن من معرفة معلومة فاذكر ذلك بوضوح.
- لا تستخدم Markdown.
- لا تستخدم ### أو ** أو ---.
- ركز على التحليل العملي والتوصيات القابلة للتنفيذ.
- فكر كمستشار أعمال وتسويق رقمي.
- رتب التوصيات حسب الأولوية والتأثير.

الموقع:

${url}

نفذ التحليل وفق الترتيب التالي:

📊 ملخص الموقع

✅ نقاط القوة

⚠️ نقاط الضعف

🔍 فرص تحسين SEO

📝 10 أفكار مقالات جديدة

🎥 10 أفكار فيديو

📱 10 أفكار لمنصات التواصل الاجتماعي

📅 خطة محتوى أسبوعية

🚀 أهم 3 خطوات يجب تنفيذها فوراً

وفي النهاية أضف:

🎯 الأولوية القصوى لهذا الموقع خلال الـ30 يوماً القادمة.
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
          max_tokens: 2200,
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
      "لم يتم الحصول على نتيجة";

    result = result
      .replace(/\\n/g, "\n")
      .replace(/\\"/g, '"')
      .replace(/\*\*/g, "")
      .replace(/#/g, "")
      .trim();

    return NextResponse.json(
      {
        result,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        result: `خطأ: ${error.message}`,
      },
      {
        status: 500,
      }
    );
  }
}