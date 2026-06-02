import React, { useState } from "react";
import { Clock, User, Sparkles } from "lucide-react";
import { SectionHeading } from "../shared/SectionHeading";
import { AnimatedSection } from "../shared/AnimatedSection";
import { Card } from "../shared/Card";

interface ClassSession {
  time: string;
  className: string;
  trainer: string;
  category: "Strength" | "Cardio" | "Mobility" | "Athletic";
  room: string;
}

export const Schedule: React.FC = () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const [selectedDay, setSelectedDay] = useState<string>("Monday");

  const scheduleData: Record<string, ClassSession[]> = {
    Monday: [
      { time: "07:00 AM - 08:00 AM", className: "Cardio HIIT Shred", trainer: "Sophia Martinez", category: "Cardio", room: "Studio A" },
      { time: "09:30 AM - 10:30 AM", className: "Power Flow Yoga", trainer: "Sarah Jenkins", category: "Mobility", room: "Studio B" },
      { time: "05:30 PM - 06:30 PM", className: "Barbell Hypertrophy", trainer: "Elena Rostova", category: "Strength", room: "Strength Floor" },
      { time: "07:00 PM - 08:00 PM", className: "Combat Agility Fit", trainer: "David Kim", category: "Athletic", room: "Combat Box" }
    ],
    Tuesday: [
      { time: "07:05 AM - 08:00 AM", className: "Olympic Barbell Club", trainer: "Marcus Evans", category: "Strength", room: "Main Platform" },
      { time: "09:30 AM - 10:30 AM", className: "Posture Pilates Core", trainer: "Sarah Jenkins", category: "Mobility", room: "Studio B" },
      { time: "06:15 PM - 07:15 PM", className: "Athlete Agility Speed", trainer: "David Kim", category: "Athletic", room: "Combat Box" }
    ],
    Wednesday: [
      { time: "07:00 AM - 08:00 AM", className: "Cardio HIIT Shred", trainer: "Sophia Martinez", category: "Cardio", room: "Studio A" },
      { time: "09:30 AM - 10:30 AM", className: "Power Flow Yoga", trainer: "Sarah Jenkins", category: "Mobility", room: "Studio B" },
      { time: "05:30 PM - 06:30 PM", className: "Barbell Hypertrophy", trainer: "Elena Rostova", category: "Strength", room: "Strength Floor" }
    ],
    Thursday: [
      { time: "08:00 AM - 09:00 AM", className: "Functional Mobility Flow", trainer: "Sarah Jenkins", category: "Mobility", room: "Studio B" },
      { time: "09:30 AM - 10:30 AM", className: "Weight Shred Metabolic", trainer: "Sophia Martinez", category: "Cardio", room: "Studio A" },
      { time: "06:15 PM - 07:15 PM", className: "Olympic Lifting Technique", trainer: "Marcus Evans", category: "Strength", room: "Main Platform" }
    ],
    Friday: [
      { time: "07:00 AM - 08:00 AM", className: "Cardio HIIT Shred", trainer: "Sophia Martinez", category: "Cardio", room: "Studio A" },
      { time: "09:30 AM - 10:30 AM", className: "Power Flow Yoga", trainer: "Sarah Jenkins", category: "Mobility", room: "Studio B" },
      { time: "05:30 PM - 06:30 PM", className: "Powerlifting Heavy Pro", trainer: "David Kim", category: "Strength", room: "Strength Floor" }
    ],
    Saturday: [
      { time: "08:30 AM - 09:45 AM", className: "Weekend Warrior Blend", trainer: "David Kim", category: "Athletic", room: "Strength Floor" },
      { time: "10:00 AM - 11:30 AM", className: "Recovery Deep Stretch", trainer: "Sarah Jenkins", category: "Mobility", room: "Studio B" }
    ]
  };

  const currentClasses = scheduleData[selectedDay] || [];

  const categoryColor = (cat: string) => {
    switch (cat) {
      case "Strength": return "bg-red-50 text-red-600 border-red-200/50";
      case "Cardio": return "bg-amber-50 text-amber-600 border-amber-200/50";
      case "Mobility": return "bg-emerald-50 text-emerald-600 border-emerald-200/50";
      case "Athletic": return "bg-sky-50 text-sky-600 border-sky-200/50";
      default: return "bg-slate-50 text-slate-600 border-slate-200/50";
    }
  };

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Title */}
        <SectionHeading
          badge="Live Schedule"
          title="Weekly Group Training"
          accentTitle="Class Timings"
          subtitle="Explore our fully coached dynamic classes. Filter by day below and coordinate your work schedule seamlessly."
        />

        {/* Day Switcher Tab bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {days.map((day) => {
            const isActive = selectedDay === day;
            return (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-5 py-2.5 rounded-xl font-bold text-sm uppercase tracking-wide transition-all cursor-pointer outline-none ${
                  isActive
                    ? "bg-slate-900 text-white shadow-md"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300"
                }`}
              >
                {day}
              </button>
            );
          })}
        </div>

        {/* Responsive Grid list of classes */}
        <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentClasses.map((session, index) => (
            <Card
              key={index}
              padding="md"
              className="bg-white flex flex-col justify-between hover:border-amber-500/30 group"
            >
              {/* Category tag & room */}
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className={`px-2.5 py-0.5 rounded-lg text-xs font-black uppercase border ${categoryColor(session.category)}`}>
                  {session.category}
                </span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{session.room}</span>
              </div>

              {/* Title info */}
              <div className="space-y-2 mb-6">
                <h4 className="text-lg md:text-xl font-black text-slate-950 uppercase tracking-tight group-hover:text-amber-500 transition-colors">
                  {session.className}
                </h4>
                
                {/* Meta text details */}
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Clock size={14} className="text-slate-400 shrink-0" />
                  <span>{session.time}</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-slate-500 pt-1">
                  <User size={14} className="text-slate-400 shrink-0" />
                  <span className="font-medium text-slate-700">{session.trainer}</span>
                </div>
              </div>

              {/* Short action highlight */}
              <div className="border-t border-slate-100 pt-4 flex items-center justify-between text-xs font-bold text-slate-400">
                <span className="text-[10px] uppercase tracking-widest">Enrollment status</span>
                <span className="inline-flex items-center gap-1 text-emerald-500 font-extrabold uppercase">
                  <Sparkles size={12} className="animate-spin-slow" />
                  <span>Open Class</span>
                </span>
              </div>
            </Card>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
};
export default Schedule;
