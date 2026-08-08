"use client";

import { useEffect, useState } from "react";

export default function AuthGuard({ children }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (!user) {
      window.location.href = "/login";
      return;
    }

    setReady(true);
  }, []);

  if (!ready) {
    return null;
  }

  return children;
}
