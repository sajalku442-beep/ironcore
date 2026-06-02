import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Flame, Award } from "lucide-react";
import { trainers } from "../../data/trainers";
import { SectionHeading } from "../shared/SectionHeading";
import { AnimatedSection } from "../shared/AnimatedSection";
import { Card } from "../shared/Card";
import { CTAButton } from "../shared/CTAButton";

export const Trainers: React.FC = () => {
  // Show first 3 coaches as a curated preview
  const featuredTrainers = trainers.slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Title */}
        <SectionHeading
          badge="Expert Coaching"
          title="Engineered by Certified"
          accentTitle="Industry Leaders"
          subtitle="Our mentors aren't just rep counters. They are highly trained fitness technicians specialized in body alignment and injury resilience."
        />

        {/* Trainers Grid */}
        <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTrainers.map((coach) => (
            <Card
              key={coach.id}
              padding="none"
              className="bg-white group overflow-hidden"
            >
              {/* Photo Box */}
              <div className="relative aspect-[4/5] overflow-hidden bg-slate-900">
                <img
                  src={coach.photo}
                  alt={coach.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/10 to-transparent" />
                
                {/* Floating Experience Badge */}
                <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1 bg-slate-950/80 backdrop-blur-md text-amber-400 text-xs font-bold rounded-lg uppercase">
                  <Flame size={12} className="animate-pulse" />
                  <span>{coach.experience} Exp</span>
                </span>
                
                {/* Overlay details */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs font-black text-amber-500 uppercase tracking-widest">{coach.specialty}</p>
                  <h3 className="text-2xl font-black mt-1 leading-tight tracking-tight uppercase">{coach.name}</h3>
                </div>
              </div>

              {/* Bio & Details */}
              <div className="p-6">
                <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-6">
                  {coach.bio}
                </p>

                {/* Trainer Specialties */}
                <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Top Certification</span>
                    <span className="text-sm font-bold text-slate-800 mt-0.5">{coach.certifications[0]}</span>
                  </div>
                  <Link
                    to="/trainers"
                    className="text-amber-500 hover:text-amber-600 font-bold text-sm inline-flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>View Profile</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </AnimatedSection>

        {/* View All button */}
        <div className="text-center mt-12">
          <CTAButton to="/trainers" variant="outline" className="gap-2 px-8 py-4">
            <span>View All Expert Coaches</span>
            <ArrowRight size={16} className="text-amber-500" />
          </CTAButton>
        </div>

      </div>
    </section>
  );
};
export default Trainers;
