import { sql, isDatabaseConfigured } from "@/lib/db"

export async function POST(request: Request) {
  try {
    const { semester, teacherId, teacherName, subject } = await request.json()

    if (!semester || !teacherId) {
      return Response.json({ error: "Missing required fields" }, { status: 400 })
    }

    if (!isDatabaseConfigured()) {
      return Response.json({
        questions: [],
        averages: [],
        totalResponses: 0,
        overallAverage: 0,
        percentage: 0,
      })
    }

    const tableName = `${semester}_sem_feedback`

    const feedbackData = await sql.query(
      `SELECT q1, q2, q3, q4, q5, q6, q7, q8, q9, q10 FROM ${tableName} WHERE teacher_id = ${teacherId}`,
    )

    // Ensure feedbackData is always an array
    const feedbackArray = Array.isArray(feedbackData) ? feedbackData : (feedbackData ? [feedbackData] : [])

    if (feedbackArray.length === 0) {
      return Response.json({
        questions: [],
        averages: [],
        totalResponses: 0,
        overallAverage: 0,
        percentage: 0,
      })
    }

    const questionAverages = []
    for (let i = 1; i <= 10; i++) {
      const questionKey = `q${i}`
      const ratings = feedbackArray.map((row: any) => row[questionKey])
      const avg = ratings.reduce((a: number, b: number) => a + b, 0) / ratings.length
      questionAverages.push(Number.parseFloat(avg.toFixed(2)))
    }

    const overallAverage = Number.parseFloat((questionAverages.reduce((a, b) => a + b, 0) / 10).toFixed(2))
    const percentage = Number.parseFloat(((overallAverage / 5) * 100).toFixed(0))

    return Response.json({
      questions: questionAverages,
      totalResponses: feedbackData.length,
      overallAverage,
      percentage,
    })
  } catch (error) {
    console.error("Error fetching teacher report:", error)
    return Response.json({
      questions: [],
      averages: [],
      totalResponses: 0,
      overallAverage: 0,
      percentage: 0,
    })
  }
}
