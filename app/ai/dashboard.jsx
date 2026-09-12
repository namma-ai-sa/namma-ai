"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [stats, setStats] = useState({
    users: 0,
    integrations: 0,
  });

  const [summary, setSummary] = useState({
    users: 0,
    projects: 0,
    conversations: 0,
    integrations: 0,
  });

  const [status, setStatus] = useState({
    auth: "-",
    integrations: "-",
    ai: "-",
    crm: "-",
    projects: "-",
  });

  useEffect(() => {
    async function loadDashboard() {
      try {
        const [statsRes, summaryRes, statusRes] =
          await Promise.all([
            fetch("/api/dashboard/stats"),
            fetch("/api/dashboard/summary"),
            fetch("/api/system/status"),
          ]);

        const statsData =
          await statsRes.json();

        const summaryData =
          await summaryRes.json();

        const statusData =
          await statusRes.json();

        if (statsData.success) {
          setStats(statsData.stats);
        }

        if (summaryData.success) {
          setSummary(summaryData.metrics);
        }

        if (statusData.success) {
          setStatus(statusData);
        }
      } catch (error) {
        console.error(error);
      }
    }

    loadDashboard();
  }, []);

  const cards = [
    {
      title: "المستخدمون",
      value: summary.users,
      icon: "👥",
    },
    {
      title: "المحادثات",
      value: summary.conversations,
      icon: "💬",
    },
    {
      title: "التكاملات",
      value: summary.integrations,
      icon: "🔗",
    },
    {
      title: "المشاريع",
      value: summary.projects,
      icon: "📁",
    },
  ];

  return (
    <div style={{ marginBottom: "20px" }}>
      <div style={{ marginBottom: "25px" }}>
        <h2
          style={{
            color: "white",
            fontSize: "28px",
            marginBottom: "10px",
          }}
        >
          أهلاً بك في نمّى AI
        </h2>

        <p
          style={{
            color: "#334155",
          }}
        >
          مركز التحكم الذكي للأعمال
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(180px,1fr))",
          gap: "15px",
        }}
      >
        {cards.map((item, i) => (
          <div
            key={i}
            style={{
              background: "#111827",
              border: "1px solid #374151",
              borderRadius: "16px",
              padding: "20px",
            }}
          >
            <div
              style={{
                fontSize: "26px",
                marginBottom: "10px",
              }}
            >
              {item.icon}
            </div>

            <div
              style={{
                color: "#334155",
                fontSize: "14px",
              }}
            >
              {item.title}
            </div>

            <div
              style={{
                color: "white",
                fontSize: "26px",
                fontWeight: "bold",
              }}
            >
              {item.value}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: "20px",
          background: "#111827",
          border: "1px solid #374151",
          borderRadius: "16px",
          padding: "20px",
        }}
      >
        <h3
          style={{
            color: "#fff",
            marginBottom: "15px",
          }}
        >
          🟢 حالة المنصة
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(150px,1fr))",
            gap: "10px",
          }}
        >
          <div>Auth: {status.auth}</div>
          <div>AI: {status.ai}</div>
          <div>CRM: {status.crm}</div>
          <div>Projects: {status.projects}</div>
          <div>
            Integrations: {status.integrations}
          </div>
        </div>
      </div>
    </div>
  );
}
