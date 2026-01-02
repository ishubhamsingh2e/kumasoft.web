import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AgencySection, GridBlock, SectionHeader } from "./components/agencies-section";
import { ServiceBanner } from "./components/service-banner";
import { InfoGrid } from "./components/services-grid";
import { ClientLogos } from "./components/client-logos";
import { services ,awards} from "@/lib/data";
import { ProcessCard } from "./components/process-card";
import { GoalsSection } from "./components/goals-card-section";
import ParallaxSection from "./components/parallax";



export default function Services(){
    return <>
    <div className="pt-36">
      {/* Header */}
      {/* <header className="py-16 container mx-auto ">
        <div >
          <p className="mb-4 text-lg font-medium text-background">Our Services</p>
          <h1 className="mb-3 font-grift text-6xl font-semibold tracking-tight text-background md:text-6xl w-[45%] leading-[69px]">Our digital services: igniting growth & defining your brand's creative future.</h1>
        </div>
      </header> */}
      <div className="h-20"></div>
      </div>
     <AgencySection>
        <SectionHeader title="We focus on the seamless integration of function and form, delivering products that are inherently purposeful and absolutely extraordinary." />
        <GridBlock label="Web Services">
          <InfoGrid items={services} />
        </GridBlock>
        <div className="pt-24 space-y-12">
          <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground"> Clients and Partners</h3>
          <ClientLogos />
        </div>
      </AgencySection>

     <ServiceBanner/>
      {/* Award Highlights Section */}
      <AgencySection >
        <SectionHeader
          preTitle="Award Highlights"
          title="Our works speaks for itself, driving significant client results by converting visitors into customers and brand advocates."
        />
        <div className="space-y-16">
          <GridBlock label="Webby Awards">
            <InfoGrid items={awards.webby} />
          </GridBlock>
          <GridBlock label="Awwwards">
            <InfoGrid items={awards.awwwwards} />
          </GridBlock>
          <GridBlock label="CSS Design Awards">
            <InfoGrid items={awards.cssda} />
          </GridBlock>
        </div>
      </AgencySection>

      <GoalsSection />
      <ParallaxSection/>
    </>
}
