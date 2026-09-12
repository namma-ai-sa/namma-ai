import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    success: true,
    auth: "online",
    integrations: "ready",
    ai: "online",
    crm: "online",
    projects: "online"
  });
}
