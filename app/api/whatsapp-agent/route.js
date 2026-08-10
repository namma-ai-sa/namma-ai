import { NextResponse } from "next/server";

export async function POST(req) {

  try {

    const {
      message
    } = await req.json();

    const prompt = `
أنت خبير مبيعات واتساب و CRM.

حلل الرسالة التالية:

${message}

أعطني النتيجة بهذا التنسيق فقط:

🎯 Intent Score:
/10

🔥 Lead Temperature:
Hot / Warm / Cold

💰 Closing Probability:
%

✅ Suggested Reply:

📅 Follow-up Timing:

🚀 Next Best Action:

⚠️ Possible Objections:
`;

    const response =
      await fetch(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          method:"POST",
          headers:{
            Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            model:"deepseek/deepseek-chat",
            messages:[
              {
                role:"user",
                content:prompt
              }
            ],
            temperature:0.3,
            max_tokens:1200
          })
        }
      );

    const data =
      await response.json();

    return NextResponse.json({
      success:true,
      reply:
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
