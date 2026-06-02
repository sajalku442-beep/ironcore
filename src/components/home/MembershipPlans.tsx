import React from "react";
import { Check, Info } from "lucide-react";
import { plans } from "../../data/plans";
import { SectionHeading } from "../shared/SectionHeading";
import { AnimatedSection } from "../shared/AnimatedSection";
import { Card } from "../shared/Card";
import { CTAButton } from "../shared/CTAButton";

export const MembershipPlans: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <SectionHeading
          badge="Pricing & Memberships"
          title="Transparent Investment in"
          accentTitle="Your Real Health"
          subtitle="Simple, premium membership tiers. No surprise enrollment admin fees, no complicated cancellations."
        />

        {/* Pricing Layout Cards */}
        <AnimatedSection className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              padding="lg"
              bg={plan.popular ? "slate" : "white"}
              className={`flex flex-col justify-between relative transform transition-all duration-300 ${
                plan.popular
                  ? "lg:-translate-y-4 border-2 overflow-visible border-amber-500 ring-4 ring-amber-500/10 z-10"
                  : ""
              }`}
            >
              <div>
                {/* Popularity Badge */} 
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-amber-500 text-white text-xs font-black rounded-full uppercase tracking-widest shadow-lg shadow-amber-500/20">
                    Most Popular
                  </span>
                )}

                {/* Plan Metadata */}
                <div className="border-b border-slate-100 dark:border-slate-800 pb-6 mb-6 text-center">
                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-wide">
                    {plan.name}
                  </h3>
                  <p
                    className={`text-xs mt-2 font-medium ${plan.popular ? "text-slate-400" : "text-slate-400"}`}
                  >
                    {plan.description}
                  </p>

                  {/* Big investment price */}
                  <div className="mt-4 flex items-baseline justify-center">
                    <span
                      className={`text-5xl font-black tracking-tight ${plan.popular ? "text-white" : "text-slate-900"}`}
                    >
                      {plan.price}
                    </span>
                    <span
                      className={`text-sm font-bold ml-1 ${plan.popular ? "text-slate-400" : "text-slate-400"}`}
                    >
                      /{plan.period}
                    </span>
                  </div>
                </div>

                {/* Features Checklist */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm">
                      <div
                        className={`p-0.5 rounded-full shrink-0 ${
                          plan.popular
                            ? "bg-amber-500/20 text-amber-500"
                            : "bg-emerald-50 text-emerald-600"
                        }`}
                      >
                        <Check size={16} />
                      </div>
                      <span
                        className={
                          plan.popular
                            ? "text-slate-300 font-bold"
                            : "text-slate-600 font-medium"
                        }
                      >
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <CTAButton
                to="/contact"
                variant={plan.popular ? "amber" : "outline"}
                className="w-full text-center tracking-normal py-4"
              >
                {plan.ctaText}
              </CTAButton>
            </Card>
          ))}
        </AnimatedSection>

        {/* Short info note footer */}
        <div className="mt-12 flex items-center justify-center gap-2 text-xs md:text-sm text-slate-500 max-w-lg mx-auto text-center">
          <Info size={16} className="text-amber-500 shrink-0" />
          <p>
            All memberships include standard induction workout evaluation
            assessment of mobility. Cancel smoothly or request holds online.
          </p>
        </div>
      </div>
    </section>
  );
};
export default MembershipPlans;
