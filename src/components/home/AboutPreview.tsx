import React from "react";
import { ArrowRight, Trophy, ShieldCheck, HeartPulse } from "lucide-react";
import { AnimatedSection } from "../shared/AnimatedSection";
import { CTAButton } from "../shared/CTAButton";

export const AboutPreview: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <AnimatedSection className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Visual Collage Layout */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-custom">
              <img
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800"
                alt="Gym Coaching Session"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
            </div>

            {/* Float visual badge metric */}
            <div className="absolute -bottom-6 -right-2 md:right-6 bg-slate-900 text-white p-5 rounded-3xl shadow-2xl border border-slate-800 max-w-[200px] flex flex-col items-center text-center">
              <span className="text-4xl font-black text-amber-500">8+</span>
              <span className="text-xs uppercase tracking-widest text-slate-400 font-bold mt-1">Years of Local</span>
              <span className="text-xs font-bold text-slate-300">Transformation Achievement</span>
            </div>
          </div>

          {/* Right Block: Narrative text */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-full uppercase tracking-wider">
              About IronCore Gym
            </span>
            
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] uppercase">
              Transform Your Body.<br />
              <span className="text-amber-500">Transform Your Life.</span>
            </h2>

            <p className="text-slate-500 text-base md:text-lg leading-relaxed">
              Founded in 2018, IronCore Fitness was built to dismantle the traditional, crowded, commercial franchise gym experience. We believe that true fitness comes from standard-setting biomechanical instruction, elite accountability, and high-contrast supportive community spaces.
            </p>

            {/* Quick value checklist with icons */}
            <div className="space-y-4 py-2">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-amber-50 text-amber-500 shrink-0">
                  <Trophy size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Elite Standards</h4>
                  <p className="text-slate-500 text-sm">We maintain a clean, luxury strength floor designed to inspire heavy physical effort.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-amber-50 text-amber-500 shrink-0">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Professional Audited Program</h4>
                  <p className="text-slate-500 text-sm">Every coach holds accredited certification, providing correct posture adjustments.</p>
                </div>
              </div>
            </div>

            {/* Read Core Story Button */}
            <div className="pt-4">
              <CTAButton to="/about" variant="primary" className="gap-2">
                <span>Read Our Core Story</span>
                <ArrowRight size={16} className="text-amber-400" />
              </CTAButton>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
export default AboutPreview;
