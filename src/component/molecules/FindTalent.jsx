import React from "react";
import slantBg from "./../../assets/slant-background.png";
import badge from "./../../assets/badge.jpg";
import whiteIcon from "./../../assets/white-icon.svg";
import intersect from "./../../assets/intersect.jpg";
import shopify from "./../../assets/shopify.svg";
import magento from "./../../assets/magento.svg";
import dataSciLogo from "./../../assets/data-science.svg";
import donnetLogo from "./../../assets/donnet.svg";
import webflowLogo from "./../../assets/webflow.svg";
import figma from "./../../assets/figma.svg";
import ps from "./../../assets/photoshop.svg";
import adobe from "./../../assets/adobeinsight.svg";
import cinema from "./../../assets/cinemal.svg";
import unreal from "./../../assets/unreal.svg";
import backIcon from "./../../assets/black-back-icon.svg";
import blackIcon from "./../../assets/black-icon.svg";
import { RateBadge } from "../atoms/RateBadge";
import { AppBadge } from "../atoms/AppBadge";
import { RoundedBadge } from "../atoms/RoundedBadge";

export default function FindTalent() {
  return (
    <div className="w-full h-max flex flex-col justify-center items-center p-10 relative">
      <img
        src={slantBg}
        className="absolute -top-20 z-10 w-full extra"
        alt=""
      />
      <div className="md:w-max px-14 py-20 text-3xl md:text-5xl z-20 text-center font-semibold">
        Your one-stop marketplace for finding <br /> the talent your business
        needs.
      </div>
      <div className="flex w-full flex-col md:flex-row gap-x-40 z-20">
        <div className="flex-[2]">
          <div className="flex flex-col h-max justify-between gap-16">
            <div className="w-full">
              <div className="text-xl py-4">
                Find Dev and IT professionals to scale your business.
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <RateBadge text={"989 Skills"} icon={badge} />
                <RateBadge text={"45 Sub-Categories"} icon={intersect} />
              </div>
            </div>
            <div className="w-full">
              <div className="text-xl py-4">
                Explore Creative individuals with a keen eye for detail.{" "}
              </div>
              <div className="grid grid-cols-1  md:grid-cols-2 gap-5">
                <RateBadge text={"989 Skills"} icon={badge} />
                <RateBadge text={"45 Sub-Categories"} icon={intersect} />
                <RateBadge text={"1011 Profiles"} icon={intersect} />
              </div>
            </div>
          </div>
          <AppBadge className="bg-black" text="Explore More" icon={whiteIcon} />
        </div>
        <div className="flex-[3] ">
          <TalentCategory title="IT & Development">
            <RoundedBadge icon={shopify} text={"Shopify Developer"} />
            <RoundedBadge icon={magento} text={"Magento Developer"} />
            <RoundedBadge icon={dataSciLogo} text={"Data Scientist"} />
            <RoundedBadge icon={webflowLogo} text={"Webflow Developer"} />
            <RoundedBadge icon={donnetLogo} text={"Dot net Developer"} />
            <RoundedBadge
              icon={blackIcon}
              text={
                <>
                  <br />
                  <br />
                </>
              }
            />
          </TalentCategory>
          <TalentCategory title="Design & Creative">
            <RoundedBadge
              icon={backIcon}
              text={
                <>
                  <br />
                  <br />
                </>
              }
            />
            <RoundedBadge icon={figma} text={"Shopify Designer"} />
            <RoundedBadge icon={ps} text={"Shopify Designer"} />
            <RoundedBadge icon={adobe} text={"Shopify Designer"} />
            <RoundedBadge icon={unreal} text={"Shopify Designer"} />
            <RoundedBadge icon={cinema} text={"Cinema 4D"} />
          </TalentCategory>
        </div>
      </div>
    </div>
  );
}

const TalentCategory = ({ title, children }) => (
  <div className="bg-white p-5 my-8 rounded-3xl">
    <div>{title}</div>
    <div className="flex justify-between overflow-x-scroll scroll-hide gap-4 text-center">
      {children}
    </div>
  </div>
);
