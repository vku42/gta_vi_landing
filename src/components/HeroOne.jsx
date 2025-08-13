import { CardCarousel } from "./CardCarousel";

const Hero = () => {
  const images = [
    { src: "/images/cat1.webp", alt: "Image 1" },
    { src: "/images/cat2.webp", alt: "Image 2" },
    { src: "/images/cat3.webp", alt: "Image 3" },
    { src: "/images/cat4.webp", alt: "Image 4" },
    { src: "/images/cat5.webp", alt: "Image 5" },
    { src: "/images/cat6.webp", alt: "Image 6" },
  ];

  return (
    <div className="pt-24 px-4 sm:px-6 lg:px-8">
      {/* Heading Section */}
      {/* Carousel */}
      <div className="mt-1">
        <div className="flex flex-col justify-center items-center text-center  ">
          <div className="flex flex-col gap-1 max-w-4xl">
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-[45px] font-bold tracking-tight opacity-85 leading-tight">
              PREMIUM SALWAR SUITS
            </h3>
            <p className="text-gray-500 text-base sm:text-lg md:text-xl lg:text-xl max-w-2xl mx-auto">
              Leading manufacturer of premium Salwar Suits, blending tradition
              with modern elegance.
            </p>
          </div>
        </div>
        <CardCarousel
          images={images}
          autoplayDelay={1000}
          showPagination={false}
          showNavigation={false}
        />
      </div>
    </div>
  );
};

export default Hero;
