import { TabSectionCardProps } from "@/components/tab-section-card";
import TabsSection from "@/components/tabs-section";
import {
  ArrowBigDown,
  ArrowRight,
  ChevronRight,
  Code,
  Code2,
  CreditCard,
  Download,
  Eye,
  Figma,
  Globe,
  LayoutTemplate,
  RefreshCcw,
  Shield,
  ShoppingCart,
  Sparkles,
  Truck,
  Zap,
} from "lucide-react";
import { TabImageSection } from "@/components/tab-image-section";
import TabCardInfoSection from "@/components/tab-card-info-section";
import { TemplateGallery } from "@/components/gallery";
import OhioSlider from "@/components/slider";
import InfoSection from "@/components/info-section";
import { infoContent } from "@/components/info-section";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";

const staticContent = {
  badgeText: "eCommerce",
  title: "Grow your business with eCommerce solutions.",
  description:
    "Sell online, in-store, and globally with built-in comprehensive tools and integrations.",
  CTAText: "Shop Demo",
  CTAIcon: <ArrowBigDown className="h-8 w-8" />,
};
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

const images = [
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
const slides = [
  <TabImageSection key="slide-1" imgSrc="/tab-images/image.png" />,
  <TabCardInfoSection key="slide-2" cards={ecommerceCards} />,
  <OhioSlider slides={images} key="slide-3" />,
];

const features = [
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

const IMAGES_ROW_A = [
  "/hero-showcase/1.webp",
  "/hero-showcase/2.webp",
  "/hero-showcase/3.webp",
  "/hero-showcase/4.webp",
  "/hero-showcase/5.webp",
  "/hero-showcase/6.webp",
  "/hero-showcase/7.webp",
];

const IMAGES_ROW_B = [
  "/hero-showcase/8.webp",
  "/hero-showcase/9.webp",
  "/hero-showcase/10.webp",
  "/hero-showcase/11.webp",
  "/hero-showcase/12.webp",
  "/hero-showcase/13.webp",
  "/hero-showcase/14.webp",
];

export default function Home() {
  return (
    <>
      <div className="bg-primary">
        <div className="container mx-auto flex flex-col items-center gap-8 pt-36">
          <div className="flex items-center gap-4">
            <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://github.com/maxleiter.png"
                  alt="@maxleiter"
                />
                <AvatarFallback>LR</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://github.com/evilrabbit.png"
                  alt="@evilrabbit"
                />
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="text-primary-foreground">
              <strong>Join 50+</strong>
              <br />
              <span className="text-primary-foreground">loving customers</span>
            </div>
          </div>
          <h1 className="text-primary-foreground font-grift max-w-5xl px-4 text-center text-6xl leading-24 font-bold md:px-0 md:text-7xl lg:text-8xl">
            <span className="text-slate-400">The all-in-one</span>
            <br />
            WordPress theme <br /> to build beautiful sites
            <span className="text-[#F05A29]">.</span>
          </h1>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="flex w-full items-center justify-center gap-2 rounded-full bg-[#F05A29] px-6 py-3 font-semibold text-white transition hover:opacity-90 sm:w-auto">
              <span>Consultation | Free</span>
              <ChevronRight className="h-4 w-4" />
            </button>
            <div className="text-center text-sm text-slate-300 sm:text-left">
              <p>Life-time license, free updates</p>
              <p>and 6 months of free support.</p>
            </div>
          </div>

          <div className="mx-auto mt-8">
            <div className="flex flex-wrap items-center justify-center gap-6 md:justify-between">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-gray-300"
                >
                  <div className="flex h-fit w-fit items-center justify-center rounded-full border-2 border-gray-200/10 p-3">
                    <feature.icon className="h-8 w-8 text-gray-200" />
                  </div>

                  <div className="text-sm">
                    <p className="text-xl leading-tight font-bold text-white">
                      {feature.title}
                      <br />
                      <span className="font-normal">{feature.subtitle}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full mt-6">
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-8">
            <ScrollVelocityContainer className="w-full">
              <ScrollVelocityRow
                baseVelocity={1}
                direction={1}
                className="py-4"
              >
                {IMAGES_ROW_A.map((src, idx) => (
                  <div key={idx} className="h-52 w-fit">
                    <img
                      src={`${src}`}
                      alt="Unsplash sample"
                      loading="lazy"
                      decoding="async"
                      className="mx-4 inline-block h-52 w-fit rounded-lg object-contain shadow-sm"
                    />
                  </div>
                ))}
              </ScrollVelocityRow>
              <ScrollVelocityRow
                baseVelocity={1}
                direction={-1}
                className="py-4"
              >
                {IMAGES_ROW_B.map((src, idx) => (
                  <div key={idx} className="h-52 w-fit">
                    <img
                      src={`${src}`}
                      alt="Unsplash sample"
                      width={240}
                      height={160}
                      loading="lazy"
                      decoding="async"
                      className="mx-4 inline-block h-52 w-fit rounded-lg object-contain shadow-sm"
                    />
                  </div>
                ))}
              </ScrollVelocityRow>
            </ScrollVelocityContainer>

            <div className="from-primary pointer-events-none absolute bottom-0 h-full w-full bg-linear-to-t"></div>
          </div>
        </div>
      </div>

      <InfoSection static={infoContent} />
      <div className="container mx-auto">
        {/* Bento Grid */}
        <div className="grid gap-6 md:grid-cols-12">
          {/* Top Left - Quality Fonts */}
          <div className="flex flex-col justify-between rounded-2xl bg-linear-to-br from-purple-600 to-purple-900 p-8 text-white md:col-span-4 md:row-span-2">
            <div>
              <h2 className="mb-3 text-2xl font-bold">
                Quality fonts at your fingertips.
              </h2>
              <p className="mb-8 text-sm text-purple-100">
                Choose from 1.5M+ Google Fonts, 4.3K Adobe Fonts & unlimited
                custom fonts to be uploaded.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center gap-2">
                <div className="rounded-full bg-white/20 p-3 backdrop-blur">
                  <Sparkles className="h-5 w-5" />
                </div>
                <span className="text-xs text-purple-100">
                  Google Fonts
                  <br />
                  1.8M+ fonts
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="rounded-full bg-white/20 p-3 backdrop-blur">
                  <Code2 className="h-5 w-5" />
                </div>
                <span className="text-xs text-purple-100">
                  Adobe Fonts
                  <br />
                  4.3K fonts
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="rounded-full bg-white/20 p-3 backdrop-blur">
                  <Zap className="h-5 w-5" />
                </div>
                <span className="text-xs text-purple-100">
                  Custom Fonts
                  <br />
                  Unlimited
                </span>
              </div>
            </div>
          </div>

          {/* Top Center - Responsive Images */}
          <div className="flex items-center justify-center overflow-hidden rounded-2xl bg-slate-100 p-8 md:col-span-4">
            <div className="space-y-2">
              <img
                src="/responsive-design-interface-mockup.jpg"
                alt="Responsive design mockup"
                className="rounded-lg shadow-lg"
              />
              <h3 className="text-xl font-bold text-slate-950">
                Responsive and retina ready images.
              </h3>
              <p className="text-sm text-slate-700">
                Deliver a perfect website experience with high-resolution images
                and graphics.
              </p>
            </div>
          </div>

          {/* Top Right - Regular Updates */}
          <div className="flex flex-col justify-between rounded-2xl bg-linear-to-br from-pink-500 to-pink-600 p-8 text-white md:col-span-4 md:row-span-2">
            <div>
              <div className="mb-4 inline-block rounded-full bg-white/20 p-2 backdrop-blur">
                <Eye className="h-6 w-6" />
              </div>
              <h2 className="mb-4 text-2xl font-bold">
                Reliable and regular updates.
              </h2>
              <p className="mb-8 text-sm text-pink-100">
                Get a life-time consistent and dependable updates featuring
                innovative new functionalities, performance enhancements, and
                resolved issues.
              </p>
            </div>
            <Button className="w-fit bg-white text-pink-600 hover:bg-white/90">
              See Changelog <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Middle Left - Theme Settings */}
          <div className="rounded-2xl bg-pink-100 p-8 md:col-span-6">
            <div className="mb-4 inline-block rounded-full bg-pink-500 px-3 py-1 text-xs font-semibold text-white">
              Updated
            </div>
            <h3 className="mb-4 text-2xl font-bold text-slate-950">
              New reworked theme settings panel.
            </h3>
            <p className="mb-6 text-sm text-slate-700">
              Our revamped theme settings panel offers a fresh and intuitive
              interface to deliver the best configuration experience.
            </p>
            <img
              src="/color-picker-interface-design-settings.jpg"
              alt="Theme settings panel"
              className="rounded-lg"
            />
          </div>

          {/* Middle Right - Color Modes */}
          <div className="rounded-2xl bg-slate-200 p-8 md:col-span-6">
            <div className="mb-4 inline-block rounded-full bg-slate-700 px-3 py-1 text-xs font-semibold text-white">
              Popular
            </div>
            <h3 className="mb-4 text-2xl font-bold text-slate-950">
              Light, dark and system color mode browsing.
            </h3>
            <p className="mb-6 text-sm text-slate-700">
              Designed to enhance the browsing experience by allowing you to
              choose between light, dark, or system-based themes.
            </p>
            <img
              src="/light-dark-mode-interface-comparison.jpg"
              alt="Color mode browsing"
              className="rounded-lg"
            />
          </div>

          {/* Bottom Left - Fast Loading */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 md:col-span-4">
            <h3 className="mb-4 text-2xl font-bold text-slate-950">
              Optimized for fast loading.
            </h3>
            <p className="mb-8 text-sm text-slate-700">
              Olio is a highly performant WordPress theme with good defaults and
              well optimized source code to make your site fast and SEO
              optimized.
            </p>
            <div className="flex gap-8">
              <div>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-bold text-slate-950">97</span>
                  <span className="mb-1 text-lg font-semibold text-slate-950">
                    %
                  </span>
                </div>
                <p className="text-xs text-slate-600">PageSpeed score</p>
              </div>
              <div>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-bold text-slate-950">35</span>
                  <span className="mb-1 text-lg font-semibold text-slate-950">
                    %
                  </span>
                </div>
                <p className="text-xs text-slate-600">
                  Less CSS and JS code files
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Center - Simple Import */}
          <div className="rounded-2xl bg-linear-to-br from-purple-100 to-purple-200 p-8 md:col-span-4">
            <h3 className="mb-4 text-2xl font-bold text-slate-950">
              Simple import.
            </h3>
            <p className="mb-6 text-sm text-slate-700">
              Easy customization with smart code delivery to import only the
              parts you are required for.
            </p>
            <img
              src="/demo-showcase-event-interface.jpg"
              alt="Simple import interface"
              className="rounded-lg"
            />
          </div>

          {/* Bottom Right - Hello World */}
          <div className="flex flex-col justify-between rounded-2xl bg-linear-to-br from-blue-600 to-purple-600 p-8 text-white md:col-span-4">
            <div>
              <div className="mb-4 inline-block rounded-full bg-white/20 p-2 backdrop-blur">
                <Globe className="h-6 w-6" />
              </div>
              <h2 className="mb-4 text-2xl font-bold">
                Hello World translate ready.
              </h2>
              <p className="mb-8 text-sm text-white/90">
                Use pre-made translations or customize your website for multiple
                languages.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-lg">🇺🇸</span> English
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-lg">🇪🇸</span> Español
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-lg">🇯🇵</span> 日本語
              </div>
            </div>
          </div>
        </div>
      </div>

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
