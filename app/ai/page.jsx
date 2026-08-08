"use client";

import Messages from "./messages";
import Chat from "./chat";
import Conversations from "./conversations";

import AuthGuard from "../components/AuthGuard";
import UserInfo from "../components/UserInfo";
import LogoutButton from "../components/LogoutButton";

import {
  ConversationProvider,
} from "./context/ConversationContext";

export default function AIPage() {
  return (
    <AuthGuard>
      <ConversationProvider>
        <main
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            padding: "40px 20px",
            color: "white",
          }}
        >
          <h1>🌱 نمّى AI</h1>

          <UserInfo />

          <LogoutButton />

          <Conversations />

          <Messages />

          <Chat />
        </main>
      </ConversationProvider>
    </AuthGuard>
  );
}
