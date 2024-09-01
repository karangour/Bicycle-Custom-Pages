import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import bicyclelogo from "./assets/bicycle-logo.png";
import ai_integration from "./assets/ai_integration.png";

export default function HomePage() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const key_features = [
    {
      icon: ai_integration,
      title: "AI Integration In Data Pipelines",
      body: "Bicycle AI focuses on embedding AI directly into data workflows, allowing businesses to extract valuable insights and drive decisions from their data more effectively.",
    },
    {
      icon: ai_integration,
      title: "No-Code/Low-Code Approach",
      body: "The platform likely emphasizes ease of use, enabling data teams to utilize AI features without needing extensive coding or machine learning expertise.",
    },
    {
      icon: ai_integration,
      title: "Business Insights",
      body: "By integrating with existing data tools and systems, Bicycle AI helps companies gain critical insights, optimize their operations, and make data-driven decisions.",
    },
  ];

  const business_leaders = [
    {
      logo: ai_integration,
      title: "Protect Revenue At Speed",
      description:
        "Bicycle uncovers difficult-to-find revenue leakage in your business. It identifies root causes and alerts the right stakeholders to take action.",
    },
    {
      logo: ai_integration,
      title: "Improve Customer Experience",
      description:
        "Bicycle monitors the entire customer experience. It assembles disparate information into a full story so CX leaders can drive continuous improvement.",
    },
    {
      logo: ai_integration,
      title: "Ensure Operational Excellence",
      description:
        "By adding business context, Bicycle takes application and software monitoring to the next level. It identifies how much the business is impacted, which customers are impacted, and why.",
    },
    {
      logo: ai_integration,
      title: "Drive Growth",
      description:
        "By identifying underlying patterns in your business such as fast-growing customer segments or spikes in demand for product lines, Bicycle empowers you to yield up.",
    },
  ];

  const togglePanel = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="page">
      <div className="sub-page relative">
        <div className="bg-blue clip-path-custom z-10 inset-0 absolute" />
        <img src={bicyclelogo} className="w-32 z-20" />
        <p className="heading text-white z-20">BICYCLE</p>
        <p className="sub-heading text-white z-20">
          Your 24/7 AI Analyst Copilot
        </p>
        <p className="body text-white z-20">
          Bicycle AI is a SaaS platform that integrates AI capabilities into
          data pipelines to enhance business operations. The primary goal of
          Bicycle AI is to empower data teams by providing them with advanced AI
          tools and functionalities without requiring them to build complex
          models from scratch.
        </p>
      </div>
      <div className="sub-page relative">
        <div className="bg-dark-white z-0 inset-0 absolute" />
        <div className="h-24" />
        <div className="flex flex-col justify-around w-full z-20 pl-3 pr-3">
          {key_features.map((feature) => {
            return (
              <div className="key-features">
                <img src={feature.icon} className="w-20 rounded-lg" />
                <div className="w-full">
                  <p className="font-lexend text-[12px] ml-2 mr-2 text-white">
                    {feature.title}
                  </p>
                </div>
                <p className="font-lexend-d font-light text-[10px] text-justify ml-2 text-white">
                  {feature.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="sub-page pb-10 relative">
        <p className="body text-green mt-8 mb-3 bg-blue w-full text-center">
          For Business Leaders
        </p>
        <p className="heading text-4xl ml-2 mr-2 mt-0">
          Creating value for highly focused{" "}
          <span className="text-green">business leaders</span>
        </p>
        {business_leaders.map((item, index) => {
          const isOpen = expandedIndex === index;
          const animationProps = useSpring({
            from: { height: 0 },
            to: {
              height: isOpen ? 310 : 0,
            },
            config: { duration: 1000 }, // Slower animation duration (1000ms = 1s)
          });

          return (
            <div
              key={index}
              className="w-full flex flex-col justify-center items-center pr-3 pl-3 mt-2"
            >
              <div
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
                className="sub-heading text-lg uppercase bg-blue text-white text-center p-2 rounded-lg cursor-pointer w-full mb-0"
              >
                {item.title}
              </div>
              <animated.div
                style={animationProps}
                className="overflow-hidden w-full"
              >
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-5 bg-black" />
                  <div className="flex flex-col justify-center items-center bg-light-blue w-full rounded-lg p-4 border-solid border-2 border-green">
                    <img
                      src={item.logo}
                      className="w-20 invert hue-rotate-90 m-3 rounded-lg"
                      alt={item.title}
                    />
                    <p className="subheading text-center">{item.title}</p>
                    <p className="body font-light text-center">
                      {item.description}
                    </p>
                  </div>
                </div>
              </animated.div>
            </div>
          );
        })}
      </div>
      <div className="sub-page pt-0 bg-light-blue relative">
        <p className="body text-white mt-0 mb-3 bg-red w-full text-center">
          For Data Leaders
        </p>
        <p className="heading text-4xl ml-2 mr-2 mt-0">
          Equipping <span className="text-red">data leaders</span> to power the
          business
        </p>
      </div>
    </div>
  );
}
