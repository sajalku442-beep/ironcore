export interface Trainer {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  photo: string;
  certifications: string[];
  bio: string;
  socials: {
    instagram: string;
    twitter: string;
    facebook: string;
  };
}

export const trainers: Trainer[] = [
  {
    id: "rahul-sharma",
    name: "Rahul Sharma",
    specialty: "Strength & Conditioning",
    experience: "10 Years",
    photo:
      "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&q=80&w=600&h=600",
    certifications: ["CSCS *D", "USA Powerlifting Coach", "NASM-PES"],
    bio: "Rahul Sharma specializes in elite strength development and powerlifting. He has trained competitive athletes and individuals looking to discover their true physical potential.",
    socials: {
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
    },
  },
  {
    id: "ananya-das",
    name: "Ananya Das",
    specialty: "Muscle Building & Body Sculpting",
    experience: "8 Years",
    photo:
      "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&q=80&w=600&h=600",
    certifications: [
      "ACE Personal Trainer",
      "IFBB Pro Competitor",
      "PN1 Nutritionist",
    ],
    bio: "Ananya Das combines hypertrophy-focused hypertrophy techniques with custom nutrition systems to build balanced, aesthetic, and functional upper and lower body compositions.",
    socials: {
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
    },
  },
  {
    id: "Aditya-mukherjee",
    name: "Aditya Mukherjee",
    specialty: "Athletic Conditioning & HIIT",
    experience: "6 Years",
    photo:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600&h=600",
    certifications: ["NASM-CPT", "FMS Level 2", "TRX Master Instructor"],
    bio: "Aditya Mukherjee's high-energy sessions emphasize cardiovascular capacity, dynamic mobility, and functional compound performance to make you feel like a pro athlete.",
    socials: {
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
    },
  },
  {
    id: "Riya-sen",
    name: "Riya Sen",
    specialty: "Women Fitness & Mobility",
    experience: "7 Years",
    photo:
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=600&h=600",
    certifications: [
      "NASM-CPT",
      "RYT-200 Yoga Specialist",
      "Pre/Postnatal Fitness Certificate",
    ],
    bio: "Riya Sen focuses on long-term sustainable wellness, pre/postnatal safety, core stability, and deep myofascial mobility, helping women reclaim their strength and vitality.",
    socials: {
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
    },
  },
  {
    id: "dr-Abhishek-Roy",
    name: "Dr. Abhishek Roy",
    specialty: "Nutrition Guidance & Lifestyle",
    experience: "12 Years",
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600&h=600",
    certifications: [
      "Ph.D. Nutritional Sciences",
      "ISSN Sports Nutritionist",
      "CSCS",
    ],
    bio: "Dr. Abhishek Roy bridges the gap between pure athletic training and evidence-based clinical nutrition, formulating optimal metabolic fuel profiles for every life stage.",
    socials: {
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
    },
  },
  {
    id: "Priya-Bose",
    name: "Priya Bose",
    specialty: "Weight Loss & Cardio",
    experience: "9 Years",
    photo:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=600&h=600",
    certifications: [
      "ACE-CPT",
      "Spinning Master Coach",
      "Precision Nutrition L1",
    ],
    bio: "Priya Bose specializes in high-efficiency weight reduction and metabolic conditioning. Her supportive coaching style helps build consistent lifetime fitness habits.",
    socials: {
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
    },
  },
];
