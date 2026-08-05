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
        { error: "يرجى إدخال وصف المتجر أو المجال أو نوع المنتجات" },
        { status: 400 }
      );
    }

    const prompt = `
    أنشئ أفكار منتجات قوية بناءً على هذا الوصف:
    "${input}"

    أريد منك:
    - أفكار منتجات جديدة
    - أفكار تطوير منتجات موجودة
    - أفكار مشاريع جديدة
    - أفكار منتجات رقمية
    - أفكار منتجات فعلية
    - تحليل السوق
    - اقتراحات تسعير
    - توصيات تسويقية
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
    console.error("Product ideas error:", error);
    return NextResponse.json(
      { error: "حدث خطأ أثناء إنشاء الأفكار" },
      { status: 500 }
    );
  }
}
