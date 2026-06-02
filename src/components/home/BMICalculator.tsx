import React, { useState, useEffect } from "react";
import { Activity, Info } from "lucide-react";
import { SectionHeading } from "../shared/SectionHeading";
import { AnimatedSection } from "../shared/AnimatedSection";
import { Card } from "../shared/Card";

export const BMICalculator: React.FC = () => {
  const [height, setHeight] = useState<number>(180);
  const [weight, setWeight] = useState<number>(75);
  const [bmi, setBmi] = useState<number>(23.1);
  const [category, setCategory] = useState<string>("Normal Weight");
  const [categoryColor, setCategoryColor] = useState<string>("text-emerald-500 bg-emerald-500/10");

  const calculateBMI = () => {
    if (height > 0 && weight > 0) {
      const heightInMeters = height / 100;
      const bmiVal = weight / (heightInMeters * heightInMeters);
      const roundedBmi = Math.round(bmiVal * 10) / 10;
      setBmi(roundedBmi);

      // Determine Category
      if (roundedBmi < 18.5) {
        setCategory("Underweight");
        setCategoryColor("text-sky-500 bg-sky-500/10 border-sky-500/20");
      } else if (roundedBmi >= 18.5 && roundedBmi <= 24.9) {
        setCategory("Normal Weight");
        setCategoryColor("text-emerald-500 bg-emerald-500/10 border-emerald-500/20");
      } else if (roundedBmi >= 25 && roundedBmi <= 29.9) {
        setCategory("Overweight");
        setCategoryColor("text-amber-500 bg-amber-500/10 border-amber-500/20");
      } else {
        setCategory("Obese");
        setCategoryColor("text-red-500 bg-red-500/10 border-red-500/20");
      }
    }
  };

  useEffect(() => {
    calculateBMI();
  }, [height, weight]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Body Metrics"
          title="Instant BMI Analysis Check"
          subtitle="Body Mass Index is a standard proxy measurement of tissue mass. Enter your info below to instantly chart your baseline index category."
        />

        <AnimatedSection className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-slate-50 rounded-3xl p-6 md:p-10 border border-slate-200/50 shadow-custom">
            
            {/* Inputs Box */}
            <div className="md:col-span-7 space-y-6">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Activity className="text-amber-500" size={20} />
                <span>Calculate Your Metric</span>
              </h3>

              {/* Height Input (Manual type & Range Slider) */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="height-input" className="text-xs uppercase tracking-widest font-bold text-slate-500">
                    Height (cm)
                  </label>
                  <span className="text-sm font-bold text-slate-800 bg-slate-200/60 px-3 py-1 rounded-lg">
                    {height} cm
                  </span>
                </div>
                <input
                  id="height-input"
                  type="range"
                  min="120"
                  max="220"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
              </div>

              {/* Weight Input (Manual type & Range Slider) */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="weight-input" className="text-xs uppercase tracking-widest font-bold text-slate-500">
                    Weight (kg)
                  </label>
                  <span className="text-sm font-bold text-slate-800 bg-slate-200/60 px-3 py-1 rounded-lg">
                    {weight} kg
                  </span>
                </div>
                <input
                  id="weight-input"
                  type="range"
                  min="40"
                  max="150"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
              </div>

              {/* Standard Index Metrics Scale Chart */}
              <div className="grid grid-cols-4 gap-2 text-center text-[10px] font-bold text-slate-400 uppercase pt-2">
                <div className="p-2 border border-slate-200 rounded-xl bg-white">
                  <p className="text-sky-500">&lt; 18.5</p>
                  <p className="scale-[0.9] mt-0.5">Shredded</p>
                </div>
                <div className="p-2 border border-slate-200 rounded-xl bg-white">
                  <p className="text-emerald-500">18.5 - 24.9</p>
                  <p className="scale-[0.9] mt-0.5">Normal</p>
                </div>
                <div className="p-2 border border-slate-200 rounded-xl bg-white">
                  <p className="text-amber-500">25.0 - 29.9</p>
                  <p className="scale-[0.9] mt-0.5">Overweight</p>
                </div>
                <div className="p-2 border border-slate-200 rounded-xl bg-white">
                  <p className="text-red-500">30.0+</p>
                  <p className="scale-[0.9] mt-0.5">Obese</p>
                </div>
              </div>
            </div>

            {/* Display Results Banner */}
            <div className="md:col-span-5 bg-slate-900 text-white rounded-3xl p-6 flex flex-col justify-between min-h-[220px] shadow-xl border border-slate-800">
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">
                  Assessment Profile
                </span>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Based on standard clinical values, your resulting formula reads:
                </p>
              </div>

              {/* Big value counter */}
              <div className="py-4 flex justify-between items-end border-y border-white/5 my-4">
                <div className="space-y-1">
                  <span className="text-xs uppercase font-bold text-slate-400">BMI SCORE</span>
                  <p className="text-4xl font-black text-amber-500">{bmi}</p>
                </div>
                <div className="text-right">
                  <span className={`inline-block px-3 py-1 rounded-xl text-xs font-black uppercase border tracking-wider ${categoryColor}`}>
                    {category}
                  </span>
                </div>
              </div>

              {/* Mini advice advice */}
              <div className="flex items-start gap-2 text-xs text-slate-400">
                <Info size={14} className="text-amber-500 shrink-0 mt-0.5" />
                <p>
                  BMI is general and doesn't account for dynamic high muscle densities. Formulate body comps directly with our coaches.
                </p>
              </div>
            </div>

          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
export default BMICalculator;
