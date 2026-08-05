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
        { error: "يرجى إدخال وصف المحتوى أو المنتج أو الفكرة" },
        { status: 400 }
      );
    }

    const prompt = `
    أنشئ عناوين قوية بناءً على هذا الوصف:
    "${input}"

    أريد منك:
    - عناوين قصيرة
    - عناوين طويلة
    - عناوين تسويقية
    - عناوين عاطفية
    - عناوين رسمية
    - عناوين للفيديو
    - عناوين للمتاجر
    - عناوين للمنشورات
    - عناوين للريلز
    - عناوين مبتكرة وغير تقليدية

    قدم الإجابة بشكل منسق وواضح.
    `;

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    const result = completion.choices[0].message.content;

    return NextResponse.json({ result });
  } catch (error) {
    console.error("Title generator error:", error);
    return NextResponse.json(
      { error: "حدث خطأ أثناء إنشاء العناوين" },
      { status: 500 }
    );
  }
}
