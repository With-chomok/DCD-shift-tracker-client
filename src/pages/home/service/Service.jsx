import React from "react";
import ServiceCard from "./ServiceCard";

export const Service = () => {
  return (
    <div className="bg-[#03373D] m-10 rounded-4xl px-32 py-24">
      <div className="space-y-3">
        <h1 className="heading text-center">Our Services</h1>
        <p className="text-[#DADADA] text-center mb-5">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>
      <ServiceCard></ServiceCard>
    </div>
  );
};


