import { HeroSection } from "@/components/hero-section";
import {
  TabSectionCard,
  TabSectionCardProps,
} from "@/components/tab-section-card";
import TabsSection from "@/components/tabs-section";
import {
  ArrowBigDown,
  CreditCard,
  Globe,
  Info,
  Shield,
  ShoppingCart,
  Truck,
  Zap,
} from "lucide-react";
import { TabImageSection } from "@/components/tab-image-section";
import TabCardInfoSection from "@/components/tab-card-info-section";
import SnapScroll from "@/components/snapscroll";
import { TemplateGallery } from "@/components/gallery";
import OhioSlider from "@/components/slider";
import InfoSection from "@/components/info-section";
import { infoContent } from "@/components/info-section";

const staticContent = {
  badgeText: "eCommerce",
  title: "Grow your business with eCommerce solutions.",
  description:
    "Sell online, in-store, and globally with built-in comprehensive tools and integrations.",
  CTAText: "Shop Demo",
  CTAIcon: <ArrowBigDown className=" h-8 w-8" />,
};
export const ecommerceCards: TabSectionCardProps[] = [
  {
    icon: <ShoppingCart className="w-8 h-8 text-black" strokeWidth={1.5}/>,
    heading: "Seamless checkout",
    description: "A fast and secure checkout process for customers.",
  },
  {
    icon: <CreditCard className="w-8 h-8 text-black" strokeWidth={1.5} />,
    heading: "Multiple payment options",
    description: "Accept cards, wallets, and local payment methods.",
  },
  {
    icon: <Globe className="w-8 h-8 text-black" strokeWidth={1.5}/>,
    heading: "Global selling",
    description: "Sell internationally with multi-currency support.",
  },
  {
    icon: <Truck className="w-8 h-8 text-black" strokeWidth={1.5}/>,
    heading: "Smart shipping",
    description: "Automated shipping rates and fulfillment tools.",
  },
  {
    icon: <Shield className="w-8 h-8 text-black" strokeWidth={1.5} />,
    heading: "Secure payments",
    description: "Industry-leading security and fraud protection.",
  },
  {
    icon: <Zap className="w-8 h-8 text-black" strokeWidth={1.5} />,
    heading: "Lightning fast",
    description: "Optimized performance for higher conversions.",
  },
];

const images=[
    {
      desktop:
        "https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio.clbthemes.com/Checkout__Desktop.webp",
      mobile1:
        "https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio.clbthemes.com/Cart__Desktop__Mobile.webp",
      mobile2:
        "https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio.clbthemes.com/CheckoutSuccess__Mobile.webp",
    },
    {
      desktop:
        "https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio.clbthemes.com/ProductArchive__Type1__Desktop.webp",
      mobile1:
        "",
      mobile2:
        "https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio.clbthemes.com/CheckoutSuccess__Mobile.webp",
    },
  ]
const slides = [
  <TabImageSection key="slide-1" imgSrc="/tab-images/image.png" />,
  <TabCardInfoSection key="slide-2" cards={ecommerceCards} />,
  <OhioSlider slides={images} key="slide-3" />,
];

export default function Home() {
  return (
    <>
      <HeroSection />
      <InfoSection  static={infoContent} />
      <TemplateGallery />
      <TabsSection
        lrt
        classname="bg-[#f9e3fc]"
        static={staticContent}
        slides={slides}
      />
    </>
  );
}
