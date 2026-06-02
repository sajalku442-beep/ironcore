import React from "react";

interface SectionHeadingProps {
  id?: string;
  badge?: string;
  title: string;
  accentTitle?: string;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  id,
  badge,
  title,
  accentTitle,
  subtitle,
  centered = true,
  dark = false,
}) => {
  return (
    <div id={id} className={`mb-12 max-w-3xl ${centered ? "mx-auto text-center" : "text-left"}`}>
      {badge && (
        <span
          className={`inline-block px-3 py-1 text-xs font-bold rounded-full mb-3 tracking-wider uppercase ${
            dark ? "bg-amber-500/20 text-amber-400" : "bg-amber-100 text-amber-800"
          }`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`text-3xl md:text-5xl font-black tracking-tight leading-[1.1] ${
          dark ? "text-white" : "text-slate-900"
        }`}
      >
        {title}{" "}
        {accentTitle && (
          <span className="text-amber-500 block sm:inline">{accentTitle}</span>
        )}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base md:text-lg ${dark ? "text-slate-400" : "text-slate-500"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
