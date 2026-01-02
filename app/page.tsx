import { BentoGrid } from "@/components/bento-grid"
import { CtaBanner } from "@/components/cta-banner"
import { FaqSection } from "@/components/faq-section"
import { TemplateGallery } from "@/components/gallery"
import HeroSection from "@/components/hero-section"
import InfoSection, { infoContent } from "@/components/info-section"
import { Navigation } from "@/components/navigation"
import { TestimonialsSection } from "@/components/review-section"
import TabsSection from "@/components/tabs-section"
import { Button } from "@/components/ui/button"
import { staticContent, slides } from "@/lib/data"


export default function HomePage() {
  return (
   <>
   <Navigation/>
     <div className="bg-primary">
        <HeroSection />
      </div>

      <InfoSection static={infoContent} />
       <div className="container mx-auto">
        <BentoGrid />
      </div>

      <TemplateGallery />

      <TabsSection
        lrt
        backgroundColor="bg-[#533267]"
        static={staticContent}
        slides={slides}
      />
      <TestimonialsSection />
      
        <FaqSection />
   </>
  )
}
