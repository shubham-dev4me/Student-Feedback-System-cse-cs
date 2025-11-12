"use client"

import { useState } from "react"
import Link from "next/link"

export default function GeneralFeedback() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
    rating: 5,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      window.location.href = "/"
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <Link href="/">
          <button className="text-blue-600 hover:text-blue-800 font-bold mb-8">← Back</button>
        </Link>

        {submitted ? (
          <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-2">✓ Thank You!</h2>
            <p>Your feedback has been received. Redirecting...</p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">General Feedback</h1>
            <p className="text-gray-600 mb-8">We value your input. Please share your feedback with us.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-bold mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  placeholder="Your email"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2">Overall Rating</label>
                <select
                  value={formData.rating}
                  onChange={(e) => setFormData({ ...formData, rating: Number.parseInt(e.target.value) })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                >
                  {[1, 2, 3, 4, 5].map((i) => (
                    <option key={i} value={i}>
                      {i} - {"⭐".repeat(i)}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2">Your Feedback</label>
                <textarea
                  value={formData.feedback}
                  onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  rows="6"
                  placeholder="Share your thoughts..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-300"
              >
                Submit Feedback
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
