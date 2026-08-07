import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    const question =
      searchParams.get("topic") || "مرحبا";

    const prompt = `
أنت نمّى AI 🌱.

مساعد عربي احترافي وودود.

تحدث بشكل طبيعي ومختصر.

لا تقل:
- أنا نموذج ذكاء اصطناعي
- أنا مساعد افتراضي
- لا أملك مشاعر

إذا قال المستخدم:
كيف حالك

أجب بشكل ودي مثل:
بخير والحمد لله 🌱 كيف أقدر أخدمك اليوم؟

إذا كانت الرسالة عامة مثل:
ابي قهوة
وش عندك
هلا

فتفاعل معه بشكل طبيعي مثل شخص حقيقي.

كن:
- مختصر
- ذكي
- عملي
- بشوش

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
          model:
            "nvidia/nemotron-3-ultra-550b-a55b:free",
          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
          temperature: 0.8,
          max_tokens: 800,
        }),
      }
    );

    const data = await response.json();

    const result =
      data?.choices?.[0]?.message?.content ||
      "عذراً، ما قدرت أجهز الرد حالياً.";

    await supabase
      .from("chat_messages")
      .insert([
        {
          username: "guest",
          conversation_id: "main-chat",
          role: "assistant",
          content: result,
        },
      ]);

    return NextResponse.json(
      { result },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        result: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
