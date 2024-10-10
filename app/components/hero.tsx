import React from "react";

function Hero() {
  return (
    <div className="my-16 flex items-center gap-8">
      <div className="w-[60%]">
        <h1 className="text-5xl font-bold capitalize tracking-tighter leading-8">
          Soumyadip{"'s"} Daily Blogs
        </h1>
        <p className="text-sm font-bold capitalize mt-2">
          welcome to{" "}
          <span className="underline decoration-4 decoration-red-600">
            explore
          </span>{" "}
          <span className="underline decoration-4 decoration-red-600">the</span>{" "}
          <span className="underline decoration-4 decoration-red-600">
            best{" "}
          </span>
          blogs inside the devosphere
        </p>
      </div>
      <div className="w-[40%]">
        <p className="capitalize text-lg text-gray-500 text-right font-semibold">new product {"|"} Programming news {"|"} Latest in technology {"|"} debugging and stuff</p>
      </div>
    </div>
  );
}

export default Hero;
