import { type NextRequest, NextResponse } from "next/server"
import { query } from "@/lib/db"

export async function POST(request: NextRequest) {
  try {
    const { studentId, semester, subject, rating, comments } = await request.json()

    const result = await query(
      `INSERT INTO feedback_responses 
       (student_id, semester, subject, rating, comments) 
       VALUES ($1, $2, $3, $4, $5) 
       RETURNING *`,
      [studentId, semester, subject, rating, comments],
    )

    return NextResponse.json({ success: true, feedback: result[0] }, { status: 201 })
  } catch (error) {
    console.error("Feedback submission error:", error)
    return NextResponse.json({ error: "Failed to submit feedback" }, { status: 500 })
  }
}

export async function GET() {
  try {
    const result = await query("SELECT * FROM feedback_responses ORDER BY created_at DESC")
    return NextResponse.json({ feedbacks: result }, { status: 200 })
  } catch (error) {
    console.error("Feedback retrieval error:", error)
    return NextResponse.json({ error: "Failed to retrieve feedback" }, { status: 500 })
  }
}
