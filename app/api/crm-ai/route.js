import { NextResponse } from "next/server";

export async function POST(req) {

  try {

    const {
      name,
      email,
      phone,
      status,
      notes,
      last_followup,
      next_followup
    } = await req.json();

    const prompt = `
أنت مدير مبيعات وخبير CRM.

قم بتحليل العميل التالي:

الاسم:
${name || "-"}

البريد:
${email || "-"}

الجوال:
${phone || "-"}

الحالة:
${status || "-"}

الملاحظات:
${notes || "-"}

آخر متابعة:
${last_followup || "-"}

المتابعة القادمة:
${next_followup || "-"}

أعطني التقرير بهذا الشكل فقط:

🎯 Interest Score:
/10

💰 Closing Probability:
%

✅ Recommended Next Action:

📅 Recommended Follow-up Timing:

⚠️ Expected Objections:

💬 Recommended Message:

📊 Lead Health:
Hot / Warm / Cold
`;

    const response =
      await fetch(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          method:"POST",
          headers:{
            Authorization:
              `Bearer ${process.env.OPENROUTER_API_KEY}`,
            "Content-Type":
              "application/json"
          },
          body:JSON.stringify({
            model:
              "deepseek/deepseek-chat",
            messages:[
              {
                role:"user",
                content:prompt
              }
            ],
            temperature:0.3,
            max_tokens:1400
          })
        }
      );

    const data =
      await response.json();

    return NextResponse.json({
      success:true,
      result:
        data?.choices?.[0]?.message?.content ||
        "لا توجد نتيجة"
    });

  } catch(error) {

    return NextResponse.json({
      success:false,
      message:error.message
    });

  }

}
