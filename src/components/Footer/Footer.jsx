import React from "react";
import FaceBook from "public/1.png";
import Instagram from "public/2.png";
import Twitter from "public/3.png";
import Youtube from "public/4.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex items-center mb-4">
          <span className="ml-0 text-2xl font-bold">
            Pragathi Beauty Parlor
          </span>
        </div>
        <div className="mb-4 flex space-x-4">
          <Link href="#" className="text-white hover:text-gray-300">
            <Image src={FaceBook} alt="facebook" />
          </Link>
          <Link href="#" className="text-white hover:text-gray-300">
            <Image src={Instagram} alt="facebook" />
          </Link>
          <Link href="#" className="text-white hover:text-gray-300">
            <Image src={Twitter} alt="facebook" />
          </Link>
          <Link href="#" className="text-white hover:text-gray-300">
            <Image src={Youtube} alt="facebook" />
          </Link>
        </div>
        <div className="mx-auto w-full border-t-2 border-gray-400 mb-8"></div>
        <p className="text-sm mb-2">
          &copy; 2023 Your Company. All rights reserved.
        </p>
        <p className="text-xs">Terms of Use | Privacy Policy | <Link href="/login">Login</Link></p>
      </div>
    </footer>
  );
};

export default Footer;
