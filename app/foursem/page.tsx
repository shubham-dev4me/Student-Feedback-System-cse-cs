"use client"
import Link from "next/link"

export default function FourthSemesterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/" className="inline-flex items-center text-slate-600 hover:text-slate-900 transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Portal
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-2xl mb-6">
            <span className="text-3xl">📗</span>
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-3">Fourth Semester Feedback</h1>
          <p className="text-lg text-slate-600">Select your role to proceed</p>
        </div>

        {/* Login Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Admin Login Card */}
          <Link href="/foursem/admin-login" className="group">
            <div className="bg-white rounded-xl border-2 border-slate-200 hover:border-blue-500 shadow-sm hover:shadow-lg transition-all duration-200 p-8 h-full flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Admin Login</h3>
              <p className="text-slate-600 text-sm mb-6">Access administrative dashboard and manage feedback</p>
              <div className="mt-auto flex items-center text-blue-600 font-medium group-hover:translate-x-1 transition-transform">
                Continue
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>

          {/* Student Login Card */}
          <Link href="/foursem/student-login" className="group">
            <div className="bg-white rounded-xl border-2 border-slate-200 hover:border-teal-500 shadow-sm hover:shadow-lg transition-all duration-200 p-8 h-full flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Student Login</h3>
              <p className="text-slate-600 text-sm mb-6">Submit feedback for your fourth semester courses</p>
              <div className="mt-auto flex items-center text-teal-600 font-medium group-hover:translate-x-1 transition-transform">
                Continue
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        </div>

        {/* Info Section */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-3xl mx-auto">
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h4 className="font-semibold text-slate-900 mb-1">Need Help?</h4>
              <p className="text-sm text-slate-700">If you're unsure which login to use or encounter any issues, please contact your department administrator.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}