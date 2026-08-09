"use client";

import { useEffect, useState } from "react";

export default function CRMPage() {
  const [leads, setLeads] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  async function loadLeads() {
    const res = await fetch(
      "/api/crm-leads"
    );

    const data = await res.json();

    setLeads(data.leads || []);
  }

  useEffect(() => {
    loadLeads();
  }, []);

  async function saveLead() {
    await fetch("/api/crm-leads", {
      method: "POST",
      headers: {
        "Content-Type":
          "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        status: "جديد"
      })
    });

    setName("");
    setEmail("");
    setPhone("");

    loadLeads();
  }

  return (
    <main
      style={{
        maxWidth: "1000px",
        margin: "40px auto",
        color: "white"
      }}
    >
      <h1>📊 CRM V2</h1>

      <input
        placeholder="الاسم"
        value={name}
        onChange={(e)=>
          setName(e.target.value)
        }
      />

      <br /><br />

      <input
        placeholder="البريد"
        value={email}
        onChange={(e)=>
          setEmail(e.target.value)
        }
      />

      <br /><br />

      <input
        placeholder="الجوال"
        value={phone}
        onChange={(e)=>
          setPhone(e.target.value)
        }
      />

      <br /><br />

      <button onClick={saveLead}>
        ➕ إضافة عميل
      </button>

      <hr />

      {leads.map((lead) => (
        <div
          key={lead.id}
          style={{
            padding: "20px",
            marginTop: "10px",
            background: "#111827",
            borderRadius: "12px"
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
        </div>
      ))}
    </main>
  );
}
