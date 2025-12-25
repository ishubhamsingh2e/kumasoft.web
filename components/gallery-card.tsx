"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface TemplateCardProps {
  image: string;
  title: string;
  tags: string[];
  hasFigma?: boolean;
  builders?: string[];
}

export function TemplateCard({
  image,
  title,
  tags,
  hasFigma = true,
  builders = ["WPBakery", "Elementor"],
}: TemplateCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[1.4/1] overflow-hidden rounded-2xl bg-muted transition-all duration-500 ease-in-out">
        {/* Main Image */}
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className={cn(
            "object-cover transition-transform duration-700 ease-in-out",
            isHovered ? "scale-105" : "scale-100"
          )}
        />

        {/* Overlay Badges - Always present but animated */}
        <div className="absolute inset-0 p-4 flex flex-col justify-between">
          {/* Top Badge: Figma File */}
          <div
            className={cn(
              "transition-all duration-500 delay-75 transform",
              isHovered
                ? "translate-y-0 opacity-100"
                : "-translate-y-4 opacity-0"
            )}
          >
            {hasFigma && (
              <div className="inline-flex items-center gap-2 bg-white px-3 py-2 rounded-full shadow-sm">
                <div className="w-5 h-5 flex items-center justify-center">
                  <svg
                    width="12"
                    height="18"
                    viewBox="0 0 12 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 0C1.34315 0 0 1.34315 0 3C0 4.65685 1.34315 6 3 6H6V0H3Z"
                      fill="#F24E1E"
                    />
                    <path
                      d="M9 0C7.34315 0 6 1.34315 6 3V6H9C10.6569 6 12 4.65685 12 3C12 1.34315 10.6569 0 9 0Z"
                      fill="#FF7262"
                    />
                    <path
                      d="M3 6C1.34315 6 0 7.34315 0 9C0 10.6569 1.34315 12 3 12H6V6H3Z"
                      fill="#A259FF"
                    />
                    <path
                      d="M0 15C0 13.3431 1.34315 12 3 12H6V15C6 16.6569 4.65685 18 3 18C1.34315 18 0 16.6569 0 15Z"
                      fill="#1ABCFE"
                    />
                    <path
                      d="M6 6H9C10.6569 6 12 7.34315 12 9C12 10.6569 10.6569 12 9 12H6V6Z"
                      fill="#0ACF83"
                    />
                  </svg>
                </div>
                <span className="text-xs font-bold tracking-tight">
                  Free Figma File
                </span>
              </div>
            )}
          </div>

          {/* Bottom Badges: Tech Stack */}
          <div className="flex gap-2">
            {builders.map((builder, idx) => (
              <div
                key={builder}
                className={cn(
                  "inline-flex items-center gap-1.5 bg-white px-3 py-2 rounded-full shadow-sm transition-all duration-500 transform",
                  isHovered
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                )}
                style={{ transitionDelay: `${(idx + 1) * 75}ms` }}
              >
                <ArrowUpRight className="w-4 h-4 text-foreground/70" />
                <span className="text-xs font-bold tracking-tight">
                  {builder}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Subtle Gradient Overlay on Hover */}
        <div
          className={cn(
            "absolute inset-0 bg-black/5 transition-opacity duration-500",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        />
      </div>

      {/* Metadata */}
      <div className="mt-4 space-y-1">
        <h3 className="text-lg font-bold leading-tight">{title}</h3>
        <p className="text-sm text-muted-foreground font-medium">
          {tags.join(", ")}
        </p>
      </div>
    </div>
  );
}
