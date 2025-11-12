import { sql } from "@/lib/db"

export interface FeedbackData {
  rollNumber: string
  teacherId: number
  teacherName: string
  subject: string
  ratings: number[]
}

export async function submitFeedback(semester: number, data: FeedbackData) {
  const tableName = `${getSemesterPrefix(semester)}_feedback`

  const query = `
    INSERT INTO ${tableName} 
    (roll_number, teacher_id, teacher_name, subject, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
    RETURNING *
  `

  const values = [data.rollNumber, data.teacherId, data.teacherName, data.subject, ...data.ratings]

  try {
    const result = await sql.query(query, values)
    return { success: true, data: result[0] }
  } catch (error) {
    console.error("[v0] Feedback submission error:", error)
    throw error
  }
}

export async function getFeedbackBySemesterAndTeacher(semester: number, teacherId: number) {
  const tableName = `${getSemesterPrefix(semester)}_feedback`

  const query = `
    SELECT * FROM ${tableName}
    WHERE teacher_id = $1
    ORDER BY submitted_at DESC
  `

  try {
    const result = await sql.query(query, [teacherId])
    return result
  } catch (error) {
    console.error("[v0] Feedback retrieval error:", error)
    throw error
  }
}

export async function getSubmissionCount(semester: number, teacherId: number) {
  const tableName = `${getSemesterPrefix(semester)}_feedback`

  const query = `
    SELECT COUNT(DISTINCT roll_number) as count FROM ${tableName}
    WHERE teacher_id = $1
  `

  try {
    const result = await sql.query(query, [teacherId])
    return result[0]?.count || 0
  } catch (error) {
    console.error("[v0] Count retrieval error:", error)
    return 0
  }
}

export function calculateAverageRating(feedbackList: any[]) {
  if (feedbackList.length === 0) return 0

  let totalSum = 0
  const questionFields = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9", "q10"]

  feedbackList.forEach((feedback) => {
    questionFields.forEach((field) => {
      totalSum += feedback[field] || 0
    })
  })

  const totalResponses = feedbackList.length * questionFields.length
  return (totalSum / totalResponses).toFixed(2)
}

function getSemesterPrefix(semester: number): string {
  const prefixes: Record<number, string> = {
    3: "thirdsem",
    4: "foursem",
    5: "fifthsem",
    6: "sixsem",
    7: "seventhsem",
  }
  return prefixes[semester] || "third_sem"
}
