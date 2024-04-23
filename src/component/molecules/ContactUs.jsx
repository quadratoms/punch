import React from "react";
import whiteDownIcon from "./../../assets/white-down.png";
import { AppBadge } from "../atoms/AppBadge";

import logo from "./../../assets/zwilt.png";
import sublogo from "./../../assets/Vector.svg";

export default function ContactUs() {
  return (
    <div className="bg-[#292B34] relative p-8  text-white ">
      <div className="parallelogram z-10 absolute w-full -top-10 -m-8 flex h-96 bg-[#292B34]">
        <div className="bg-[#525AA0] w-full h-full m-14">
          <div className="flex flex-col items-center justify-center h-full parallelogram-content">
            <div className="text-4xl text-center">
              Need a job done, and done well? Get started
            </div>
            <AppBadge icon={whiteDownIcon} className="bg-black py-5 px-6  " />
          </div>
        </div>
      </div>
      <div className="h-96"></div>
      <div className="flex flex-col px-8 my-16">
        <div className="flex flex-col md:flex-row justify-between gap-y-8 ">
          <div className="w-full md:w-[30%]">
            <div className=" flex flex-col gap-9">
              <div className="text-white flex items-end">
                <img src={logo} alt="Logo" className="h-8 w-auto" />
                <img src={sublogo} alt="Logo" className="w-auto h-[60%]" />
              </div>
              <div>
                We take complex hiring processes - and simplify them. Connecting
                you to the world’s highly qualified talent pool.
              </div>
            </div>
          </div>
          <div className="w-full md:w-[60%] text-5xl italic">
            Connecting the right people to the right businesses.
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between py-8 ">
          <div className="w-full md:w-[30%]">
            <div className=" flex flex-col gap-9">
              <div className="text-slate-500">LINKS AND REDIRECTS</div>
              <div className="flex gap-4 ">
                <div className="bg-slate-700 py-2 px-6 rounded-3xl cursor-pointer hover:bg-slate-500">
                  Hire now
                </div>
                <div className="bg-slate-700 py-2 px-6 rounded-3xl cursor-pointer hover:bg-slate-500">
                  Apply now
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[60%] pt-8 ">
            <div className="flex w-full flex-wrap justify-between">
              
              <div className="flex flex-col gap-6">
                <div className="text-slate-500">PLATFORM</div>
                <div className="flex flex-col gap-4 ">
                  <div className="">Find Work</div>
                  <div className="">Find Talent</div>
                  <div className="">Articles</div>
                  <div className="">About Us</div>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="text-slate-500">CATEGORIES</div>
                <div className="flex flex-col gap-4 ">
                  <div className="">Data Science</div>
                  <div className="">IT & Networking</div>
                  <div className="">Web & Mobile</div>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="text-slate-500">HELP</div>
                <div className="flex flex-col gap-4 ">
                  <div className="">Contact Us</div>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="text-slate-500">GET IN TOUCH @</div>
                <div className="flex flex-col gap-4 ">
                  <div className="">Instagram</div>
                  <div className="">LinkedIn</div>
                  <div className="">Twitter</div>
=                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
