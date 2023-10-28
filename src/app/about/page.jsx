import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left side (Image) */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img
            src="banner-2.png"
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right side (Description) */}
        <div className="md:w-1/2 md:pl-8">
          <h1 className="text-6xl font-bold mb-2 gradient-text">About Us</h1>
          <div className="mx-auto border-t-2 border-gray-400 mb-8"></div>
          <p className="text-gray-700 leading-relaxed">
            Welcome to Pragathi Beauty Parlor, nestled in the heart of Rajaji
            Nagara 2nd Stage, Bangalore. With a commitment to enhancing your
            natural beauty, we offer a range of exquisite services designed to
            pamper and rejuvenate.
            <br />
            Our skilled and passionate team of professionals brings years of
            experience and a keen eye for detail, ensuring every visit leaves
            you feeling refreshed and confident. From revitalizing facials to
            precision haircuts, our comprehensive menu of services caters to all
            your beauty needs. We pride ourselves on using premium products and
            staying updated with the latest trends and techniques in the
            industry.
            <br />
            Our tranquil and inviting space provides the perfect atmosphere for
            relaxation and self-care. Come experience a world of indulgence and
            leave looking and feeling your absolute best. Visit us at Rajaji
            Nagara 2nd Stage, Bangalore, and let us be a part of your beauty
            journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
