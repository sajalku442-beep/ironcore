import React from "react";
import { Link } from "react-router-dom";
import { CTAButton } from "../shared/CTAButton";

export const Hero: React.FC = () => {
  return (
    <section className="relative h-[calc(100vh-80px)] min-h-[600px] flex items-center justify-center bg-slate-900 overflow-hidden">
      {/* Immersive Gym Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=1920"
          alt="Premium Gym Interior"
          className="w-full h-full object-cover opacity-35 object-center scale-105 animate-subtle-zoom"
          loading="eager"
        />
        {/* Graded dark vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-900/50" />
      </div>

      {/* Decorative text block background */}
      <div className="absolute bottom-10 left-10 opacity-[0.03] text-white font-black text-8xl md:text-9xl pointer-events-none select-none tracking-widest hidden lg:block uppercase font-sans">
        Vitality
      </div>

      {/* Hero content container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center text-white pt-2">
        {/* Slogan badge badge */}
        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-amber-500/20 text-amber-400 text-xs font-bold rounded-full mb-6 tracking-wide uppercase border border-amber-500/20">
          <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-ping" />
          Elite Fitness Experience
        </span>

        {/* Hero Headings */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-[1.0] mb-8 uppercase">
          Transform Your Body.
          <br />
          <span className="text-amber-500">Transform Your Life.</span>
        </h1>

        <p className="max-w-2xl mx-auto text-base md:text-xl text-slate-300 leading-relaxed font-medium mb-12">
          Unlock your premium athletic potential with certified world-class
          coaches, dynamic personalized programming, and state-of-the-art
          recovery zones. Get started with standard-setting facility
          memberships.
        </p>

        {/* CTA Actions */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <CTAButton
            to="/memberships"
            variant="amber"
            size="lg"
            className="w-full sm:w-auto"
          >
            Join Now
          </CTAButton>
          <CTAButton
            to="/contact"
            variant="outline"
            size="lg"
            className="w-full sm:w-auto text-white border-white/30 hover:bg-white/10"
          >
            Free 7-Day Trial
          </CTAButton>
        </div>

        {/* Bottom Banner Stats Preview */}
        <div className="mt-16 hidden md:flex items-center justify-center gap-16 border-t border-white/10 pt-8 max-w-2xl mx-auto">
          <div className="text-center">
            <p className="text-3xl font-black text-white">500+</p>
            <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
              Active Members
            </p>
          </div>
          <div className="h-8 w-px bg-white/10" />
          <div className="text-center">
            <p className="text-3xl font-black text-white">15+</p>
            <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
              Certified Coaches
            </p>
          </div>
          <div className="h-8 w-px bg-white/10" />
          <div className="text-center">
            <p className="text-3xl font-black text-white">8 Years</p>
            <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
              Experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
