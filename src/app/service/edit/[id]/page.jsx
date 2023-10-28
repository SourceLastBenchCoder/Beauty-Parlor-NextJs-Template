"use client"
import React, { useState, useEffect } from "react";

const EditService = ({ params }) => {
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [smallDescription, setSmallDescription] = useState("");
  const [description, setDescription] = useState("");
  const [banner, setBanner] = useState("");
  const [price, setPrice] = useState("");
  const [isSubmitted, setSubmitted] = useState(false);

  // Assuming you have a prop `serviceId` that you receive from the parent component
  const serviceId = params.id;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/service/${serviceId}`); // Assuming this endpoint fetches the data for the service with the given ID
      const data = await response.json();
      setType(data.type);
      setName(data.name);
      setSmallDescription(data.small_description);
      setDescription(data.description);
      setBanner(data.banner);
      setPrice(data.price);
    };

    fetchData();
  }, [serviceId]);

  const handleEditService = async (e) => {
    e.preventDefault();

    const response = await fetch(`/api/service/edit/${serviceId}`, {
      method: "PATCH",
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
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h1 className="text-6xl font-bold mb-2 gradient-text">
          Edit Service
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

        <form onSubmit={handleEditService}>
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
              value={type}
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
              value={name}
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
              value={smallDescription}
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
              value={description}
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
              value={banner}
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
              value={price}
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            type="submit"
          >
            Edit Service
          </button>
        </form>
      </div>
    </section>
  );
};

export default EditService;
