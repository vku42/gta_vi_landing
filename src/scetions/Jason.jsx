import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Jason = () => {
  useGSAP(() => {
    gsap.set(".jason", {});

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".jason",
          start: "top 90%",
          end: "10% center",
          scrub: 2,
        },
      })
      .to(".first-vd", { opacity: 0, duration: 1, ease: "back.inOut" });

    gsap.to(
      ".jason .img-box",
      {
        scrollTrigger: {
          trigger: ".jason",
          start: "top center",
          end: "80% center",
          scrub: 2,
        },
        y: -300,
        duration: 1,
        ease: "power1.inOut",
      },
      "<"
    );
  });

  return (
    <section className="jason">
      <div className="max-w-lg jason-content ">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          Why Kanya Kart?
        </h1>
        <h2 className="text-slate-600">
          At Kanya Kart, we’re more than just an ethnic wear brand – we’re your
          growth partner in fashion retail.
        </h2>
        <p>
          Kanya Kart is your destination for elegant ethnic wear that blends
          tradition with modern style. We create beautifully crafted salwar
          suits, kurtis, and more – designed for comfort, quality, and timeless
          appeal. Every piece is made to empower women with confidence and
          style, whether for daily wear or special celebrations. Kanya Kart –
          Where Tradition Meets Today.
        </p>
      </div>

      <div className="space-y-5 sm:mt-30 md:mt-45 mt-55 img-box px-2 ">
        <div className="jason-1">
          <img src="/images/kanya-img-2.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Jason;
