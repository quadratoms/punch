import React from "react";

export function RateBadge({ icon, text }) {
  return (
    <div className="flex gap-2">
      <div>
        <img src={icon} alt="" />
      </div>
      <div>{text}</div>
    </div>
  );
}
