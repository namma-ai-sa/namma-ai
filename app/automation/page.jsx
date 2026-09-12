"use client";

import { useEffect, useState } from "react";

export default function AutomationPage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      try {
        const response = await fetch("/api/tasks");
        const data = await response.json();

        if (data.success) {
          setTasks(data.tasks || []);
        }
      } catch (error) {
        console.error(error);
      }
    }

    loadTasks();
  }, []);

  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "40px 20px",
        color: "white",
      }}
    >
      <h1>⚡ Automation Center</h1>

      <p
        style={{
          color: "#334155",
          marginBottom: "24px",
        }}
      >
        إدارة المهام المؤتمتة والجدولة.
      </p>

      <div
        style={{
          display: "grid",
          gap: "16px",
        }}
      >
        {tasks.map((task) => (
          <div
            key={task.id}
            style={{
              background: "#111827",
              border: "1px solid #374151",
              borderRadius: "16px",
              padding: "16px",
            }}
          >
            <h3>{task.title}</h3>

            <p>Type: {task.task_type}</p>

            <p>Status: {task.status}</p>

            <p>
              Execute:
              {" "}
              {task.execute_at || "Not Scheduled"}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
