import React from "react";
import { Accordion } from "../shared/Accordion";
import { SectionHeading } from "../shared/SectionHeading";
import { AnimatedSection } from "../shared/AnimatedSection";

export const FAQ: React.FC = () => {
  const faqItems = [
    {
      question: "I am a complete beginner. Can I join IronCore?",
      answer: "Absolutely! Over 40% of our active community joined as complete newcomers. Every membership includes a complimentary 60-minute biomechanical induction session where an expert coach takes you around the lift zones, audits your range of motion, and demonstrates correct alignment techniques."
    },
    {
      question: "Do you provide personal trainers with memberships?",
      answer: "Yes! High-quality coach accessibility is our core focus. While standard plans include complimentary scheduled program reviews, we offer expert 1-on-1 personal coaching as custom add-ons or fully integrated inside our elite Premium Plan tier."
    },
    {
      question: "Do women have separate, comfortable training options?",
      answer: "Our open floors are designed to be extremely secure, well-lit, professional, and supportive for everyone. We host dedicated women-only mobility workshops, pre/postnatal core stability clinics, and introductory compound barbell classes led by certified female strength specialists like Sarah Jenkins."
    },
    {
      question: "What are the exact gym working timings?",
      answer: "Our physical facilities are open for members 24 hours a day, 7 days a week, 365 days a year via secure RFID smartphone or keycard entry. Standard corporate front desk customer service and coaching staff hours are Monday-Friday from 8:00 AM to 8:00 PM."
    },
    {
      question: "How do cancellations or membership holds work?",
      answer: "We strive to remain transparent and customer-centric. If you need to pause your plan for work travel, health issues, or family vacation, you can request a hold online up to 3 times per calendar year. Cancellations can be smoothly logged in writing with a simple 30-day notice."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Title */}
        <SectionHeading
          badge="Frequently Asked Answers"
          title="Resolve Your Questions"
          subtitle="Everything you need to know about the onboarding process, locker room facilities, membership holds, and personal training options."
        />

        {/* Custom Accordion FAQ */}
        <AnimatedSection>
          <Accordion items={faqItems} />
        </AnimatedSection>

      </div>
    </section>
  );
};
export default FAQ;
