"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface SlideGroup {
  desktop: string;
  mobile1: string;
  mobile2: string;
}

interface WooPreviewSliderProps {
  slides: SlideGroup[];
}

export default function WooPreviewSlider({ slides }: WooPreviewSliderProps) {
  return (
    <div className="relative w-full bg-[#90919C14] rounded-lg p-8 z-20 h-full flex flex-col justify-between gap-10  ">
      <div>
        <h1 className="text-3xl font-bold">WooCommerce pages.</h1>
        <p className="text-xl font-normal ">
          Preview of the standard WooCommerce pages.
        </p>
      </div>

      {/* SLIDER */}
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".woo-prev",
          nextEl: ".woo-next",
        }}
        spaceBetween={48}
        slidesPerView={1}
        loop={false}
        className="w-full"
        style={{ overflow: "visible" }} // 🔴 IMPORTANT
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} style={{ overflow: "visible" }}>
            <div className="relative flex items-center">
              {/* LEFT MOBILE – 20% */}
              <div className="w-[20%] shrink-0 pr-6">
                <img
                  src={slide.mobile1}
                  alt="Mobile preview"
                  className="w-full rounded-2xl shadow-lg"
                />
              </div>

              {/* CENTER DESKTOP – 70% */}
              <div className="w-[70%] shrink-0 pr-6">
                <img
                  src={slide.desktop}
                  alt="Desktop preview"
                  className="w-full rounded-2xl shadow-xl"
                />
              </div>

              RIGHT MOBILE – 10% (PEEK)
              <div className="w-[20%] shrink-0 absolute right-[-10%] top-1/2 -translate-y-1/2">
                <img
                  src={slide.mobile2}
                  alt="Next mobile preview"
                  className="w-full rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* PAGINATION COUNTER */}
      <div className="flex items-center justify-between mt-6">
        <span className="text-sm font-medium">
          <span id="current-slide">1</span> — {slides.length}
        </span>

        <div className="flex gap-4">
          <button className="woo-prev text-xl">←</button>
          <button className="woo-next text-xl">→</button>
        </div>
      </div>
    </div>
  );
}
