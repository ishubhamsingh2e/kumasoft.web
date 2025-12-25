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
  const currentIndexRef = useRef(0);
  const isAnimatingRef = useRef(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const slidesEls = gsap.utils.toArray<HTMLElement>(".js-slide");
    if (!slidesEls.length) return;

    const ENTER_Y = 100;  // bottom → top
    const EXIT_Y = -100;

    // 🔒 HARD INITIAL RESET (CRITICAL)
    slidesEls.forEach((el, i) => {
      gsap.set(el, {
        opacity: i === 0 ? 1 : 0,
        y: i === 0 ? 0 : ENTER_Y,
        zIndex: i === 0 ? 2 : 0,
        pointerEvents: i === 0 ? "auto" : "none",
      });
    });

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: `+=${slidesEls.length * window.innerHeight}`,
      pin: true,
      pinSpacing: true,

      onUpdate: (self) => {
        const total = slidesEls.length;
        const index = Math.min(
          total - 1,
          Math.max(0, Math.round(self.progress * (total - 1)))
        );

        if (
          index !== currentIndexRef.current &&
          !isAnimatingRef.current
        ) {
          animateTo(index);
        }
      },
    });

    function animateTo(nextIndex: number) {
      isAnimatingRef.current = true;

      const currentIndex = currentIndexRef.current;
      const current = slidesEls[currentIndex];
      const next = slidesEls[nextIndex];

      // 🔒 HARD RESET ALL NON-ACTIVE SLIDES
      slidesEls.forEach((el, i) => {
        if (i !== currentIndex && i !== nextIndex) {
          gsap.set(el, {
            opacity: 0,
            y: ENTER_Y,
            zIndex: 0,
            pointerEvents: "none",
          });
        }
      });

      const tl = gsap.timeline({
        defaults: {
          duration: 0.75,
          ease: "power3.inOut",
        },
        onComplete: () => {
          currentIndexRef.current = nextIndex;
          isAnimatingRef.current = false;
        },
      });

      // Prepare incoming slide
      tl.set(next, {
        opacity: 1,
        y: ENTER_Y,
        zIndex: 3,
        pointerEvents: "auto",
      });

      // Slide in from bottom
      tl.to(next, { y: 0 }, 0);

      // Slide out current upwards
      tl.to(
        current,
        {
          y: EXIT_Y,
          opacity: 0,
          zIndex: 0,
          pointerEvents: "none",
        },
        0
      );
    }

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [slides, lrt]);

  const staticOrder = lrt ? "lg:order-1" : "lg:order-2";
  const movingOrder = lrt ? "lg:order-2" : "lg:order-1";

  return (
    <section
      ref={sectionRef}
      className={`relative font-grift ${classname ?? ""}`}
    >
      <div className="container mx-auto">
        <div
          className={`grid min-h-screen grid-cols-1 gap-6 items-center ${
            lrt
              ? "lg:grid-cols-[0.45fr_1fr]"
              : "lg:grid-cols-[1fr_0.45fr]"
          }`}
        >
          {/* STATIC PANEL */}
          <div
            className={`sticky top-[10vh] h-[80vh] rounded-xl p-6 flex flex-col justify-between ${staticOrder}`}
          >
            <div className="h-full flex flex-col justify-center items-start">
              <Badge
                description={staticContent.badgeText}
                classname="mb-4 w-[30%] text-center bg-[#e8d5ea]"
              />
              <h2 className="text-[52px] leading-13 font-bold text-black">
                {staticContent.title}
              </h2>
              <p className="text-md font-normal leading-7 mt-4">
                {staticContent.description}
              </p>
              <Button className="bg-black text-white w-[30%] mt-4 font-bold p-5">
                <ArrowUpRight className="h-8 w-8" />
                {staticContent.CTAText}
              </Button>
            </div>
          </div>

          {/* MORPH CANVAS */}
          <div
            className={`relative h-[90vh] overflow-hidden ${movingOrder}`}
          >
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
