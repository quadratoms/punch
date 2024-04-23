export function RoundedBadge({ icon, text, className = "", iconClass = "" }) {
  const badgeClassName = `rounded-full bg-slate-300 h-20 w-20 flex justify-center items-center ${className}`;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className={badgeClassName}>
        <img src={icon} alt="" className={iconClass} />
      </div>
      {text}
    </div>
  );
}
