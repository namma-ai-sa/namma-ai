import Messages from "./messages";
import Chat from "./chat";
import Conversations from "./conversations";

export default function AIPage() {
  return (
    <main
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "40px 20px",
        color: "white",
      }}
    >
      <h1>🌱 نمّى AI</h1>

      <p
        style={{
          color: "#9ca3af",
          marginTop: "10px",
          marginBottom: "25px",
        }}
      >
        🟢 جاهز للمساعدة
      </p>

      <Conversations />

      <Messages />

      <Chat />
    </main>
  );
}