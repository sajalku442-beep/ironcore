import React from "react";
import { Award, Dumbbell, UserCheck, Flame, Heart, Calendar } from "lucide-react";
import { SectionHeading } from "../shared/SectionHeading";
import { AnimatedSection } from "../shared/AnimatedSection";
import { Card } from "../shared/Card";

export const WhyChooseUs: React.FC = () => {
  const cards = [
    {
      id: "why-1",
      icon: Award,
      title: "Certified Trainers",
      description: "Our coaching staff hold degrees in kinesiology and CSCS accreditations, delivering safe biomechanics.",
    },
    {
      id: "why-2",
      icon: Dumbbell,
      title: "Modern Equipment",
      description: "Train with world-class standard platforms, custom dumbbells, curved treadmills, and hammer strength racks.",
    },
    {
      id: "why-3",
      icon: UserCheck,
      title: "Personal Training",
      description: "Tailored 1-on-1 performance strategies that match your direct bio-assessments, recovery needs, and habits.",
    },
    {
      id: "why-4",
      icon: Heart,
      title: "Nutrition Guidance",
      description: "Custom macronutrient ratios, sports fuel recipes, and real nutrition counselor reviews included in plans.",
    },
    {
      id: "why-5",
      icon: Calendar,
      title: "Flexible Membership",
      description: "Choose customizable month-to-month paths, free digital pauses, and premium multi-user benefits.",
    },
    {
      id: "why-6",
      icon: Flame,
      title: "Group Classes",
      description: "Unlimited high-energy HIIT workouts, recovery Flow Yoga, and power circuit strength sessions daily.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Title */}
        <SectionHeading
          badge="Why IronCore"
          title="Engineered For Your"
          accentTitle="Ultimate Success"
          subtitle="We focus on elite coaching, premium environment quality, and scientific principles to make progress inevitable."
        />

        {/* Feature Grid */}
        <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <Card
                key={card.id}
                padding="lg"
                className="bg-white hover:border-amber-500/30 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-800 group-hover:bg-amber-100 group-hover:text-amber-500 transition-colors duration-300 mb-6">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-500 transition-colors">
                  {card.title}
                </h3>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                  {card.description}
                </p>
              </Card>
            );
          })}
        </AnimatedSection>
      </div>
    </section>
  );
};
export default WhyChooseUs;
