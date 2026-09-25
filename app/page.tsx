"use client"

import Link from "next/link"
import { Dithering } from "@paper-design/shaders-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function ResumePage() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const isDark = mounted ? resolvedTheme === "dark" : true

  return (
    <div className="relative min-h-screen overflow-hidden flex">
      <div className="w-1/2 p-8 font-mono relative z-10 bg-white text-black dark:bg-black dark:text-white">
        <ThemeToggle />

        <h1 className="text-lg font-normal mb-8">
          <Link href="/about" className="hover:underline cursor-pointer">
            about
          </Link>
        </h1>

        <div className="absolute top-[20%] left-8">
          <h2 className="text-4xl font-normal mb-4">BETH WANG</h2>
          <h3 className="text-4xl font-normal">NEMO</h3>
        </div>

        <div className="absolute bottom-8 left-8">
          <div className="flex space-x-4 text-lg font-mono">
            <a href="/links" className="hover:underline cursor-pointer">Links</a>
            <a href="https://x.com/bethgenewang" target="_blank" rel="noopener noreferrer" className="hover:underline cursor-pointer">Twitter</a>
            <a href="mailto:beth.d.wang@gmail.com" className="hover:underline cursor-pointer">Email</a>
            <a href="https://tobespicypunk.substack.com" target="_blank" rel="noopener noreferrer" className="hover:underline cursor-pointer">Blog</a>
          </div>
        </div>
      </div>

      <div className="w-1/2 relative">
        <Dithering
          style={{ height: "100%", width: "100%" }}
          colorBack={isDark ? "hsl(0, 0%, 0%)" : "hsl(0, 0%, 95%)"}
          colorFront={isDark ? "hsl(320, 100%, 70%)" : "hsl(220, 100%, 70%)"}
          shape="cat"
          type="4x4"
          pxSize={3}
          offsetX={0}
          offsetY={0}
          scale={0.8}
          rotation={0}
          speed={0.1}
        />
      </div>
    </div>
  )
}
