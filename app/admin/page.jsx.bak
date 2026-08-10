"use client";

import {
  useEffect,
  useState
} from "react";

export default function AdminPage() {

  const [stats,setStats] =
    useState({
      users:0,
      crm:0,
      conversations:0
    });

  useEffect(() => {

    async function loadStats() {

      const res =
        await fetch(
          "/api/admin-stats"
        );

      const data =
        await res.json();

      if(data.success){
        setStats(data);
      }
    }

    loadStats();

  }, []);

  const cards = [
    {
      title:"المستخدمون",
      value:stats.users,
      icon:"👥",
      color:"#3b82f6"
    },
    {
      title:"المحادثات",
      value:stats.conversations,
      icon:"💬",
      color:"#22c55e"
    },
    {
      title:"عملاء CRM",
      value:stats.crm,
      icon:"📊",
      color:"#f59e0b"
    }
  ];

  return (
    <main className="container">
      <h1
        style={{
          marginBottom:"25px"
        }}
      >
        ⚡ لوحة التحكم
      </h1>

      <div
        className="mobile-grid"
        style={{
          display:"grid",
          gridTemplateColumns:
          "repeat(auto-fit,minmax(220px,1fr))",
          gap:"20px"
        }}
      >
        {cards.map((card,index)=>(

          <div
            key={index}
            className="card"
          >
            <div
              style={{
                fontSize:"36px"
              }}
            >
              {card.icon}
            </div>

            <h3>
              {card.title}
            </h3>

            <div
              style={{
                color:card.color,
                fontSize:"34px",
                fontWeight:"bold"
              }}
            >
              {card.value}
            </div>

          </div>

        ))}
      </div>
    </main>
  );
}
