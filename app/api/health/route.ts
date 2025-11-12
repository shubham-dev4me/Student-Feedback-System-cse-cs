import { NextResponse } from "next/server"
import { sql, isDatabaseConfigured } from "@/lib/db"

export async function GET() {
  try {
    if (!isDatabaseConfigured()) {
      console.log("[v0] Database URL not configured")
      return NextResponse.json(
        { status: "unhealthy", database: "disconnected", message: "DATABASE_URL not set" },
        { status: 503 },
      )
    }

    await sql`SELECT 1`
    console.log("[v0] Database connection successful")
    return NextResponse.json({ status: "healthy", database: "connected" }, { status: 200 })
  } catch (error) {
    console.log("[v0] Database connection error:", error)
    return NextResponse.json({ status: "unhealthy", database: "disconnected", error: String(error) }, { status: 503 })
  }
}
