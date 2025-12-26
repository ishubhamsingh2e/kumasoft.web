import { ArrowBigDown, ArrowUpRight } from "lucide-react";
import { Badge } from "./badge";
import { TabSectionProps } from "@/lib/utils";
import TabCardInfoSection from "./tab-card-info-section";
import { ecommerceCards } from "@/app/page";

export const infoContent = {
  badgeText: "Best-in-class",
  title: "Create your perfect site with ",
  description:
    "Packed with powerful features, making it easy to grow and expand your website to fit your needs.",
  CTAText: "Shop Demo",
  CTAIcon: <ArrowBigDown className=" h-8 w-8" strokeWidth={1.5} />,
};
export default function InfoSection({
  static: staticContent,
}: TabSectionProps) {
  return (
    <>
      <div className="container mx-auto grid  grid-cols-1 gap-8 items-center lg:grid-cols-[0.45fr_1fr] py-20">
        <div className="h-full flex flex-col justify-start items-start">
          <Badge
            description={staticContent.badgeText}
            classname="mb-4 text-center bg-card rounded-full"
          />
          <h2 className="text-[52px] leading-13 font-semibold ">
            <span className="text-[#60606b]">{staticContent.title}</span>
            <span>our complete solutions.</span>
          </h2>
          <p className="text-lg font-normal leading-7 mt-4">
            {staticContent.description}
          </p>
        </div>
        <div>
          <TabCardInfoSection key="slide-2" cards={ecommerceCards} />
        </div>
      </div>
    </>
  );
}
