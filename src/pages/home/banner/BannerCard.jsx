import React from "react";
import img from "../../../assets/delivery-van.png";
const BannerCard = () => {
  const cardInfo = [
    {
      id: 0,
      image: img,
      title: "Booking Pick & Drop",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      id: 1,
      image: img,
      title: "Cash On Delivery",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      id: 2,
      image: img,
      title: "Delivery Hub",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      id: 3,
      image: img,
      title: "Booking SME & Corporate",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
  ];
  return (
    <div className="mx-35">
      <h1 className="m-2 font-bold text-2xl">How it Works</h1>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-7">
        {cardInfo.map((data) => (
          <div
            key={data.id}
            className="p-8 bg-white rounded-2xl text-center flex flex-col justify-between h-full shadow-lg">
            <img src={data.image} className="w-20 mx-auto mb-3" alt="" />
            <h2 className="text-xl font-bold mb-2">{data.title}</h2>
            <p className="text-[#606060]">{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerCard;
