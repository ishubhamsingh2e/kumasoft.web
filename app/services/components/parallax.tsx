"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !bgRef.current || !contentRef.current) return;

    // Background parallax
    gsap.to(bgRef.current, {
      y: -200,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // Pin foreground content
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=40%",
      pin: contentRef.current,
      pinSpacing: false, // 🔑 prevents overflow
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[140vh] overflow-hidden"
    >
      {/* Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage:
            "url('https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio.clbthemes.com/oh__demo34__18.webp?id=254492')",
        }}
      />

      {/* Foreground (Pinned) */}
      <div
        ref={contentRef}
        className="relative z-10 flex"
      >
        <div className="mx-auto container w-full px-6">
          <div className="max-w-[60%] space-y-2 pt-[10vh]">
            <p className="text-xl font-semibold text-white tracking-wide">
              We help to achieve goals
            </p>

            <h2 className="text-6xl font-bold text-white leading-16">
              After more than a decade in the industry, we’re proud to
              completed over 340+ projects that have helped shape our local
              landscape.
            </h2>

            <p className="text-white/90 text-xl">
              We’ve tackled projects of all sizes, from small-scale residential
              renovations to large-scale commercial developments, always with
              the same dedication to exceeding expectations.
            </p>

            <Button className="bg-[#F05A29] px-8 py-6 text-md hover:text-black mt-6">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
