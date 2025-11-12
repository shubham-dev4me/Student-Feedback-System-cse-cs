import { type NextRequest, NextResponse } from "next/server"
import { getFeedbackBySemesterAndTeacher, getSubmissionCount } from "@/lib/semester-feedback"

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const semester = Number.parseInt(searchParams.get("semester") || "3")
    const teacherId = Number.parseInt(searchParams.get("teacherId") || "1")

    console.log("[v0] Fetching feedback for semester:", semester, "teacher:", teacherId)

    const feedbackList = await getFeedbackBySemesterAndTeacher(semester, teacherId)
    const submissionCount = await getSubmissionCount(semester, teacherId)

    return NextResponse.json({
      success: true,
      feedbackList,
      submissionCount,
    })
  } catch (error) {
    console.error("[v0] API error:", error)
    return NextResponse.json({ error: "Failed to retrieve feedback" }, { status: 500 })
  }
}
