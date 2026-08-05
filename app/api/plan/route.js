import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    const topic = searchParams.get("topic");
    const days = searchParams.get("days");

    if (!topic || !days) {
      return NextResponse.json(
        { error: "يرجى إدخال المجال وعدد الأيام" },
        { status: 400 }
      );
    }

    const prompt = `
    أنشئ خطة محتوى لمدة ${days} يوم.
    المجال: ${topic}

    أريد الخطة بهذا الشكل:
    - اليوم 1: فكرة المحتوى + وصف مختصر
    - اليوم 2: فكرة المحتوى + وصف مختصر
    ...
    - اليوم ${days}: فكرة المحتوى + وصف مختصر

    اجعل الأفكار متنوعة، عملية، ومناسبة للنشر على شبكات التواصل.
    قدمها باللغة العربية الفصحى.
    `;

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    const result = completion.choices[0].message.content;

    return NextResponse.json({ result });
  } catch (error) {
    console.error("Plan API Error:", error);
    return NextResponse.json(
      { error: "حدث خطأ أثناء إنشاء الخطة" },
      { status: 500 }
    );
  }
}
