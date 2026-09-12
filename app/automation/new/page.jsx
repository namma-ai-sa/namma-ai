"use client";

import { useState } from "react";

export default function NewTaskPage() {
  const [title, setTitle] = useState("");
  const [taskType, setTaskType] =
    useState("email");

  const [status, setStatus] =
    useState("scheduled");

  const [executeAt, setExecuteAt] =
    useState("");

  async function createTask() {
    const response = await fetch(
      "/api/tasks",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          title,
          task_type: taskType,
          status,
          execute_at:
            executeAt || null,
        }),
      }
    );

    const data = await response.json();

    if (data.success) {
      alert("✅ Task Created");
      window.location.href =
        "/automation";
    } else {
      alert(
        data.message ||
          "Failed"
      );
    }
  }

  return (
    <main
      style={{
        maxWidth: "700px",
        margin: "0 auto",
        padding: "40px",
        color: "white",
      }}
    >
      <h1>⚡ إنشاء مهمة</h1>

      <input
        placeholder="عنوان المهمة"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "12px",
        }}
      />

      <select
        value={taskType}
        onChange={(e) =>
          setTaskType(e.target.value)
        }
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "12px",
        }}
      >
        <option value="email">
          Email
        </option>

        <option value="linkedin">
          LinkedIn
        </option>

        <option value="whatsapp">
          WhatsApp
        </option>

        <option value="crm">
          CRM
        </option>
      </select>

      <input
        type="datetime-local"
        value={executeAt}
        onChange={(e) =>
          setExecuteAt(e.target.value)
        }
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "12px",
        }}
      />

      <button
        onClick={createTask}
        style={{
          padding: "12px 20px",
          background: "#2563eb",
          color: "#fff",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        إنشاء المهمة
      </button>
    </main>
  );
}
