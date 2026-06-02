import React from "react";
import { testimonials } from "../../data/testimonials";
import { SectionHeading } from "../shared/SectionHeading";
import { AnimatedSection } from "../shared/AnimatedSection";
import { Carousel } from "../shared/Carousel";

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Title */}
        <SectionHeading
          badge="Member Feedback"
          title="Community Voice &"
          accentTitle="Real Experiences"
          subtitle="Don't just take our word for it. Hear directly from working professionals, parents, and athletes inside the IronCore community."
        />

        {/* Carousel Container */}
        <AnimatedSection>
          <Carousel items={testimonials} autoPlayInterval={7000} />
        </AnimatedSection>

      </div>
    </section>
  );
};
export default Testimonials;
