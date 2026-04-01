"use client"

import { useState } from "react"

export default function RedditAutoCommentAgentPage() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  return (
    <div className={`min-h-screen p-8 font-mono flex flex-col items-center ${isDarkMode ? "bg-black text-white" : "bg-white text-black"}`}>
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

      <h1 className="text-xl font-normal mb-6">Reddit Auto Comment Agent</h1>

      <p className={`text-sm mb-3 max-w-lg text-center ${isDarkMode ? "text-white/70" : "text-black/70"}`}>
        An intelligent agent that speaks in your voice on Reddit.
      </p>
      <p className={`text-sm mb-8 max-w-lg text-center ${isDarkMode ? "text-white/50" : "text-black/50"}`}>
        This agent analyzes your writing style on Reddit and automatically generates replies that match your tone, vocabulary, and personality. It learns how you communicate so every response feels authentically you.
      </p>

      <div className="max-w-2xl w-full" style={{ position: "relative", paddingBottom: "64.63%", height: 0 }}>
        <iframe
          src="https://www.loom.com/embed/394c8532ea4b4041a277e01ada74e3ed"
          frameBorder="0"
          allowFullScreen
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", borderRadius: "0.25rem" }}
        />
      </div>

      <div className="mt-12">
        <a href="/links" className="text-lg font-mono hover:underline cursor-pointer">&larr; Back</a>
      </div>
    </div>
  )
}
