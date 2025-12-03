import React, { useState } from "react";
import { FaQ } from "react-icons/fa6";

const Faq = () => {
  const faqData = [
    {
      question: "How does your delivery service work?",
      answer:
        "We pick up your parcel from your location and deliver it safely to the destination through our trusted courier network."
    },
    {
      question: "Do you offer same-day delivery?",
      answer:
        "Yes! We offer same-day and express delivery inside Dhaka city."
    },
    {
      question: "Can I track my parcel in real time?",
      answer:
        "Absolutely. You can track your parcel live through the tracking ID we provide after pickup."
    },
    {
      question: "Do you deliver outside Dhaka?",
      answer:
        "Yes, we deliver to all major cities including Chattogram, Sylhet, Rajshahi and Khulna."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="space-y-5 mx-35 mt-25 flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl text-center font-extrabold text-[#03373D]">
          Frequently Asked Question (FAQ)
        </h1>
        <p className="text-[#606060]">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. br Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>
     <div className="space-y-4 mx-35 ">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl p-4 shadow-sm bg-white"
          >
            <button
              className="w-full flex justify-between items-center text-left"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-semibold text-lg">{item.question}</span>

              <span className="text-2xl">
                {openIndex === index ? "-" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <p className="mt-3 text-gray-600 leading-relaxed">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Faq;
