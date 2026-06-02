import React, { useEffect } from "react";
import { Compass, Target, Shield, HeartPulse, Award, Flame, Gem } from "lucide-react";
import { trainers } from "../data/trainers";
import { SectionHeading } from "../components/shared/SectionHeading";
import { AnimatedSection } from "../components/shared/AnimatedSection";
import { Card } from "../components/shared/Card";
import { CTAButton } from "../components/shared/CTAButton";

export const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const coreValues = [
    {
      id: "val-1",
      icon: Award,
      title: "Scientific Integrity",
      desc: "Every exercise and plan is supported by exercise science. No gimmicks, no trends that don't add real physiological value."
    },
    {
      id: "val-2",
      icon: Shield,
      title: "Elite Accountability",
      desc: "We stand beside you. Routine checks, biomechanical reviews, and nutritional profiles keep you standard-focused."
    },
    {
      id: "val-3",
      icon: Gem,
      title: "Pristine Luxury Space",
      desc: "Cleanliness is vital. Our equipment, steam lockers, recovery zones, and social shake bars are sanitized meticulously 24/7."
    },
    {
      id: "val-4",
      icon: HeartPulse,
      title: "Holistic Longevity",
      desc: "Strength isn't just about weight numbers. We optimize cardiovascular output, structural alignment, and mental focus."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. Hero Banner */}
      <div className="relative bg-slate-900 text-white py-24 md:py-32 overflow-hidden border-b border-slate-950">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1540496905036-5937c10647cc?auto=format&fit=crop&q=80&w=1600"
            alt="Gym facilities"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center space-y-4">
          <span className="inline-block px-3 py-1 bg-amber-500/20 text-amber-400 text-xs font-bold rounded-full uppercase tracking-wider border border-amber-500/20">
            Our Legacy
          </span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
            About <span className="text-amber-500">IronCore</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-300 text-sm md:text-lg">
            We are a highly focused strength and conditioning movement dedicated to creating premium gym spaces that change real lives.
          </p>
        </div>
      </div>

      {/* 2. Gym Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-full uppercase tracking-wider">
              The Genesis
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight uppercase leading-[1.1]">
              Dismantling Franchise <br />
              <span className="text-amber-500">Gym Crowds</span>
            </h2>
            <p className="text-slate-500 text-base md:text-lg leading-relaxed">
              In 2018, our founders walked into a massive, packed, national-franchise fitness outlet. They saw broken rowers, uneducated rep-counters posing as personal mentors, dusty locker stalls, and generic workout guidelines plastered globally.
            </p>
            <p className="text-slate-500 text-base md:text-lg leading-relaxed font-bold border-l-4 border-amber-500 pl-4 bg-slate-50 p-4 rounded-xl">
              "We realized fitness deserved supreme attention to details. It deserved pristine, heavy lifting gears, certified sports-biomechanics specialists, and complete client comfort."
            </p>
            <p className="text-slate-500 text-base md:text-lg leading-relaxed">
              Our first facility opened in New York with 4 custom platforms. Today, IronCore represents the most respected training hub in Metro City, housing hundreds of passionate lifters who want simple, premium execution.
            </p>
          </div>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=800"
              alt="Founders story gym"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission */}
          <Card padding="lg" bg="white" className="flex flex-col gap-6 relative overflow-hidden group">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-500 shrink-0">
              <Compass size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-black uppercase text-slate-900 tracking-tight mb-3">Our Core Mission</h3>
              <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                To empower the everyday human with scientific, standard-setting athletic physical routines, custom wellness blueprints, and supportive community values to achieve lifelong cellular-level physical transformation.
              </p>
            </div>
          </Card>

          {/* Vision */}
          <Card padding="lg" bg="slate" className="flex flex-col gap-6 relative overflow-hidden group">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
              <Target size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-black uppercase text-white tracking-tight mb-3">Our Future Vision</h3>
              <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                To build the world's most trusted offline destination where heavy iron compound lifting is safely demystified for beginners, combined with elite bio-recovery zones, creating standard lifestyle templates.
              </p>
            </div>
          </Card>

        </div>
      </section>

      {/* 4. Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <SectionHeading
            badge="The Code We Live"
            title="IronCore Foundations"
            subtitle="These standard operational values ensure every member who passes our glass lobby receives elite respect and care."
          />

          <AnimatedSection className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val) => {
              const Icon = val.icon;
              return (
                <div key={val.id} className="p-6 rounded-2xl border border-slate-100 hover:border-amber-500/30 transition-all shadow-sm flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="w-11 h-11 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500 shrink-0">
                      <Icon size={20} />
                    </div>
                    <h4 className="font-extrabold text-slate-900 leading-tight uppercase text-base">{val.title}</h4>
                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              );
            })}
          </AnimatedSection>
        </div>
      </section>

      {/* 5. Trainer Team Section Segment */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeading
            badge="Coaching Staff"
            title="Our Professional Instructors"
            subtitle="Meet the full elite certified team pushing boundaries inside the weight arenas every day."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((coach) => (
              <Card key={coach.id} padding="none" className="bg-white overflow-hidden flex flex-col">
                <div className="relative aspect-square overflow-hidden bg-slate-900">
                  <img
                    src={coach.photo}
                    alt={coach.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-xs font-bold text-amber-500 uppercase tracking-widest">{coach.specialty}</p>
                    <h4 className="text-xl font-black uppercase tracking-tight mt-0.5">{coach.name}</h4>
                  </div>
                </div>
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed">{coach.bio}</p>
                  <div className="border-t border-slate-100 pt-3 flex flex-wrap gap-1.5">
                    {coach.certifications.map((cert, idx) => (
                      <span key={idx} className="bg-slate-100 text-slate-750 text-[10px] font-bold px-2.5 py-1 rounded truncate">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Facilities Section with Visual Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <SectionHeading
            badge="Our Space"
            title="Standard Premium Luxury Facilities"
            subtitle="Every corner is meticulously designed with high ceilings, air filtration, and acoustic soundproofing panels."
          />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-6 space-y-6">
              <h3 className="text-2xl font-black uppercase text-slate-900 tracking-tight leading-tight">
                Not Just a Gym - It's <br />
                <span className="text-amber-500">Your Base Camp</span>
              </h3>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                We believe that premium environments foster premium effort. We spend thousands each month maintaining a pristine, state-of-the-art atmosphere.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-3 uppercase font-extrabold text-xs md:text-sm text-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  <span>24/7 Access Racks</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  <span>Private Towel Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  <span>Saunas & Steam Room</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  <span>Acoustic Sound Floors</span>
                </div>
              </div>
              
              <div className="pt-4">
                <CTAButton to="/contact" variant="amber" size="md">
                  Book A Facility Tour
                </CTAButton>
              </div>
            </div>

            <div className="md:col-span-6 grid grid-cols-2 gap-4">
              <div className="rounded-3xl overflow-hidden shadow-md aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400&h=400"
                  alt="Locker saunas"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-md aspect-square mt-4">
                <img
                  src="https://images.unsplash.com/photo-1553530666-ba01a703f47e?auto=format&fit=crop&q=80&w=400&h=400"
                  alt="Shake bar"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
export default About;
