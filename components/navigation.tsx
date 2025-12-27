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
  { name: "Page Types", href: "/page-types" },
];

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="font-grift absolute top-0 w-full py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <div className="h-fit w-fit rounded-full border-2 transition duration-300 ease-in-out not-only:p-2 hover:border-[#F05A29]">
                  <Menu className="h-6 w-6 text-white" />
                </div>
              </SheetTrigger>
              <SheetContent className="w-screen">
                <SheetHeader>
                  <SheetTitle>Edit profile</SheetTitle>
                  <SheetDescription>
                    Make changes to your profile here. Click save when
                    you&apos;re done.
                  </SheetDescription>
                </SheetHeader>
                <div className="grid flex-1 auto-rows-min gap-6 px-4">
                  <div className="grid gap-3">
                    <Label htmlFor="sheet-demo-name">Name</Label>
                    <Input id="sheet-demo-name" defaultValue="Pedro Duarte" />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="sheet-demo-username">Username</Label>
                    <Input id="sheet-demo-username" defaultValue="@peduarte" />
                  </div>
                </div>
                <SheetFooter>
                  <Button type="submit">Save changes</Button>
                  <SheetClose asChild>
                    <Button variant="outline">Close</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>

            <Link href="/" className="sticky top-2 flex items-center gap-2">
              <Image
                src="/logo-dark.png"
                alt="Kumasoft Logo"
                width={160}
                height={50}
              />
            </Link>
          </div>

          <div className="bg-primary rounded-full px-4 py-2">
            <div className="flex items-center gap-8">
              {navigationItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-primary-foreground font-medium transition duration-300 ease-in-out hover:text-[#F05A29]",
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* CTA Button */}
          <Button
            size="lg"
            className="font-grift cursor-pointer rounded-full bg-[#F05A29]"
          >
            Book A Call
          </Button>
        </div>
      </div>
    </nav>
  );
}
