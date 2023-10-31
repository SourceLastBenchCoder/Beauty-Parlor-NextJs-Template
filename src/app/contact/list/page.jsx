"use client";

import React, { useState, useEffect } from "react";

const QueryTable = ({ data }) => {
  const [allQuery, setAllQuery] = useState([]);

  const fetchQuery = async () => {
    const response = await fetch("/api/userquery", { cache: "no-cache" });
    const data = await response.json();
    setAllQuery(data);
  };

  useEffect(() => {
    fetchQuery();
  }, []);

  return (
    <div className="p-10">
      <div className="text-center mb-6">
        <h1 className="text-6xl font-bold mb-2 gradient-text">User Queries</h1>
        <p className="text-yellow-700">All your queries displayed here..</p>
      </div>
      <div className="mx-auto w-16 border-t-2 border-gray-400 mb-8"></div>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Email</th>
              <th className="border border-gray-300 p-2">Query</th>
            </tr>
          </thead>
          <tbody>
            {allQuery.map((item, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-2">{item.fullname}</td>
                <td className="border border-gray-300 p-2">{item.email}</td>
                <td className="border border-gray-300 p-2">
                  {item.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QueryTable;
