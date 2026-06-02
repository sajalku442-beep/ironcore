import React, { useEffect } from "react";
import {
  Mail,
  Clock,
  Trophy,
  Notebook as Award,
  MessageSquare,
} from "lucide-react";
import { trainers } from "../data/trainers";
import { SectionHeading } from "../components/shared/SectionHeading";
import { AnimatedSection } from "../components/shared/AnimatedSection";
import { Card } from "../components/shared/Card";

export const Trainers: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header Banner */}
      <div className="relative bg-slate-900 text-white py-24 md:py-32 overflow-hidden border-b border-slate-950">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1600"
            alt="Meet trainers group"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center space-y-4">
          <span className="inline-block px-3 py-1 bg-amber-500/20 text-amber-400 text-xs font-bold rounded-full uppercase tracking-wider border border-amber-500/20">
            Coaching Staff
          </span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
            Our Elite <span className="text-amber-500">Trainers</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-300 text-sm md:text-lg">
            Certified fitness technicians and sports science masterminds
            dedicated to perfecting your active daily routines.
          </p>
        </div>
      </div>

      {/* Grid of Coach Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeading
            badge="Expert Advisors"
            title="Scientific Power Coaches"
            subtitle="Meet our professional staff. Filter through their expertise and choose your training advisor today."
          />

          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {trainers.map((coach) => (
              <Card
                key={coach.id}
                padding="none"
                className="bg-white flex flex-col justify-between group overflow-hidden hover:shadow-2xl border border-slate-100"
              >
                {/* Photo Header */}
                <div className="relative aspect-[4/5] bg-slate-900 overflow-hidden">
                  <img
                    src={coach.photo}
                    alt={coach.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                  {/* Years Experience Floating Tag */}
                  <span className="absolute top-4 right-4 inline-block px-3 py-1 bg-amber-500 text-slate-950 text-xs font-black rounded-lg uppercase tracking-wide shadow-md">
                    {coach.experience} Experience
                  </span>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-amber-400 text-xs uppercase font-extrabold tracking-widest block">
                      {coach.specialty}
                    </span>
                    <h3 className="text-2xl font-black uppercase tracking-tight mt-1">
                      {coach.name}
                    </h3>
                  </div>
                </div>

                {/* Info and Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  {/* About bio and story */}
                  <div className="space-y-4">
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                      {coach.bio}
                    </p>

                    {/* Certifications Row badges */}
                    <div className="space-y-1.5 pt-2">
                      <p className="text-[10px] uppercase font-black text-slate-400 tracking-wider flex items-center gap-1">
                        <Award size={12} className="text-amber-500" />
                        <span>Professional Certifications</span>
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {coach.certifications.map((cert, idx) => (
                          <span
                            key={idx}
                            className="bg-slate-50 text-slate-700 text-[10px] font-bold px-3 py-1 rounded-lg border border-slate-200/50"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Reach out to trainer via prefilled whatsapp action */}
                  <div className="border-t border-slate-100 pt-4">
                    <a
                      href={`https://wa.me/918013160400?text=${encodeURIComponent(`🏋️ New Trainer Coaching Inquiry:\n\nHello, I would love to inquire about personal training packages with coach ${coach.name}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 bg-slate-900 text-white font-extrabold text-xs tracking-widest uppercase rounded-xl flex items-center justify-center gap-2 hover:bg-amber-500 hover:text-white hover:-translate-y-0.5 transition-all duration-350 cursor-pointer"
                    >
                      <MessageSquare size={14} />
                      <span>
                        Inquire 1-on-1 with {coach.name.split(" ")[0]} 
                      </span>
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};
export default Trainers;
