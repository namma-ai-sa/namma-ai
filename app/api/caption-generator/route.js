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
        { error: "يرجى إدخال وصف المحتوى أو الفكرة" },
        { status: 400 }
      );
    }

    const prompt = `
    أنشئ كابتشن احترافي بناءً على هذا الوصف:
    "${input}"

    أريد منك:
    - كابتشن قصير
    - كابتشن طويل
    - كابتشن تسويقي
    - كابتشن عاطفي
    - كابتشن رسمي
    - كابتشن مناسب للصور
    - كابتشن مناسب للفيديو
    - كابتشن مناسب للريلز
    - Call to Action
    - نص جاهز للنشر

    قدم الإجابة بشكل منسق وواضح.
    `;

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    const result = completion.choices[0].message.content;

    return NextResponse.json({ result });
  } catch (error) {
    console.error("Caption generator error:", error);
    return NextResponse.json(
      { error: "حدث خطأ أثناء إنشاء الكابتشن" },
      { status: 500 }
    );
  }
}
