"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "Page Types", href: "/page-types" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className=" font-grift bg-section   w-full backdrop-blur-md py-2 border-b border-white/10  ">
      <div className="mx-auto container px-4 ">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sticky top-2">
            <Image
              src="/logo-dark.png"
              alt="Kumasoft Logo"
              width={160}
              height={50}
            />
          </Link>
           <div className=" ml-4 gap-8  flex items-center">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative pb-1 text-md font-medium transition-colors",
                  "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-white after:origin-left after:transition-transform ",
                  isActive
                    ? "text-white after:scale-x-100"
                    : "text-white/60 hover:text-white hover:after:scale-x-100 after:scale-x-0 "
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
          {/* CTA Button */}
          <Button size="lg" className="rounded-full cursor-pointer bg-[#2d328d] font-grift">Book A Call</Button>
        </div>

       
      </div>
    </nav>
  );
}
