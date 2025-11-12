import { type NextRequest, NextResponse } from "next/server"
import { submitFeedback } from "@/lib/semester-feedback"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { semester, studentRoll, teacherId, teacherName, subjectName, ratings } = body

    console.log("[v0] Feedback submission:", { semester, studentRoll, teacherName })

    const result = await submitFeedback(semester, {
      rollNumber: studentRoll,
      teacherId,
      teacherName,
      subject: subjectName,
      ratings,
    })

    return NextResponse.json({ success: true, feedback: result.data }, { status: 201 })
  } catch (error) {
    console.error("[v0] API error:", error)
    return NextResponse.json({ error: "Failed to submit feedback" }, { status: 500 })
  }
}
