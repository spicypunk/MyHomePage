import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { BackButton } from "@/components/back-button"

const projects = [
  { name: "A.I. Mindset Trainer App", slug: "ai-mindset-trainer" },
  { name: "Reddit Auto Comment Agent", slug: "reddit-auto-comment-agent" },
  { name: "Quantitative Research on Crypto Arbitrage", slug: "crypto-arbitrage-research" },
]

export default function LinksPage() {
  return (
    <div className="min-h-screen p-8 font-mono bg-white text-black dark:bg-black dark:text-white">
      <ThemeToggle />

      <h1 className="text-lg font-normal mb-12">links</h1>

      <ul className="space-y-4">
        {projects.map((project) => (
          <li key={project.slug}>
            <Link
              href={`/links/${project.slug}`}
              className="text-base hover:underline text-black/80 hover:text-black dark:text-white/80 dark:hover:text-white"
            >
              {project.name}
            </Link>
          </li>
        ))}
      </ul>

      <BackButton href="/" />
    </div>
  )
}
