import React, { useState } from "react";
import { Send, CheckCircle2, MessageSquare } from "lucide-react";
import { SectionHeading } from "../shared/SectionHeading";
import { AnimatedSection } from "../shared/AnimatedSection";
import { Card } from "../shared/Card";

export const ContactCTA: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    goal: "Weight Loss",
    time: "Morning (6 AM - 12 PM)",
  });
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone) {
      alert("Please enter both your name and contact phone number.");
      return;
    }

    // Build the prefilled WhatsApp message
    const message = `🏋️ New Membership Enquiry

Name: ${formData.name}
Phone: ${formData.phone}
Goal: ${formData.goal}
Preferred Time: ${formData.time}

Interested in joining the gym.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappNum = "918013160400"; // Custom prefilled placeholder number
    const whatsappUrl = `https://wa.me/${whatsappNum}?text=${encodedMessage}`;

    // Open in a new tab safely
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setValidated(true);
  };

  return (
    <section className="py-20 bg-slate-900 text-white relative border-t border-slate-950 overflow-hidden">
      {/* Dynamic decoration lines */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Info Side description */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-block px-3 py-1 bg-amber-500/20 text-amber-400 text-xs font-bold rounded-full uppercase tracking-wider border border-amber-500/25">
              Secure Your Placement
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-[1.0]">
              Start Your Journey <br />
              <span className="text-amber-500">In 2 Minutes</span>
            </h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              Submit your fitness baseline targets using our rapid inquiry card.
              Your responses are instantly formatted and dispatched directly to
              our expert concierge team via secure WhatsApp routing!
            </p>

            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-3 text-slate-300 text-sm font-bold">
                <CheckCircle2 size={16} className="text-amber-500" />
                <span>Zero signup enrollment fees this month</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 text-sm font-bold">
                <CheckCircle2 size={16} className="text-amber-500" />
                <span>Immediate 7-Day absolute free pass card</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 text-sm font-bold">
                <CheckCircle2 size={16} className="text-amber-500" />
                <span>Includes free 1-on-1 performance mapping</span>
              </div>
            </div>
          </div>

          {/* Form Card Box */}
          <div className="lg:col-span-7">
            <Card
              padding="lg"
              bg="white"
              className="bg-white text-slate-950 rounded-3xl border border-slate-100 shadow-2xl relative"
              hoverable={false}
            >
              {validated && (
                <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-30 flex flex-col items-center justify-center p-8 text-center rounded-3xl">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 uppercase">
                    Enquiry Configured!
                  </h3>
                  <p className="text-slate-500 text-sm max-w-sm mt-3 leading-relaxed">
                    We have successfully formulated your submission and
                    redirected you to our customer team on WhatsApp. Please tap
                    Send to finalize!
                  </p>
                  <button
                    onClick={() => {
                      setValidated(false);
                      setFormData({
                        name: "",
                        phone: "",
                        goal: "Weight Loss",
                        time: "Morning (6 AM - 12 PM)",
                      });
                    }}
                    className="mt-6 text-xs text-slate-400 underline font-extrabold hover:text-slate-950"
                  >
                    Reset Enquiry Form
                  </button>
                </div>
              )}

              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <h4 className="font-extrabold text-slate-900 text-lg uppercase tracking-tight flex items-center gap-2">
                  <MessageSquare size={18} className="text-amber-500" />
                  <span>Interactive Pitch form</span>
                </h4>
                <span className="text-[10px] uppercase font-bold text-slate-400 bg-slate-50 px-3 py-1 rounded-lg">
                  Instant Response
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Input */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="fullname_input"
                    className="block text-[10px] uppercase font-black text-slate-500 tracking-wider"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullname_input"
                    type="text"
                    required
                    placeholder="e.g. Sajal Kundu"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-slate-50 border border-slate-200/80 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-900 placeholder-slate-400 font-medium"
                  />
                </div>

                {/* Phone Input */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="phone_input"
                    className="block text-[10px] uppercase font-black text-slate-500 tracking-wider"
                  >
                    WhatsApp Phone Number
                  </label>
                  <input
                    id="phone_input"
                    type="tel"
                    required
                    placeholder="e.g. +91 8013160400"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full bg-slate-50 border border-slate-200/80 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-900 placeholder-slate-400 font-medium"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Goal Dropdown */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="goal_select"
                      className="block text-[10px] uppercase font-black text-slate-500 tracking-wider"
                    >
                      Target Fitness Goal
                    </label>
                    <select
                      id="goal_select"
                      value={formData.goal}
                      onChange={(e) =>
                        setFormData({ ...formData, goal: e.target.value })
                      }
                      className="w-full bg-slate-50 border border-slate-200/80 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-900 font-medium cursor-pointer"
                    >
                      <option>Weight Loss</option>
                      <option>Muscle Building</option>
                      <option>Strength Training</option>
                      <option>Women Fitness</option>
                      <option>Personal Coaching</option>
                      <option>Athlete Conditioning</option>
                    </select>
                  </div>

                  {/* Preferred Time Dropdown */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="time_select"
                      className="block text-[10px] uppercase font-black text-slate-500 tracking-wider"
                    >
                      Preferred Workout Time
                    </label>
                    <select
                      id="time_select"
                      value={formData.time}
                      onChange={(e) =>
                        setFormData({ ...formData, time: e.target.value })
                      }
                      className="w-full bg-slate-50 border border-slate-200/80 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-900 font-medium cursor-pointer"
                    >
                      <option>Morning (6 AM - 12 PM)</option>
                      <option>Afternoon (12 PM - 5 PM)</option>
                      <option>Evening (5 PM - 10 PM)</option>
                      <option>Late Night (10 PM - 6 AM)</option>
                    </select>
                  </div>
                </div>

                {/* Launch Button */}
                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white font-black py-4 rounded-xl shadow-lg shadow-amber-500/20 uppercase text-xs md:text-sm tracking-widest flex items-center justify-center gap-2 transition-all duration-300 mt-2 cursor-pointer outline-none hover:-translate-y-0.5"
                >
                  <Send size={16} />
                  <span>Launch WhatsApp Submission</span>
                </button>

                <p className="text-[10px] text-center text-slate-400 font-medium pt-1">
                  We value your information security. Subissions immediately
                  launch native apps securely.
                </p>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactCTA;
