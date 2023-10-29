"use client"

import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";

/*
const services = [
  {
    _id: 1,
    category: "Skin Care",
    name: "Eyebrows",
    small_description:
      "An eyebrow is an area of short hairs above each eye that follows the shape of the lower margin...",
    description:
      "An eyebrow is an area of short hairs above each eye that follows the shape of the lower margin of the brow ridges of some mammals. In humans, eyebrows serve two main functions: first, communication through facial expression, and second, prevention of sweat, water, and other debris from falling down into the eye socket.",
    imageUrl:
      "https://img.freepik.com/free-photo/eyelids-procedure-longhaired-pretty-model-beauty-salon_231208-3592.jpg?size=626&ext=jpg&ga=GA1.1.262484751.1695474021&semt=ais",
  },
  {
    _id: 2,
    category: "Skin Care",
    name: "Face Clean Up",
    small_description:
      "An eyebrow is an area of short hairs above each eye that follows the shape of the lower margin...",
    description:
      "Everyday pollution, tanning and stress take a toll on your face. Treating your face weekly to remove dirt and tan is vital for facial skin health.",
    imageUrl:
      "https://img.freepik.com/premium-photo/girl-hairdresser-makes-client-s-hairstyle-celebration-by-pinning-strands-with-hairpins-hairpins_137321-1379.jpg?size=626&ext=jpg&ga=GA1.1.262484751.1695474021&semt=ais",
  },
  ,
  {
    _id: 3,
    category: "Skin Care",
    name: "Face Clean Up",
    small_description:
      "An eyebrow is an area of short hairs above each eye that follows the shape of the lower margin...",
    description:
      "Everyday pollution, tanning and stress take a toll on your face. Treating your face weekly to remove dirt and tan is vital for facial skin health.",
    imageUrl:
      "https://img.freepik.com/free-photo/portrait-young-caucasian-woman-beauty-day-skin-hair-care-routine_155003-27072.jpg?size=626&ext=jpg&ga=GA1.1.262484751.1695474021&semt=ais",
  },
  ,
  {
    _id: 4,
    category: "Skin Care",
    name: "Face Clean Up",
    small_description:
      "An eyebrow is an area of short hairs above each eye that follows the shape of the lower margin...",
    description:
      "Everyday pollution, tanning and stress take a toll on your face. Treating your face weekly to remove dirt and tan is vital for facial skin health.",
    imageUrl:
      "https://img.freepik.com/free-photo/female-hairdresser-using-hairbrush-hair-dryer_329181-1929.jpg?size=626&ext=jpg&ga=GA1.1.262484751.1695474021&semt=ais",
  },
  ,
  {
    _id: 5,
    category: "Skin Care",
    name: "Face Clean Up",
    small_description:
      "An eyebrow is an area of short hairs above each eye that follows the shape of the lower margin...",
    description:
      "Everyday pollution, tanning and stress take a toll on your face. Treating your face weekly to remove dirt and tan is vital for facial skin health.",
    imageUrl:
      "https://img.freepik.com/free-photo/woman-getting-treatment-hairdresser-shop_23-2149229763.jpg?size=626&ext=jpg&ga=GA1.1.262484751.1695474021&semt=ais",
  },
  ,
  {
    _id: 6,
    category: "Skin Care",
    name: "Face Clean Up",
    small_description:
      "An eyebrow is an area of short hairs above each eye that follows the shape of the lower margin...",
    description:
      "Everyday pollution, tanning and stress take a toll on your face. Treating your face weekly to remove dirt and tan is vital for facial skin health.",
    imageUrl:
      "https://img.freepik.com/premium-photo/happy-client-hair-salon-who-wash-her-hair-with-shampoo_78492-347.jpg?size=626&ext=jpg&ga=GA1.1.262484751.1695474021&semt=ais",
  },
  ,
  {
    _id: 7,
    category: "Skin Care",
    name: "Face Clean Up",
    small_description:
      "An eyebrow is an area of short hairs above each eye that follows the shape of the lower margin...",
    description:
      "Everyday pollution, tanning and stress take a toll on your face. Treating your face weekly to remove dirt and tan is vital for facial skin health.",
    imageUrl:
      "https://img.freepik.com/free-photo/pleased-young-girl-holding-looking-mirror-applying-tone-up-cream-with-sponge-sitting-table-with-makeup-tools-living-room_141793-123360.jpg?size=626&ext=jpg&ga=GA1.1.262484751.1695474021&semt=ais",
  },
  ,
  {
    _id: 8,
    category: "Skin Care",
    name: "Face Clean Up",
    small_description:
      "An eyebrow is an area of short hairs above each eye that follows the shape of the lower margin...",
    description:
      "Everyday pollution, tanning and stress take a toll on your face. Treating your face weekly to remove dirt and tan is vital for facial skin health.",
    imageUrl:
      "https://img.freepik.com/free-photo/medium-shot-woman-putting-cream_23-2148708052.jpg?size=626&ext=jpg&ga=GA1.1.262484751.1695474021&semt=ais",
  },
  // Add more services as needed
];
*/
const OurService = () => {

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
    <div className="container mx-auto py-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Our Top Services</h2>
      <p className="text-gray-500 mb-8">
        Experience a world of pampering and relaxation at Pragathi Beauty
        Parlor, where you are our top priority with less spend.
      </p>

      <div className="mx-auto w-16 border-t-2 border-gray-400 mb-8"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {allPosts.map((service,index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
            <img
              src={service.banner}
              alt="Service 1"
              className="w-full h-32 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
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

export default OurService;
