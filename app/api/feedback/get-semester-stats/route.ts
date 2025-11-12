import { sql, isDatabaseConfigured } from "@/lib/db"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const semester = searchParams.get("semester")

    if (!semester) {
      return Response.json({ error: "Missing semester parameter" }, { status: 400 })
    }

    if (!isDatabaseConfigured()) {
      return Response.json({
        totalResponses: 0,
        averageRating: 0,
        completion: 0,
      })
    }

    const tableName = `${semester}_sem_feedback`

    const allFeedback = await sql.query(`SELECT * FROM ${tableName}`)

    if (!allFeedback || allFeedback.length === 0) {
      return Response.json({
        totalResponses: 0,
        averageRating: 0,
        completion: 0,
      })
    }

    // Calculate average rating across all questions
    let totalRating = 0
    let totalRatings = 0

    allFeedback.forEach((row: any) => {
      for (let i = 1; i <= 10; i++) {
        const rating = row[`q${i}`]
        if (rating) {
          totalRating += rating
          totalRatings += 1
        }
      }
    })

    const averageRating = Number.parseFloat((totalRating / totalRatings).toFixed(1))

    return Response.json({
      totalResponses: allFeedback.length,
      averageRating,
      completion: 0,
    })
  } catch (error) {
    console.error("Error fetching semester stats:", error)
    return Response.json({
      totalResponses: 0,
      averageRating: 0,
      completion: 0,
    })
  }
}
