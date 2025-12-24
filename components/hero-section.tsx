import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-20 h-[calc(100vh-72px)] ">
        <div className=" font-grift mx-auto text-center">
          <h1 className="text-8xl font-bold text-white mb-4 text-center">
            Next Generation Of Softwares
          </h1>
          <p className="text-xl font-semibold text-white">
            Building cutting-edge web and mobile applications tailored to your
            needs.
          </p>
          <Button
            size="lg"
            className="
    relative overflow-hidden rounded-full
    px-14 py-6
    font-grift font-bold text-white
    bg-transparent
    border border-white/20
    backdrop-blur-md
    transition-transform duration-300
    hover:scale-[1.04]
    group
    mt-4
  "
          >
            {/* Liquid base */}
            <span
              className="
      absolute inset-[-50%]
      bg-[conic-gradient(from_180deg,#2d328d,#4a5bff,#1b1f6b,#2d328d)]
      animate-liquid
      opacity-90
    "
            />

            {/* Water distortion layer */}
            <span
              className="
      absolute inset-0
      bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.18),transparent_40%),
          radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.12),transparent_45%)]
      mix-blend-overlay
      animate-water
    "
            />

            {/* Hover ripple */}
            <span
              className="
      absolute inset-0
      opacity-0
      bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.35),transparent_55%)]
      transition-opacity duration-300
      group-hover:opacity-100
    "
            />

            {/* Text */}
            <span className="relative text-xl z-10 tracking-wide">Book A Call</span>
          </Button>
        </div>
      </div>
    </>
  );
}
