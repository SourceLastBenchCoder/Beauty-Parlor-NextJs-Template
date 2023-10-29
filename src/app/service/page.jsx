"use client";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";

const ServiceList = () => {

const [allPosts, setAllPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch("/api/service",{cache:'no-store'});
    const data = await response.json();
    setAllPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="p-10">
      <div className="text-center mb-6">
        <h1 className="text-6xl font-bold mb-2 gradient-text">Our Services</h1>
        <p className="text-yellow-700">
          Explore our range of services to find what suits you best.
        </p>
      </div>
      <hr className="border-t-2 border-gray-300 mb-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {allPosts.map((service,index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src={service.banner}
              alt={service.name}
              className="w-full h-32 object-cover mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{service.name}</h2>
            <p className="text-gray-700 mb-4">{service.small_description}</p>
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
