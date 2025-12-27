import TabsSection from "@/components/tabs-section";
import { TemplateGallery } from "@/components/gallery";
import InfoSection from "@/components/info-section";

import HeroSection from "@/components/hero-section";
import { BentoGrid } from "@/components/bento-grid";
import { slides, staticContent } from "@/lib/data";
import { TestimonialsSection } from "@/components/review-section";
import { CtaBanner } from "@/components/cta-banner";
import { FaqSection } from "@/components/faq-section";

export default function Home() {
  return (
    <>
      <div className="bg-primary">
        <HeroSection />
      </div>

      <InfoSection static={staticContent} />
       <div className="container mx-auto">
        <BentoGrid />
      </div>

      <TemplateGallery />

      <TabsSection
        lrt
        classname="bg-[#f9e3fc]"
        static={staticContent}
        slides={slides}
      />
      <TestimonialsSection />
      <div className="flex min-h-screen flex-col items-center justify-center bg-black py-12">
        <FaqSection />
        <CtaBanner />
      </div>
    </>
  );
}
