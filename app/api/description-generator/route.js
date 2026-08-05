import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const input = searchParams.get("input");

    if (!input) {
      return NextResponse.json(
        { error: "يرجى إدخال وصف بسيط للشيء الذي تريد كتابة وصف له" },
        { status: 400 }
      );
    }

    const prompt = `
    أنشئ وصفاً احترافياً بناءً على هذا الوصف:
    "${input}"

    أريد منك:
    - وصف قصير
    - وصف طويل
    - وصف تسويقي
    - وصف رسمي
    - وصف عاطفي
    - وصف مناسب للمتاجر الإلكترونية
    - وصف مناسب للفيديو
    - وصف مناسب للحسابات
    - وصف مناسب للمنشورات

    قدم الإجابة بشكل منسق وواضح.
    `;

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    const result = completion.choices[0].message.content;

    return NextResponse.json({ result });
  } catch (error) {
    console.error("Description generator error:", error);
    return NextResponse.json(
      { error: "حدث خطأ أثناء إنشاء الوصف" },
      { status: 500 }
    );
  }
}
