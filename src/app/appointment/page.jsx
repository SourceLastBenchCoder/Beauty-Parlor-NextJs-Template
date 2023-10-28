import React from "react";

const Appointment = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left side (Google Map) */}
        <div className="md:w-1/2 mb-6 md:mb-0">
        <img
            src="banner-2.png"
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right side (Contact Form) */}
        <div className="md:w-1/2 md:pl-8">
          <h1 className="text-6xl font-bold mb-2 gradient-text">Appointment</h1>
          <div className="mx-auto border-t-2 border-gray-400 mb-8"></div>  
          <form> 
          <div className="mb-4">
              <label className="block text-black text-sm font-bold mb-2">Name</label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                type="text"
                placeholder="Your Name" required
              />
            </div>
            <div className="mb-4">
              <label className="block text-black text-sm font-bold mb-2">Email</label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                type="email"
                placeholder="Your Email" required
              />
            </div>
            <div className="mb-4">
              <label className="block text-black text-sm font-bold mb-2">Phone</label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                type="tel"
                placeholder="Your Phone Number" required
              />
            </div>
            <div className="mb-4">
              <label className="block text-black text-sm font-bold mb-2">Time</label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                type="time" required
              />
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
