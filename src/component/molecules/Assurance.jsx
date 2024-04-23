import { Collapse, Steps, theme } from "antd";
import React, { useState } from "react";
import { RoundedBadge } from "../atoms/RoundedBadge";

import icon1 from "./../../assets/icon1.svg";
import icon2 from "./../../assets/icon2.svg";
import icon3 from "./../../assets/icon3.svg";
import icon4 from "./../../assets/icon4.svg";
import icon5 from "./../../assets/icon5.svg";
import whiteplay from "./../../assets/white-play.svg";
import blackplay from "./../../assets/black-play.svg";
import lady from "./../../assets/lady.png";

let text =
  "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.";

const getItems = (panelStyle) => [
  {
    key: "1",
    label: <div className="py-3">Step 1: Resume Screening</div>,
    children: <p className="w-[80%]">{text}</p>,
    style: panelStyle,
    headerClass: "!items-center",
  },
  {
    key: "2",
    label: <div className="py-3">Step 2: Video Interview</div>,
    children: <p className="w-[80%]">{text}</p>,
    style: panelStyle,
    headerClass: "!items-center",
  },
  {
    key: "3",
    label: <div className="py-3">Step 3: Technical Evaluation</div>,
    children: <p className="w-[80%]">{text}</p>,
    style: panelStyle,
    headerClass: "!items-center",
  },
  {
    key: "4",
    label: <div className="py-3">Step 4: Application Review</div>,
    children: <p className="w-[80%]">{text}</p>,
    style: panelStyle,
    headerClass: "!items-center",
  },
  {
    key: "5",
    label: <div className="py-3">Step 5: Lets get to work</div>,
    children: <p className="w-[80%]">{text}</p>,
    style: panelStyle,
    headerClass: "!items-center",
  },
];

export default function Assurance() {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const onChange = (value) => {
    setCurrent(value);
  };

  return (
    <div className="md:flex items-end bg-white py-24 px-12">
      <div className="flex-1">
        <div className="text-4xl italic py-4">
          How we ensure you’re in good hands.
        </div>
        <div>
          With our comprehensive screening process, we hand-pick highly skilled
          candidates so you can onboard them in a matter of days.
        </div>
        <div className="py-4">
          <Collapse
            bordered={false}
            defaultActiveKey={["1"]}
            expandIcon={({ isActive }) => (
              <RoundedBadge
                icon={isActive ? whiteplay : blackplay}
                className={`!h-10 !w-10 ${
                  isActive ? "!bg-[#8BA4FD]" : "!bg-slate-200"
                }`}
              />
            )}
            style={{
              background: token.colorBgContainer,
            }}
            items={getItems({
              marginBottom: 12,
              background: token.colorFillAlter,
              borderRadius: token.borderRadiusLG,
              border: "none",
              boxShadow: token.boxShadow,
            })}
          />
        </div>
      </div>
      <div className="flex-1">
        <div className="flex flex-col md:py-0 py-4  md:items-center justify-end w-full">
          <div className="relative">
            <img
              src={lady}
              className="absolute md:-top-52 hidden sm:block sm:right-10 md:-right-40"
              alt=""
            />
            <div
              className="h-full absolute w-14 bg-[#8BA4FD] rounded-2xl"
              style={{ contain: "" }}
            ></div>
            <Steps
              current={current}
              onChange={onChange}
              direction="vertical"
              className="px-3 py-3"
              items={[
                { title: "Step 1", description: "Tell us something about yourself", icon: <img src={icon1} alt="" /> },
                { title: "Step 2", description: "Give a short brief about your experience", icon: <img src={icon2} alt="" /> },
                { title: "Step 3", description: "Tell us something about yourself", icon: <img src={icon3} alt="" /> },
                { title: "Step 4", description: "Tell us something about yourself", icon: <img src={icon4} alt="" /> },
                { title: "Step 5", description: "Tell us something about yourself", icon: <img src={icon5} alt="" /> },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
