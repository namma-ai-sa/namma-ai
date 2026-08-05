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
        { error: "يرجى إدخال رابط الحساب أو وصف المحتوى" },
        { status: 400 }
      );
    }

    const prompt = `
    حلل هذا الحساب أو المحتوى تحليلاً كاملاً:
    "${input}"

    أريد منك:
    - تحليل الجمهور
    - نقاط القوة
    - نقاط الضعف
    - أفضل أوقات النشر
    - أفضل أنواع المحتوى لهذا الحساب
    - توصيات لتحسين الأداء
    - أفكار محتوى جاهزة للنشر
    - أفضل 5 هاشتاقات مناسبة
    - تحليل المنافسين (بشكل عام)
    - اقتراح استراتيجية محتوى لمدة 30 يوم

    قدم الإجابة بشكل منسق وواضح.
    `;

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    const result = completion.choices[0].message.content;

    return NextResponse.json({ result });
  } catch (error) {
    console.error("Social analyze error:", error);
    return NextResponse.json(
      { error: "حدث خطأ أثناء تحليل الحساب" },
      { status: 500 }
    );
  }
}
