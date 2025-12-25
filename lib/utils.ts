import { clsx, type ClassValue } from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface TabSectionProps {
  lrt?:boolean
  classname?: string;
  static: {
    badgeText: string;
    title: string;
    description: string;
    CTAText: string;
    CTAIcon: React.ReactNode;
  };
  slides?: React.ReactNode[];
}
