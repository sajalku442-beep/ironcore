export interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  iconName: string; // Will match Lucide Icon mapping
  benefits: string[];
}

export const programs: Program[] = [
  {
    id: "weight-loss",
    title: "Weight Loss",
    description: "High-octane metabolic burn routines coupled with structured caloric guidance to shred fat while retaining strong muscle.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=400&h=300",
    iconName: "Flame",
    benefits: ["Boost resting metabolism", "Lean fat burning recipes", "Dynamic cardio intervals"]
  },
  {
    id: "muscle-building",
    title: "Muscle Building",
    description: "Hypertrophy-focused resistance methods, scientific volume tracking, and progressive overload to sculpt substantial strength.",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=400&h=300",
    iconName: "Flame", // Using visual/physical icons
    benefits: ["Targeted muscle hypertrophy", "Strength assessment scans", "Macronutrient fueling maps"]
  },
  {
    id: "strength-training",
    title: "Strength Training",
    description: "Built around classic compound movements - Bench, Squat, and Deadlift. Master technique and build power.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400&h=300",
    iconName: "Dumbbell",
    benefits: ["Build tendon & bone density", "Lifting tech masterclass", "Personal Record progressions"]
  },
  {
    id: "women-fitness",
    title: "Women Fitness",
    description: "Tailored programs targeting functional power, pelvic floor stability, post/prenatal routines, and muscle tone.",
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=400&h=300",
    iconName: "Heart",
    benefits: ["Hormonally balanced workouts", "Pelvic core strength builds", "Supportive team environment"]
  },
  {
    id: "personal-training",
    title: "Personal Training",
    description: "Private 1-on-1 coaching with a certified expert. Completely customized exercise biomechanics and custom accountability.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=400&h=300",
    iconName: "Award",
    benefits: ["1-on-1 form video reviews", "Custom lifestyle coaching", "Guaranteed metrics checks"]
  },
  {
    id: "athlete-conditioning",
    title: "Athlete Conditioning",
    description: "Advanced velocity, reactive power, three-dimensional speed, and injury-proofing designed for multi-sport athletes.",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=400&h=300",
    iconName: "Zap",
    benefits: ["Agility and vertical jumps", "Sports-specific fuel rules", "High-performance recovery"]
  }
];
