import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-col sm:flex-row items-center text-sm justify-between px-8 py-4 bg-[#292B34]">
      <div className="text-white">All rights reserved  by Zwilt</div>
      <div className="flex  gap-4 text-gray-300">
        <div>Privacy Policy</div>
        <div>Terms and Conditions</div>
      </div>
    </div>
  );
}
