"use client";

import { useEffect, useState } from "react";

export default function CRMPage() {
  const [leads, setLeads] = useState([]);
  const [timeline, setTimeline] = useState([]);
  const [selectedLead, setSelectedLead] = useState(null);

  const [analysis, setAnalysis] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  async function loadLeads() {
    const res = await fetch("/api/crm-leads");
    const data = await res.json();
    setLeads(data.leads || []);
  }

  async function loadTimeline(leadId) {
    const res = await fetch(
      `/api/crm-timeline?leadId=${leadId}`
    );

    const data = await res.json();

    setTimeline(data.items || []);
  }

  useEffect(() => {
    loadLeads();
  }, []);

  async function saveLead() {
    await fetch("/api/crm-leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        status: "جديد",
      }),
    });

    setName("");
    setEmail("");
    setPhone("");

    loadLeads();
  }

  async function analyzeLead(lead) {
    const res = await fetch("/api/crm-ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(lead),
    });

    const data = await res.json();

    setAnalysis(data.result || "");

    await fetch(
      "/api/crm-leads/recommendation",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          id: lead.id,
          ai_recommendation:
            data.result || "",
        }),
      }
    );

    loadLeads();
  }

  async function deleteLead(id) {
    await fetch(
      "/api/crm-leads/delete",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({ id }),
      }
    );

    loadLeads();
  }

  async function saveFollowup(lead) {
    await fetch(
      "/api/crm-leads/followup",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          id: lead.id,
          notes: lead.notes || "",
          last_followup:
            lead.last_followup || "",
          next_followup:
            lead.next_followup || "",
        }),
      }
    );

    loadLeads();
  }

  async function updateStatus(
    id,
    status
  ) {
    await fetch(
      "/api/crm-leads/status",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          id,
          status,
        }),
      }
    );

    loadLeads();
  }

  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "30px",
        color: "white",
      }}
    >
      <h1
        style={{
          fontSize: "42px",
          fontWeight: "800",
          marginBottom: "24px",
        }}
      >
        📊 CRM Premium
      </h1>

      <div
        style={{
          background: "#111827",
            border: "1px solid rgba(255,255,255,.08)",
          padding: "20px",
          borderRadius: "24px",
          marginBottom: "30px",
        }}
      >
        <h3>➕ إضافة عميل</h3>

        <input
          placeholder="الاسم"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <br />
        <br />

        <input
          placeholder="البريد"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <br />
        <br />

        <input
          placeholder="الجوال"
          value={phone}
          onChange={(e) =>
            setPhone(e.target.value)
          }
        />

        <br />
        <br />

        <button onClick={saveLead}>
          إضافة عميل
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "2fr 1fr",
          gap: "20px",
        }}
      >
        <div>
          {leads.map((lead) => (
            <div
              key={lead.id}
              style={{
                background: "#111827",
            border: "1px solid rgba(255,255,255,.08)",
                padding: "20px",
                borderRadius: "24px",
                marginBottom: "15px",
              }}
            >
              <h3>{lead.name}</h3>

              <p>{lead.email}</p>

              <p>{lead.phone}</p>

              <p>
                الحالة:
                {" "}
                {lead.status}
              </p>

              <select
                value={lead.status}
                onChange={(e) =>
                  updateStatus(
                    lead.id,
                    e.target.value
                  )
                }
              >
                <option>جديد</option>
                <option>متابعة</option>
                <option>مهتم</option>
                <option>تم الإغلاق</option>
              </select>

              <br />
              <br />

              <button
                onClick={() =>
                  analyzeLead(lead)
                }
              >
                🤖 تحليل AI
              </button>

              {" "}

              <button
                onClick={() => {
                  setSelectedLead(
                    lead
                  );
                  loadTimeline(
                    lead.id
                  );
                }}
              >
                📜 Timeline
              </button>

              {" "}

              <button
                onClick={() =>
                  saveFollowup(
                    lead
                  )
                }
              >
                💾 حفظ
              </button>

              {" "}

              <button
                onClick={() =>
                  deleteLead(
                    lead.id
                  )
                }
              >
                🗑️ حذف
              </button>
            </div>
          ))}
        </div>

        <div
          style={{
            background: "#111827",
            border: "1px solid rgba(255,255,255,.08)",
            padding: "20px",
            borderRadius: "24px",
            height: "fit-content",
          }}
        >
          <h3>
            📜 Timeline
          </h3>

          {selectedLead && (
            <p>
              العميل:
              {" "}
              {selectedLead.name}
            </p>
          )}

          {timeline.length === 0 && (
            <p>
              لا توجد أحداث
            </p>
          )}

          {timeline.map((item) => (
            <div
              key={item.id}
              style={{
                borderBottom:
                  "1px solid rgba(255,255,255,.1)",
                padding:
                  "10px 0",
              }}
            >
              <strong>
                {item.title ||
                  item.type ||
                  "حدث"}
              </strong>

              <div>
                {item.description}
              </div>

              <small>
                {item.created_at}
              </small>
            </div>
          ))}
        </div>
      </div>

      {analysis && (
        <div
          style={{
            marginTop: "30px",
            background:
              "#111827",
            border:
              "1px solid rgba(34,197,94,.35)",
            padding: "20px",
            borderRadius: "24px",
            whiteSpace:
              "pre-wrap",
          }}
        >
          <h2>
            🤖 تحليل العميل
          </h2>

          {analysis}
        </div>
      )}
    </main>
  );
}