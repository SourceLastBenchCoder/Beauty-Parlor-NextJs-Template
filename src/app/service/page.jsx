"use client";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";

const ServiceList = () => {
  const [allPosts, setAllPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch("/api/service", { cache: "no-cache" });
    const data = await response.json();
    setAllPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto py-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Our Top Services</h2>
      <p className="text-gray-500 mb-8">
        Experience a world of pampering and relaxation at Pragathi Beauty
        Parlor, where you are our top priority with less spend.
      </p>

      <div className="mx-auto w-16 border-t-2 border-gray-400 mb-8"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {allPosts.map((service, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
            <img
              src={service.banner}
              alt="Service 1"
              className="w-full h-32 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-black font-semibold mb-2">{service.name}</h3>
            {service.small_description.length > 50 ? (
              <p className="text-gray-700 mb-4">
                {service.small_description.substring(0, 50) + "..."}
              </p>
            ) : (
              <p className="text-gray-700 mb-4">{service.small_description}</p>
            )}
            <Link
              href={`/service/[id]`}
              as={`service/${service._id}`}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Read More...
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
