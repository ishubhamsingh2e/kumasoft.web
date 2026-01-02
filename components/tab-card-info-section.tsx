import { cn } from "@/lib/utils"

export default function TabCardInfoSection({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div
      data-slot="tab-card-grid"
      className={cn("grid grid-cols-3 gap-10", className)}
    >
      {children}
    </div>
  )
}
