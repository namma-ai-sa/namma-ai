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
        { error: "يرجى إدخال وصف المحتوى أو المجال" },
        { status: 400 }
      );
    }

    const prompt = `
    أنشئ هاشتاقات قوية بناءً على هذا الوصف:
    "${input}"

    أريد منك:
    - هاشتاقات عربية
    - هاشتاقات إنجليزية
    - هاشتاقات قصيرة
    - هاشتاقات طويلة
    - هاشتاقات ترند
    - هاشتاقات حسب المجال
    - هاشتاقات حسب المنصة (تيك توك، إنستغرام، تويتر)
    - هاشتاقات جاهزة للنسخ
    - توصيات للنشر

    قدم الإجابة بشكل منسق وواضح.
    `;

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    const result = completion.choices[0].message.content;

    return NextResponse.json({ result });
  } catch (error) {
    console.error("Hashtag generator error:", error);
    return NextResponse.json(
      { error: "حدث خطأ أثناء إنشاء الهاشتاقات" },
      { status: 500 }
    );
  }
}
