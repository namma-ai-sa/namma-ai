"use client";

import Messages from "./messages";
import Chat from "./chat";
import Conversations from "./conversations";
import Cards from "./cards";
import Dashboard from "./dashboard";
import { useState } from "react";

import AuthGuard from "../components/AuthGuard";
import UserInfo from "../components/UserInfo";
import LogoutButton from "../components/LogoutButton";

import {
  ConversationProvider,
} from "./context/ConversationContext";

export default function AIPage() {
  const [cardPrompt,setCardPrompt]=useState("");
  return (
    <AuthGuard>
      <ConversationProvider>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "280px 1fr",
            minHeight: "100vh",
            background: "#030712",
          }}
        >
          <aside
            style={{
              borderLeft: "1px solid #374151",
              background: "#111827",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <h2
              style={{
                color: "#3b82f6",
                fontSize: "26px",
              }}
            >
              🌱 NAMMA AI
            </h2>

            <Conversations />

            <div style={{ marginTop: "auto" }}>
              <UserInfo />
              <LogoutButton />
            </div>
          </aside>

          <main
            style={{
              padding: "30px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <div>
              <h1
                style={{
                  fontSize: "32px",
                  marginBottom: "8px",
                }}
              >
                مركز نمو الأعمال 🚀
              </h1>

              <p
                style={{
                  color: "#94a3b8",
                }}
              >
                التسويق • المبيعات • المحتوى • SEO • التحليل
              </p>
            </div>

            <Dashboard />

            <Cards onSelect={setCardPrompt} />

            <div
              style={{
                flex: 1,
                background: "#111827",
                border: "1px solid #374151",
                borderRadius: "20px",
                padding: "20px",
                overflowY: "auto",
              }}
            >
              <Messages />
            </div>

            <Chat initialMessage={cardPrompt} />
          </main>
        </div>
      </ConversationProvider>
    </AuthGuard>
  );
}
