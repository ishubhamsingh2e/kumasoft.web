import { ArrowBigDown, Layers, Settings, Shield, ShoppingCart, Truck, Zap } from "lucide-react";
import { Badge } from "./badge";
import { TabSectionProps } from "@/lib/utils";
import TabCardInfoSection from "./tab-card-info-section";
import { ecommerceCards } from "@/lib/data";
import { TabSectionCard, TabSectionCardDescription, TabSectionCardHeading, TabSectionCardIcon } from "./tab-section-card";

export const infoContent = {
  badgeText: "Best-in-class",
  title: "Create your perfect business ",
  description:
    "Packed with powerful features, making it easy to grow and expand your website to fit your needs.",
  CTAText: "Shop Demo",
  CTAIcon: <ArrowBigDown className=" h-8 w-8" strokeWidth={1.5} />,
};

export const kumasoftCards = [
  {
    icon: <Layers className="h-8 w-8 text-black" strokeWidth={1.5} />,
    heading: "Custom software solutions",
    description:
      "Tailor-made web and mobile applications designed around your business goals, not templates.",
  },
  {
    icon: <Zap className="h-8 w-8 text-black" strokeWidth={1.5} />,
    heading: "High-performance builds",
    description:
      "Fast, scalable, and optimized applications built using modern frameworks and best practices.",
  },
  {
    icon: <Settings className="h-8 w-8 text-black" strokeWidth={1.5} />,
    heading: "Product-first engineering",
    description:
      "We think like product owners—focusing on usability, performance, and long-term maintainability.",
  },
  {
    icon: <Shield className="h-8 w-8 text-black" strokeWidth={1.5} />,
    heading: "Secure & reliable systems",
    description:
      "Security-driven development with clean architecture, testing, and production-ready deployments.",
  },
  {
    icon: <Truck className="h-8 w-8 text-black" strokeWidth={1.5} />,
    heading: "End-to-end delivery",
    description:
      "From idea to launch—we handle design, development, deployment, and post-launch support.",
  },
  {
    icon: <ShoppingCart className="h-8 w-8 text-black" strokeWidth={1.5} />,
    heading: "Business-ready integrations",
    description:
      "Payments, dashboards, APIs, and third-party integrations built to scale with your business.",
  },
];

export default function InfoSection({
  static: staticContent,
}: TabSectionProps) {
  return (
    <>
      <div className="container mx-auto grid  grid-cols-1 gap-8 items-center lg:grid-cols-[0.5fr_1fr] py-20">
        <div className="h-full flex flex-col justify-start items-start pt-8">
          <Badge
            description={staticContent.badgeText}
            classname="mb-4 text-center bg-card rounded-full"
          />
          <h2 className="text-[52px] leading-13 font-semibold ">
            <span className="text-[#60606b]">{staticContent.title}</span>
            <span>with our complete solutions.</span>
          </h2>
          <p className="text-lg font-normal leading-7 mt-4">
            {staticContent.description}
          </p>
        </div>
        <div>
           <TabCardInfoSection key="slide-2">
  {kumasoftCards.map((card, index) => (
    <TabSectionCard
      key={index}
      className="hover:bg-black/10 cursor-pointer"
    >
      <TabSectionCardIcon className="bg-gray-100 text-black/80">
        {card.icon}
      </TabSectionCardIcon>

      <TabSectionCardHeading className="text-black">
        {card.heading}
      </TabSectionCardHeading>

      <TabSectionCardDescription className="text-black/90">
        {card.description}
      </TabSectionCardDescription>
    </TabSectionCard>
  ))}
</TabCardInfoSection>
        </div>

      </div>
     
    </>
  );
}
