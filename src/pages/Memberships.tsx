import React, { useEffect } from "react";
import { Check, X, ShieldAlert, Sparkles, MessageSquare } from "lucide-react";
import { plans, comparisonTable } from "../data/plans";
import { SectionHeading } from "../components/shared/SectionHeading";
import { AnimatedSection } from "../components/shared/AnimatedSection";
import { Card } from "../components/shared/Card";
import { FAQ } from "../components/home/FAQ";
import { ContactCTA } from "../components/home/ContactCTA";

export const Memberships: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header Banner */}
      <div className="relative bg-slate-900 text-white py-24 md:py-32 overflow-hidden border-b border-slate-950">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=1600"
            alt="Gym memberships"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center space-y-4">
          <span className="inline-block px-3 py-1 bg-amber-500/20 text-amber-400 text-xs font-bold rounded-full uppercase tracking-wider border border-amber-500/20">
            Investment
          </span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
            Plans & <span className="text-amber-500">Memberships</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-300 text-sm md:text-lg">
            Invest in premium longevity. Clear contracts, custom benefits, and
            maximum facility standards.
          </p>
        </div>
      </div>

      {/* 1. Detailed Pricing Grid Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeading
            badge="Pricing Plans"
            title="Choose Your Training Tier"
            subtitle="Explore our custom tiered investment options to align perfectly with your individual discipline targets."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-6">
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
                  {plan.popular && (
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-amber-500 text-white text-xs font-black rounded-full uppercase tracking-widest shadow-lg shadow-amber-500/20">
                      Most Popular
                    </span>
                  )}

                  <div className="border-b border-slate-100 dark:border-slate-800 pb-6 mb-6 text-center">
                    <h3 className="text-xl md:text-2xl font-black uppercase tracking-wide">
                      {plan.name}
                    </h3>
                    <p className="text-xs mt-2 font-medium text-slate-400 max-w-xs mx-auto">
                      {plan.description}
                    </p>

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

                <a
                  href={`https://wa.me/918013160400?text=${encodeURIComponent(`🏋️ New Membership Inquiry: Interested in ${plan.name} Plan.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 text-center text-xs md:text-sm font-bold rounded-xl uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                    plan.popular
                      ? "bg-amber-500 hover:bg-amber-600 text-white shadow-lg shadow-amber-500/15"
                      : "border-2 border-slate-250 hover:bg-slate-50 text-slate-700"
                  }`}
                >
                  <MessageSquare size={16} />
                  <span>Choose {plan.name} Tier</span>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Detailed Plan Comparison Table */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeading
            badge="Full Verification"
            title="Premium Feature Comparison"
            subtitle="Review side-by-side feature structures across our Basic, Standard, and Premium membership packages."
          />

          <AnimatedSection className="overflow-x-auto bg-white rounded-3xl shadow-custom border border-slate-200/50">
            <table className="w-full text-left border-collapse min-w-[650px]">
              <thead>
                <tr className="bg-slate-900 text-white font-black uppercase text-xs tracking-wider">
                  <th className="p-5 font-bold">Standard Feature Modules</th>
                  <th className="p-5 text-center">Basic Tier</th>
                  <th className="p-5 text-center bg-amber-500 text-slate-950">
                    Standard Tier
                  </th>
                  <th className="p-5 text-center">Premium Tier</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm md:text-base font-medium text-slate-705">
                {comparisonTable.features.map((row, index) => (
                  <tr
                    key={index}
                    className="hover:bg-slate-50 transition-colors"
                  >
                    <td className="p-5 text-slate-900 font-bold">{row.name}</td>

                    {/* Basic column values */}
                    <td className="p-5 text-center">
                      {typeof row.basic === "boolean" ? (
                        row.basic ? (
                          <Check
                            size={20}
                            className="text-emerald-500 mx-auto"
                          />
                        ) : (
                          <X size={20} className="text-slate-350 mx-auto" />
                        )
                      ) : (
                        <span className="text-xs font-bold bg-slate-100 text-slate-600 px-3 py-1 rounded-lg">
                          {row.basic}
                        </span>
                      )}
                    </td>

                    {/* Standard col */}
                    <td className="p-5 text-center bg-amber-50/20">
                      {typeof row.standard === "boolean" ? (
                        row.standard ? (
                          <Check
                            size={20}
                            className="text-amber-500 mx-auto font-black"
                          />
                        ) : (
                          <X size={20} className="text-slate-350 mx-auto" />
                        )
                      ) : (
                        <span className="text-xs font-bold bg-amber-100 text-amber-700 px-3 py-1 rounded-lg">
                          {row.standard}
                        </span>
                      )}
                    </td>

                    {/* Premium col */}
                    <td className="p-5 text-center">
                      {typeof row.premium === "boolean" ? (
                        row.premium ? (
                          <Check
                            size={20}
                            className="text-emerald-500 mx-auto"
                          />
                        ) : (
                          <X size={20} className="text-slate-350 mx-auto" />
                        )
                      ) : (
                        <span className="text-xs font-bold bg-slate-100 text-slate-600 px-3 py-1 rounded-lg">
                          {row.premium}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </AnimatedSection>
        </div>
      </section>

      {/* 3. FAQ Section Block */}
      <FAQ />

      {/* 4. Complete Action CTA form block with WhatsApp hook */}
      <ContactCTA />
    </div>
  );
};
export default Memberships;
