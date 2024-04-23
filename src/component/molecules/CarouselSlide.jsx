import { Carousel } from "antd";
import React from "react";
import { AppBadge } from "../atoms/AppBadge";
import one from "./../../assets/c1.png";
import two from "./../../assets/c2.png";
import three from "./../../assets/c3.png";
import whiteIcon from "./../../assets/white-icon.svg";

export default function CarouselSlide() {
  return (
    <div className="bg-gradient-to-t from-sky-200 to-white p-8 pb-20 mt-20 ">
      <Carousel autoplay dots>
        <div>
          <div className={"bg-white rounded-3xl"}>
            <div className="flex  justify-between  ">
              <div className={`flex flex-col  px-8  pt-16 `}>
                <div className="text-4xl py-4  max-w-[30%] ">
                  Why choose Zwilt?{" "}
                </div>
                <div>
                  <ul>
                    <li className="flex items-center gap-4">
                      <div className="w-4 h-2 rounded-3xl bg-slate-700"></div>
                      We take complex hiring processes - and simplify them.
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="w-4 h-2 rounded-3xl bg-slate-700"></div>
                      Connecting you to the world’s highly qualified talent
                      pool.{" "}
                    </li>
                  </ul>
                </div>
                <div>
                  <AppBadge
                    className="bg-black"
                    text="Learn More"
                    icon={whiteIcon}
                  />
                </div>
              </div>
              <div className="h-[500px] w-[500px]">
                <img src={two} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={"bg-white rounded-3xl"}>
            <div className="flex  justify-between  ">
              <div className={`flex flex-col px-8  pt-16 `}>
                <div className="text-4xl py-4  max-w-[30%] ">
                  Onboard without the risk.{" "}
                </div>
                <div className="whitespace-nowrap">
                  <ul>
                    <li className="flex items-center gap-4">
                      <div className="w-4 h-2 rounded-3xl bg-slate-700"></div>
                      We pick the best for you to select.{" "}
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="w-4 h-2 rounded-3xl bg-slate-700"></div>
                      Thousands of vetted candidates in dozens of categories.{" "}
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="w-4 h-2 rounded-3xl bg-slate-700"></div>
                      Risk-free resource swapping for the best fit.{" "}
                    </li>
                  </ul>
                </div>
                <div>
                  <AppBadge
                    className="bg-black"
                    text="Learn More"
                    icon={whiteIcon}
                  />
                </div>
              </div>
              <div className="h-[500px] w-[500px]">
                <img src={one} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={"bg-white rounded-3xl"}>
            <div className="flex  justify-between  ">
              <div className={`flex flex-col  px-8  pt-16 `}>
                <div className="text-4xl py-4  max-w-[30%] ">
                  An open book.{" "}
                </div>
                <ul>
                  <li className="flex items-center gap-4">
                    <div className="w-4 h-2 rounded-3xl bg-yellow-700"></div>
                    Easy and transparent one-to-one chat with candidates.
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-4 h-2 rounded-3xl bg-yellow-700"></div>
                    Simple and convenient payment methods.
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-4 h-2 rounded-3xl bg-yellow-700"></div>
                    Review past ratings.
                  </li>
                </ul>
                <div>
                  <AppBadge
                    className="bg-black"
                    text="Learn More"
                    icon={whiteIcon}
                  />
                </div>
              </div>
              <div className="h-[500px] w-[500px]">
                <img src={two} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={"bg-white rounded-3xl"}>
            <div className="flex  justify-between  ">
              <div className={`flex flex-col  px-8  pt-16 `}>
                <div className="text-4xl py-4  max-w-[30%] ">
                  Stay in the loop.{" "}
                </div>
                <ul>
                  <li className="flex items-center gap-4">
                    <div className="w-4 h-2 rounded-3xl bg-slate-700"></div>
                    Track your staff activity down to every minute with
                    screenshots.
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-4 h-2 rounded-3xl bg-slate-700"></div>
                    Comprehensive timesheet data to process payments.
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-4 h-2 rounded-3xl bg-slate-700"></div>
                    Create projects to organize and assign tasks more
                    effectively.
                  </li>
                </ul>
                <div>
                  <AppBadge
                    className="bg-black"
                    text="Learn More"
                    icon={whiteIcon}
                  />
                </div>
              </div>
              <div className="h-[500px] w-[500px]">
                <img src={three} alt="" />
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
