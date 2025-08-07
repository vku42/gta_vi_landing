import { CardCarousel } from "./CardCarousel";

const Hero = () => {
  const images = [
    { src: "/images/image1.svg", alt: "Image 1" },
    { src: "/images/image2.svg", alt: "Image 2" },
    { src: "/images/image3.svg", alt: "Image 3" },
    { src: "/images/image4.svg", alt: "Image 4" },
    { src: "/images/image5.svg", alt: "Image 5" },
    { src: "/images/image6.svg", alt: "Image 6" },
  ];

  return (
    <div className="pt-24 px-4 sm:px-6 lg:px-8 bg-[url('/images/bg.svg')] bg-cover bg-center h-screen w-full ">
      {/* Heading Section */}
      {/* Carousel */}
      <div className="mt-1">
        <div className="flex flex-col justify-center items-center text-center fade-out ">
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
      \
    </div>
  );
};

export default Hero;
