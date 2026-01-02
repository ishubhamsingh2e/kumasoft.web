import { ProcessCard } from "./process-card";

export function GoalsSection() {
    return(
        <>
        <main className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white pb-32">
      <section className="max-w-[1600px] mx-auto px-6 lg:px-12 pt-24 pb-12">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-20">
          <div className="lg:col-span-8 space-y-8">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-black/50">We help to achieve goals</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-balance">
              Recognizing the unique nature of your vision, we adopt a flexible approach, allowing us to create a plan
              and a budget that fits your specific needs.
            </h1>
          </div>

          <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 pt-4">
            <p className="text-xl leading-relaxed text-black/80">
              Our integrated, interdisciplinary approach covers all architectural disciplines and allows us to work
              closely with external partners.
            </p>
            <p className="text-xl leading-relaxed font-bold">
              This collaboration ensures we deliver a seamless process and a high-quality product, bringing value to
              everyone.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-10">
          <ProcessCard
            number="01."
            title="Insights and creative approach"
            description="To develop a clear vision of the project's needs, market position, and audience to align with strategic goals."
            className="bg-[oklch(0.95_0.01_0)]"
          />
          <ProcessCard
            number="02."
            title="Concept and design strategy"
            description="To ensure we're aligned and moving in the right direction, which allows us to scale with confidence."
            className="bg-[oklch(0.93_0.05_280)]"
          />
          <ProcessCard
            number="03."
            title="Design explorations and design direction"
            description="To outline and create the specific user experience and detailed design, making it ready for development."
            className="bg-[oklch(0.92_0.04_220)]"
          />
          <ProcessCard
            number="04."
            title="Production and implementation"
            description="To build the final experience, handling everything from front-end to back-end development."
            className="bg-black text-white"
          />
        </div>
      </section>
    </main>
        </>
    )
}
