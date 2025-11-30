import React from 'react';
import img from '../../../assets/service.png'
const ServiceCard = () => {
    const serviceCardInfo = [
        {
          id: 0,
          image: img,
          title: "Express  & Standard Delivery",
          description:
            "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
        },
        {
          id: 1,
          image: img,
          title: "Nationwide Delivery",
          description:
            "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
        },
        {
          id: 2,
          image: img,
          title: "Fulfillment Solution",
          description:
            "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
        },
        {
          id: 3,
          image: img,
          title: "Cash on Home Delivery",
          description:
            "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
        },
        {
          id: 4,
          image: img,
          title: "Corporate Service / Contract In Logistics",
          description:
            "Customized corporate services which includes warehouse and inventory management support.",
        },
        {
          id: 5,
          image: img,
          title: "Parcel Return",
          description:
            "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
        },
        
    ]
    return (
        <div>
  <div className="grid md:grid-cols-3 grid-cols-1 gap-7 items-stretch">
    {serviceCardInfo.map((data) => (
      <div
        key={data.id}
        className="p-8 bg-white rounded-2xl shadow-lg flex flex-col hover:bg-[#CAEB66] transition-all duration-500"
      >
        <div className="flex-1 flex flex-col">
          <img src={data.image} className="w-16 mx-auto mb-4" alt="" />
          <h2 className="text-xl font-bold mb-2">{data.title}</h2>
          <p className="text-[#606060]">{data.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>

    );
};

export default ServiceCard;