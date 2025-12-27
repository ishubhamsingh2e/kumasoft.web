"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Badge } from "./badge";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";
import { TabSectionProps } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export default function StickyScrollTabs({
  classname,
  static: staticContent,
  slides,
  lrt = true,
}: TabSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const slidesEls = gsap.utils.toArray<HTMLElement>(".js-slide");
    if (!slidesEls.length) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.inOut" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${slidesEls.length * 100}%`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // 🔒 Initial state
      slidesEls.forEach((el, i) => {
        gsap.set(el, {
          opacity: i === 0 ? 1 : 0,
          y: i === 0 ? 0 : 100,
          zIndex: slidesEls.length - i,
          pointerEvents: i === 0 ? "auto" : "none",
        });
      });

      // 🔁 Build transitions
      slidesEls.forEach((slide, i) => {
        if (i === 0) return;

        const prev = slidesEls[i - 1];

        // Slide out previous
        tl.to(prev, {
          y: -100,
          opacity: 0,
          pointerEvents: "none",
          duration: 1,
        });

        // Slide in next
        tl.fromTo(
          slide,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            pointerEvents: "auto",
            duration: 1,
          },
          "<",
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [slides]);
  const staticOrder = lrt ? "lg:order-1" : "lg:order-2";
  const movingOrder = lrt ? "lg:order-2" : "lg:order-1";

  return (
    <section
      ref={sectionRef}
      className={`font-grift relative ${classname ?? ""}`}
    >
      <div className="container mx-auto">
        <div
          className={`grid min-h-screen grid-cols-1 items-center gap-6 ${
            lrt ? "lg:grid-cols-[0.45fr_1fr]" : "lg:grid-cols-[1fr_0.45fr]"
          }`}
        >
          {/* STATIC PANEL */}
          <div
            className={`sticky top-[10vh] flex h-[80vh] flex-col justify-between rounded-xl p-6 ${staticOrder}`}
          >
            <div className="flex h-full flex-col items-start justify-center">
              <Badge
                description={staticContent.badgeText}
                classname="mb-4 w-[30%] text-center bg-[#e8d5ea]"
              />
              <h2 className="text-[52px] leading-13 font-bold text-black">
                {staticContent.title}
              </h2>
              <p className="text-md mt-4 leading-7 font-normal">
                {staticContent.description}
              </p>
              <Button className="mt-4 w-[30%] bg-black p-5 font-bold text-white">
                <ArrowUpRight className="h-8 w-8" />
                {staticContent.CTAText}
              </Button>
            </div>
          </div>

          {/* MORPH CANVAS */}
          <div className={`relative h-[90vh] overflow-hidden ${movingOrder}`}>
            {slides?.map((slide, i) => (
              <div
                key={i}
                className="js-slide absolute inset-0 flex items-center justify-center rounded-lg"
              >
                {slide}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
