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
    { id: 1, name: "Dr Suresh Chandra", designation: "Professor", subject: "Mobile Application Development" },
    { id: 2, name: "Mr Rohan Singh", designation: "Assistant professor", subject: "Artificial Intelligence" },
    { id: 3, name: "Ms Deepa Sharma", designation: "Assistant professor", subject: "Machine Learning" },
    { id: 4, name: "Prof Hemant Kumar", designation: "Professor", subject: "Big Data Analytics" },
    { id: 5, name: "Mr Nikhil Gupta", designation: "Assistant professor", subject: "Cyber Security" },
  ]

  const handleTeacherSubmit = () => {
    if (currentTeacherIndex < teachers.length - 1) {
      setCurrentTeacherIndex(currentTeacherIndex + 1)
    } else {
      // All teachers' feedback submitted
      alert("Thank you for your feedback!")
      window.location.href = "/seventhsem"
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <Link href="/seventhsem">
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
          semester={7}
          onSubmit={handleTeacherSubmit}
          isLastTeacher={currentTeacherIndex === teachers.length - 1}
        />
      </div>
    </div>
  )
}
