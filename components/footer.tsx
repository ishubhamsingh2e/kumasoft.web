import { Button } from "./ui/button";
import { Globe } from "./ui/globe";
import { Highlighter } from "./ui/highlighter";
export function Footer() {
  return (
    // Ensure the outer container has a solid white background
    <footer className="  bg-white pt-120 overflow-hidden relative h-screen ">
      <div className="  flex flex-col items-center justify-start ">
        <h2
          className="
            font-black 
            text-5xl md:text-6xl lg:text-8xl
            leading-tight tracking-tight
            text-center
            text-primary 
            z-30
            -mt-60
            mb-10
          "
        >
          <Highlighter action="underline" color="#FFA500">
            DON&apos;T HESITATE TO
          </Highlighter>{" "}
          <br />
          REACH OUT FOR YOUR
          <br />
          <Highlighter action="highlight" color="#d55c39">
            NEXT BIG IDEA
          </Highlighter>{" "}
        </h2>
        <Button
          size="lg"
          className="
    relative rounded-full px-14 py-6
    font-black uppercase tracking-wide text-white
    bg-primary
    overflow-hidden
    shadow-xl
    z-40
    mb-10
  "
        >
          {/* Orbit ring */}
          <span
            className="
      pointer-events-none
      absolute -inset-1.5
      rounded-full
      border-2 border-white/40
      animate-spin-slow
    "
          />

          {/* Inner glow */}
          <span
            className="
      pointer-events-none
      absolute inset-0 rounded-full
      bg-white/10 blur-md
    "
          />

          <span className="relative z-10">Book a Call</span>
        </Button>
      </div>
      <Globe className="absolute inset-0 z-10 pointer-events-none" />

      <div className="info bg-primary backdrop-b  absolute bottom-0 gap-4 text-white mt-2 uppercase font-bold font-grift p-6 px-20  w-full  z-40 ">
        <div className="flex  justify-between">
          <div className=" flex gap-4">
            <p className="email ">info@KumaSoft.in</p>
            <p className="phone">+919310949671</p>
          </div>
          <div>copyright © 2025 KumaSoft. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
