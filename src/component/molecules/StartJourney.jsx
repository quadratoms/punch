import React from "react";
import { AppBadge } from "../atoms/AppBadge";
import whiteIcon from "./../../assets/white-icon.svg";
import one from "./../../assets/1.svg";
import two from "./../../assets/2.svg";
import three from "./../../assets/3.svg";

import people1 from "./../../assets/people1.jpg";
import people2 from "./../../assets/people2.png";
import people3 from "./../../assets/people3.png";

const cardData = [
  {
    img: one,
    imgLarge: people1,
    bgColor: "#EDEFFF",
    alt: "people1",
    title: "Find your next star performer.",
    description: "Explore the vast Zwilt marketplace to find the candidate that meets your needs.",
  },
  {
    imgLarge: people2,
    img: two,
    bgColor: "#FFF7E1",
    alt: "people2",
    title: "Find your next star performer.",
    description: "Explore the vast Zwilt marketplace to find the candidate that meets your needs.",
  },
  {
    imgLarge: people3,
    img: three,
    bgColor: "#F3F3F3",
    alt: "people3",
    title: "Find your next star performer.",
    description: "Explore the vast Zwilt marketplace to find the candidate that meets your needs.",
  },
];

export default function StartJourney() {
  return (
    <div className="flex flex-col gap-y-8 px-8">
      <div className="text-5xl text-center pb-10">Start your journey today.</div>
      {cardData.map((card, index) => (
        <div key={index} className="relative">
          <div className={`flex justify-end w-full h-full absolute -z-10 parallelogram bg-[${card.bgColor}] overflow-hidden`}>
            <div className="parallelogram-content hidden md:flex flex-end h-full w-full relative">
              <img src={card.imgLarge} alt={card.alt} className="h-[120%] absolute z-20 -top-[20%] right-0" width={500} />
            </div>
          </div>
          <div className="flex z-10">
            <div className="pt-20 pl-20">
              <img src={card.img} alt={card.alt} />
            </div>
            <div className="flex flex-col w-full md:w-[30%] px-8 pt-16">
              <div className="text-4xl py-4">{card.title}</div>
              <div>{card.description}</div>
              <div>
                <AppBadge className="bg-black" text="Explore More" icon={whiteIcon} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
