import React, { useState } from "react";
import { Button, Input, Space, Tabs } from "antd";
import strips from "./../../assets/strips.svg";
import blackIcon from "./../../assets/black-icon.svg";
import picture1 from "./../../assets/picture1.png";
import picture2 from "./../../assets/picture2.png";
import CardListItem from "../atoms/ItemListCard";

const item1 = [
  "Full Stack Developer",
  "Explore More",
  "MERN Stack Developer",
  "Front End Developer",
  "Shopify Developer",
  "Data Scientist",
  "Python Developer",
  "Full Stack Developer",
  "Explore More",
  "MERN Stack Developer",
  "Front End Developer",
  "Shopify Developer",
  "Data Scientist",
  "Python Developer",
];
const item2 = [
  "Full Stack Developer",
  "Explore More",
  "MERN Stack Developer",
  "Front End Developer",
  "Shopify Developer",
  "Data Scientist",
  "Python Developer",
  "Full Stack Developer",
  "Explore More",
  "MERN Stack Developer",
  "Front End Developer",
  "Shopify Developer",
  "Data Scientist",
  "Python Developer",
];


const FindWork = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col w-full justify-start items-center my-16">
      <div className="flex flex-col items-center">
        <div className="md:w-max text-3xl md:text-5xl  text-center px-14 font-semibold italic">
          Finding the right{" "}
          <span
            className="image-stack inline-flex bg-transparent rounded-md shadow-md"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src={picture2}
              alt="jjj"
              className={`absolute top-10 left-50 w-52 transform rounded-full -translate-y-1/2 ${isHovered ? "" : "transition-transform duration-300"}`}
            />
            <img
              src={picture1}
              alt=""
              width="50"
              className={`absolute top-10 left-50 transform rounded-full w-10 -translate-y-1/2 ${isHovered ? "-translate-x-5" : ""} transition-transform duration-300`}
            />
            <img
              src={picture1}
              alt=""
              className={`absolute top-10 left-50 transform rounded-full -translate-y-1/2 ${isHovered ? "translate-x-5" : ""} transition-transform duration-300`}
            />
          </span>
          fit <br />
          has never been easier.
        </div>
        <div className="lg:w-max my-5 italic text-center">
          With our rigorous pre-vetting process, you'll never have <br /> to worry about finding the ideal candidate ever again.
        </div>
        <div className="md:w-full">
          <Space.Compact className="h-16 w-full">
            <Input className="h-full" placeholder="Design ..." />
            <Button className="h-full rounded-2xl bg-yellow-500" type="primary">
              <img src={blackIcon} alt="" />
            </Button>
          </Space.Compact>
        </div>
      </div>
      <div className="bg-gray-100 min-w-[70%] p-4 my-12 rounded-lg shadow-lg app-style">
        <Tabs
          defaultActiveKey="1"
          centered
          type="card"
          items={[
            {
              label: `IT & Development`,
              key: 1,
              children: <CardListItem items={item2} />,
            },
            {
              label: `Design and Creative`,
              key: 2,
              children: <CardListItem items={item1.sort()} />,
            },
          ]}
        />
      </div>
      <div>
        <img src={strips} alt="" />
      </div>
    </div>
  );
};

export default FindWork;
