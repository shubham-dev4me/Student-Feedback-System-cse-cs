"use client"

import { useState } from "react"

interface Teacher {
  name: string
  designation: string
  subject: string
}

export default function TeacherFeedbackForm({
  teacher,
  onSubmit,
  isLastTeacher,
  teacherId = 1,
  studentRoll = "Student",
  semester = 7,
}: {
  teacher: Teacher
  onSubmit: (responses: Record<number, number>) => void
  isLastTeacher: boolean
  teacherId?: number
  studentRoll?: string
  semester?: number
}) {
  const [responses, setResponses] = useState<Record<number, number>>({})
  const [loading, setLoading] = useState(false)

  const questions = [
    "The faculty explained the objective of the course. Its relevance in regard to Industrial application, current development and research opportunities.",
    "The prerequisites, pertinence of the course with others and programme as a whole and the organization of the subject matter are explained.",
    "The teacher explained CO statements and its correlations with the PO's and PSO's",
    "The teacher is enthusiastic and created interest in the subject",
    "The teacher delivered the lecture lucidly",
    "The teacher emphasized on numerical problem solving / mathematical formulation etc, example and data analysis.",
    "Teacher used modern and smart teaching aids, whenever relevant.",
    "Test, Assignment and quizzes were adequate.",
    "The teacher provides opportunities for participatory learning.",
    "Your level of satisfaction with the all round contribution of the teacher.",
  ]

  const ratings = [
    { label: "Excellent", value: 5 },
    { label: "Good", value: 4 },
    { label: "Average", value: 3 },
    { label: "Poor", value: 2 },
  ]

  const handleRating = (questionIndex: number, ratingValue: number) => {
    setResponses((prev) => ({
      ...prev,
      [questionIndex]: ratingValue,
    }))
  }

  const handleNext = async () => {
    // Validate all questions are answered
    if (Object.keys(responses).length !== questions.length) {
      alert("Please answer all questions before proceeding")
      return
    }

    setLoading(true)
    try {
      const ratingsArray = Array(10)
        .fill(0)
        .map((_, i) => responses[i] || 0)

      console.log("[v0] Submitting feedback:", {
        semester,
        studentRoll,
        teacherId,
        teacherName: teacher.name,
        ratings: ratingsArray,
      })

      const response = await fetch("/api/feedback/submit-v2", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          semester,
          studentRoll,
          teacherId,
          teacherName: teacher.name,
          subjectName: teacher.subject,
          ratings: ratingsArray,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to submit feedback")
      }

      console.log("[v0] Feedback submitted successfully")
      onSubmit(responses)
    } catch (error) {
      console.error("[v0] Submission error:", error)
      alert("Error submitting feedback. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Teacher Info */}
      <div className="bg-gray-50 p-6 text-center border-b">
        <h2 className="text-2xl font-bold text-gray-800">{teacher.name}</h2>
        <p className="text-gray-600 mt-1">({teacher.designation})</p>
        <p className="text-gray-600 mt-2">Subject Taken : {teacher.subject}</p>
      </div>

      {/* Form Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          {/* Header */}
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="px-6 py-4 text-left font-bold">Facilities</th>
              {ratings.map((rating) => (
                <th key={rating.value} className="px-6 py-4 text-center font-bold">
                  {rating.label}
                </th>
              ))}
            </tr>
          </thead>

          {/* Questions */}
          <tbody>
            {questions.map((question, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-blue-100"}>
                <td className="px-6 py-4 text-left text-gray-800">
                  <span className="font-semibold">{index + 1}.</span> {question}
                </td>
                {ratings.map((rating) => (
                  <td key={rating.value} className="px-6 py-4 text-center">
                    <input
                      type="radio"
                      name={`q${index}`}
                      value={rating.value}
                      checked={responses[index] === rating.value}
                      onChange={() => handleRating(index, rating.value)}
                      className="w-5 h-5 cursor-pointer"
                      disabled={loading}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Next Button */}
      <div className="bg-blue-600 px-6 py-4 flex justify-center">
        <button
          onClick={handleNext}
          disabled={loading}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-8 rounded disabled:bg-gray-400"
        >
          {loading ? "Submitting..." : isLastTeacher ? "SUBMIT" : "NEXT"}
        </button>
      </div>
    </div>
  )
}