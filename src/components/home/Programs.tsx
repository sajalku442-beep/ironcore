import React from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { programs } from "../../data/programs";
import { SectionHeading } from "../shared/SectionHeading";
import { AnimatedSection } from "../shared/AnimatedSection";
import { Card } from "../shared/Card";
import { CTAButton } from "../shared/CTAButton";

export const Programs: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Featured Programs"
          title="Engineered Training Paths"
          subtitle="Explore highly targeted strength and biomechanical formulas designed to hit specific body composition goals."
        />

        {/* Programs Grid */}
        <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <Card
              key={program.id}
              padding="none"
              className="bg-white flex flex-col group overflow-hidden"
            >
              {/* Program Thumbnail */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-80" />
                <span className="absolute bottom-4 left-4 inline-block px-3 py-1 bg-amber-500 text-white text-xs font-bold rounded-lg uppercase tracking-wider">
                  Target Path
                </span>
              </div>

              {/* Program Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-black text-slate-900 group-hover:text-amber-500 transition-colors uppercase mb-3">
                    {program.title}
                  </h3>
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-6">
                    {program.description}
                  </p>

                  {/* Highlights/Benefits */}
                  <ul className="space-y-2 mb-6">
                    {program.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-slate-600 font-bold">
                        <CheckCircle2 size={16} className="text-amber-500 shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA Trigger */}
                <CTAButton
                  to="/contact"
                  variant="secondary"
                  className="w-full justify-between items-center group-hover:bg-slate-900 group-hover:text-white transition-all py-3"
                >
                  <span>Inquire Program</span>
                  <ArrowUpRight size={16} className="text-amber-500" />
                </CTAButton>
              </div>
            </Card>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
};
export default Programs;
