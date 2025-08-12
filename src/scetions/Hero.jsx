import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ComingSoon from "./ComingSoon";
import { useMaskSettings } from "../../constants";
import HeroOne from "../components/HeroOne";

const Hero = () => {
  const { initialMaskPos, initialMaskSize, maskPos, maskSize } =
    useMaskSettings();

  useGSAP(() => {
    gsap.set(".mask-wrapper", {
      maskPosition: initialMaskPos,
      maskSize: initialMaskSize,
    });

    gsap.set(".mask-logo", {
      marginTop: "-100vh",
      opacity: 0,
    });

    gsap.set(".entrance-message", {
      marginTop: "0vh",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        scrub: 2.5,
        end: "+=200%",
        pin: true,
      },
    });
    tl.to(".fade-out", {
      opacity: 0,
      ease: "power1.inOut",
    })
      .to(".scale-out", {
        scale: 1,
        ease: "power1.inOut",
      })
      .to(
        ".mask-wrapper",
        {
          maskSize: maskSize,
          maskPosition: maskPos,
          ease: "power1.inOut",
        },
        "<"
      )
      .to(`.mask-wrapper`, {
        opacity: 0,
      })
      .to(
        ".overlay-logo",
        {
          opacity: 1,
          onComplete: () => {
            gsap.to(".overlay-logo", {
              opacity: 0,
            });
          },
        },
        "<"
      )
      .to(".entrance-message", {
        duration: 1,
        ease: "power1.inOut",
        maskImage:
          "radial-gradient(circle at 80% 0vh, black 80%, transparent 100%)",
      });
  });
  return (
    <section className="hero-section bg-[#0f0f0f10]  ">
      <div className="size-full mask-wrapper bg-[url('/images/bg.svg')] bg-cover bg-center h-screen w-full   ">
        <HeroOne className="scale-out" />
      </div>

      <div className="fake-logo-wrapper pointer-events-none   ">
        <img src="/images/big-hero-text.svg" className="overlay-logo" />
      </div>

      <ComingSoon />
    </section>
  );
};

export default Hero;
