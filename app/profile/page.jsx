"use client";

import AuthGuard from "../components/AuthGuard";
import UserInfo from "../components/UserInfo";

export default function ProfilePage() {
  return (
    <AuthGuard>
      <main
        style={{
          minHeight: "100vh",
          background: "#030712",
          color: "white",
          padding: "40px",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <h1
            style={{
              fontSize: "48px",
              fontWeight: "800",
              marginBottom: "20px",
            }}
          >
            👤 الملف الشخصي
          </h1>

          <UserInfo />

          <div
            className="namma-card"
            style={{
              padding: "24px",
              marginTop: "20px",
            }}
          >
            <h3>معلومات الحساب</h3>

            <p style={{ color: "#94A3B8" }}>
              سيتم إضافة الصورة الشخصية والبريد واسم المستخدم
              وإدارة كلمة المرور في المرحلة القادمة.
            </p>
          </div>
        </div>
      </main>
    </AuthGuard>
  );
}
