"use client";

import { useEffect, useState } from "react";

export default function Conversations() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    loadConversations();
  }, []);

  async function loadConversations() {
    const response = await fetch(
      "/api/conversations?username=abdulrahman"
    );

    const data = await response.json();

    if (data.success) {
      setItems(data.conversations || []);
    }
  }

  async function createConversation() {
    await fetch("/api/create-conversation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "abdulrahman",
        title: "محادثة جديدة",
      }),
    });

    loadConversations();
  }

  return (
    <div style={{ marginBottom: "20px" }}>
      <button onClick={createConversation}>
        + محادثة جديدة
      </button>

      <div style={{ marginTop: "15px" }}>
        {items.map((item) => (
          <div key={item.id}>
            📁 {item.title}
          </div>
        ))}
      </div>
    </div>
  );
}
