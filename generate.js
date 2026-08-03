export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method Not Allowed"
    });
  }

  return res.status(200).json({
    success: true,
    article: "مقال تجريبي من نمّى AI",
    seo: "وصف SEO تجريبي",
    social: "منشور X تجريبي",
    video: "سكربت فيديو تجريبي",
    image: "برومبت صورة تجريبي"
  });

}
