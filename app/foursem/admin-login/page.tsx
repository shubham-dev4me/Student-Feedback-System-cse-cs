"use client"

import { useState } from "react"
import Link from "next/link"

export default function AdminLogin() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = (e) => {
    e.preventDefault()

    if ((username === "admin" && password === "admin") || (username === "adminhod" && password === "adminhod")) {
      window.location.href = "/foursem/admin-dashboard"
    } else {
      setError("Invalid credentials")
      setPassword("")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <Link href="/foursem">
          <button className="text-white font-bold mb-8 hover:underline">← Back</button>
        </Link>

        <div className="bg-white rounded-lg shadow-2xl p-8">
          <h1 className="text-3xl font-bold text-center text-green-600 mb-8">Admin Login</h1>

          {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-bold mb-2">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600"
                placeholder="Enter username"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-bold mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600"
                placeholder="Enter password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded-lg transition duration-300"
            >
              Login
            </button>
          </form>

          <p className="text-center text-gray-600 mt-4 text-sm">Demo credentials: admin/admin or adminhod/adminhod</p>
        </div>
      </div>
    </div>
  )
}
