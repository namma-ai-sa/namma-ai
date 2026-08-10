"use client";

import { useEffect, useState } from "react";

export default function UserInfo() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/api/session")
      .then((r) => r.json())
      .then((data) => {
        setUser(data.user || null);
      })
      .catch(() => {});
  }, []);

  if (!user) {
    return null;
  }

  return (
    <div
      style={{
        background: "rgba(255,255,255,.05)",
        border: "1px solid rgba(255,255,255,.08)",
        padding: "12px",
        borderRadius: "12px",
        marginBottom: "16px",
      }}
    >
      <strong>👤 المستخدم:</strong> {user.username || user.email}
    </div>
  );
}
