"use client";

import React, { useEffect, useState } from "react";

const ServiceDetail = ({ params }) => {
  /*
  const service = {
      _id: 1,
      category: "Skin Care",
      name: "Eyebrows",
      price:"300",
      small_description:
        "An eyebrow is an area of short hairs above each eye that follows the shape of the lower margin...",
      description:
        "An eyebrow is an area of short hairs above each eye that follows the shape of the lower margin of the brow ridges of some mammals. In humans, eyebrows serve two main functions: first, communication through facial expression, and second, prevention of sweat, water, and other debris from falling down into the eye socket.",
      imageUrl:
        "https://img.freepik.com/free-photo/eyelids-procedure-longhaired-pretty-model-beauty-salon_231208-3592.jpg?size=626&ext=jpg&ga=GA1.1.262484751.1695474021&semt=ais",
    }
*/

const [service, setService] = useState({});

useEffect(() => {
  const fetchService = async () => {
    const response = await fetch(`/api/service/${params?.id}`);
    const data = await response.json();
    setService(data);
  };

  if (params?.id) fetchService();
}, [params.id]);

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img
            src={service.banner}
            alt="Service"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h1 className="text-6xl font-bold mb-2 gradient-text">
            {service.name}
          </h1>
          <div className="mx-auto border-t-2 border-gray-400 mb-8"></div>
          <p className="text-gray-700 leading-relaxed">{service.description}</p>
          <br />
          <div className="flex items-center">
            <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
              {service.type}
            </span>
          </div>
          <br />
          <div className="flex items-center">
            <span className="text-lg font-bold text-green-600 mr-2">
              Rs.{service.price}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
