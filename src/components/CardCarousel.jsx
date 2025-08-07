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
      filter: blur(2px);                  
      transform: scale(0.9);              
      transition: filter 0.3s ease, transform 0.3s ease;
    }

    .swiper-slide-active {
      filter: blur(0);                    
      transform: scale(1);                
      z-index: 10;
  }
    
    .swiper-slide img {
    z-index: 10;
    }

    .swiper-3d .swiper-slide-shadow-left {
      background-image: none;
    }
    .swiper-3d .swiper-slide-shadow-right {
      background: none;
    }
  `;

  return (
    <section className="w-ace-y-4 mt-5">
      <style>{css}</style>
      <div className="mx-auto w-full max-w-8xl">
        <div className="relative mx-auto flex w-full flex-col md:items-center md:gap-8 md:p-2">
          <div className="flex w-full items-center justify-center gap-4">
            <div className="w-full">
              <Swiper
                spaceBetween={150}
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
                    <div className="w-[320px] h-[480px]">
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
                    <div className="w-[300px] h-[480px]">
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
