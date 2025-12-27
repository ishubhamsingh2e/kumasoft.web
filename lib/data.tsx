import TabCardInfoSection from "@/components/tab-card-info-section";
import { TabImageSection } from "@/components/tab-image-section";
import { TabSectionCardProps } from "@/components/tab-section-card";
import { Code, Download, Figma, LayoutTemplate, RefreshCcw,ArrowBigDown, ShoppingCart, CreditCard, Globe, Shield, Truck, Zap } from "lucide-react";
import OhioSlider from "@/components/slider";

export const features = [
  {
    icon: Figma,
    title: "Figma design",
    subtitle: "source files",
  },
  {
    icon: LayoutTemplate,
    title: "High quality",
    subtitle: "demo templates",
  },
  {
    icon: Code,
    title: "No coding",
    subtitle: "skills required",
  },
  {
    icon: Download,
    title: "Simple demo",
    subtitle: "installation",
  },
  {
    icon: RefreshCcw,
    title: "Reliable and",
    subtitle: "regular updates",
  },
];


export const IMAGES_ROW_A = [
  "/hero-showcase/1.webp",
  "/hero-showcase/2.webp",
  "/hero-showcase/3.webp",
  "/hero-showcase/4.webp",
  "/hero-showcase/5.webp",
  "/hero-showcase/6.webp",
  "/hero-showcase/7.webp",
];

export const IMAGES_ROW_B = [
  "/hero-showcase/8.webp",
  "/hero-showcase/9.webp",
  "/hero-showcase/10.webp",
  "/hero-showcase/11.webp",
  "/hero-showcase/12.webp",
  "/hero-showcase/13.webp",
  "/hero-showcase/14.webp",
];


export const ecommerceCards: TabSectionCardProps[] = [
  {
    icon: <ShoppingCart className="h-8 w-8 text-black" strokeWidth={1.5} />,
    heading: "Seamless checkout",
    description: "A fast and secure checkout process for customers.",
  },
  {
    icon: <CreditCard className="h-8 w-8 text-black" strokeWidth={1.5} />,
    heading: "Multiple payment options",
    description: "Accept cards, wallets, and local payment methods.",
  },
  {
    icon: <Globe className="h-8 w-8 text-black" strokeWidth={1.5} />,
    heading: "Global selling",
    description: "Sell internationally with multi-currency support.",
  },
  {
    icon: <Truck className="h-8 w-8 text-black" strokeWidth={1.5} />,
    heading: "Smart shipping",
    description: "Automated shipping rates and fulfillment tools.",
  },
  {
    icon: <Shield className="h-8 w-8 text-black" strokeWidth={1.5} />,
    heading: "Secure payments",
    description: "Industry-leading security and fraud protection.",
  },
  {
    icon: <Zap className="h-8 w-8 text-black" strokeWidth={1.5} />,
    heading: "Lightning fast",
    description: "Optimized performance for higher conversions.",
  },
];


 export const staticContent = {
  badgeText: "eCommerce",
  title: "Grow your business with eCommerce solutions.",
  description:
    "Sell online, in-store, and globally with built-in comprehensive tools and integrations.",
  CTAText: "Shop Demo",
  CTAIcon: <ArrowBigDown className="h-8 w-8" />,
};



export const carouselImages = [
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
    mobile1: "",
    mobile2:
      "https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio.clbthemes.com/CheckoutSuccess__Mobile.webp",
  },
];

export const slides = [
  <TabImageSection key="slide-1" imgSrc="/tab-images/image.png" />,
  <TabCardInfoSection key="slide-2" cards={ecommerceCards} />,
  <OhioSlider slides={carouselImages} key="slide-3" />,
];