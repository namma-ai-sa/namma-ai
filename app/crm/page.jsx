"use client";

import { useState } from "react";

export default function CRMPage() {
  const [leads] = useState([
    {
      id: 1,
      name: "عميل محتمل 1",
      status: "جديد"
    },
    {
      id: 2,
      name: "عميل محتمل 2",
      status: "متابعة"
    },
    {
      id: 3,
      name: "عميل محتمل 3",
      status: "مغلق"
    }
  ]);

  return (
    <main
      style={{
        maxWidth: "1000px",
        margin: "40px auto",
        color: "white",
      }}
    >
      <h1>📊 CRM</h1>

      <div
        style={{
          display: "grid",
          gap: "15px",
          marginTop: "20px",
        }}
      >
        {leads.map((lead) => (
          <div
            key={lead.id}
            style={{
              padding: "20px",
              background: "#111827",
              border: "1px solid #374151",
              borderRadius: "16px",
            }}
          >
            <h3>{lead.name}</h3>

            <p>
              الحالة: {lead.status}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
