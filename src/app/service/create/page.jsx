"use client";
import React, { useState } from "react";
import { useAuth } from "@/app/login/AuthContext";
import Link from "next/link";

const CreateService = () => {
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [smallDescription, setSmallDescription] = useState("");
  const [description, setDescription] = useState("");
  const [banner, setBanner] = useState("");
  const [price, setPrice] = useState("");
  const [isSubmitted, setSubmitted] = useState(false);
  const { user } = useAuth();

  const handleCreateService = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/service/create", {
      method: "POST",
      body: JSON.stringify({
        type: type,
        name: name,
        small_description: smallDescription,
        description: description,
        banner: banner,
        price: price,
      }),
    });

    if (response.ok) {
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
  };

  return (
    <>
      {user ? (
        <section className="bg-gray-100 py-12">
           <div className="sm:max-w-screen-sm mx-auto">
            <h1 className="text-6xl font-bold mb-2 gradient-text">
              Create Service
            </h1>
            <div className="mx-auto border-t-2 border-gray-400 mb-8"></div>

            {isSubmitted ? (
              <>
                <div
                  className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
                  role="alert"
                >
                  <strong className="font-bold">Success!</strong>
                  <span className="block sm:inline">
                    Service created successfully!
                  </span>
                </div>
                <br />
              </>
            ) : (
              ""
            )}

            <form onSubmit={handleCreateService}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="type"
                >
                  Type
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none"
                  type="text"
                  id="type"
                  placeholder="Service Type"
                  required
                  onChange={(e) => setType(e.target.value)}
                />
              </div>
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
                  placeholder="Service Name"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="smallDescription"
                >
                  Small Description
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none"
                  type="text"
                  id="smallDescription"
                  placeholder="Small Description"
                  required
                  onChange={(e) => setSmallDescription(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="description"
                >
                  Description
                </label>
                <textarea
                  className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none"
                  id="description"
                  rows="4"
                  placeholder="Service Description"
                  required
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="banner"
                >
                  Banner
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none"
                  type="text"
                  id="banner"
                  placeholder="Banner URL"
                  required
                  onChange={(e) => setBanner(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="price"
                >
                  Price
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none"
                  type="text"
                  id="price"
                  placeholder="Service Price"
                  required
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                type="submit"
              >
                Create Service
              </button>
            </form>
          </div>
        </section>
      ) : (
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto">
            <h1 className="text-6xl font-bold mb-2 gradient-text">
              Create Service
            </h1>
            <div className="mx-auto border-t-2 border-gray-400 mb-8"></div>
            <h5 style={{ color: "red" }}>You are not authorised user to create service. Please Login to create the new service
            <br/> <br/>
            <Link href="/login" style={{color:'blue'}}>Click Here to Login</Link>
            </h5>
          </div>
        </section>
      )}
    </>
  );
};

export default CreateService;
