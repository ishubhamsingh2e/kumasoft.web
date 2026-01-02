import { ArrowUpRight, Grid2X2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaBanner() {
  return (
    <div className="relative container mx-auto overflow-hidden rounded-b-3xl bg-gradient-to-r from-[#7B42F6] to-[#B066FE] p-8 text-white shadow-2xl">
      <div className="relative z-10 flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
            <Grid2X2 className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold tracking-tight md:text-2xl">
              Have a Project in Mind?
              <br className="hidden md:block" /> Let’s Build It Together.
            </h3>
          </div>
        </div>

        <div className="max-w-xs text-sm opacity-90">
          <p>
            <span className="font-bold text-white">Work with us.</span> We design and build high-impact websites,
            digital products, SEO solutions, and immersive experiences.
          </p>
        </div>

        <Button
          variant="secondary"
          size="icon"
          className="h-12 w-12 shrink-0 rounded-full bg-black/90 text-white hover:bg-black"
        >
          <ArrowUpRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}
