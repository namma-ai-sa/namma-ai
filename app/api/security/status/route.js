import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    success: true,
    security: {
      jwt: true,
      authGuard: true,
      sessionApi: true,
      integrationsTable: true,
      score: 80
    }
  });
}
