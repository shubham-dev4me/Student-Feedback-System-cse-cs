"use client"
import Link from "next/link"

export default function AdminPanel() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white text-center py-10 px-4">
        <h1 className="text-3xl font-bold mb-2">🔧 Admin Panel</h1>
        <p className="text-lg">Manage your college feedback system efficiently</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Back Link */}
        <Link href="/">
          <button className="text-blue-600 hover:text-blue-800 font-bold mb-8">← Back to Main Portal</button>
        </Link>

        {/* System Overview */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">System Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard label="Active Semesters" value="5" />
            <StatCard label="Total Databases" value="6" />
            <StatCard label="System Status" value="Online" />
          </div>
        </div>

        {/* Administrative Tools */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Administrative Tools</h2>

          {/* Semester Management */}
          <AdminSection
            title="📊 Semester Management"
            description="Access individual semester feedback systems and manage student responses."
            color="border-blue-500"
          >
            <div className="flex flex-wrap gap-3">
              <AdminLink href="/thirdsem/admin" label="Third Semester" />
              <AdminLink href="/fifthsem/admin" label="Fifth Semester" />
              <AdminLink href="/sixsem/admin" label="Sixth Semester" />
              <AdminLink href="/seventhsem/admin" label="Seventh Semester" />
            </div>
          </AdminSection>

          {/* Database Management */}
          <AdminSection
            title="🗄️ Database Management"
            description="Direct database access, backup, and maintenance tools for system administrators."
            color="border-red-500"
          >
            <div className="flex flex-wrap gap-3">
              <AdminLink href="/admin/database" label="Database Info" />
              <AdminLink href="/admin/status" label="System Status" />
            </div>
          </AdminSection>

          {/* Reports & Analytics */}
          <AdminSection
            title="📈 Reports & Analytics"
            description="Generate comprehensive reports and analyze feedback trends across semesters."
            color="border-green-500"
          >
            <div className="flex flex-wrap gap-3">
              <AdminLink href="/admin/reports" label="General Feedback" />
              <AdminLink href="/admin/summary" label="System Summary" />
            </div>
          </AdminSection>

          {/* System Settings */}
          <AdminSection
            title="⚙️ System Settings"
            description="Configure system settings, manage users, and access additional tools."
            color="border-yellow-500"
          >
            <div className="flex flex-wrap gap-3">
              <AdminLink href="/vote/admin" label="Voting System" />
              <AdminLink href="/admin/settings" label="Settings" />
            </div>
          </AdminSection>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
          <h3 className="text-lg font-bold text-gray-800 mb-4">💡 Quick Actions</h3>
          <ul className="space-y-2 text-gray-700">
            <li>
              ✓ <strong>Database Status:</strong> All databases are connected and operational
            </li>
            <li>
              ✓ <strong>Admin Access:</strong> Use standard credentials to login
            </li>
            <li>
              ✓ <strong>System Health:</strong> All systems functioning normally
            </li>
            <li>
              ⚠️ <strong>Security:</strong> Change default passwords for production
            </li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-gray-300 text-center py-6 mt-12">
        <p>&copy; College Feedback System - Secure access for authorized personnel only</p>
      </div>
    </div>
  )
}

function StatCard({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center">
      <h4 className="text-gray-600 font-semibold mb-2">{label}</h4>
      <p className="text-3xl font-bold text-green-600">{value}</p>
    </div>
  )
}

function AdminSection({ title, description, color, children }: {
  title: string;
  description: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 mb-6 border-l-4 ${color}`}>
      <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {children}
    </div>
  )
}

function AdminLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href}>
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
        {label}
      </button>
    </Link>
  )
}
