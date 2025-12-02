import React from "react";
import img from "../../../assets/location-merchant.png";
import img2 from "../../../assets/merchant-bg.png";
const Marchant = () => {
  return (
    <div className="flex justify-between items-center pl-20 py-20 bg-[#03373D] relative mx-35 my-24 rounded-4xl">
      <div className="space-y-5">
        <h1 className="font-extrabold text-4xl text-[#FFFFFF]">
          Merchant and Customer Satisfaction is Our First Priority
        </h1>
        <p className="text-[#DADADA] mt-4">
          We offer the lowest delivery charge with the highest value along with
          100% safety of your product. Pathao courier delivers your parcels in
          every corner of Bangladesh right on time.
        </p>
        <div className="flex  gap-4">
          <button className="px-4 py-6 text-black rounded-full border-2 font-semibold text-xl bg-[#CAEB66]">
            Become a Merchant
          </button>
          <button className="px-4 py-6 text-white font-semibold text-xl rounded-full border-2 border-[#CAEB66]">
            Earn with ZapShift Courier
          </button>
        </div>
      </div>
      <img className="w-[400px] mr-0" src={img} alt="" />
      <img className="absolute top-0  h-40" src={img2} alt="" />
    </div>
  );
};

export default Marchant;
