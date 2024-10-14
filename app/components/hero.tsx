import React from "react";

function Hero() {
  return (
    <div className="mt-5 mb-16 flex items-center gap-8">
      <div className="w-[60%]">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold capitalize tracking-tighter leading-8 first-letter:text-[#D9413B] first-letter:text-3xl sm:first-letter:text-4xl md:first-letter:text-6xl">
          Soumyadip{"'s"} Daily Blogs
        </h1>
        <p className="text-xs sm:text-sm font-bold capitalize mt-2">
          welcome to{" "}
          <span className="underline decoration-4 decoration-[#D9413B]">
            explore
          </span>{" "}
          <span className="underline decoration-4 decoration-[#D9413B]">the</span>{" "}
          <span className="underline decoration-4 decoration-[#D9413B]">
            best{" "}
          </span>
          blogs inside the devosphere
        </p>
      </div>
      <div className="w-[40%]">
        <p className="capitalize text-xs sm:text-md md:text-lg text-gray-500 text-right font-semibold">new product {"|"} Programming news {"|"} Latest in technology {"|"} debugging and stuff</p>
      </div>
    </div>
  );
}

export default Hero;
