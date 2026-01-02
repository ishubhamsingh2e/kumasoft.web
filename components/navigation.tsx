"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Menu } from "lucide-react";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "Blogs", href: "/blog" },
  { name: "About Us", href: "/about" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="absolute top-0 font-grift w-full py-8 z-30 bg-primary">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex gap-4 items-baseline">
            <div className="rounded-full hidden border-2 hover:border-[#F05A29] transition duration-300 ease-in-out not-only:p-2 h-fit w-fit">
              <Menu className="w-6 h-6 text-white " />
            </div>
            <Link href="/" className="flex items-center gap-2 sticky top-2">
              <Image
                src="/logo-dark.png"
                alt="Kumasoft Logo"
                width={160}
                height={50}
              />
            </Link>
          </div>

          <div className="px-4 py-2 bg-primary rounded-full">
            <div className="flex items-center gap-8">
              {navigationItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-primary-foreground hover:text-[#F05A29] transition duration-300 ease-in-out font-medium"
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* CTA Button */}
         <a href="/contact
         "> <Button
            size="lg"
            className="rounded-full cursor-pointer bg-[#F05A29] text-xl font-grift"
          >
            Contact Us
          </Button></a>
        </div>
      </div>
    </nav>
  );
}
