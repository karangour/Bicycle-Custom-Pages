import React from "react";
import bicyclelogo from "../assets/bicycle-logo.png";
import travellogo from "../assets/travel.svg";
import ecommercelogo from "../assets/ecommerce.svg";
import deliverylogo from "../assets/delivery.svg";
import fintechlogo from "../assets/fintech.svg";
import { useNavigate } from "react-router-dom";

export default function VerticalPage() {
  const navigate = useNavigate();

  // Vertical data with descriptions
  const verticals = [
    {
      logo: travellogo,
      name: "Travel",
      description:
        "Bicycle's AI-powered insights means you can face dynamic operational challenges and act on them.",
      path: "/travel2", // Directly navigate to level 2 page
    },
    {
      logo: ecommercelogo,
      name: "eCommerce",
      description:
        "With competitors just a click away, Bicycle's AI-powered insights help you outpace the sector.",
      path: "/ecommerce2", // Directly navigate to level 2 page
    },
    {
      logo: deliverylogo,
      name: "Delivery Services",
      description:
        "Bicycle's AI-powered ensure timely delivery and superior customer experience.",
      path: "/delivery2", // Directly navigate to level 2 page
    },
    {
      logo: fintechlogo,
      name: "Fintech",
      description:
        "Faced with sensitive data, Bicycle's AI-powered insights deliver fast anomaly detection and response.",
      path: "/fintech2", // Directly navigate to level 2 page
    },
  ];

  // Handle click and navigate to the respective Level 2 page
  const handleDivClick = (path) => {
    navigate(path);
  };

  return (
    <div className="flex flex-col justify-center h-screen items-center">
      <div className="w-full bg-blue flex justify-center p-2">
        <img src={bicyclelogo} className="w-56 h-auto" alt="Bicycle Logo" />
      </div>
      <div className="flex flex-wrap justify-evenly items-center h-full w-full">
        {verticals.map((item, index) => (
          <div
            key={index}
            onClick={() => handleDivClick(item.path)}
            className="flex justify-center w-[36rem] h-80 items-center bg-light-blue p-2 m-2 mb-0 rounded-lg cursor-pointer hover:bg-red-500 hover:shadow-lg active:bg-blue-700 active:shadow-none transition-all duration-200"
          >
            <img
              src={item.logo}
              alt={`${item.name} Logo`}
              className="w-40 h-40 rounded-full bg-white p-1"
            />
            <div className="flex flex-col">
              <h1 className="w-full text-center heading m-0 mb-1">
                {item.name}
              </h1>
              <h2 className="w-full sub-heading font-extralight text-left mb-1 p-4 leading-7">
                {item.description}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
