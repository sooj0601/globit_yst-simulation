import React from "react";

type ModuleWrapProps = {
  className?: string;
  children?: React.ReactNode;
  title?: string | React.ReactNode;
  groupName?: string;
  desc?: string | React.ReactNode;
  colorName?:
    | "slate"
    | "violet"
    | "lime"
    | "yellow"
    | "cyan"
    | "indigo"
    | "teal"
    | "pink"
    | "brown"
    | "orange";
  state?: "plan" | "active";
};

export default function ModuleWrap({
                                     className = "",
                                     children,
                                     title,
                                     groupName,
                                     desc,
                                     colorName,
                                     state = "active",
                                   }: ModuleWrapProps) {
  let stateClass = "border-dotted";
  if (state === "plan") stateClass = "border-solid";

  const borderColorMap = {
    slate: "border-slate-500",
    violet: "border-violet-500",
    lime: "border-lime-500",
    yellow: "border-yellow-500",
    cyan: "border-cyan-500",
    indigo: "border-indigo-500",
    teal: "border-teal-500",
    pink: "border-pink-500",
    brown: "border-yellow-800",
    orange: "border-orange-500",
  };

  const bgColorMap = {
    slate: "bg-slate-50",
    violet: "bg-violet-50",
    lime: "bg-lime-50",
    yellow: "bg-yellow-50",
    cyan: "bg-cyan-50",
    indigo: "bg-indigo-50",
    teal: "bg-teal-50",
    pink: "bg-pink-50",
    brown: "bg-[#FDF6F4]",
    orange: "bg-orange-50",
  };

  const textColorMap = {
    slate: "text-slate-500",
    violet: "text-violet-500",
    lime: "text-lime-500",
    yellow: "text-yellow-500",
    cyan: "text-cyan-500",
    indigo: "text-indigo-500",
    teal: "text-teal-500",
    pink: "text-pink-500",
    brown: "text-yellow-800",
    orange: "text-orange-500",
  };

  const colorClasses = colorName
    ? `border-4 rounded-2xl p-4 ${stateClass} ${borderColorMap[colorName]} ${bgColorMap[colorName]}`
    : "";

  return (
    <section className={`w-full flex flex-col gap-4 ${colorClasses} ${className}`}>
      {(title || desc || groupName) && (
        <header className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="font-bold text-lg flex items-center gap-2">
            {groupName && colorName && (
              <span className={textColorMap[colorName]}>[{groupName}]</span>
            )}
            {title && <span>{title}</span>}
          </h3>
          {desc && <div className="text-sm text-slate-500">{desc}</div>}
        </header>
      )}
      <div>{children}</div>
    </section>
  );
}
