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
        { error: "يرجى إدخال رابط المتجر أو وصفه" },
        { status: 400 }
      );
    }

    const prompt = `
    حلل هذا المتجر الإلكتروني تحليلاً كاملاً:
    "${input}"

    أريد منك:
    - تحليل تجربة المستخدم
    - تحليل المنتجات
    - تحليل الأسعار
    - تحليل صفحات الهبوط
    - تحليل السلة والدفع
    - تحليل سرعة المتجر
    - تحليل التسويق
    - نقاط القوة
    - نقاط الضعف
    - توصيات تحسين
    - اقتراحات زيادة المبيعات
    - استراتيجية تطوير لمدة 30 يوم

    قدم الإجابة بشكل منسق وواضح.
    `;

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    const result = completion.choices[0].message.content;

    return NextResponse.json({ result });
  } catch (error) {
    console.error("Ecommerce analyze error:", error);
    return NextResponse.json(
      { error: "حدث خطأ أثناء تحليل المتجر" },
      { status: 500 }
    );
  }
}
