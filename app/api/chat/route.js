import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export async function POST(req) {
  try {
    const { message } = await req.json();

    await supabase.from("chat_messages").insert([
      {
        username: "guest",
        conversation_id: "main-chat",
        role: "user",
        content: message,
      },
    ]);

    const prompt = `
أنت نمّى AI 🌱

مساعد عربي احترافي وودود.

تعامل مع المستخدم كصديق وخبير أعمال وتسويق وتقنية.

قواعد مهمة:

- أجب باللغة العربية دائماً إلا إذا طلب المستخدم غير ذلك.
- لا تقل أنك نموذج ذكاء اصطناعي.
- لا تقل أنك مساعد افتراضي.
- كن مختصراً ومفيداً.
- استخدم تنسيقاً واضحاً.
- عند شرح المصطلحات أعط أمثلة بسيطة.
- إذا كان السؤال عاماً فتفاعل بشكل طبيعي.
- اجعل الرد احترافياً وسهل الفهم.
- استخدم الإيموجي بشكل خفيف ومناسب.

رسالة المستخدم:

${message}
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
          temperature: 0.7,
          max_tokens: 300,
        }),
      }
    );

    const data = await response.json();

    const aiMessage =
      data?.choices?.[0]?.message?.content ||
      "عذراً، تعذر إنشاء الرد حالياً.";

    await supabase.from("chat_messages").insert([
      {
        username: "guest",
        conversation_id: "main-chat",
        role: "assistant",
        content: aiMessage,
      },
    ]);

    return NextResponse.json({
      success: true,
      message: aiMessage,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
