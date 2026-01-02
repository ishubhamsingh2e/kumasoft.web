import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";
import { IMAGES_ROW_A,IMAGES_ROW_B } from "@/lib/data";

export default function HeroCarousel() {

    return(
        <>
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-8">
            <ScrollVelocityContainer className="w-full">
              <ScrollVelocityRow
                baseVelocity={1}
                direction={1}
                className="py-4"
              >
                {IMAGES_ROW_A.map((src, idx) => (
                  <div key={idx} className="h-52 w-fit">
                    <img
                      src={src}
                      alt="Unsplash sample"
                      loading="lazy"
                      decoding="async"
                      className="mx-4 inline-block h-52 w-fit rounded-lg object-contain shadow-sm"
                    />
                  </div>
                ))}
              </ScrollVelocityRow>
              <ScrollVelocityRow
                baseVelocity={1}
                direction={-1}
                className="py-4"
              >
                {IMAGES_ROW_B.map((src, idx) => (
                  <div key={idx} className="h-52 w-fit">
                    <img
                      src={src}
                      alt="Unsplash sample"
                      width={240}
                      height={160}
                      loading="lazy"
                      decoding="async"
                      className="mx-4 inline-block h-52 w-fit rounded-lg object-contain shadow-sm"
                    />
                  </div>
                ))}
              </ScrollVelocityRow>
            </ScrollVelocityContainer>

            <div className="from-primary pointer-events-none absolute bottom-0 h-full w-full bg-linear-to-t"></div>
          </div>
        </>
    )
}
