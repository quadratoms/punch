import React from "react";
import { AppBadge } from "../atoms/AppBadge";
import whiteIcon from "./../../assets/white-icon.svg";
import people1 from "./../../assets/people1.jpg";
import people2 from "./../../assets/people2.png";
import people3 from "./../../assets/people3.png";
import one from "./../../assets/1.svg";
import two from "./../../assets/2.svg";
import three from "./../../assets/3.svg";

export default function StartJourney() {
  return (
    <div className="flex flex-col gap-y-8 px-8">
      <div className="text-5xl text-center  pb-10">Start your journey today.</div>
      <div className="relative ">
        {/* <img className="absolute -z-10 w-full h-full" src={buildTeam} alt="" /> */}
        <div
          className={`flex justify-end w-full h-full -z-10 absolute parallelogram bg-[#EDEFFF] overflow-hidden`}
        >
          <div className="parallelogram-content hidden md:flex flex-end h-full w-full relative">
            <img
              src={people1}
              alt=""
              className="h-[120%] absolute z-20 -top-[20%] right-0"
              width={500}
            />
          </div>
        </div>
        <div className="flex    ">
          <div className="pt-20 pl-20">
            <img src={one} alt="" />
          </div>
          <div className={`flex flex-col w-full md:w-[30%] px-8  pt-16 `}>
            <div className="text-4xl py-4">Find your next star performer.</div>
            <div>
              Explore the vast Zwilt marketplace to find the candidate that
              meets your needs.
            </div>
            <div>
              <AppBadge
                className="bg-black"
                text="Explore More"
                icon={whiteIcon}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative ">
        {/* <img className="absolute -z-10 w-full h-full" src={buildTeam} alt="" /> */}
        <div
          className={`flex justify-end w-full h-full -z-10 absolute parallelogram bg-[#FFF7E1] overflow-hidden`}
        >
          <div className="parallelogram-content hidden md:flex flex-end h-full w-full relative">
            <img
              src={people2}
              alt=""
              className="h-[120%] absolute z-20 -top-[20%] right-0"
              width={500}
            />
          </div>
        </div>
        <div className="flex    ">
          <div className="pt-20 pl-20">
            <img src={two} alt="" />
          </div>
          <div className={`flex flex-col w-full md:w-[30%] px-8  pt-16 `}>
            <div className="text-4xl py-4">Find your next star performer.</div>
            <div>
              Explore the vast Zwilt marketplace to find the candidate that
              meets your needs.
            </div>
            <div>
              <AppBadge
                className="bg-black"
                text="Explore More"
                icon={whiteIcon}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        {/* <img className="absolute -z-10 w-full h-full" src={buildTeam} alt="" /> */}
        <div
          className={`flex justify-end w-full h-full -z-10 absolute parallelogram bg-[#F3F3F3] overflow-hidden`}
        >
          <div className="parallelogram-content hidden md:flex flex-end h-full w-full relative">
            <img
              src={people3}
              alt=""
              className="h-[120%] absolute z-20 -top-[20%] right-0"
              width={500}
            />
          </div>
        </div>
        <div className="flex    ">
          <div className="pt-20 pl-20">
            <img src={three} alt="" />
          </div>
          <div className={`flex flex-col w-full md:w-[30%] px-8  pt-16 `}>
            <div className="text-4xl py-4">Find your next star performer.</div>
            <div>
              Explore the vast Zwilt marketplace to find the candidate that
              meets your needs.
            </div>
            <div>
              <AppBadge
                className="bg-black"
                text="Explore More"
                icon={whiteIcon}
              />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
