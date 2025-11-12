import { type NextRequest, NextResponse } from "next/server"
import { query } from "@/lib/db"

export async function POST(request: NextRequest) {
  try {
    const { username, password, role } = await request.json()

    // For admin login
    if (role === "admin") {
      const result = await query("SELECT * FROM admin_login WHERE username = $1 AND password = $2", [
        username,
        password,
      ])

      if (result.length > 0) {
        return NextResponse.json({ success: true, user: result[0] }, { status: 200 })
      }
    }

    // For student login
    if (role === "student") {
      const result = await query("SELECT * FROM students WHERE roll_number = $1 AND password = $2", [
        username,
        password,
      ])

      if (result.length > 0) {
        return NextResponse.json({ success: true, user: result[0] }, { status: 200 })
      }
    }

    return NextResponse.json({ success: false, error: "Invalid credentials" }, { status: 401 })
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
