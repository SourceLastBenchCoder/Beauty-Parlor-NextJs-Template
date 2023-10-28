import React from "react";

const ContactUs = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left side (Google Map) */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.533861216065!2d77.55214287341536!3d13.001638887316481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d6660ece96b%3A0x7cf0a5909a1b57ae!2sPragathi%20Beauty%20Parlour!5e0!3m2!1sen!2sin!4v1698473268129!5m2!1sen!2sin"
            className="w-full h-auto rounded-lg shadow-lg"
            title="Google Map"
            loading="lazy"
            style={{ height: "480px" }} // Set the height here
          />
        </div>

        {/* Right side (Contact Form) */}
        <div className="md:w-1/2 md:pl-8">
          <h1 className="text-6xl font-bold mb-2 gradient-text">Contact Us</h1>
          <div className="mx-auto border-t-2 border-gray-400 mb-8"></div>   
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none"
                type="text"
                id="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none"
                type="email"
                id="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="query"
              >
                Query
              </label>
              <textarea
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none"
                id="query"
                rows="4"
                placeholder="Your Query"
                required
              ></textarea>
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
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

export default ContactUs;
