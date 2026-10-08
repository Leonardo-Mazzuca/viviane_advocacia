import { cn } from "@/lib/utils"

export function Spotlight({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute -top-28 right-[-12%] h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,rgba(183,164,138,0.2),transparent_68%)] blur-2xl",
        className,
      )}
    />
  )
}
