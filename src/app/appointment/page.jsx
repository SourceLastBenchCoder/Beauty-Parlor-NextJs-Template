"use client";
import React, { useState } from "react";
import Banner from "public/banner-2.png";
import Image from "next/image";

const Appointment = () => {
  const [fullName, setFullName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [time, setTime] = useState(null);
  const [isSubmitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleAppointment = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/appointment/create", {
        method: "POST",
        body: JSON.stringify({
          fullname: fullName,
          email: email,
          phone: phone,
          time: time,
          status:"In-Progress",
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError(
          `Error: ${response.statusText}`
        );
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left side (Google Map) */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <Image
            src={Banner}
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right side (Contact Form) */}
        <div className="md:w-1/2 md:pl-8">
          <h1 className="text-6xl font-bold mb-2 text-black">Appointment</h1>
          <div className="mx-auto border-t-2 border-gray-400 mb-8"></div>
          {isSubmitted ? (
            <>
              <div
                className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
                role="alert"
              >
                <strong className="font-bold">Success!</strong>
                <span className="block sm:inline">
                  Appointment submitted successfully!
                </span>
              </div>
              <br />
            </>
          ) : (
            ""
          )}
          {error ? (
            <>
              <div
                className="bg-red-100 border border-green-400 text-red-700 px-4 py-3 rounded relative"
                role="alert"
              >
                <strong className="font-bold">Error!</strong>
                <span className="block sm:inline">{error}</span>
              </div>
              <br />
            </>
          ) : (
            ""
          )}
          <form onSubmit={handleAppointment}>
            <div className="mb-4">
              <label className="block text-black text-sm font-bold mb-2">
                Name
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded text-black"
                type="text"
                placeholder="Your Name"
                onChange={(e) => setFullName(e.target.value)}
                value={fullName}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-black text-sm font-bold mb-2">
                Email
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500 text-black"
                type="email"
                placeholder="Your Email"
                onChange={(e) => setEmail(e.target.value)}
                required
                value={email}
              />
            </div>
            <div className="mb-4">
              <label className="block text-black text-sm font-bold mb-2">
                Phone
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500 text-black"
                type="tel"
                placeholder="Your Phone Number"
                onChange={(e) => setPhone(e.target.value)}
                required
                value={phone}
              />
            </div>
            <div className="mb-4">
              <label className="block text-black text-sm font-bold mb-2">
                Time
              </label>
              <select
                className="w-full px-3 py-2 text-black border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                onChange={(e) => setTime(e.target.value)}
              >
                <option>Select...</option>
                <option>10:00AM</option>
                <option>10:30AM</option>
                <option>11:00AM</option>
                <option>11:30AM</option>
                <option>12:00AM</option>
                <option>12:30AM</option>
                <option>01:00PM</option>
                <option>01:30PM</option>
                <option>02:00PM</option>
                <option>02:30PM</option>
                <option>03:00PM</option>
                <option>03:30PM</option>
                <option>04:00PM</option>
                <option>04:30PM</option>
                <option>05:00PM</option>
                <option>05:30PM</option>
                <option>06:00PM</option>
                <option>06:30PM</option>
                <option>07:00PM</option>
                <option>07:30PM</option>
                <option>08:00PM</option>
              </select>
            </div>
            <button
              className="bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
