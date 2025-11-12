"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import TeacherFeedbackForm from "../components/TeacherFeedbackForm"

export default function FeedbackPage() {
  const searchParams = useSearchParams()
  const rollNumber = searchParams.get("roll") || "Student"
  const [currentTeacherIndex, setCurrentTeacherIndex] = useState(0)

  const teachers = [
    { id: 1, name: "Mr Abhijit Sarkar", designation: "Assistant professor", subject: "Data Structure and Algorithms" },
    { id: 2, name: "Mr Soumya Kanti Dhara", designation: "Assistant professor", subject: "Economics for Engineers" },
    { id: 3, name: "Dr Prabir Panja", designation: "Professor", subject: "Linear Algebra" },
    {
      id: 4,
      name: "Ms Sujata Suman",
      designation: "Assistant professor",
      subject: "Computer Organization & Architecture",
    },
    { id: 5, name: "Mr Priyatosh Jana", designation: "Assistant professor", subject: "Digital Electronics" },
  ]

  const handleTeacherSubmit = () => {
    if (currentTeacherIndex < teachers.length - 1) {
      setCurrentTeacherIndex(currentTeacherIndex + 1)
    } else {
      // All teachers' feedback submitted
      alert("Thank you for your feedback!")
      window.location.href = "/thirdsem"
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <Link href="/thirdsem">
          <button className="text-blue-600 hover:text-blue-800 font-bold mb-8">← Back</button>
        </Link>

        <div className="mb-4 text-gray-700">
          Roll Number: <span className="font-bold">{rollNumber}</span> | Teacher{" "}
          <span className="font-bold">
            {currentTeacherIndex + 1}/{teachers.length}
          </span>
        </div>

        <TeacherFeedbackForm
          teacher={teachers[currentTeacherIndex]}
          teacherId={teachers[currentTeacherIndex].id}
          studentRoll={rollNumber}
          semester={3}
          onSubmit={handleTeacherSubmit}
          isLastTeacher={currentTeacherIndex === teachers.length - 1}
        />
      </div>
    </div>
  )
}
