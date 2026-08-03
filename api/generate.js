export default async function handler(req, res) {

  const topic = req.query.topic || "موضوع عام";

  res.status(200).json({
    success: true,

    article:
    `${topic} من المواضيع المهمة التي تستحق الاهتمام.`,

    seo:
    `أفضل الكلمات المفتاحية المتعلقة بـ ${topic}`,

    social:
    `اكتشف أسرار ${topic} وكيف تستفيد منها 🚀`,

    video:
    `5 أفكار فيديو ناجحة حول ${topic}`,

    image:
    `تصميم احترافي يعبر عن ${topic}`
  });

}
