import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { MoveRight } from "lucide-react"
import { Span } from "next/dist/trace"

interface ProcessCardProps {
  number: string
  title: string
  description: string
  className?: string
}

export function ProcessCard({ number, title, description, className }: ProcessCardProps) {
  return (
    <div
      className={cn(
        "p-8 flex flex-col justify-between transition-all duration-300 hover:opacity-90",
        className,
      )}
    >
      <div className="space-y-4">
        <span className="text-sm font-medium opacity-60">{number}</span>
        <h3 className="text-3xl font-bold leading-tight tracking-tight">{title}</h3>
      </div>
      <p className="text-lg leading-relaxed opacity-80 max-w-[280px]">{description}</p>
      <span className="p-4 bg-white rounded-full w-fit text-black mt-4 hover:bg-white/80 transition-colors duration-300 cursor-pointer"><MoveRight className=" "/></span>
    </div>
  )
}
