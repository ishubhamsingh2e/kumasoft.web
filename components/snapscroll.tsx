"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const sections = [
  { id: 1, color: "bg-red-500", text: "Section One" },
  { id: 2, color: "bg-blue-500", text: "Section Two" },
  { id: 3, color: "bg-green-500", text: "Section Three" },
  { id: 4, color: "bg-purple-500", text: "Section Four" },
];

export default function SnapScroll() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: () =>
          `+=${window.innerHeight * (sections.length - 1)}`,
        pin: true,
        scrub: 1,
        snap: {
          snapTo: 1 / (sections.length - 1),
          duration: 0.6,
          ease: "power2.inOut",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      <div
        className="flex flex-col"
        style={{ height: `${sections.length * 100}vh` }}
      >
        {sections.map((section) => (
          <section
            key={section.id}
            className={`h-screen w-full flex items-center justify-center text-white text-6xl font-bold ${section.color}`}
          >
            {section.text}
          </section>
        ))}
      </div>
    </div>
  );
}
