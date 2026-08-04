export default async function handler(req, res) {

  const selected =
    req.query.name || "نبض التقنية";

  const projects = {

    "نبض التقنية": {
      name: "نبض التقنية",
      status: "قيد التنفيذ",
      lastTask: "مقال الأمن السيبراني",
      nextTask: "فيديو الأمن السيبراني",
      progress: 65
    },

    "إدراك": {
      name: "إدراك",
      status: "تحت التجهيز",
      lastTask: "إنشاء الهوية",
      nextTask: "إعداد المحتوى",
      progress: 15
    }

  };

  return res.status(200).json({
    project:
      projects[selected] ||
      projects["نبض التقنية"]
  });

}
