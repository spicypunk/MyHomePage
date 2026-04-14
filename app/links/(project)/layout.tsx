import { ThemeToggle } from "@/components/theme-toggle"
import { BackButton } from "@/components/back-button"

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen p-8 font-mono flex flex-col items-center bg-white text-black dark:bg-black dark:text-white">
      <ThemeToggle />
      {children}
      <BackButton href="/links" />
    </div>
  )
}
