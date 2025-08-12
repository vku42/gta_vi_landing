import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FirstVideo = () => {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;
    const image = imageRef.current;

    gsap.set(wrapper, { marginTop: "-130vh", opacity: 0 });
    gsap.set([content, image], { opacity: 0, y: 30 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,
        start: "top top",
        end: "+=200% top",
        scrub: 5,
        pin: true,
      },
    });

    tl.to(".hero-section", { delay: 0.5, opacity: 0, ease: "power1.inOut" });
    tl.to(wrapper, { opacity: 1, duration: 2, ease: "power1.inOut" });

    tl.to(
      content,
      { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" },
      "<0.1"
    ).to(
      image,
      { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" },
      "<0.15"
    );

    tl.to(image, { scale: 1.1, duration: 1.5, ease: "power1.inOut" }, ">-0.5");

    return () => tl.kill();
  }, []);

  return (
    <section ref={wrapperRef} className="first-vd-wrapper">
      <div className="h-dvh flex items-center">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center pt-20">
            {/* Left: Text content */}
            <div ref={contentRef} className="space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs tracking-wide uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
                Kanya Kart
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Ethnic Wear that Sells
              </h2>

              <p className="text-slate-600">
                Premium fabrics, modern silhouettes, retailer-friendly pricing.
                Launch fresh collections that your customers love.
              </p>

              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />
                  Unique & Trendy Designs
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />
                  Premium Quality Assurance
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />
                  Affordable Wholesale Pricing
                </li>
              </ul>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="#catalog"
                  className="inline-flex items-center justify-center rounded-full bg-black text-white px-5 py-2.5 text-sm font-medium hover:opacity-90 transition"
                >
                  Get Wholesale Catalog
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border px-5 py-2.5 text-sm font-medium hover:bg-slate-50 transition"
                >
                  Enquire Now
                </a>
              </div>
            </div>

            {/* Right: Image */}
            <div className="space-y-5 img-box px-2">
              <div
                ref={imageRef}
                className=" bg-yellow md:h-[30vw] md:w-[30vw] h-[50vh] w-[100%]  "
              >
                <img
                  className="size-full object-cover [object-position:5%_center] hover:scale-[0.98] transition duration-700 ease-in-out"
                  src="/images/kanya-img-1.png"
                  alt="Kanya Kart Collection"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstVideo;
