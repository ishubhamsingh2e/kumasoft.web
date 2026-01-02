import TabCardInfoSection from "@/components/tab-card-info-section";
import { TabImageSection } from "@/components/tab-image-section";
import { TabSectionCard, TabSectionCardDescription, TabSectionCardHeading, TabSectionCardIcon } from "@/components/tab-section-card";
import { Code, Download, Figma, LayoutTemplate, RefreshCcw,ArrowBigDown, ShoppingCart,  Shield, Truck, Zap, Settings, Layers, Wrench, Airplay, Blocks, ChartNoAxesCombinedIcon } from "lucide-react";
import OhioSlider from "@/components/slider";
import { GridItemData } from "@/app/services/components/services-grid";

export const features = [
 
  
  {
    icon: Blocks,
    title: "Seamless Integration",
    subtitle: "works with tools",
  },
   {
    icon: Wrench,
    title: "24X7 ",
    subtitle: "customer support",
  },
   {
    icon: RefreshCcw,
    title: "Reliable and",
    subtitle: "regular updates",
  },
 
  {
    icon: Airplay,
    title: "100%",
    subtitle: "system uptime",
  },
   
  {
    icon: ChartNoAxesCombinedIcon,
    title: "Single Dashboard",
    subtitle: "complete analytics",
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


export const ecommerceCards = [
  {
    icon: <ShoppingCart className="h-8 w-8 text-black" strokeWidth={1.5} />,
    heading: "Ready-to-ship prebuilts",
    description:
      "Choose from expertly assembled prebuilt PCs optimized for gaming, work, and creative performance.",
  },
  {
    icon: <Settings className="h-8 w-8 text-black" strokeWidth={1.5} />,
    heading: "Custom PC builds",
    description:
      "Build your PC your way with component-level customization and expert assembly.",
  },
  {
    icon: <Layers className="h-8 w-8 text-black" strokeWidth={1.5} />,
    heading: "Custom 3D printed parts",
    description:
      "Design and order custom 3D printed components, cases, and accessories tailored to your setup.",
  },
  {
    icon: <Truck className="h-8 w-8 text-black" strokeWidth={1.5} />,
    heading: "Secure packaging & delivery",
    description:
      "Professionally packed systems and components delivered safely to your doorstep.",
  },
  {
    icon: <Shield className="h-8 w-8 text-black" strokeWidth={1.5} />,
    heading: "Tested & reliable builds",
    description:
      "Every system is stress-tested for performance, stability, and long-term reliability.",
  },
  {
    icon: <Zap className="h-8 w-8 text-black" strokeWidth={1.5} />,
    heading: "Performance-first experience",
    description:
      "Fast load times, smooth checkout, and an optimized shopping experience for PC enthusiasts.",
  },
];



export const staticContent = {
  badgeText: "eCommerce",
  title: "Build,customize, and power your perfect PC.",
  description:
    "Shop high-performance PC components, create custom builds, and upgrade with confidence through a seamless, tech-focused shopping experience.",
  CTAText: "Explore",
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
    mobile1: "https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio.clbthemes.com/CheckoutSuccess__Mobile.webp",
    mobile2:
      "https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio.clbthemes.com/CheckoutSuccess__Mobile.webp",
  },
];

export const slides = [
  <TabImageSection key="slide-1" imgSrc="/tab-images/image.png" />,

  <TabCardInfoSection key="slide-2">
  {ecommerceCards.map((card, index) => (
    <TabSectionCard
      key={index}
      className="hover:bg-white/10 cursor-pointer"
    >
      <TabSectionCardIcon>
        {card.icon}
      </TabSectionCardIcon>

      <TabSectionCardHeading className="text-white">
        {card.heading}
      </TabSectionCardHeading>

      <TabSectionCardDescription className="text-white/90">
        {card.description}
      </TabSectionCardDescription>
    </TabSectionCard>
  ))}
</TabCardInfoSection>,

  <OhioSlider slides={carouselImages} key="slide-3" />,
];


export const services :GridItemData[] = [
  {
    id: "01.",
    title: "Web Development",
    description:
      "Building responsive, high-performance websites and web applications tailored to your business needs.",
  },
  {
    id: "02.",
    title: "Digital Marketing",
    description:
      "From SEO to social media marketing, we deploy strategies that amplify your online presence and drive targeted traffic to your site.",
  },
  {
    id: "03.",
    title: "UI/UX Design",
    description:
      "We craft intuitive and engaging digital experiences by merging user-centric UX design with stunning, brand-aligned UI design",
  },
  {
    id: "04.",
    title: "Custom ERP Solutions",
    description:
      "Tailored ERP systems designed to streamline your business processes and enhance operational efficiency.",
  },
  {
    id: "05.",
    title: "AR/VR & 3D Design",
    description:
      "Immersive augmented and virtual reality solutions combined with cutting-edge 3D design to elevate user engagement.",
  },
  {
    id: "06.",
    title: "SEO Optimization",
    description:
      "Boost your website's visibility and ranking on search engines with our expert SEO services.",
  },
]


export const awards = {
  webby: [
    { id: "01.", title: "RCA Records Website Overhaul", description: "Webby Award Winner, 2024" },
    { id: "02.", title: "Unseen Studio Portfolio Site", description: "Honorable Mention, 2024" },
    { id: "03.", title: "The World of Tomorrow", description: "Honorable Mention, Oct 28th, 2023" },
    { id: "04.", title: "Hall of Zero Limits", description: "Nomination, May 5th, 2024" },
  ],
  awwwwards: [
    { id: "05.", title: "AREA 17 Portfolio Website", description: "Site of the day, Aug 25th, 2025" },
    { id: "06.", title: "WebFX Client Project", description: "Site of the month, Sep 28th, 2025" },
    { id: "07.", title: "Microsoft AI Website", description: "Site of the month, Mar 5th, 2024" },
  ],
  cssda: [
    { id: "08.", title: "Drool Design Studio Portfolio", description: "Website of the day, Sep 28th, 2025" },
    { id: "09.", title: "Interaction for The Wall", description: "Website of the day, Sep 28th, 2023" },
  ],
}
