import { Button } from "./ui/button";

export function Footer() {
  return (
    // Ensure the outer container has a solid white background
    <footer className="relative overflow-hidden bg-white pt-16">
      <div className="relative  h-screen flex flex-col items-center justify-start">
        
        {/* The Blue Semi-circle Background */}
        <div
          className="
            absolute 
            inset-0 
            bg-[url(/semicircle.svg)] 
            bg-no-repeat 
            bg-bottom 
            bg-cover
            z-0
          "
        />

        {/* The Text Layer */}
        <h2
          className="
            relative
            -top-40
            mt-20
            font-black 
            text-5xl md:text-6xl lg:text-7xl
            leading-tight tracking-tight
            text-center
            /* KEY STYLES BELOW */
            text-white 
            mix-blend-difference
          "
        >
          DON&apos;T HESITATE TO
          <br />
          REACH OUT FOR YOUR
          <br />
          NEXT PROJECT
        </h2>
          <Button 
            size="lg" 
            className=" absolute rounded-full cursor-pointer bg-white font-bold text-black hover:bg-gray-200 top-55"
          >
            Book A Call
          </Button>
        <div className="h-100">
          {/* Spacer to push the contact info to the bottom */}
        </div>
        <div className="info relative bottom-0 flex justify-between gap-4 text-white uppercase font-medium font-grift">
          <p className="email ">
            info@KumaSoft.in
          </p>
          <p className="phone">
            +919310949671
          </p>
        </div>
        
      </div>
    </footer>
  );
}