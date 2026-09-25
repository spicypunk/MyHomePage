import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"
import { BackButton } from "@/components/back-button"

export default function AboutPage() {
  return (
    <div className="relative min-h-screen p-8 font-mono bg-white text-black dark:bg-black dark:text-white">
      <ThemeToggle />

      <h1 className="text-lg font-normal mb-12">about</h1>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="max-w-md space-y-4 text-base leading-relaxed text-left pointer-events-auto">
          <Image
            src="/about-photo.jpg"
            alt="Beth"
            width={400}
            height={480}
            className="w-[300px] h-auto object-cover mb-12"
            priority
          />
          <p>Hi, I&apos;m Beth.</p>
          <p>I chose my life, so I can spend most of my time thinking.</p>
          <p>I write about the mania of our age, so that we can have a nicer tomorrow.</p>
        </div>
      </div>

      <BackButton href="/" />
    </div>
  )
}
