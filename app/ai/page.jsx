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
import Logo from "../components/Logo";

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
            <div style={{display:"flex",justifyContent:"center"}}>
              <div
  style={{
    background:"#ffffff",
    padding:"10px",
    borderRadius:"16px",
    display:"inline-flex"
  }}
>
  <Logo />
</div>
            </div>

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
                  color: "#334155",
                }}
              >
                التسويق • المبيعات • المحتوى • SEO • التحليل
              </p>
            </div>

            <Chat initialMessage={cardPrompt} />

            <Cards onSelect={setCardPrompt} />

            <Dashboard />

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
          </main>
        </div>
      </ConversationProvider>
    </AuthGuard>
  );
}
