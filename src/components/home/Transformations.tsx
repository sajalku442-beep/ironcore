import React from "react";
import { Zap, Quote, Flame } from "lucide-react";
import { transformations } from "../../data/testimonials";
import { SectionHeading } from "../shared/SectionHeading";
import { AnimatedSection } from "../shared/AnimatedSection";
import { Card } from "../shared/Card";

export const Transformations: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 border-y border-slate-950 text-white relative overflow-hidden">
      
      {/* Background aesthetics */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] text-amber-500 font-extrabold text-[12vw] pointer-events-none select-none tracking-widest leading-none uppercase">
        Results
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Heading */}
        <SectionHeading
          badge="Success Stories"
          title="Proven Fitness Results"
          subtitle="Real local residents who committed to customized IronCore systems and claimed complete ownership of their physical outcomes."
          dark={true}
        />

        {/* Comparison Grid */}
        <AnimatedSection className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {transformations.map((trans) => (
            <Card
              key={trans.id}
              padding="none"
              bg="slate"
              className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden flex flex-col justify-between hover:border-amber-500/20 shadow-2xl"
            >
              {/* Image side content */}
              <div className="relative h-64 overflow-hidden bg-slate-950">
                <img
                  src={trans.afterImage}
                  alt={`${trans.name} Transformation`}
                  className="w-full h-full object-cover grayscale opacity-90 transition-all duration-500 hover:grayscale-0 hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                {/* Floating Achievement Badge */}
                <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500 text-white text-xs font-black rounded-lg uppercase tracking-wide">
                  <Zap size={12} />
                  <span>{trans.timeframe} Journey</span>
                </span>
              </div>

              {/* Transformation Metrics Details */}
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-wide text-white">{trans.name}</h3>
                  <p className="text-xs font-extrabold text-amber-400 mt-1 uppercase tracking-widest">{trans.achievement}</p>
                </div>

                {/* Compare Bar weights */}
                <div className="grid grid-cols-2 gap-4 py-4 px-5 bg-slate-900 rounded-2xl border border-slate-800 text-center">
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Starting Weight</p>
                    <p className="text-xl font-black text-slate-300 mt-1 line-through">{trans.beforeWeight}</p>
                  </div>
                  <div className="border-l border-slate-800 flex flex-col justify-center">
                    <p className="text-[10px] uppercase font-bold text-amber-500 tracking-wider">Current Weight</p>
                    <p className="text-2xl font-black text-white mt-1 ">{trans.afterWeight}</p>
                  </div>
                </div>

                {/* Individual Quote comment */}
                <div className="relative pt-2 pl-4 border-l-2 border-amber-500">
                  <p className="text-sm text-slate-300 italic leading-relaxed">
                    "{trans.quote}"
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </AnimatedSection>
        
      </div>
    </section>
  );
};
export default Transformations;
