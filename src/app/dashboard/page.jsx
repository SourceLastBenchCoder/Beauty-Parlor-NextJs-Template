"use client"
import React from "react";
import { useAuth } from "@/app/login/AuthContext";
import Link from "next/link";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <>
      {user ? (
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto">
            <h1 className="text-6xl font-bold mb-2 gradient-text">
              Welcome {user.fullname}
            </h1>
            <div className="mx-auto border-t-2 border-gray-400 mb-8"></div>
            <h5 style={{ color: "blue" }}>
              You are successfully logged in to the appplication
            </h5>
          </div>
        </section>
      ) : (
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto">
            <h1 className="text-6xl font-bold mb-2 gradient-text">
              Access denied
            </h1>
            <div className="mx-auto border-t-2 border-gray-400 mb-8"></div>
            <h5 style={{ color: "red" }}>
              You are not authorised user access dashboard. Please Login to access the dashboard
              <br /> <br />
              <Link href="/login" style={{ color: "blue" }}>
                Click Here to Login
              </Link>
            </h5>
          </div>
        </section>
      )}
    </>
  );
};

export default Dashboard;
