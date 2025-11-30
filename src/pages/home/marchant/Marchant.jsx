import React from "react";
import img from '../../../assets/location-merchant.png'
const Marchant = () => {
  return (
    <div className="flex justify-between items-center p-20 bg-[#03373D] relative mx-35 my-24 rounded-4xl">
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
        <button className="amber-button ">Become a Merchant</button>
        <button className="white-button bg-none border-[#CAEB66]">
          Earn with ZapShift Courier
        </button>
      </div>
      </div>
      
        <img className="w-[400px] mr-0" src={img} alt="" />
      
    </div>
  );
};

export default Marchant;
