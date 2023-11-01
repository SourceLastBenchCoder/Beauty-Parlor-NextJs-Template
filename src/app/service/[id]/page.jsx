"use client";

import React, { useEffect, useState } from "react";
import { useAuth } from "@/app/login/AuthContext";
import Link from "next/link";

const ServiceDetail = ({ params }) => {
  const [service, setService] = useState({});
  const { user } = useAuth();

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
          {user ? (
            <>
              <div className="mx-auto border-t-2 border-gray-400 mb-8 mt-4"></div>
              <div className="flex justify-between gap-2">
                <Link
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  href={`/service/edit/[id]`}
                  as={`/service/edit/${params.id}`}
                >
                  Edit
                </Link>
                <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Delete
                </button>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
