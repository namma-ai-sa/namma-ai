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
        { error: "يرجى إدخال وصف المنتج أو الخدمة" },
        { status: 400 }
      );
    }

    const prompt = `
    أنشئ إعلاناً احترافياً بناءً على هذا الوصف:
    "${input}"

    أريد منك:
    - نسخة قصيرة
    - نسخة طويلة
    - نسخة تسويقية قوية
    - نسخة عاطفية
    - نسخة رسمية
    - Call to Action
    - أفكار إعلانات إضافية
    - اقتراح منصات مناسبة للإعلان
    - اقتراحات صور أو فيديو للإعلان

    قدم الإجابة بشكل منسق وواضح.
    `;

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    const result = completion.choices[0].message.content;

    return NextResponse.json({ result });
  } catch (error) {
    console.error("Ad generator error:", error);
    return NextResponse.json(
      { error: "حدث خطأ أثناء إنشاء الإعلان" },
      { status: 500 }
    );
  }
}
