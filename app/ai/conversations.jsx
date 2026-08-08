"use client";

import { useEffect, useState } from "react";
import { useConversation } from "./context/ConversationContext";

export default function Conversations() {
  const [items, setItems] = useState([]);
  const [userId, setUserId] = useState(null);

  const {
    activeConversationId,
    setActiveConversationId,
  } = useConversation();

  useEffect(() => {
    const user = JSON.parse(
      localStorage.getItem("user") || "{}"
    );

    if (user.id) {
      setUserId(user.id);
    }
  }, []);

  useEffect(() => {
    if (userId) {
      loadConversations();
    }
  }, [userId]);

  async function loadConversations() {
    const response = await fetch(
      `/api/conversations?userId=${userId}`
    );

    const data = await response.json();

    if (data.success) {
      setItems(data.conversations || []);

      if (
        !activeConversationId &&
        data.conversations?.length
      ) {
        setActiveConversationId(
          data.conversations[0].id
        );
      }
    }
  }

  async function createConversation() {
    const response = await fetch(
      "/api/create-conversation",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          userId,
          title: "محادثة جديدة",
        }),
      }
    );

    const data = await response.json();

    if (
      data.success &&
      data.conversation
    ) {
      setActiveConversationId(
        data.conversation.id
      );
    }

    loadConversations();
  }

  return (
    <div style={{ marginBottom: "20px" }}>
      <button
        onClick={createConversation}
      >
        + محادثة جديدة
      </button>

      <div style={{ marginTop: "15px" }}>
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() =>
              setActiveConversationId(
                item.id
              )
            }
            style={{
              cursor: "pointer",
              marginBottom: "10px",
              padding: "8px",
              borderRadius: "8px",
              background:
                activeConversationId ===
                item.id
                  ? "#1f2937"
                  : "transparent",
            }}
          >
            📁 {item.title}
          </div>
        ))}
      </div>
    </div>
  );
}
