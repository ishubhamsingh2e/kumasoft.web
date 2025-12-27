import { Star, ArrowUpRight, Plus, Share2 } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface TestimonialProps {
  content: string
  author: string
  category: string
  avatar?: string
  className?: string
}

function TestimonialCard({ content, author, category, avatar, className }: TestimonialProps) {
  return (
    <div className={cn("bg-white p-6 rounded-3xl shadow-sm border border-black/5 flex flex-col gap-4", className)}>
      <p className="text-[#1a1a1a] text-[15px] leading-relaxed font-medium">{content}</p>
      <div className="flex items-center gap-3 mt-auto">
        <Avatar className="h-10 w-10 border-2 border-white shadow-sm">
          <AvatarImage src={avatar || "/placeholder.svg"} />
          <AvatarFallback className="bg-[#f0f0f0] text-[10px] uppercase font-bold text-[#999]">
            {author[0]}
            {author[1]}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-[#1a1a1a] font-bold text-sm">@{author.toLowerCase()}</span>
          <span className="text-[#999] text-[11px] font-medium uppercase tracking-wider">for {category}</span>
        </div>
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section className="relative min-h-screen bg-[#f3ebff] py-20 px-4 md:px-8 overflow-hidden font-sans">
      {/* Floating Side Text */}
      <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] rotate-180">
        <span className="text-[11px] font-bold tracking-[0.2em] text-black/40 uppercase">Follow Us — Fb. / Be.</span>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge
            variant="outline"
            className="bg-white/50 border-black/5 text-[#1a1a1a] px-4 py-1 rounded-full text-[13px] font-semibold"
          >
            Based on 620+ Reviews
          </Badge>
          <div className="flex justify-center gap-1 text-[#ff4f4f]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1a1a1a] flex flex-col gap-2">
            <span>Our customers love us.</span>
            <span className="flex items-center justify-center gap-4">
              <span className="text-[#1a1a1a]">4,8/5</span>
              <span>Find out why below.</span>
            </span>
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full relative">
          {/* Column 1 */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-black/5 aspect-square flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-5xl font-black text-[#1a1a1a]">10+</span>
                <h3 className="text-xl font-extrabold leading-tight">Years of Experience on Envato Market</h3>
              </div>
              <p className="text-sm text-black/60 font-medium">
                We've gained a deep understanding of what truly drives lasting success.
              </p>
            </div>
            <TestimonialCard
              content="Used a lot of themes, this one so far so best - options, design, everything. Only downside is very simple documentation, basically a never found solution to my problem in documentation. Still 5/5 for me. Good job."
              author="kodkodak"
              category="Design Quality"
            />
            <TestimonialCard
              content="I've been searched for a long time for a suitable framework because that's what you can call this Theme, and my choice fell on the above that one. I'm 100% satisfied after a month of implementation, on top of that VERY helpful support. As something between us only, but I would pay and 10x for so much in the package. Very well spent every $ dollar."
              author="ltomek"
              category="Other"
            />
          </div>

          {/* Column 2 */}
          <div className="space-y-6">
            <div className="bg-[#c488f2] p-8 rounded-[2.5rem] shadow-sm border border-black/5 aspect-square flex flex-col justify-between relative group cursor-pointer overflow-hidden">
              <div className="absolute top-6 left-6 w-12 h-12 rounded-full border-2 border-black/20 flex items-center justify-center">
                <div className="w-6 h-4 border-2 border-black/30 rounded-sm" />
              </div>
              <div className="space-y-2 mt-auto">
                <h3 className="text-2xl font-black leading-tight text-black">Time-Tested Power Elite Author</h3>
              </div>
              <div className="absolute bottom-6 left-6 w-10 h-10 rounded-full bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight size={20} className="text-black" />
              </div>
              {/* Decorative arrow icon similar to image */}
              <div className="absolute bottom-8 left-8 p-3 rounded-full border border-black/20">
                <ArrowUpRight size={20} className="text-black" />
              </div>
            </div>
            <TestimonialCard
              content="Awesome theme and absolutely top-notch support! One of the best I have experienced!"
              author="chalkfacepros"
              category="Customer Support"
            />
            <TestimonialCard
              content="I am using this theme on two different websites already and aside from the great design, which can be easily customized, it just works great with pretty much no issues. And if there is a problem, the team is always helpful when asking questions via comments or support."
              author="KodiakBaer"
              category="Code Quality"
            />
            <TestimonialCard
              content="Definitely buying again. The theme and support are excellent."
              author="alronj25"
              category="Customer Support"
            />
          </div>

          {/* Column 3 */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-black/5 aspect-square flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-5xl font-black text-[#1a1a1a]">20k+</span>
                <h3 className="text-xl font-extrabold leading-tight">Happy Customers, More to Become</h3>
              </div>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <Avatar key={i} className="h-10 w-10 border-4 border-white">
                    <AvatarImage src={`/user-.jpg?height=40&width=40&query=user-${i}`} />
                    <AvatarFallback>U{i}</AvatarFallback>
                  </Avatar>
                ))}
                <div className="h-10 w-10 rounded-full bg-[#39ff14] flex items-center justify-center border-4 border-white">
                  <Plus size={16} className="text-black" />
                </div>
              </div>
            </div>
            <TestimonialCard
              content="The template itself is well-designed and user-friendly. What stands out even more is the excellent customer support they provide. They have been responsive and helpful whenever I have had questions or needed assistance. It's been a great experience overall!"
              author="ccw17"
              category="Customer Support"
            />
            <TestimonialCard
              content="I have purchased many other themes that claim 90+ page speed, but after I have designed the website, and made all possible optimizations, very few could achieve similar speed. This theme is one of those that reached 90+ speed after all needed design, setup, many good options and features. Highly recommended."
              author="atmomin2003"
              category="Code Quality"
            />
          </div>

          {/* Column 4 */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-black/5 aspect-square flex flex-col justify-between">
              <div className="w-12 h-12 rounded-full border-2 border-black/5 flex items-center justify-center">
                <Plus size={24} className="text-black/20" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-extrabold leading-tight">Professional Customer Support</h3>
              </div>
              <p className="text-sm text-black/60 font-medium">
                Our support team is empowered to find solutions quickly and effectively.
              </p>
            </div>
            <TestimonialCard
              content="Fine and modern theme. Also I'm giving a five star rating for the excellent customer support. They're always there for you."
              author="lsoto8"
              category="Design Quality"
            />
            <TestimonialCard
              content="Quite apart from the fact that the theme is mega great, I would also like to thank the support. Everything is answered very quickly and the help is technically flawless. Thanks!"
              author="michak"
              category="Other"
            />
            <TestimonialCard
              content="There are many things that are very positive about this template. Quality, Design, Customization, Code Quality and so on... Absolutely fantastic."
              author="troller"
              category="Design Quality"
            />
          </div>
        </div>
      </div>

    </section>
  )
}
