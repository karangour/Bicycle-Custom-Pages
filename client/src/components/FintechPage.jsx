import React, { useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import bicyclelogo from "./../assets/bicycle-logo.png";
import bicycle_crop from "./../assets/bicycle-logo-crop.png";
import down_arrow from "./../assets/down-arrow.png";
import up_arrow from "./../assets/up-arrow.png";
import green_arch from "./../assets/green-arch.png";
import cc_green from "./../assets/cc_green.svg";
import data_file from "./jsons/fintech_data.json";
import business_file from "./jsons/fintech_business.json";

const slideInFromRight = {
  hidden: { x: "100vw", opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
};

const slideInFromLeft = {
  hidden: { x: "-100vw", opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
};

function TravelPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, email, interest, organization, selectedVertical } =
    location.state || {};
  const org = organization;

  useEffect(() => {
    if (!name || !email || !interest) {
      navigate("/");
    }
  }, [name, email, interest, navigate]);

  const customiseJson = (json, name, org) => {
    const jsonString = JSON.stringify(json);
    const replacedString = jsonString
      .replace(/{name}/g, name)
      .replace(/{org}/g, org);
    return JSON.parse(replacedString);
  };

  const custom_data_file = customiseJson(data_file, name, org);
  const custom_business_file = customiseJson(business_file, name, org);

  const getPillarClassName = (pillarKey) => {
    switch (pillarKey) {
      case "Data Management":
        return "pillar-bg-data-management";
      case "Automation AI":
        return "pillar-bg-automation-ai";
      case "Business Operations":
        return "pillar-bg-business-operations";
      default:
        return "";
    }
  };

  const businessRef = useRef(null);
  const businessInView = useInView(businessRef, { triggerOnce: true });

  const automationRef = useRef(null);
  const automationInView = useInView(automationRef, { triggerOnce: true });

  const dataRef = useRef(null);
  const dataInView = useInView(dataRef, { triggerOnce: true });

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col w-full bg-blue relative">
        <div className="bg-blue clip-path-custom z-0 inset-0 absolute" />
        <div className="w-full bg-blue flex justify-center p-2 fixed z-20">
          <img
            src={bicyclelogo}
            className="w-30 h-auto z-10"
            alt="Bicycle Logo"
          />
        </div>
        <div className="heading text-white text-3xl text-center mt-24 mb-8 z-10">
          Welcome <span className="text-red">{name}</span>
        </div>
      </div>

      {interest === "Business" && (
        <motion.div
          variants={slideInFromRight}
          initial="hidden"
          animate={businessInView ? "visible" : "hidden"}
          ref={businessRef}
          className="w-full"
        >
          <h1 className="sub-heading uppercase text-2xl text-center pl-1 pr-1 mt-14 mb-8">
            Optimizing Travel Operations for{" "}
            <span className="text-red">{org}</span>
          </h1>
        </motion.div>
      )}

      {interest === "Data" && (
        <motion.div
          variants={slideInFromLeft}
          initial="hidden"
          animate={dataInView ? "visible" : "hidden"}
          ref={dataRef}
          className="w-full"
        >
          <h1 className="sub-heading uppercase text-2xl text-center pl-1 pr-1 mt-14 mb-8">
            Travel Data Insights for <span className="text-red">{org}</span>
          </h1>
        </motion.div>
      )}

      <div className="w-full">
        {Object.entries(
          interest === "Business" ? custom_business_file : custom_data_file
        ).map(([pillarKey, pillars], index) => {
          if (pillarKey === "Business Operations") {
            return (
              <motion.div
                key={index}
                variants={slideInFromRight}
                initial="hidden"
                animate={businessInView ? "visible" : "hidden"}
                ref={businessRef}
                className={`w-full p-3 mt-0 pb-3 pl-3 pr-3 ${getPillarClassName(
                  pillarKey
                )}`}
              >
                <h2 className="sub-heading text-2xl text-red text-center mt-2">
                  {pillarKey}
                </h2>
                {pillars.map((pillar, i) => (
                  <div key={i}>
                    <h2 className="sub-heading uppercase font-normal m-0 mt-3 ml-2">
                      {i + 1}. {pillar.feature_name}
                    </h2>
                    <p className="body font-light m-0 mb-6 mt-1 w-full pl-2 text-left">
                      {pillar.description}
                    </p>
                    <div className="flex flex-col">
                      {pillar.examples.map((example, j) => (
                        <div
                          key={j}
                          className="flex flex-col w-full h-full bg-dark-white rounded-lg justify-center items-center mb-3"
                        >
                          <div className="flex w-4/5 justify-center items-center rounded-b-lg bg-dark-grey mb-2">
                            <p className="body text-xs m-1 text-white font-light">
                              {example.name}
                            </p>
                          </div>
                          <div className="flex justify-evenly items-center mt-0 h-full p-1 pt-1 pb-3 pr-3">
                            <img src={cc_green} className="w-10 mr-3" />
                            <p className="body m-0 p-0 text-xs font-normal text-left w-full h-full flex items-center justify-center leading-4">
                              {example.description}
                            </p>
                            <hr className="w-[1px] h-20 bg-gray-400 border-0 mr-2 ml-2" />
                            <div className="flex flex-col items-center">
                              <p className="body uppercase m-0 p-0 text-[0.65rem] text-gray-600 font-light w-full h-full text-center leading-4">
                                {example.impact_metric_description}
                              </p>
                              <span className="text-red text-lg font-semibold">
                                {example.impact_metric}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            );
          } else if (pillarKey === "Automation AI") {
            return (
              <motion.div
                key={index}
                variants={slideInFromLeft}
                initial="hidden"
                animate={automationInView ? "visible" : "hidden"}
                ref={automationRef}
                className={`w-full p-3 mt-0 pb-4 pl-3 pr-3 ${getPillarClassName(
                  pillarKey
                )}`}
              >
                <h2 className="sub-heading text-2xl text-red text-center mt-2">
                  {pillarKey}
                </h2>
                {pillars.map((pillar, i) => (
                  <div key={i}>
                    <h2 className="sub-heading uppercase text-white font-normal m-0 mt-3 ml-2">
                      {i + 1}. {pillar.feature_name}
                    </h2>
                    <p className="body font-light text-white m-0 mb-6 mt-1 w-full pl-2 text-left">
                      {pillar.description}
                    </p>
                    <div className="flex flex-col">
                      {pillar.examples.map((example, j) => (
                        <div
                          key={j}
                          className="flex flex-col bg-blue text-white rounded-lg w-full p-0 mt-3 mb-2 shadow-lg z-10"
                        >
                          <div className="body text-center text-white self-center rounded-b-lg bg-red m-0 p-2 pt-1 pb-1">
                            {org}
                          </div>
                          <div className="flex pl-2 pt-3 pr-5 w-full">
                            <img
                              src={bicycle_crop}
                              className="w-12 h-full bg-dark-grey p-0 pt-3 pb-3 rounded-lg"
                            />
                            <h3 className="font-semibold sub-heading text-white ml-2 mr-2 w-full">
                              <span
                                className={
                                  example.title.riseOrDrop === "drop"
                                    ? "text-red-500"
                                    : "text-green-500"
                                }
                              >
                                {example.title.percentage}%
                              </span>{" "}
                              {example.title.riseOrDrop} in orders from{" "}
                              <span
                                className={
                                  example.title.riseOrDrop === "drop"
                                    ? "text-red"
                                    : "text-green"
                                }
                              >
                                {example.title.where}
                              </span>
                            </h3>
                            <p className="text-[0.5rem] text-black bg-dark-white h-[0.6rem] w-fit text-center rounded-sm pb-1 pr-1 pl-1">
                              APP
                            </p>
                            <p className="text-[0.5rem] text-[#3c414d] ml-[10px]">
                              {example.title.time}
                            </p>
                          </div>

                          <hr className="w-[286px] border border-[#3c414d] ml-[4rem] mb-[0.6rem]" />

                          <div className="leading-[1.4rem] ml-[4rem] mb-[0.6rem] w-[78%] text-sm font-light">
                            <h4>Impact Summary</h4>
                            {example.particulars.map((item, index) => {
                              return (
                                <div
                                  className="flex w-[97%] justify-between"
                                  key={index}
                                >
                                  <h4>
                                    <span className="text-gray-500">
                                      Supplier:{" "}
                                    </span>
                                    {item.supplier}
                                  </h4>
                                  <div className="flex w-[60px] justify-between">
                                    <img
                                      src={
                                        example.title.riseOrDrop === "drop"
                                          ? down_arrow
                                          : up_arrow
                                      }
                                      className="h-[10px] mt-[6px]"
                                    />
                                    <h4>{item.percentage}%</h4>
                                  </div>
                                </div>
                              );
                            })}
                          </div>

                          <hr className="w-[286px] border border-[#3c414d] ml-[4rem] mb-[0.6rem]" />

                          <div className="w-fit ml-[4rem] mb-[1rem]">
                            <h4 className="leading-[1rem] mb-[6px]">
                              Cause Summary
                            </h4>
                            <h4 className="leading-[1rem] text-[0.7rem] font-light w-[91%] text-justify">
                              {example.causeSummary}
                            </h4>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            );
          } else if (pillarKey === "Data Management") {
            return (
              <motion.div
                key={index}
                variants={slideInFromRight}
                initial="hidden"
                animate={dataInView ? "visible" : "hidden"}
                ref={dataRef}
                className="relative w-full"
              >
                <img
                  src={green_arch}
                  className="absolute top-0 left-0 w-24 h-auto z-0"
                />
                <img
                  src={green_arch}
                  className="absolute bottom-0 right-0 w-24 rotate-180 h-auto z-0"
                />
                <div
                  key={index}
                  className={`w-full p-3 mt-0 pb-3 pl-3 pr-3 ${getPillarClassName(
                    pillarKey
                  )}`}
                >
                  <h2 className="sub-heading text-2xl text-red text-center mt-2 relative">
                    {pillarKey}
                  </h2>
                  {pillars.map((pillar, i) => (
                    <div key={i} className="relative">
                      <h2 className="sub-heading uppercase font-normal m-0 mt-3 ml-2">
                        {i + 1}. {pillar.feature_name}
                      </h2>
                      <p className="body font-light m-0 mb-6 mt-1 w-full pl-2 text-left">
                        {pillar.description}
                      </p>
                      <div className="flex flex-col">
                        {pillar.examples.map((example, j) => (
                          <div
                            key={j}
                            className="flex flex-col bg-blue text-white border rounded-lg w-full p mt-2 mb-2 shadow-md"
                          >
                            <div className="body text-center bg-red text-white font-light p-1 uppercase mt-2 mb-0">
                              {org} - {selectedVertical}
                            </div>
                            <div className="flex flex-col w-full p-4 mt-1">
                              <h3 className="sub-heading p-0 m-0 mb-2 text-red">
                                {example.metric}
                              </h3>
                              <div className="flex justify-center items-center bg-gray-700 p-0 mt-2 rounded-lg">
                                <span className="sub-heading text-2xl text-center text-green m-0 p-1">
                                  {example.value}
                                </span>
                              </div>
                              <div className="flex justify-between w-full items-end p-0 m-0 mt-3">
                                <h4 className="text-sm text-gray-500 m-0 mr-2">
                                  BENCHMARK
                                </h4>
                                <p className="text-sm font-thin text-green-500">
                                  {example.benchmark}
                                </p>
                              </div>

                              <hr className="w-full border-t border-gray-600 my-4" />
                              <p className="body text-white font-extralight text-left m-0 p-0 mt-0 mb-1">
                                {example.analysis}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          } else {
            return null;
          }
        })}
      </div>
      <button
        className="heading text-2xl border-4 border-red bg-dark-grey text-white font-light m-0 mb-4 w-11/12 py-2 px-4 rounded-2xl shadow-md transition-all duration-200 ease-in-out transform hover:bg-blue-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 active:bg-blue-700 active:shadow-none active:scale-95"
        onClick={() =>
          (window.location.href =
            "https://bicycle.ai/demo/book-a-demo-e-commerce")
        }
      >
        BOOK A DEMO?
      </button>
    </div>
  );
}

export default TravelPage;
