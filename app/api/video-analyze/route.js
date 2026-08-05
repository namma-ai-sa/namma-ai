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
        { error: "يرجى إدخال رابط الفيديو أو وصفه" },
        { status: 400 }
      );
    }

    const prompt = `
    حلل هذا الفيديو أو الوصف تحليلاً كاملاً:
    "${input}"

    أريد منك:
    - ملخص دقيق
    - نقاط القوة
    - نقاط الضعف
    - تحليل الجمهور المستهدف
    - أفكار محتوى مشتقة
    - توصيات لتحسين الفيديو
    - أفضل 3 عناوين مقترحة
    - أفضل 3 وصف فيديو مقترح
    - أفضل 5 هاشتاقات مناسبة

    قدم الإجابة بشكل منسق وواضح.
    `;

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    const result = completion.choices[0].message.content;

    return NextResponse.json({ result });
  } catch (error) {
    console.error("Video analyze error:", error);
    return NextResponse.json(
      { error: "حدث خطأ أثناء تحليل الفيديو" },
      { status: 500 }
    );
  }
}
