"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "public/logo.png";
import Image from "next/image";

const Navbar = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center">
            <Image
              src={Logo}
              alt="Logo"
              style={{ width: "100px", height: "auto" }}
            />
            <span className="text-2xl font-bold">Pragathi Beauty Parlor</span>
          </div>
        </Link>
        <div className="hidden md:flex space-x-4 items-center">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/service" className="hover:text-gray-300">
            Service
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Contact Us
          </Link>
          <Link
            href="/appointment"
            className="bg-transparent border border-white py-2 px-4 rounded-full hover:bg-white hover:text-gray-900"
          >
            Book Appointment
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button
            id="mobileMenuButton"
            className="text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div
        id="mobileMenu"
        className={`container mx-auto flex flex-col items-center ${
          mobileMenuVisible ? "" : "hidden"
        }`}
      >
        <Link href="/" className="my-1 hover:text-gray-300">
          Home
        </Link>
        <Link href="/service" className="my-1 hover:text-gray-300">
          Services
        </Link>
        <Link href="/about" className="my-1 hover:text-gray-300">
          About Us
        </Link>
        <Link href="/contact" className="my-1 hover:text-gray-300">
          Contact Us
        </Link>
        <Link
          href="/appointment"
          className="bg-transparent border border-white py-2 px-4 rounded-full my-4 hover:bg-white hover:text-gray-900"
        >
          Book Appointment
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
