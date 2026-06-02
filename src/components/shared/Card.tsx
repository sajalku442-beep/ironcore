import React from "react";

interface CardProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
  bg?: "white" | "slate" | "gray";
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  id,
  children,
  className = "",
  hoverable = true,
  padding = "md",
  bg = "white",
  onClick,
}) => {
  const paddingClasses = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const bgClasses = {
    white: "bg-white border border-slate-100",
    slate: "bg-slate-900 border border-slate-800 text-white",
    gray: "bg-slate-50 border border-slate-200/50",
  };

  const interactiveClasses = hoverable
    ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-amber-500/30"
    : "shadow-sm";

  return (
    <div
      id={id}
      onClick={onClick}
      className={`rounded-3xl shadow-custom overflow-hidden ${bgClasses[bg]} ${paddingClasses[padding]} ${interactiveClasses} ${
        onClick ? "cursor-pointer" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};
