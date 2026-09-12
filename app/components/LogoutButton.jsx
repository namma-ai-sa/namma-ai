"use client";

export default function LogoutButton() {
  async function logout() {
    try {
      await fetch("/api/logout", {
        method: "POST",
      });
    } catch {}

    window.location.href = "/login";
  }

  return (
    <button
      onClick={logout}
      style={{
        width: "100%",
        padding: "10px",
        borderRadius: "10px",
        border: "none",
        cursor: "pointer",
        background: "#dc2626",
        color: "#fff",
      }}
    >
      🚪 تسجيل الخروج
    </button>
  );
}
