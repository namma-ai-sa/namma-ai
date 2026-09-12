"use client";

import { useState, useEffect } from "react";
import { useConversation } from "./context/ConversationContext";

export default function Chat({
  initialMessage = "",
}) {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState(null);

  const { activeConversationId } =
    useConversation();

  useEffect(() => {
    async function loadUser() {
      try {
        const response = await fetch("/api/me");
        const data = await response.json();

        if (data.success) {
          setUserId(data.user.id);
        }
      } catch (error) {
        console.error(error);
      }
    }

    loadUser();
  }, []);

  useEffect(() => {
    if (initialMessage) {
      setMessage(initialMessage);
    }
  }, [initialMessage]);

  const handleSend = async () => {
    if (
      !message.trim() ||
      loading ||
      !activeConversationId ||
      !userId
    ) {
      return;
    }

    const currentMessage = message;

    setMessage("");
    setLoading(true);

    try {
      await fetch(
        "/api/update-conversation-title",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            conversationId:
              activeConversationId,
            title:
              currentMessage.slice(0, 40),
          }),
        }
      );

      await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          userId,
          message: currentMessage,
          conversationId:
            activeConversationId,
        }),
      });
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return null;
}
