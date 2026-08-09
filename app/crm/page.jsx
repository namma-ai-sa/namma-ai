"use client";

import { useEffect, useState } from "react";

export default function CRMPage() {
  const [leads,setLeads]=useState([]);

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");

  async function loadLeads() {
    const res =
      await fetch("/api/crm-leads");

    const data =
      await res.json();

    setLeads(data.leads || []);
  }

  useEffect(() => {
    loadLeads();
  }, []);

  async function saveLead() {
    await fetch("/api/crm-leads",{
      method:"POST",
      headers:{
        "Content-Type":
        "application/json"
      },
      body:JSON.stringify({
        name,
        email,
        phone,
        status:"جديد"
      })
    });

    setName("");
    setEmail("");
    setPhone("");

    loadLeads();
  }

  async function deleteLead(id) {
    await fetch(
      "/api/crm-leads/delete",
      {
        method:"POST",
        headers:{
          "Content-Type":
          "application/json"
        },
        body:JSON.stringify({id})
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
        method:"POST",
        headers:{
          "Content-Type":
          "application/json"
        },
        body:JSON.stringify({
          id,
          status
        })
      }
    );

    loadLeads();
  }

  return (
    <main
      className="container"
      style={{
        color:"white"
      }}
    >
      <h1>📊 CRM V3</h1>

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

      <button
        onClick={saveLead}
      >
        ➕ إضافة عميل
      </button>

      <hr
        style={{
          margin:"20px 0"
        }}
      />

      {leads.map((lead)=>(

        <div
          key={lead.id}
          className="card"
          style={{
            marginBottom:"15px"
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

          <br />

          <select
            value={lead.status}
            onChange={(e)=>
              updateStatus(
                lead.id,
                e.target.value
              )
            }
          >
            <option>
              جديد
            </option>

            <option>
              متابعة
            </option>

            <option>
              مهتم
            </option>

            <option>
              تم الإغلاق
            </option>
          </select>

          <br /><br />

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
    </main>
  );
}
