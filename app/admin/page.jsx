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
      conversations:0,
      newLeads:0,
      followup:0,
      interested:0,
      closed:0
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

  const closingRate =
    stats.crm > 0
      ? Math.round(
          (stats.closed / stats.crm) * 100
        )
      : 0;

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
    },
    {
      title:"عملاء جدد",
      value:stats.newLeads,
      icon:"🟢",
      color:"#10b981"
    },
    {
      title:"قيد المتابعة",
      value:stats.followup,
      icon:"🟡",
      color:"#eab308"
    },
    {
      title:"مهتمون",
      value:stats.interested,
      icon:"🔵",
      color:"#3b82f6"
    },
    {
      title:"تم الإغلاق",
      value:stats.closed,
      icon:"✅",
      color:"#22c55e"
    }
  ];

  return (
    <main className="container">

      <h1
        style={{
          marginBottom:"25px"
        }}
      >
        ⚡ Admin Dashboard V3
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

      <div
        className="card"
        style={{
          marginTop:"25px"
        }}
      >
        <h2>
          📈 CRM Performance
        </h2>

        <p>
          نسبة الإغلاق:
          {" "}
          <strong>
            {closingRate}%
          </strong>
        </p>

        <p>
          العملاء المهتمون:
          {" "}
          <strong>
            {stats.interested}
          </strong>
        </p>

        <p>
          العملاء تحت المتابعة:
          {" "}
          <strong>
            {stats.followup}
          </strong>
        </p>
      </div>

      <div
        className="card"
        style={{
          marginTop:"20px"
        }}
      >
        <h2>
          🤖 AI Insights
        </h2>

        <p>
          {stats.interested >
          stats.closed
            ? "يوجد عدد جيد من العملاء المهتمين، يوصى بزيادة المتابعة اليومية."
            : "معدل الإغلاق جيد مقارنة بعدد العملاء المهتمين."}
        </p>

        <p>
          {stats.followup > 5
            ? "عدد العملاء قيد المتابعة مرتفع ويحتاج اهتماماً سريعاً."
            : "حجم المتابعات ضمن النطاق الطبيعي."}
        </p>

      </div>

    </main>
  );
}
