import React from "react";
import { Link } from "react-router";

const About = () => {
  return (
    <div className="bg-white rounded-4xl my-20 p-8 mx-10">
      <div className="space-y-4 mx-20">
        <h1 className="text-4xl font-extrabold text-[#03373D]">Our Services</h1>
        <p className="text-[#606060] mb-5">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal <br /> packages to business shipments — we
          deliver on time, every time.
        </p>
      </div>
      <div>
        <div className="flex gap-4  mx-20 my-10  font-bold">
          <Link className="font-extrabold text-md">Story</Link>
          <Link>Mission</Link>
          <Link>Success</Link>
          <Link>Team & Others</Link>
        </div>
        <div className="mx-20">
          <p>We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time. <br />We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time. <br />We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.</p>

        </div>
      </div>
    </div>
  );
};

export default About;
