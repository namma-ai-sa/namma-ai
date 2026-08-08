"use client";

import { useEffect, useState } from "react";
import { useConversation } from "./context/ConversationContext";

export default function Conversations() {
  const [items, setItems] = useState([]);
  const { setActiveConversationId } =
    useConversation();

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

      if (data.conversations?.length) {
        setActiveConversationId(
          data.conversations[0].id
        );
      }
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
          <div
            key={item.id}
            onClick={() =>
              setActiveConversationId(item.id)
            }
            style={{
              cursor: "pointer",
              marginBottom: "10px",
            }}
          >
            📁 {item.title}
          </div>
        ))}
      </div>
    </div>
  );
}
