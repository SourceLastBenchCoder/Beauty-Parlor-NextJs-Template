import Link from "next/link";
import React from "react";
import Banner from "public/banner.png";
import Image from "next/image";

const HeadBanner = () => {
  return (
    <div className="container mx-auto my-8 flex flex-col lg:flex-row items-center">
      <div className="lg:flex-1 mb-4 lg:mb-0 lg:mr-4">
        <Image
          src={Banner}
          alt="Image 1"
          className="w-full rounded-lg shadow-lg object-cover"
        />
      </div>
      <div className="flex-1 px-4">
        <h1 className="text-4xl lg:text-6xl font-bold mb-2 gradient-text">
          Welcome to Pragathi Beauty Parlor
        </h1>
        <p className="mb-4 text-sm lg:text-base">
          You are in the right place. Experience a world of pampering and relaxation at Pragathi Beauty Parlor, where you are our top priority without spending a fortune.
        </p>
        <Link
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-full text-white text-sm lg:text-base"
          href="/service"
        >
          Explore the Services
        </Link>
      </div>
    </div>
  );
};

export default HeadBanner;
