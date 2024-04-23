import React from "react";

export function AppBadge({ icon, text, className = "", iconClass = "" }) {
  const badgeClassName = `py-5 px-4 rounded-3xl flex items-center ${className}`;

  return (
    <div className="flex items-center gap-4 my-8">
      <div className={badgeClassName}>
        <img src={icon} alt="" className={iconClass} />
      </div>
      {text && (
        <div className="italic hover:text-purple-700 cursor-pointer">
          {text}
        </div>
      )}
    </div>
  );
}

