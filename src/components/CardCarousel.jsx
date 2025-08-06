import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";

export const CardCarousel = ({
  images,
  autoplayDelay = 1500,
  showPagination = true,
  showNavigation = true,
}) => {
  const css = `
    .swiper {
      width: 100%;
      padding-bottom: 50px;
    }
    
    .swiper-slide {
      background-position: center;
      background-size: cover;
      width: 260px;
    }
    
    .swiper-slide img {
      display: block;
      width: 100%;
    }

    .swiper-3d .swiper-slide-shadow-left {
      background-image: none;
    }
    .swiper-3d .swiper-slide-shadow-right {
      background: none;
    }
  `;

  return (
    <section className="w-ace-y-4 mt-1">
      <style>{css}</style>
      <div className="mx-auto w-full max-w-6xl">
        <div className="relative mx-auto flex w-full flex-col md:items-center md:gap-8 md:p-2">
          <div className="flex w-full items-center justify-center gap-4">
            <div className="w-full">
              <Swiper
                spaceBetween={80}
                autoplay={{
                  delay: autoplayDelay,
                  disableOnInteraction: false,
                }}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                }}
                pagination={showPagination}
                navigation={
                  showNavigation
                    ? {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                      }
                    : undefined
                }
                modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="w-[280px] h-[420px]">
                      <img
                        src={image.src}
                        className="w-full h-full object-cover rounded-sm"
                        alt={image.alt}
                      />
                    </div>
                  </SwiperSlide>
                ))}
                {images.map((image, index) => (
                  <SwiperSlide key={`duplicate-${index}`}>
                    <div className="w-[280px] h-[420px]">
                      <img
                        src={image.src}
                        className="w-full h-full object-cover rounded-sm"
                        alt={image.alt}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
