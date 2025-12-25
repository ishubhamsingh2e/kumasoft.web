import ButtonHero from "./hero-button";
import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <>
   <div className="bg-section">
       <div className="container mx-auto px-4 py-20 h-[calc(100vh-72px)]  ">
        <div className=" font-grift mx-auto text-center">
          <h1 className="text-8xl font-bold text-white mb-4 text-center">
           <span className="text-[#FFFFFFA6]"> Next Generation</span> <br />Of Softwares
          </h1>
          <p className="text-xl font-semibold text-white">
            Building cutting-edge web and mobile applications tailored to your
            needs.
          </p>
          <ButtonHero/>
        </div>
      </div>
   </div>
    </>
  );
}
