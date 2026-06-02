export interface GalleryItem {
  id: string;
  title: string;
  category: "Facility" | "Classes" | "Equipment" | "Recovery";
  imageUrl: string;
  description: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Premium Strength Deck",
    category: "Facility",
    imageUrl: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=800&h=600",
    description: "Fully equipped power racks, heavy-duty platforms, and competition-grade plates."
  },
  {
    id: "gal-2",
    title: "Eco Cardio Arena",
    category: "Equipment",
    imageUrl: "https://images.unsplash.com/photo-1540496905036-5937c10647cc?auto=format&fit=crop&q=80&w=800&h=600",
    description: "Equipped with custom curved treadmills, magnetic rowers, and air bikes."
  },
  {
    id: "gal-3",
    title: "Dynamic Flow Studio",
    category: "Classes",
    imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800&h=600",
    description: "Spacious studio with soft underfloor heating for Yoga, Pilates, and mobility work."
  },
  {
    id: "gal-4",
    title: "Advanced Recovery Zone",
    category: "Recovery",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800&h=600",
    description: "Finnish infrared sauna, cedarwood cold plunge, and hydrotherapy chambers."
  },
  {
    id: "gal-5",
    title: "Precision Dumbbell Zone",
    category: "Equipment",
    imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800&h=600",
    description: "Premium knurled metal dumbbells ranging from 2.5 lbs to monumental 150 lbs."
  },
  {
    id: "gal-6",
    title: "Olympic Lifting Platform",
    category: "Facility",
    imageUrl: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=800&h=600",
    description: "Vibration-dampening bamboo platforms for clean Olympic lifting exercises."
  },
  {
    id: "gal-7",
    title: "IronCore Organic Shake Bar",
    category: "Recovery",
    imageUrl: "https://images.unsplash.com/photo-1553530666-ba01a703f47e?auto=format&fit=crop&q=80&w=800&h=600",
    description: "Custom post-workout nutrient formulations, whey protein, and cold-pressed juices."
  },
  {
    id: "gal-8",
    title: "HIIT & Combat Arena",
    category: "Classes",
    imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800&h=600",
    description: "Heavy bags, battle ropes, slam balls, and flexible agility running lanes."
  }
];
