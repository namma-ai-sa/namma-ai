async function generateContent() {

  const response = await fetch("./generate.js", {
    method: "POST"
  });

  const data = await response.json();

  alert(
    "📝 " + data.article +
    "\n\n🔍 " + data.seo +
    "\n\n📱 " + data.social +
    "\n\n🎥 " + data.video +
    "\n\n🎨 " + data.image
  );

}
