export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  quote: string;
  image: string;
  transformationId?: string;
}

export interface Transformation {
  id: string;
  name: string;
  beforeWeight: string;
  afterWeight: string;
  timeframe: string;
  achievement: string;
  beforeImage: string;
  afterImage: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Megha Ghosh",
    role: "Standard Member (Lost 25 lbs)",
    rating: 5,
    quote:
      "The culture at IronCore is unlike any other gym. The trainers actually care about your progress and correct your form. The group HIIT classes completely turned my habits around!",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    id: "2",
    name: "Arnab Dutta",
    role: "Premium Member (Built 15 lbs Muscle)",
    rating: 5,
    quote:
      "My 1-on-1 sessions with Marcus built standard barbell squat and high-level deadlift skills that I never thought I could do. Incredible, professional coaching that works.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    id: "3",
    name: "Maya Patel",
    role: "Basic Member (Improved Mobility)",
    rating: 5,
    quote:
      "I joined for the recovery amenities and yoga, and I ended up getting so much more. The community is supportive, the atmosphere is premium and super clean.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    id: "4",
    name: "Tariq Mahmood",
    role: "Athlete Member (Conditioned Post-Injury)", 
    rating: 5,
    quote:
      "Highly structured conditioning with athletic trainers that helped me return to competitive soccer faster and stronger than ever. Can't recommend them enough.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200",
  },
];

export const transformations: Transformation[] = [
  {
    id: "trans-1",
    name: "Alex Rivera",
    beforeWeight: "215 lbs",
    afterWeight: "190 lbs",
    timeframe: "4 Months",
    achievement: "Fat Loss & Aerobic Conditioning",
    beforeImage:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=300&h=300",
    afterImage:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=300&h=300", // Let's use two slightly different premium action images or same action image indicating success
    quote:
      "Cutting 25 lbs changed everything. My energy, endurance, and everyday outlook are totally refreshed.",
  },
  {
    id: "trans-2",
    name: "Liam O'Connor",
    beforeWeight: "160 lbs",
    afterWeight: "175 lbs",
    timeframe: "6 Months",
    achievement: "Lean Muscle Hypertrophy",
    beforeImage:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=300&h=300",
    afterImage:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=300&h=300",
    quote:
      "With custom routines and calorie tracking, I packed on serious, functional lean mass without the bloat.",
  },
  {
    id: "trans-3",
    name: "Maya Patel",
    beforeWeight: "145 lbs",
    afterWeight: "135 lbs",
    timeframe: "3 Months",
    achievement: "Rebuilt Strength & Core Flexibility",
    beforeImage:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=300&h=300",
    afterImage:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=300&h=300",
    quote:
      "My core stability and chronic back pain are completely gone. I feel strong, solid, and mobile.",
  },
];
