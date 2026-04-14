export function BackButton({ href = "/links" }: { href?: string }) {
  return (
    <div className="fixed bottom-8 left-8 z-20">
      <a href={href} className="text-lg font-mono hover:underline cursor-pointer">
        &larr; Back
      </a>
    </div>
  )
}
