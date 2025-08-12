import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const jason = () => {
  useGSAP(() => {
    gsap.set(".jason", { marginTop: "-70vh" });

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
        <h1>Why Kanya Kart?</h1>
        <h2>
          At Kanya Kart, we’re more than just an ethnic wear brand – we’re your
          growth partner in fashion retail.
        </h2>
        <ul>
          <li>
            <strong>Unique & Trendy Designs</strong> – We bring you styles that
            blend cultural charm with modern appeal.
          </li>
          <li>
            <strong>Premium Quality Assurance</strong> – Every piece is crafted
            with care, ensuring durability and comfort.
          </li>
          <li>
            <strong>Affordable Wholesale Pricing</strong> – Designer looks at
            prices that help you maximize profits.
          </li>
          <li>
            <strong>Fast & Secure Delivery</strong> – Nationwide and
            international shipping you can count on.
          </li>
          <li>
            <strong>Consistent New Collections</strong> – Keep your store fresh
            with regular launches.
          </li>
          <li>
            <strong>Strong Retailer Support</strong> – From product photos to
            marketing tips, we help you sell more.
          </li>
          <li>
            <strong>Trusted by Hundreds of Retailers</strong> – A proven name in
            the ethnic wear industry.
          </li>
        </ul>
      </div>
      <div className="space-y-5 sm:mt-30 md:mt-45 mt-55 img-box px-2 ">
        <div className="jason-1">
          <img src="/images/kanya-img-1.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default jason;
