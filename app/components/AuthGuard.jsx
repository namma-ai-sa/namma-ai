"use client";

import { useEffect, useState } from "react";

export default function AuthGuard({ children }) {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    async function checkAuth() {
      try {
        const response = await fetch("/api/session");

        const data = await response.json();

        if (data.success) {
          setAuthenticated(true);
        } else {
          window.location.href = "/login";
        }
      } catch (error) {
        window.location.href = "/login";
      } finally {
        setLoading(false);
      }
    }

    checkAuth();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#030712",
          color: "#fff",
        }}
      >
        جاري التحقق...
      </div>
    );
  }

  if (!authenticated) {
    return null;
  }

  return children;
}
