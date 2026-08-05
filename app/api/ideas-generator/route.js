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
        { error: "يرجى إدخال وصف الحساب أو المشروع أو المجال" },
        { status: 400 }
      );
    }

    const prompt = `
    أنشئ أفكاراً قوية بناءً على هذا الوصف:
    "${input}"

    أريد منك:
    - أفكار محتوى جاهزة
    - أفكار فيديو
    - أفكار صور
    - أفكار ريلز
    - أفكار تغريدات
    - أفكار حملات تسويقية
    - أفكار منتجات جديدة
    - أفكار تطوير مشروع
    - أفكار إعلانات
    - أفكار مبتكرة وغير تقليدية

    قدم الإجابة بشكل منسق وواضح.
    `;

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    const result = completion.choices[0].message.content;

    return NextResponse.json({ result });
  } catch (error) {
    console.error("Ideas generator error:", error);
    return NextResponse.json(
      { error: "حدث خطأ أثناء إنشاء الأفكار" },
      { status: 500 }
    );
  }
}
