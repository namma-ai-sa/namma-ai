"use client";

import { useEffect, useState } from "react";

export default function UserInfo() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  if (!user) return null;

  return (
    <div
      style={{
        marginBottom: "20px",
        padding: "12px",
        borderRadius: "12px",
        background: "#111827",
      }}
    >
      👤 {user.name || user.username}
    </div>
  );
}
