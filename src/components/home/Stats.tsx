import React from "react";
import { Users, Shield, Trophy, Star } from "lucide-react";
import { AnimatedSection } from "../shared/AnimatedSection";

export const Stats: React.FC = () => {
  const statsList = [
    {
      id: "stat-members",
      value: "500+",
      label: "Active Members",
      desc: "Committed everyday builders",
      icon: Users,
    },
    {
      id: "stat-trainers",
      value: "15+",
      label: "Expert Coaches",
      desc: "Certified sport specialists",
      icon: Shield,
    },
    {
      id: "stat-years",
      value: "8 Years",
      label: "Elite Experience",
      desc: "Shaping community careers",
      icon: Trophy,
    },
    {
      id: "stat-rating",
      value: "4.9/5",
      label: "Satisfaction Rating",
      desc: "Top ranked local gym service",
      icon: Star,
    },
  ];

  return (
    <section className="py-14 bg-slate-50 border-y border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <AnimatedSection className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {statsList.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="bg-white p-6 rounded-3xl border border-slate-100 shadow-custom flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0">
                  <Icon size={24} />
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-none mb-1">
                    {stat.value}
                  </p>
                  <p className="font-bold text-slate-800 text-sm md:text-base">
                    {stat.label}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    {stat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </AnimatedSection>
      </div>
    </section>
  );
};
export default Stats;
