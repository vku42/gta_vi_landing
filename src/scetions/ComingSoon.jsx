import React from "react";

const ComingSoon = () => {
  return (
    <section className="entrance-message pointer-events-none p-5">
      <div className="h-full col-center gap-10 ">
        <div className="text-wrapper text-lg ">
          <h1 className="text-4xl text-[#0f0f0f]">
            Who We Are & Why We Do It?
          </h1>
          <p className="max-w-3xl text-slate-600 p-2">
            Kanya Kart is a leading manufacturer of salwar suits, offering
            authentic, affordable, and high-quality ethnic wear for today’s
            women. Our designs combine traditional styles with modern trends, so
            you look stylish and feel comfortable.
          </p>
          <p className="max-w-3xl text-slate-600 p-2">
            We do this because we believe fashion should make you feel
            confident, express your personality, and celebrate your culture –
            whether it’s for everyday wear or special occasions. Kanya Kart –
            Where tradition meets today.
          </p>
        </div>
        <div className="flex-center gap-10"></div>
      </div>
    </section>
  );
};

export default ComingSoon;
