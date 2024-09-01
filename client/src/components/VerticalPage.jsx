import React, { useState } from "react";
import bicyclelogo from "../assets/bicycle-logo.png";
import travellogo from "../assets/travel.svg";
import ecommercelogo from "../assets/ecommerce.svg";
import deliverylogo from "../assets/delivery.svg";
import fintechlogo from "../assets/fintech.svg";
import { useNavigate } from "react-router-dom";

export default function VerticalPage() {
  const [selectedVertical, setSelectedVertical] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
    organization: "",
  });
  const navigate = useNavigate();
  const API_KEY = "o5CwF2tP9phDSFNmnojQRKhsOVtCaBec";

  const getOrganizationFromEmail = async (email) => {
    try {
      const response = await fetch(
        `https://api.fullcontact.com/v3/person.enrich`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("API Response:", data);
        return data.organization ? data.organization : "Organization not found";
      } else {
        console.error("Error fetching data:", response.statusText);
        return "Error fetching data";
      }
    } catch (error) {
      console.error("Error:", error);
      return "Error fetching data";
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const organizationName = await getOrganizationFromEmail(formData.email);
    console.log("Fetched organization name:", organizationName);

    setFormData((prevData) => ({
      ...prevData,
      organization: organizationName,
    }));

    const updatedFormData = {
      ...formData,
      organization: organizationName,
    };

    console.log("Updated formData:", updatedFormData);

    let verticalName =
      selectedVertical.name === "Delivery Services"
        ? "Delivery"
        : selectedVertical.name;
    const path = `/${verticalName.toLowerCase().replace(/\s/g, "")}`;

    navigate(path, {
      state: { ...updatedFormData, selectedVertical: verticalName },
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDivClick = (vertical) => {
    setSelectedVertical(vertical);
    setIsModalOpen(true);
  };

  const verticals = [
    {
      logo: travellogo,
      name: "Travel",
      description:
        "Bicycle's AI-powered insights means you can face dynamic operational challenges and act on them.",
    },
    {
      logo: ecommercelogo,
      name: "eCommerce",
      description:
        "With competitors just a click away, Bicycle's AI-powered insights help you outpace the sector.",
    },
    {
      logo: deliverylogo,
      name: "Delivery Services",
      description:
        "Bicycle's AI-powered ensure timely delivery and superior customer experience.",
    },
    {
      logo: fintechlogo,
      name: "Fintech",
      description:
        "Faced with sensitive data, Bicycle's AI-powered insights deliver fast anomaly detection and response.",
    },
  ];

  return (
    <div className="flex flex-col justify-center h-fit items-center">
      <div className="w-full bg-blue flex justify-center p-2">
        <img src={bicyclelogo} className="w-30 h-auto" />
      </div>
      <div className="flex flex-col justify-center items-center h-fit w-full">
        {verticals.map((item, index) => (
          <div
            key={index}
            onClick={() => handleDivClick(item)}
            className="flex justify-center w-11/12 items-center bg-light-blue m-2 p-2 rounded-lg cursor-pointer hover:bg-red-500 hover:shadow-lg active:bg-blue-700 active:shadow-none transition-all duration-200 mb-2 mt-8"
          >
            <img
              src={item.logo}
              className="w-20 h-20 rounded-full bg-white p-1"
            />
            <div className="flex flex-col">
              <h1 className="w-full text-center sub-heading m-0 mb-1">
                {item.name}
              </h1>
              <h2 className="w-full body font-extralight text-left m-0 mb-1 leading-5">
                {item.description}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-dark-grey bg-opacity-50">
          <div className="bg-dark-white p-6 rounded-lg">
            <h2 className="text-xl text-center mb-4">Enter Your Details</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block sub-heading m-0 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block sub-heading m-0 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block sub-heading m-0 mb-2">Interest</label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 rounded w-full"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="Business">Business</option>
                  <option value="Data">Data</option>
                </select>
              </div>
              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-300 text-black p-2 rounded mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue text-white p-2 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
