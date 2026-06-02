export interface Plan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  accent: boolean;
  ctaText: string;
}

export const plans: Plan[] = [
  {
    id: "basic",
    name: "Basic",
    price: "₹499",
    period: "month",
    description:
      "Standard access, perfect for self-motivated individuals looking to start their routine.",
    features: [
      "Access to standard strength gym area",
      "Full locker room & hot shower access",
      "Free high-speed connection Wi-Fi",
      "Full 24/7 keycard entry permission",
      "1 free consultation session with trainer",
    ],
    popular: false,
    accent: false,
    ctaText: "Get Started Now",
  },
  {
    id: "standard",
    name: "Standard",
    price: "₹799",
    period: "month",
    description:
      "Our most popular selection. Adds premium classes, group training options and extra support.",
    features: [
      "All features of the Basic Plan",
      "Unlimited access to group classes (Yoga, HIIT, Cardio)",
      "Dedicated nutrition profile builder with nutritionist",
      "2 dynamic training plan check-ins per month",
      "10% discount at the internal IronCore Shake Bar",
    ],
    popular: true,
    accent: true,
    ctaText: "Join Most Popular",
  },
  {
    id: "premium",
    name: "Premium",
    price: "₹999",
    period: "month",
    description:
      "The complete premium experience. Full coach support, custom programming, and ultimate recovery access.",
    features: [
      "All features of the Standard Plan",
      "Access to Recovery Zone (Sauna, Steam Room, Cold Plunge)",
      "Weekly 1-on-1 personal coaching session with specialist",
      "Fully customized training routine and bi-weekly nutrition adjustment",
      "Complementary pre-workout shaker bottle & gym towel service",
      "2 VIP guest fitness day-passes per month",
    ],
    popular: false,
    accent: false,
    ctaText: "Go Elite Premium",
  },
];

export const comparisonTable = {
  features: [
    {
      name: "Group Classes Access",
      basic: false,
      standard: true,
      premium: true,
    },
    {
      name: "Locker Rooms & Showers",
      basic: true,
      standard: true,
      premium: true,
    },
    {
      name: "Keycard 24/7 Support",
      basic: true,
      standard: true,
      premium: true,
    },
    {
      name: "Custom Nutrition Program",
      basic: false,
      standard: true,
      premium: true,
    },
    {
      name: "Hydro-Massage Bed Slots",
      basic: false,
      standard: false,
      premium: true,
    },
    {
      name: "Recovery Lounge & Sauna",
      basic: false,
      standard: "Add-On",
      premium: true,
    },
    {
      name: "Complementary Towel Service",
      basic: false,
      standard: false,
      premium: true,
    },
    {
      name: "Personal Trainer Check-ins",
      basic: "1 initial",
      standard: "2 monthly",
      premium: "Weekly 1-on-1",
    },
  ],
};
