import Link from "next/link";
import React from "react";

const HeadBanner = () => {
  return (
    <div className="container mx-auto my-8 flex items-center">
      <div className="flex-1">
        <img
          src="banner.png"
          alt="Image 1"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
      <div className="flex-1 px-4">
        <h1 className="text-6xl font-bold mb-2 gradient-text">
          Welcome to Pragathi Beauty Parlor
        </h1>
        <p className="mb-4">
          You are write place, Experience a world of pampering and relaxation at
          Pragathi Beauty Parlor, where you are our top priority with less
          spend.
        </p>
        <Link className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-full text-white" href="/service">
          Explore the Services
        </Link>
      </div>
    </div>
  );
};

export default HeadBanner;
