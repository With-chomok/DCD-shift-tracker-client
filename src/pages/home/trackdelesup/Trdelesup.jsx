import React from "react";
import img1 from "../../../assets/live-tracking.png";
import img2 from "../../../assets/safe-delivery.png";
import img3 from "../../../assets/safe-delivery.png";
const Trdelesup = () => {
  const cardInfo = [
    {
      id: 0,
      image: img1,
      title: "Live Parcel Tracking",
      description:
        "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    },
    {
      id: 1,
      image: img2,
      title: "100% Safe Delivery",
      description:
        "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    },
    {
      id: 2,
      image: img3,
      title: "24/7 Call Center Support",
      description:
        "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    },
  ];
  return (
    <div className="flex mx-35 my-24 flex-col space-y-6">
      {cardInfo.map((data) => (
        <div
          key={data.id}
          className="p-8 flex space-y-3 gap-12 justify-around items-center rounded-2xl bg-[#FFFFFF]">
          <div>
            <img className="w-48" src={data.image} alt="" />
          </div>
          
            <div className="border-b border-dashed border-teal-600 my-6 rotate-90"></div>
          
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl font-extrabold text-[#03373D]">
              {data.title}
            </h3>
            <p className="text-[#606060] font-medium">{data.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Trdelesup;
