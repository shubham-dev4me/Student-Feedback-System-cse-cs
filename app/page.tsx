"use client";
import Link from "next/link";
import Image from "next/image";

export default function MainPortal() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50">
      {/* Header / Navbar */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Logo & Title */}
          <div className="flex items-center gap-4">
            <Image
              src="/hit-logo.png"
              alt="Haldia Institute of Technology Logo"
              width={56}
              height={56}
              className="rounded-full shadow-sm"
            />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
                Haldia Institute Of Technology
              </h1>
              <p className="text-slate-600 text-sm md:text-base mt-1">
                Department of Computer Science and Engineering with Specialization in Cyber Security
              </p>
            </div>
          </div>

          {/* GitHub Button */}
          <a
            href="https://github.com/Shubham-1068"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
          >
            <div className="text-lg font-semibold">GitHub</div>
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 fill-current"
              aria-hidden="true"
            >
              <title>GitHub</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.08-.73.08-.716.08-.716 1.19.085 1.815 1.22 1.815 1.22 1.06 1.81 2.78 1.287 3.44.98.108-.76.42-1.287.76-1.577-2.645-.295-5.42-1.32-5.42-5.89 0-1.302.465-2.36 1.22-3.182-.12-.295-.53-1.505.12-3.13 0 0 1-.32 3.3.12.95-.263 1.96-.395 2.98-.395 1.02 0 2.03.132 2.98.395 2.3-1.44 3.3-.12 3.3-.12.65 1.625.24 2.835.12 3.13.76.822 1.22 1.88 1.22 3.182 0 4.58-2.78 5.59-5.43 5.88.42.36.81 1.096.81 2.22 0 1.606-.015 2.89-.015 3.286 0 .32.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-2">
            Welcome to the Feedback Portal
          </h2>
          <p className="text-slate-600">
            Select a semester or feedback category to continue
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <PortalCard
            title="Third Semester"
            icon="📚"
            description="Provide feedback for third semester courses"
            href="/thirdsem"
            accentColor="blue"
          />
          <PortalCard
            title="Fourth Semester"
            icon="📗"
            description="Provide feedback for fourth semester courses"
            href="/foursem"
            accentColor="teal"
          />
          <PortalCard
            title="Fifth Semester"
            icon="📖"
            description="Provide feedback for fifth semester courses"
            href="/fifthsem"
            accentColor="purple"
          />
          <PortalCard
            title="Sixth Semester"
            icon="📝"
            description="Provide feedback for sixth semester courses"
            href="/sixsem"
            accentColor="indigo"
          />
          <PortalCard
            title="Seventh Semester"
            icon="🎯"
            description="Provide feedback for seventh semester courses"
            href="/seventhsem"
            accentColor="green"
          />
          <PortalCard
            title="General Feedback"
            icon="💬"
            description="Submit general feedback and suggestions"
            href="/feedback"
            accentColor="pink"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col items-center gap-4">
          <Image
            src="/hit-logo.png"
            alt="Haldia Institute of Technology Logo"
            width={48}
            height={48}
            className="opacity-90"
          />
          <div className="text-center">
            <p className="text-sm">
              © 2025 Haldia Institute of Technology
            </p>
            <p className="text-xs text-slate-400 mt-1">
              Department of Computer Science and Engineering with Specialization in Cyber Security
            </p>
          </div>

          {/* Developer Attribution */}
          <div className="text-sm font-semibold">Developed by @Shubham</div>


          <div className="flex items-center gap-3 mt-2">
            <div className="text-sm font-medium text-slate-200">Reach me at</div>
            <a
              href="https://github.com/Shubham-1068"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-200 hover:text-white transition-colors"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 fill-current"
                aria-hidden="true"
              >
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.08-.73.08-.716.08-.716 1.19.085 1.815 1.22 1.815 1.22 1.06 1.81 2.78 1.287 3.44.98.108-.76.42-1.287.76-1.577-2.645-.295-5.42-1.32-5.42-5.89 0-1.302.465-2.36 1.22-3.182-.12-.295-.53-1.505.12-3.13 0 0 1-.32 3.3.12.95-.263 1.96-.395 2.98-.395 1.02 0 2.03.132 2.98.395 2.3-1.44 3.3-.12 3.3-.12.65 1.625.24 2.835.12 3.13.76.822 1.22 1.88 1.22 3.182 0 4.58-2.78 5.59-5.43 5.88.42.36.81 1.096.81 2.22 0 1.606-.015 2.89-.015 3.286 0 .32.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z" />
              </svg>
              <span>Shubham</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function PortalCard({
  title,
  icon,
  description,
  href,
  accentColor,
}: {
  title: string;
  icon: string;
  description: string;
  href: string;
  accentColor: string;
}) {
  const colorMap: Record<string, string> = {
    blue: "group-hover:border-blue-400 group-hover:bg-blue-50/50",
    teal: "group-hover:border-teal-400 group-hover:bg-teal-50/50",
    purple: "group-hover:border-purple-400 group-hover:bg-purple-50/50",
    indigo: "group-hover:border-indigo-400 group-hover:bg-indigo-50/50",
    green: "group-hover:border-green-400 group-hover:bg-green-50/50",
    pink: "group-hover:border-pink-400 group-hover:bg-pink-50/50",
  };

  const iconBgMap: Record<string, string> = {
    blue: "bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600",
    teal: "bg-gradient-to-br from-teal-100 to-teal-200 text-teal-600",
    purple: "bg-gradient-to-br from-purple-100 to-purple-200 text-purple-600",
    indigo: "bg-gradient-to-br from-indigo-100 to-indigo-200 text-indigo-600",
    green: "bg-gradient-to-br from-green-100 to-green-200 text-green-600",
    pink: "bg-gradient-to-br from-pink-100 to-pink-200 text-pink-600",
  };

  return (
    <Link href={href} className="group">
      <div
        className={`bg-white/80 backdrop-blur-sm rounded-xl border-2 border-slate-200 ${colorMap[accentColor]} shadow-sm hover:shadow-lg transition-all duration-200 p-6 h-full flex flex-col`}
      >
        <div
          className={`w-14 h-14 ${iconBgMap[accentColor]} rounded-lg flex items-center justify-center text-2xl mb-4 transition-transform duration-200 group-hover:scale-110 shadow-sm`}
        >
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed flex-grow">
          {description}
        </p>
        <div className="mt-4 flex items-center text-sm font-medium text-slate-400 group-hover:text-slate-700 transition-colors">
          Enter
          <svg
            className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
