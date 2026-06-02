import React from "react";
import { Link } from "react-router-dom";

interface CTAButtonProps {
  id?: string;
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "danger" | "amber";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  id,
  children,
  to,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
}) => {
  const baseClasses = "inline-flex items-center justify-center font-bold transition-all duration-300 rounded-xl cursor-pointer hover:scale-[1.02] active:scale-[0.98] outline-none focus:ring-2 focus:ring-offset-2";
  
  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm md:text-base shadow-sm",
    lg: "px-8 py-4 text-base md:text-lg shadow-md",
  };

  const variantClasses = {
    primary: "bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-900",
    secondary: "bg-slate-100 text-slate-800 hover:bg-slate-200 focus:ring-slate-200",
    outline: "border-2 border-slate-200 bg-transparent text-slate-700 hover:bg-slate-50 focus:ring-slate-300",
    amber: "bg-amber-500 text-white hover:bg-amber-600 shadow-amber-500/10 hover:shadow-lg focus:ring-amber-500",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-600",
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (to) {
    return (
      <Link id={id} to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a id={id} href={href} target="_blank" rel="noopener noreferrer" className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button id={id} type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
};
