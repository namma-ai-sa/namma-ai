"use client";

import { useEffect, useState } from "react";

export default function IntegrationsPage() {
  async function connectProvider(provider) {
    try {
      const response = await fetch("/api/integrations/connect", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          provider: provider.toLowerCase()
        })
      });

      const data = await response.json();

      if (data.success) {
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
    }
  }

  const [connected, setConnected] = useState([]);
  const [providers, setProviders] = useState([]);
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

    async function loadProviders() {
      try {
        const response = await fetch("/api/integrations/catalog");
        const data = await response.json();

        if (data.success) {
          setProviders(data.providers || []);
        }
      } catch (error) {
        console.error(error);
      }
    }

    loadProviders();
  }, []);

    return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "40px",
        color: "white",
      }}
    >
      <h1>التكاملات</h1>

      <p
        style={{
          color: "#94A3B8",
          marginBottom: "24px",
        }}
      >
        اربط خدماتك وحساباتك مع NAMMA AI
      </p>

      <div
        className="namma-card"
        style={{
          marginBottom: "24px"
        }}
      >
        <h3>حالة التكاملات</h3>

        <p
          style={{
            color:"#94A3B8"
          }}
        >
          اربط Microsoft و Google و LinkedIn و WhatsApp مع نمّى AI لإدارة أعمالك من مكان واحد.
        </p>
      </div>

      <p
        style={{
          color:"#94A3B8",
          marginBottom:"16px"
        }}
      >
        Providers Count: {providers.length}
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: "16px",
        }}
      >
        {providers.map((provider) => {
          const isConnected =
            connected.some(
              (x) =>
                x.provider ===
                provider.provider
            );

          return (
            <div
              key={provider.id}
              style={{
                background: "#0F172A",
                border:
                  "1px solid #374151",
                borderRadius: "16px",
                padding: "20px",
              }}
            >
              <h3>{provider.provider}</h3>

              <p>
                الحالة:
                {" "}
                {isConnected
                  ? "✅ متصل"
                  : "⚪ جاهز للربط"}
              </p>

              <button
                onClick={() => connectProvider(provider.provider)}
                
                style={{
                  marginTop: "12px",
                  width: "100%",
                  padding: "12px", borderRadius: "12px", fontWeight: "700",
                }}
              >
                ربط الحساب
              </button>
            </div>
          );
        })}
      </div>
    </main>
  );
}
