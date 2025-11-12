"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { pdf } from '@react-pdf/renderer'
import { FeedbackPDF } from './FeedbackPDF'
import StatCard from "../../thirdsem/admin-dashboard/StatCard"

export default function AdminDashboard() {
  const [selectedTeacher, setSelectedTeacher] = useState(0)
  const [teacherData, setTeacherData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  const teachers = [
    {
      id: 1,
      name: "Dr Suresh Chandra",
      designation: "Professor",
      subject: "Mobile Application Development",
    },
    {
      id: 2,
      name: "Mr Rohan Singh",
      designation: "Assistant professor",
      subject: "Artificial Intelligence",
    },
    {
      id: 3,
      name: "Ms Deepa Sharma",
      designation: "Assistant professor",
      subject: "Machine Learning",
    },
    {
      id: 4,
      name: "Prof Hemant Kumar",
      designation: "Professor",
      subject: "Big Data Analytics",
    },
    {
      id: 5,
      name: "Mr Nikhil Gupta",
      designation: "Assistant professor",
      subject: "Cyber Security",
    },
  ]

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

  useEffect(() => {
    fetchTeacherFeedback()
  }, [selectedTeacher])

  const fetchTeacherFeedback = async () => {
    setLoading(true)
    try {
      const response = await fetch(`/api/feedback/get-by-teacher?semester=7&teacherId=${teachers[selectedTeacher].id}`)
      const data = await response.json()
      setTeacherData(data)
    } catch (error) {
      console.error("Error fetching feedback:", error)
    } finally {
      setLoading(false)
    }
  }

  const calculateAverages = () => {
    if (!teacherData?.feedbackList || teacherData.feedbackList.length === 0) {
      return Array(10).fill(0)
    }

    const averages = []
    const questionFields = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9", "q10"]

    for (let i = 0; i < 10; i++) {
      const sum = teacherData.feedbackList.reduce((acc: number, fb: any) => acc + (fb[questionFields[i]] || 0), 0)
      const average = (sum / teacherData.feedbackList.length).toFixed(2)
      averages.push(average)
    }

    return averages
  }

  const calculateOverallAverage = () => {
    const averages = calculateAverages()
    const sum = averages.reduce((a: any, b: any) => Number(a) + Number(b), 0)
    return (sum / averages.length).toFixed(2)
  }

  const calculatePercentage = () => {
    const avg = Number.parseFloat(calculateOverallAverage())
    return ((avg / 5) * 100).toFixed(0)
  }

  const generatePDF = async () => {
    try {
      const blob = await pdf(
        <FeedbackPDF
          teacherName={currentTeacher.name}
          teacherDesignation={currentTeacher.designation}
          subject={currentTeacher.subject}
          submissionCount={submissionCount}
          questions={questions}
          averages={averages}
          overallAverage={calculateOverallAverage()}
          percentage={calculatePercentage()}
        />
      ).toBlob()

      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `feedback_${currentTeacher.name.replace(/\s+/g, '_')}.pdf`
      link.click()
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error("Error generating PDF:", error)
      alert("Unable to generate PDF. Please try again.")
    }
  }

  const currentTeacher = teachers[selectedTeacher]
  const submissionCount = teacherData?.submissionCount || 0
  const averages = calculateAverages()

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold">Admin Dashboard - Seventh Semester</h1>
          <p className="text-blue-100">Manage courses and feedback</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link href="/">
          <button className="text-blue-600 hover:text-blue-800 font-bold mb-8">← Back to Portal</button>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <StatCard label="Total Subjects" value={String(teachers.length)} color="bg-blue-500" />
          <StatCard label="Total Responses" value={submissionCount} color="bg-green-500" />
          <StatCard label="Avg Rating" value={`${calculateOverallAverage()}/5`} color="bg-purple-500" />
          <StatCard label="Student Submissions" value={submissionCount} color="bg-orange-500" />
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Course Feedback Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {teachers.map((teacher, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedTeacher(idx)}
                className={`p-4 rounded cursor-pointer transition ${
                  selectedTeacher === idx
                    ? "bg-blue-50 border-2 border-blue-500"
                    : "bg-gray-50 border-2 border-gray-200 hover:border-blue-400"
                }`}
              >
                <h3 className="text-lg font-bold text-gray-800 underline">{teacher.subject}</h3>
                <p className="text-sm text-gray-600 mt-1">
                  <span className="font-semibold">- {teacher.name}</span>
                </p>
                <div className="mt-3 w-full bg-gray-300 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${submissionCount > 0 ? "100%" : "0%"}` }}
                  ></div>
                </div>
                <p className="text-xs text-blue-600 mt-1 font-semibold">{submissionCount} out of 5</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Feedback Report</h2>

          {loading ? (
            <div className="text-center py-8">Loading feedback data...</div>
          ) : (
            <>
              {submissionCount === 0 ? (
                <div className="text-center py-12 text-gray-600">
                  No feedback submitted yet for {currentTeacher.name}
                </div>
              ) : (
                <>
                  <div
                    className="bg-white border-2 border-gray-300 p-8 mb-6"
                    style={{ minHeight: "800px" }}
                  >
                    <div className="text-center mb-8 border-b-2 pb-4">
                      <h3 className="text-sm font-bold">STUDENT FEEDBACK FORM FOR TEACHING ASSESSMENT</h3>
                      <p className="text-sm font-bold mt-1">HALDIA INSTITUTE OF TECHNOLOGY</p>
                      <p className="text-sm">Department of CSE(Cyber Security)</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                      <div>
                        <p>
                          <span className="font-bold">DEPT: CSE(CS)</span>
                        </p>
                        <p>
                          <span className="font-bold">YEAR:</span> 4TH YEAR
                        </p>
                      </div>
                      <div className="text-right">
                        <p>
                          <span className="font-bold">YEAR OF DATE:</span> {new Date().getFullYear()}
                        </p>
                        <p>
                          <span className="font-bold">SEMESTER:</span> 7TH
                        </p>
                        <p>
                          <span className="font-bold">NO. STUDENT :</span> {submissionCount}
                        </p>
                      </div>
                    </div>

                    <div className="mb-6 border-b pb-4">
                      <p className="text-sm font-bold mb-2">Subject Name & Code: {currentTeacher.subject}</p>
                      <p className="text-sm font-bold">FACULTY NAME : {currentTeacher.name}</p>
                    </div>

                    <table className="w-full mb-6 text-sm">
                      <tbody>
                        {questions.map((question, idx) => (
                          <tr key={idx} className="border">
                            <td className="border px-2 py-2 text-left align-top w-4/5">
                              {idx + 1}. {question}
                            </td>
                            <td className="border px-2 py-2 text-center w-1/5 font-bold">{averages[idx]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                      <div className="border">
                        <p className="border-b px-2 py-1 font-bold">AVG FEEDBACK</p>
                        <p className="px-2 py-1 text-center font-bold">{calculateOverallAverage()}</p>
                      </div>
                      <div className="border">
                        <p className="border-b px-2 py-1 font-bold">PERCENTAGE</p>
                        <p className="px-2 py-1 text-center font-bold bg-yellow-300">{calculatePercentage()}</p>
                      </div>
                    </div>

                    <div className="text-sm">
                      <p className="font-bold mb-2">HOD REMARKS:</p>
                      <div className="border mb-4 h-12"></div>
                      <p className="font-bold mb-2">PRINCIPAL REMARKS:</p>
                      <div className="border h-12"></div>
                    </div>
                  </div>

                  <div className="flex gap-4 justify-center">
                    <button
                      onClick={generatePDF}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
                    >
                      Download PDF
                    </button>
                    <button
                      onClick={() => window.print()}
                      className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded"
                    >
                      Print this page
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </div>

        <div className="mt-8 text-center">
          <Link href="/seventhsem">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded">Logout</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
