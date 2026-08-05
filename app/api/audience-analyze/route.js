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
        { error: "يرجى إدخال وصف الجمهور أو الحساب" },
        { status: 400 }
      );
    }

    const prompt = `
    حلل الجمهور بناءً على هذا الوصف:
    "${input}"

    أريد منك:
    - الفئة العمرية
    - الاهتمامات
    - السلوك الشرائي
    - المنصات التي يستخدمونها
    - أفضل أنواع المحتوى لهم
    - أفضل أوقات النشر
    - نقاط القوة في الجمهور
    - نقاط الضعف
    - توصيات للوصول لهم
    - استراتيجية محتوى مناسبة للجمهور لمدة 30 يوم

    قدم الإجابة بشكل منسق وواضح.
    `;

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    const result = completion.choices[0].message.content;

    return NextResponse.json({ result });
  } catch (error) {
    console.error("Audience analyze error:", error);
    return NextResponse.json(
      { error: "حدث خطأ أثناء تحليل الجمهور" },
      { status: 500 }
    );
  }
}
