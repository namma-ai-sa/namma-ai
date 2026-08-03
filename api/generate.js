export default async function handler(req, res) {

  try {

    const topic = req.query.topic || "موضوع عام";

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent
?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `اكتب محتوى عربي احترافي عن: ${topic}`
                }
              ]
            }
          ]
        })
      }
    );

    const data = await response.json();

  return res.status(200).json(data);

  } catch (error) {

    return res.status(500).json({
      success: false,
      error: error.message
    });

  }

}
