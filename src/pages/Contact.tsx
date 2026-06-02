import React, { useEffect, useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  CheckSquare,
  Send,
  MessageSquare,
} from "lucide-react";
import { SectionHeading } from "../components/shared/SectionHeading";
import { AnimatedSection } from "../components/shared/AnimatedSection";
import { Card } from "../components/shared/Card";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    goal: "Weight Loss",
    time: "Morning (6 AM - 12 PM)",
  });
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please enter both your name and WhatsApp phone number.");
      return;
    }

    // Prefilled template
    const message = `🏋️ New Membership Enquiry

Name: ${formData.name}
Phone: ${formData.phone}
Goal: ${formData.goal}
Preferred Time: ${formData.time}

Interested in joining the gym.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/918013160400?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setValidated(true);
  };

  const contactCards = [
    {
      id: "card-tel",
      icon: Phone,
      title: "Contact Number",
      value: "+91 8013160400",
      label: "Call or text Sales",
      action: "tel:+918013160400",
    },
    {
      id: "card-mail",
      icon: Mail,
      title: "Corporate Email",
      value: "contact@ironcoregym.com",
      label: "Support responding in 4h",
      action: "mailto:contact@ironcoregym.com",
    },
    {
      id: "card-hours",
      icon: Clock,
      title: "Working Hours",
      value: "Open 24 Hours / 7 Days",
      label: "Staffed: Mon-Fri 8am-8pm",
    },
    {
      id: "card-loc",
      icon: MapPin,
      title: "Lobby Address",
      value: "Park Street, Kolkata, West Bengal",
      label: "Metro City Financial Hub",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header Banner */}
      <div className="relative bg-slate-900 text-white py-24 md:py-32 overflow-hidden border-b border-slate-950">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&q=80&w=1600"
            alt="Contact us support"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center space-y-4">
          <span className="inline-block px-3 py-1 bg-amber-500/20 text-amber-400 text-xs font-bold rounded-full uppercase tracking-wider border border-amber-500/20">
            Get in touch
          </span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
            Contact <span className="text-amber-500">IronCore</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-300 text-sm md:text-lg">
            Connect with us today. Schedule customized tours, request standard
            pricing details, or lock in personal training slots.
          </p>
        </div>
      </div>

      {/* Main Layout containing columns */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeading
            badge="Communication Center"
            title="We Are Ready and Waiting"
            subtitle="Whether you are a newcomer starting out or an athlete seeking elite barbell platforms, our staff can set up your pass in minutes."
          />

          {/* Core Info Icons Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactCards.map((card) => {
              const Icon = card.icon;
              const content = (
                <Card
                  key={card.id}
                  padding="md"
                  className={`bg-slate-50 border border-slate-200/50 flex flex-col gap-4 text-left ${
                    card.action ? "hover:border-amber-500" : ""
                  }`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h4 className="text-sm uppercase font-black text-slate-400 tracking-wider">
                      {card.title}
                    </h4>
                    <p className="text-base md:text-lg font-extrabold text-slate-900 mt-1">
                      {card.value}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">{card.label}</p>
                  </div>
                </Card>
              );

              return card.action ? (
                <a
                  key={card.id}
                  href={card.action}
                  className="block cursor-pointer"
                >
                  {content}
                </a>
              ) : (
                content
              );
            })}
          </div>

          {/* Form and Map Grid Column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch pt-4">
            {/* Form column (Left) */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <Card
                padding="lg"
                className="bg-white border border-slate-150 rounded-3xl shadow-custom h-full flex flex-col justify-between relative"
                hoverable={false}
              >
                {validated && (
                  <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-30 flex flex-col items-center justify-center p-8 text-center rounded-3xl">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                      <CheckSquare size={32} />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 uppercase">
                      Enquiry Dispatched
                    </h3>
                    <p className="text-slate-500 text-xs md:text-sm max-w-sm mt-3 leading-relaxed">
                      We have successfully constructed your baseline choices and
                      redirected you safely to our support team on WhatsApp.
                      Please tap Send to finalize!
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
                      className="mt-6 text-xs text-slate-400 underline font-extrabold hover:text-slate-900"
                    >
                      Reset Form Options
                    </button>
                  </div>
                )}

                <div className="space-y-4 mb-6">
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tight flex items-center gap-2">
                    <MessageSquare size={20} className="text-amber-500" />
                    <span>Inquiry Routing Form</span>
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Once submitted, our servers prepare your direct inquiry
                    template. Tap Send inside your WhatsApp chat to complete.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1.5 animate-fade-in-up">
                    <label
                      htmlFor="contact_name"
                      className="block text-[10px] uppercase font-black text-slate-400 tracking-wider"
                    >
                      Your Full Name
                    </label>
                    <input
                      id="contact_name"
                      type="text"
                      required
                      placeholder="e.g. Sajal Kundu"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-900 font-medium"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact_phone"
                      className="block text-[10px] uppercase font-black text-slate-400 tracking-wider"
                    >
                      WhatsApp Phone Number
                    </label>
                    <input
                      id="contact_phone"
                      type="tel"
                      required
                      placeholder="e.g. +91 8013160400"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-900 font-medium"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact_goal"
                        className="block text-[10px] uppercase font-black text-slate-400 tracking-wider"
                      >
                        My Fitness Goal
                      </label>
                      <select
                        id="contact_goal"
                        value={formData.goal}
                        onChange={(e) =>
                          setFormData({ ...formData, goal: e.target.value })
                        }
                        className="w-full bg-slate-50 border border-slate-250 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-900 font-bold"
                      >
                        <option>Weight Loss</option>
                        <option>Muscle Building</option>
                        <option>Strength Training</option>
                        <option>Women Fitness</option>
                        <option>Personal Coaching</option>
                        <option>Athlete Conditioning</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact_time"
                        className="block text-[10px] uppercase font-black text-slate-400 tracking-wider"
                      >
                        Best Callback Time
                      </label>
                      <select
                        id="contact_time"
                        value={formData.time}
                        onChange={(e) =>
                          setFormData({ ...formData, time: e.target.value })
                        }
                        className="w-full bg-slate-50 border border-slate-250 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-900 font-bold"
                      >
                        <option>Morning (6 AM - 12 PM)</option>
                        <option>Afternoon (12 PM - 5 PM)</option>
                        <option>Evening (5 PM - 10 PM)</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-amber-500 hover:bg-amber-600 text-white font-black py-4 rounded-xl shadow-lg shadow-amber-500/10 uppercase text-xs md:text-sm tracking-widest flex items-center justify-center gap-2 transition-all duration-300 mt-2 cursor-pointer outline-none hover:-translate-y-0.5"
                  >
                    <Send size={16} />
                    <span>Send WhatsApp Message</span>
                  </button>
                </form>
              </Card>
            </div>

            {/* Embedded Google Map (Right) */}
            <div className="lg:col-span-6">
              <Card
                padding="none"
                className="bg-white border border-slate-150 rounded-3xl shadow-custom overflow-hidden h-full aspect-square lg:aspect-auto"
                hoverable={false}
              >
                <iframe
                  title="Gym Google Map Location"
                  // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.1197637309995!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1716942152865!5m2!1sen!2sus"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.667904726394!2d88.351357!3d22.5541098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0276e7479c7cad%3A0x2ce399323c653f92!2sPark%20St%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1780385670913!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;
