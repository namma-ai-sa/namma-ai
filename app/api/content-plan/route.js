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
        { error: "يرجى إدخال وصف الحساب أو المشروع" },
        { status: 400 }
      );
    }

    const prompt = `
    أنشئ خطة محتوى لمدة 30 يوم بناءً على هذا الوصف:
    "${input}"

    أريد منك:
    - خطة يومية لمدة 30 يوم
    - نوع المحتوى لكل يوم
    - فكرة المحتوى
    - صياغة جاهزة للنشر
    - أفضل وقت للنشر
    - هاشتاقات مناسبة
    - توصيات لتحسين المحتوى

    قدم الإجابة بشكل منسق وواضح.
    `;

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    const result = completion.choices[0].message.content;

    return NextResponse.json({ result });
  } catch (error) {
    console.error("Content plan error:", error);
    return NextResponse.json(
      { error: "حدث خطأ أثناء إنشاء الخطة" },
      { status: 500 }
    );
  }
}
