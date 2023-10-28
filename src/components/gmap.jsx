import React from "react";

const GoogleMap = () => {
  return (
    <div className="container mx-auto py-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Where Are We?</h2>
      <p className="text-gray-500 mb-8">
        Reach out to us with easy directions. Use the Google Map below to find
        us.
      </p>

      <div className="mx-auto w-16 border-t-2 border-gray-400 mb-8"></div>

      <div className="aspect-w-16 aspect-h-9" style={{ height: 480 }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.533861216065!2d77.55214287341536!3d13.001638887316481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d6660ece96b%3A0x7cf0a5909a1b57ae!2sPragathi%20Beauty%20Parlour!5e0!3m2!1sen!2sin!4v1698473268129!5m2!1sen!2sin"
          className="w-full h-full"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMap;
