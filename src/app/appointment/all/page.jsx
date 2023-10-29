"use client"
import React, { useState, useEffect } from "react";

const AppointmentsTable = () => {
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    fetch("/api/appointment")
      .then((response) => response.json())
      .then((data) => setAppointments(data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">All Appointments</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <thead>
            <tr>
              <th className="border px-4 py-2">Full Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Phone</th>
              <th className="border px-4 py-2">Time</th>
              <th className="border px-4 py-2">Status</th>
              <th className="border px-4 py-2">Created At</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment._id}>
                <td className="border px-4 py-2">{appointment.fullname}</td>
                <td className="border px-4 py-2">{appointment.email}</td>
                <td className="border px-4 py-2">{appointment.phone}</td>
                <td className="border px-4 py-2">{appointment.time}</td>
                <td className="border px-4 py-2">{appointment.status}</td>
                <td className="border px-4 py-2">{appointment.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppointmentsTable;
