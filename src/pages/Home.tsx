import React, { useEffect } from "react";
import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Programs from "../components/home/Programs";
import AboutPreview from "../components/home/AboutPreview";
import MembershipPlans from "../components/home/MembershipPlans";
import Trainers from "../components/home/Trainers";
import Transformations from "../components/home/Transformations";
import BMICalculator from "../components/home/BMICalculator";
import Schedule from "../components/home/Schedule";
import Testimonials from "../components/home/Testimonials";
import GalleryPreview from "../components/home/GalleryPreview";
import FAQ from "../components/home/FAQ";
import ContactCTA from "../components/home/ContactCTA";

export const Home: React.FC = () => {
  // Always scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="bg-white">
      {/* A. Hero Section */}
      <Hero />

      {/* B. Stats Section */}
      <Stats />

      {/* C. Why Choose Us */}
      <WhyChooseUs />

      {/* D. Programs Section */}
      <Programs />

      {/* E. About Preview */}
      <AboutPreview />

      {/* F. Membership Plans */}
      <MembershipPlans />

      {/* G. Trainer Showcase */}
      <Trainers />

      {/* H. Transformation Stories */}
      <Transformations />

      {/* I. BMI Calculator */}
      <BMICalculator />

      {/* J. Class Schedule */}
      <Schedule />

      {/* K. Testimonials */}
      <Testimonials />

      {/* L. Gallery Preview */}
      <GalleryPreview />

      {/* M. FAQ Section */}
      <FAQ />

      {/* N. Contact CTA Section */}
      <ContactCTA />
    </div>
  );
};
export default Home;
