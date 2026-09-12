"use client";

import { useEffect, useState } from "react";

export default function IntegrationsPage() {
  const [connected, setConnected] =
    useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch(
          "/api/my-integrations"
        );

        const data = await response.json();

        if (data.success) {
          setConnected(
            data.integrations || []
          );
        }
      } catch (error) {
        console.error(error);
      }
    }

    loadData();
  }, []);

  const providers = [
    "Microsoft",
    "Google",
    "LinkedIn",
    "YouTube",
    "TikTok",
    "Instagram",
    "WhatsApp",
    "Stripe",
    "GitHub",
  ];

  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "40px",
        color: "white",
      }}
    >
      <h1>🔗 Integrations Hub</h1>

      <p
        style={{
          color: "#94a3b8",
          marginBottom: "24px",
        }}
      >
        اربط خدماتك وحساباتك مع NAMMA AI
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(240px,1fr))",
          gap: "16px",
        }}
      >
        {providers.map((provider) => {
          const isConnected =
            connected.some(
              (x) =>
                x.provider ===
                provider.toLowerCase()
            );

          return (
            <div
              key={provider}
              style={{
                background: "#111827",
                border:
                  "1px solid #374151",
                borderRadius: "16px",
                padding: "20px",
              }}
            >
              <h3>{provider}</h3>

              <p>
                Status:
                {" "}
                {isConnected
                  ? "✅ Connected"
                  : "⚪ Ready"}
              </p>

              <button
                disabled
                style={{
                  marginTop: "12px",
                  width: "100%",
                  padding: "10px",
                }}
              >
                Connect Soon
              </button>
            </div>
          );
        })}
      </div>
    </main>
  );
}
