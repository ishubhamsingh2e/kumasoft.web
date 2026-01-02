
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronRight } from "lucide-react";
import { features } from "@/lib/data";
import HeroCarousel from "./hero-carousel";
import { ShimmerButton } from "./ui/shimmer-button";
export default function HeroSection() {
  return (
    <>
      <div className=" bg-primary container mx-auto flex flex-col items-center gap-8 pt-36">
        <div className="flex items-center gap-4">
          <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
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
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
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
          <span className="text-primary-foreground/60">The all-in-one</span>
          <br />
          Digital Solution  <br /> for your business
          <span className="text-[#F05A29]">.</span>
        </h1>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">

          <ShimmerButton background="rgb(240 90 41)" className="font-semibold flex items-end justify-center"><span>Book Free Consultation</span>
            <ChevronRight className=" h-5 w-5" />
          </ShimmerButton>

          <div className="text-center text-sm text-slate-300 sm:text-left">
            <p>Life-time license*, free updates</p>
            <p>and 3 months of free support.</p>
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
      <div className="mt-6 w-full">
        <HeroCarousel />
      </div>
    </>
  );
}
