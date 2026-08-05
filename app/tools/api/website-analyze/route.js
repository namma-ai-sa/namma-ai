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
        { error: "يرجى إدخال رابط الموقع" },
        { status: 400 }
      );
    }

    const prompt = `
    حلل هذا الموقع تحليلاً كاملاً:
    "${input}"

    أريد منك:
    - تحليل SEO
    - سرعة الموقع
    - تجربة المستخدم
    - جودة المحتوى
    - نقاط القوة
    - نقاط الضعف
    - توصيات تحسين
    - تحليل المنافسين
    - اقتراحات تطوير
    - اقتراحات محتوى للموقع

    قدم الإجابة بشكل منسق وواضح.
    `;

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    const result = completion.choices[0].message.content;

    return NextResponse.json({ result });
  } catch (error) {
    console.error("Website analyze error:", error);
    return NextResponse.json(
      { error: "حدث خطأ أثناء تحليل الموقع" },
      { status: 500 }
    );
  }
}
