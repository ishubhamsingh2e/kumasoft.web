"use client"

import Link from "next/link"
import { ArrowUpRight, Github, Instagram, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <>
    <div className=" flex whitespace-nowrap overflow-hidden border-y border-white/10 py-16 bg-white">
          <div className="animate-marquee flex gap-12 text-sm font-medium tracking-widest uppercase items-center text-black">
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i} className="flex items-center gap-12 text-2xl font-bold">
                <span>UI/UX DESIGN</span>
                <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                <span>DIGITAL STRATEGY</span>
                <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                <span>BRANDING</span>
                <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                <span>DEVELOPMENT</span>
                <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
              </span>
            ))}
          </div>
            <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 100s linear infinite;
        }
      `}</style>
        </div>
    <footer className="bg-primary text-white pt-12 pb-12 overflow-hidden min-h-screen">
      <div className="">
        {/* Top Marquee for services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end mb-12 container px-6 mx-auto">
          {/* Contact Section */}
          <div className="space-y-8">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none">
              READY TO <br />
              <span className="text-secondary italic">ELEVATE?</span>
            </h2>
            <p className="text-white/60 text-lg max-w-md">
              We're currently accepting new projects for 2026. Let's create something remarkable together.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-secondary hover:bg-accent/90 text-white rounded-full px-8 h-14 text-lg border-0"
              >
                START A PROJECT
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 hover:bg-white/10 text-white rounded-full px-8 h-14 text-lg bg-transparent"
              >
                OUR WORK
              </Button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 container px-6 mx-auto">
            <div className="space-y-4">
              <p className="text-accent text-xs font-bold uppercase tracking-widest">Sitemap</p>
              <ul className="space-y-2">
                {["Home", "Projects", "Services", "About", "Blog"].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-white/60 hover:text-white transition-colors flex items-center gap-1 group"
                    >
                      {item} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <p className="text-accent text-xs font-bold uppercase tracking-widest">Connect</p>
              <ul className="space-y-2">
                {[
                  { name: "Instagram", icon: Instagram },
                  { name: "Twitter", icon: Twitter },
                  { name: "LinkedIn", icon: Linkedin },
                  { name: "GitHub", icon: Github },
                ].map((social) => (
                  <li key={social.name}>
                    <Link
                      href="#"
                      className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <social.icon className="w-4 h-4" /> {social.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4 col-span-2 md:col-span-1">
              <p className="text-accent text-xs font-bold uppercase tracking-widest">Contact</p>
              <div className="space-y-2 text-white/60">
                <p>hello@kumasoft.studio</p>
                <p>+1 (555) 000-0000</p>
                <p>
                  123 Creative Plaza
                  <br />
                  Digital Valley, CA
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Massive Brand Mark */}
        <div className="relative select-none pointer-events-none mb-12 container px-6 mx-auto">
          <h1 className="text-[20vw] font-black leading-none tracking-tighter text-white/[0.03] text-center uppercase">
            KUMASOFT
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-[2vw] font-medium tracking-[1em] text-accent/20 uppercase">STUDIO</div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t container px-6 mx-auto border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-xs">
          <p>© 2026 KUMASOFT STUDIO. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">
              PRIVACY POLICY
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              TERMS OF SERVICE
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              COOKIE SETTINGS
            </Link>
          </div>
        </div>
      </div>

    
    </footer>
    </>
  )
}
