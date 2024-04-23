import React, { useState } from "react";
import blackIcon from "./../../assets/black-icon.svg";
import backIcon from "./../../assets/black-back-icon.png";
import whitegroove from "./../../assets/white-groovehq.svg";
import picture1 from "./../../assets/picture1.png";
import picture2 from "./../../assets/picture2.png";
import quote from "./../../assets/quote.svg";
import { AppBadge } from "../atoms/AppBadge";

export default function HowITWork() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-[#202229] -z-20 py-16">
      <div className="relative">
        <img src={quote} alt="" className="absolute right-0 -top-10" />
      </div>
      <div className="flex flex-col sm:flex-row px-8">
        <div className="flex-[3] py-8 sm:py-40">
          <div className="flex w-full sm:w-[60%] flex-col justify-center">
            <div className="w-full text-3xl text-white font-semibold italic z-30">
              How it worked for Jason{" "}
              <span
                className="image-stack inline-flex bg-transparent rounded-md shadow-md"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <img
                  src={picture2}
                  alt="jjj"
                  className={`absolute top-10 left-50 transform rounded-full -translate-y-1/2 transition-transform duration-300`}
                />
                <img
                  src={picture1}
                  alt=""
                  width="50"
                  className={`absolute top-10 left-50 transform rounded-full w-10 -translate-y-1/2 ${
                    isHovered ? "-translate-x-5" : ""
                  } transition-transform duration-300`}
                />
                <img
                  src={picture1}
                  alt=""
                  className={`absolute top-10 left-50 transform rounded-full -translate-y-1/2 ${
                    isHovered ? "translate-x-5" : ""
                  } transition-transform duration-300`}
                />
              </span>
              at <span>Company Name</span>
            </div>
            <div className="text-white pt-8">
              Zwilt enabled us to deliver on time and they’ve been heavy hitters
              in our corner since.
            </div>
            <div className="flex gap-3">
              <AppBadge icon={backIcon} className="bg-white" />
              <AppBadge icon={blackIcon} className="bg-white" />
            </div>
          </div>
        </div>
        <div className="flex-[3] pr-12">
          <div className="flex flex-col h-full justify-center w-full md:w-[80%]">
            <div className="text-2xl text-white italic">
              <div className="flex items-center gap-4">
                <AppBadge
                  className="bg-purple-400 h-20 px-3"
                  iconClass={"h-5"}
                  icon={whitegroove}
                />
                <div>
                  <div>Jason Makki</div>
                  <div className="text-base text-gray-500">Engineer at GROOVE</div>
                  <div className="text-sm text-gray-500">San Francisco</div>
                </div>
              </div>
            </div>
            <div className="text-white pt-8">
              Zwilt enabled us to deliver on time and they’ve been heavy hitters
              in our corner since. Zwilt enabled us to deliver on time and
              they’ve been heavy hitters in our corner since. Zwilt enabled us to
              deliver on time and they’ve been heavy hitters.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
