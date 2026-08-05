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
        { error: "يرجى إدخال وصف الهوية أو رابط الحساب أو المتجر" },
        { status: 400 }
      );
    }

    const prompt = `
    حلل الهوية البصرية بناءً على هذا الوصف:
    "${input}"

    أريد منك:
    - تحليل الشعار
    - تحليل الألوان
    - تحليل الخطوط
    - تحليل الرسالة
    - تحليل الجمهور
    - تحليل أسلوب المحتوى
    - نقاط القوة
    - نقاط الضعف
    - توصيات تحسين
    - اقتراحات تطوير الهوية
    - اقتراحات توحيد الهوية عبر المنصات

    قدم الإجابة بشكل منسق وواضح.
    `;

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    const result = completion.choices[0].message.content;

    return NextResponse.json({ result });
  } catch (error) {
    console.error("Brand identity error:", error);
    return NextResponse.json(
      { error: "حدث خطأ أثناء تحليل الهوية" },
      { status: 500 }
    );
  }
}
