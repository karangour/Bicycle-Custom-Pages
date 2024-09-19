import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { useLocation } from "react-router-dom";
import bicyclelogo from "../assets/bicycle-logo.png";
import checkmark from "../assets/checkbox.png";
import travelLevel3BizzData from "./jsons/travel_level_3_bizz.json";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TravelLevel3Bizz() {
  const location = useLocation();
  const { email, name, org } = location.state || {};
  const [data, setData] = useState({});

  useEffect(() => {
    const jsonString = JSON.stringify(travelLevel3BizzData)
      .replace(/\${name}/g, name || "")
      .replace(/\${org}/g, org || "");

    const updatedData = JSON.parse(jsonString);
    setData(updatedData);
  }, [name, org]);

  const renderImageCarousel = (images) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };

    return (
      <Slider {...settings}>
        {images.map((image, index) => (
          <img src={image} alt={`Slide ${index}`} className="w-full h-full" />
        ))}
      </Slider>
    );
  };

  const renderBullets = (bullets) => {
    return (
      <div className="flex flex-wrap w-full -mt-6">
        {bullets.map((bullet, index) => (
          <div key={index} className="w-1/2 flex items-center text-blue">
            <img src={checkmark} alt="Checkmark" className=" w-8" />
            <p className="body font-light text-lg leading-3">{bullet}</p>
          </div>
        ))}
      </div>
    );
  };

  const renderFeatures = (features, index) => {
    if (features.length === 2) {
      return (
        <div className="flex flex-row justify-between w-full mt-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col w-1/2 p-5">
              <h1
                className="heading text-3xl text-blue"
                dangerouslySetInnerHTML={{ __html: feature.heading }}
              ></h1>
              <p
                className="body p-0 m-0 mt-2 mb-14 text-left font-light text-xl text-blue leading-8"
                dangerouslySetInnerHTML={{ __html: feature.description }}
              ></p>
              <div
                className={`w-full h-full p-2 rounded-xl overflow-hidden ${index % 2 === 0 ? "bg-white" : "bg-light-blue"} shadow-[0_8px_15px_rgba(0,0,0,0.5)]`}
              >
                {Array.isArray(feature.image) && feature.image.length > 1 ? (
                  renderImageCarousel(feature.image)
                ) : (
                  <img
                    src={feature.image}
                    alt={`Feature ${index + 1}`}
                    className="w-full h-full"
                  />
                )}
              </div>
              {feature.bullets && renderBullets(feature.bullets)}
            </div>
          ))}
        </div>
      );
    } else if (features.length >= 3) {
      return (
        <div className="flex flex-col w-full mt-8">
          <div className="flex flex-row w-full">
            <div className="w-1/2 p-5">
              <h1
                className="heading text-3xl text-blue"
                dangerouslySetInnerHTML={{ __html: features[0].heading }}
              ></h1>
              <p
                className="body p-0 m-0 mt-2 mb-14 text-left font-light text-xl text-blue leading-8"
                dangerouslySetInnerHTML={{ __html: features[0].description }}
              ></p>
              {features[0].bullets && renderBullets(features[0].bullets)}
            </div>
            <div
              className={`w-1/2 p-2 mt-10 rounded-xl overflow-hidden ${index % 2 === 0 ? "bg-white" : "bg-light-blue"} shadow-[0_8px_15px_rgba(0,0,0,0.5)]`}
            >
              {Array.isArray(features[0].image) &&
              features[0].image.length > 1 ? (
                renderImageCarousel(features[0].image)
              ) : (
                <img
                  src={features[0].image}
                  alt="Feature 1"
                  className="w-full h-full"
                />
              )}
            </div>
          </div>
          <div className="flex flex-row flex-wrap mt-8">
            {features.slice(1).map((feature, index) => (
              <div key={index} className="flex flex-col w-1/2 p-5">
                <h1
                  className="heading text-3xl text-blue"
                  dangerouslySetInnerHTML={{ __html: feature.heading }}
                ></h1>
                <p
                  className="body p-0 m-0 mt-2 mb-14 text-left font-light text-xl text-blue leading-8"
                  dangerouslySetInnerHTML={{ __html: feature.description }}
                ></p>
                <div
                  className={`w-full p-2 rounded-xl overflow-hidden ${index % 2 === 0 ? "bg-white" : "bg-light-blue"} shadow-[0_8px_15px_rgba(0,0,0,0.5)]`}
                >
                  {Array.isArray(feature.image) && feature.image.length > 1 ? (
                    renderImageCarousel(feature.image)
                  ) : (
                    <img
                      src={feature.image}
                      alt={`Feature ${index + 2}`}
                      className="w-full h-auto aspect-square object-cover"
                    />
                  )}
                </div>
                {feature.bullets && renderBullets(feature.bullets)}
              </div>
            ))}
          </div>
        </div>
      );
    }
  };

  return (
    <div className="flex flex-col items-center h-full w-10/12 mx-auto border border-gray-200 border-t-0">
      <div className="flex flex-col w-full  bg-light-blue relative">
        <div className="bg-blue clip-path-custom z-0 inset-0 absolute h-full" />
        <div className="w-full bg-dark-grey flex justify-start p-2 z-20">
          <img
            src={bicyclelogo}
            className="w-30 h-auto ml-2 z-10"
            alt="Bicycle Logo"
          />
          <div className="flex justify-evenly items-end w-full">
            <p className="menu m-0 text-white">Option One</p>
            <p className="menu m-0 text-white">Option Two</p>
            <p className="menu m-0 text-white">Option Three</p>
          </div>
        </div>
        <div className="flex flex-col w-[1200px] h-auto pl-5 pr-5 mt-20 z-10">
          <h3
            className="color-heading text-red"
            dangerouslySetInnerHTML={{
              __html: data.section_heading?.subHeading,
            }}
          ></h3>
          <div className="flex w-full z-10">
            <div className="flex flex-col tracking-wider flex-grow w-fit p-0 m-0 pr-5">
              <h1
                className="heading p-0 text-white"
                dangerouslySetInnerHTML={{
                  __html: data.section_heading?.heading,
                }}
              ></h1>
              <p
                className="body p-0 text-left font-light text-xl text-white leading-8"
                dangerouslySetInnerHTML={{
                  __html: data.section_heading?.description,
                }}
              ></p>
              <div className="flex justify-between items-center mt-4 w-3/5">
                <button
                  className="sub-heading tracking-wide font-light text-lg w-fit m-0 pl-7 pr-7 pt-1 bg-red text-white rounded-full"
                  dangerouslySetInnerHTML={{
                    __html: data.section_heading?.buttonText,
                  }}
                ></button>
                <p
                  className="sub-heading tracking-wide font-light text-lg m-0 mt-1 text-white cursor-pointer"
                  dangerouslySetInnerHTML={{
                    __html: data.section_heading?.linkText,
                  }}
                ></p>
              </div>
            </div>
            <div className="flex justify-center items-center w-[1300px] h-[700px] border-[12px] border-red bg-white z-20 relative m-0 -mr-[130px] rounded-xl shadow-[0_8px_15px_rgba(0,0,0,0.5)]">
              <h1
                className="heading text-dark-grey"
                dangerouslySetInnerHTML={{
                  __html: data.section_heading?.heroImage,
                }}
              ></h1>
            </div>
          </div>
        </div>
      </div>

      {data.pillars?.map(
        (pillar, index) =>
          pillar.exists && (
            <div
              key={index}
              className={`flex flex-col h-full w-full ${index % 2 === 0 ? "bg-light-blue" : "bg-white"}`}
            >
              <div className="flex flex-col w-2/3 h-auto pl-5 pr-5 mt-28 z-10">
                <h3
                  className="color-heading text-red"
                  dangerouslySetInnerHTML={{ __html: pillar.subHeading }}
                ></h3>
                <h1
                  className="heading text-4xl mt-8 p-0 text-blue"
                  dangerouslySetInnerHTML={{ __html: pillar.heading }}
                ></h1>
                <p
                  className="body p-0 m-0 mt-2 mb-0 text-left font-light text-xl text-blue leading-8"
                  dangerouslySetInnerHTML={{ __html: pillar.description }}
                ></p>
              </div>
              {renderFeatures(pillar.features, index)}
            </div>
          )
      )}
    </div>
  );
}
