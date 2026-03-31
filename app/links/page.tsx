"use client"

import { useState } from "react"
import Link from "next/link"

const projects = [
  { name: "A.I. Mindset Trainer App", slug: "ai-mindset-trainer" },
  { name: "Reddit Auto Comment Agent", slug: "reddit-auto-comment-agent" },
  { name: "Quantitative Research on Crypto Arbitrage", slug: "crypto-arbitrage-research" },
]

export default function LinksPage() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  return (
    <div className={`min-h-screen p-8 font-mono ${isDarkMode ? "bg-black text-white" : "bg-white text-black"}`}>
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className={`absolute top-8 right-8 p-2 rounded-full transition-colors ${
          isDarkMode ? "hover:bg-white/10" : "hover:bg-black/10"
        }`}
        aria-label="Toggle theme"
      >
        {isDarkMode ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        )}
      </button>

      <h1 className="text-lg font-normal mb-12">links</h1>

      <ul className="space-y-4">
        {projects.map((project) => (
          <li key={project.slug}>
            <Link
              href={`/links/${project.slug}`}
              className={`text-base hover:underline ${isDarkMode ? "text-white/80 hover:text-white" : "text-black/80 hover:text-black"}`}
            >
              {project.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="fixed bottom-8 left-8">
        <a href="/" className="text-lg font-mono hover:underline cursor-pointer">&larr; Back</a>
      </div>
    </div>
  )
}
