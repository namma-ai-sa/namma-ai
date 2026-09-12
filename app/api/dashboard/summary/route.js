import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    success: true,
    metrics: {
      users: 0,
      projects: 0,
      conversations: 0,
      integrations: 0
    }
  });
}
