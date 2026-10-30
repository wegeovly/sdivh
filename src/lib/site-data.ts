import trip2 from "@/assets/trip-2.jpg";
import trip3 from "@/assets/trip-3.jpg";
import picnicKailana from "@/assets/picnic-kailana.jpg";
import picnicMehrangarh from "@/assets/picnic-mehrangarh.jpg";
import picnicMandore from "@/assets/picnic-mandore.jpg";
import picnicRaoJodha from "@/assets/picnic-raojodha.jpg";

export type Trip = {
  id: string;
  title: string;
  destination: string;
  ageGroup: string;
  duration: "1 day" | "2 days" | "4days";
  price: number;
  seats: number;
  image: string;
  pillars: ("Education" | "Adventure" | "Spirituality")[];
  description: string;
  category: "picnic" | "residential";
};

export const trips: Trip[] = [
  {
    id: "kailana-machia-picnic",
    category: "picnic",
    title: "Kailana Lake & Machia Park Picnic",
    destination: "Kailana Lake and Machia Biological Park, Jodhpur (8–10 km)",
    ageGroup: "Ages 4–12",
    duration: "1 day",
    price: 1400,
    seats: 30,
    image: picnicKailana,
    pillars: ["Education", "Adventure"],
    description:
      "Open space, lakeside lawns, a zoo and a safari area. Good for younger kids.",
  },
  {
    id: "mehrangarh-fort-picnic",
    category: "picnic",
    title: "Mehrangarh Fort Heritage Picnic",
    destination: "Mehrangarh Fort, Jodhpur (within the city)",
    ageGroup: "Ages 4–12",
    duration: "1 day",
    price: 1200,
    seats: 28,
    image: picnicMehrangarh,
    pillars: ["Education", "Spirituality", "Adventure"],
    description:
      "A mighty sandstone fort above the blue city, with ramparts, courtyards and museums. It suits heritage-based picnics.",
  },
  {
    id: "mandore-picnic",
    category: "picnic",
    title: "Mandore Gardens History Picnic",
    destination: "Mandore Gardens, Jodhpur (9 km)",
    ageGroup: "Ages 4–12",
    duration: "1 day",
    price: 1500,
    seats: 32,
    image: picnicMandore,
    pillars: ["Education", "Spirituality"],
    description:
      "A historic garden with temples, cenotaphs and a small museum. It suits history-based picnics.",
  },
  {
    id: "rao-jodha-picnic",
    category: "picnic",
    title: "Rao Jodha Desert Rock Park Trail",
    destination: "Rao Jodha Desert Rock Park, next to Mehrangarh Fort",
    ageGroup: "Ages 4–12",
    duration: "1 day",
    price: 1600,
    seats: 26,
    image: picnicRaoJodha,
    pillars: ["Education", "Adventure"],
    description:
      "A nature trail through the desert ecosystem. Good for science and eco-education.",
  },
  {
    id: "sunrise-summit",
    category: "residential",
    title: "Sunrise Summit Trek",
    destination: "Mount abu",
    ageGroup: "Ages 6–12",
    duration: "2 days",
    price: 5800,
    seats: 32,
    image: trip2,
    pillars: ["Adventure", "Education"],
    description:
      "A two-day camp with a gentle dawn trek, journaling at the summit, and a campfire reflection circle.",
  },
  {
    id: "ashram-mindfulness",
    category: "residential",
    title: "Ashram Mindfulness Retreat",
    destination: "Rishikesh",
    ageGroup: "Ages 6–12",
    duration: "4days",
    price: 6200,
    seats: 24,
    image: trip3,
    pillars: ["Spirituality", "Education"],
    description:
      "Yoga, breathing practice, seva activities, and Ganga aarti — designed for calm, age-appropriate immersion.",
  },
];

// Picnic / Day Camp shows only the short day excursions. The two multi-day
// journeys belong to the Residential / Overnight Camp section.
export const picnicTrips = trips.filter((t) => t.category === "picnic");
export const residentialTrips = trips.filter((t) => t.category === "residential");

export const testimonials = [
  {
    quote:
      "My daughter came back glowing. She talked about the facilitator for a week — and started a nature journal at home.",
    name: "Priya R.",
    role: "Parent, Mumbai",
  },
  {
    quote:
      "KIDENTURE handled every detail — consent, transport, food, safety. We had real-time updates throughout the trip.",
    name: "Anita Sharma",
    role: "Principal, DPS Pune",
  },
  {
    quote:
      "The 1:10 ratio and verified staff gave us complete peace of mind. The kids returned more confident and curious.",
    name: "Rohan Mehta",
    role: "Parent, Bengaluru",
  },
  {
    quote:
      "An exceptional partner. Their transparency on commissions and reporting is best-in-class for our PTAs.",
    name: "Dr. Kavita Iyer",
    role: "Director, Greenfield Academy",
  },
];

export const schools = [
  "DPS Pune",
  "Greenfield Academy",
  "Vidyashram International",
  "Sunrise Public School",
  "Heritage Global",
  "Modern Sanskar",
];


export const posts = [
  {
    slug: "experiential-learning-india",
    title: "Why experiential learning is reshaping Indian classrooms",
    excerpt:
      "Beyond textbooks: how 1–2 day immersions build curiosity, empathy and confidence in primary-aged children.",
    category: "Parenting",
    date: "May 2026",
  },
  {
    slug: "safety-on-school-trips",
    title: "A parent's guide to safety on school trips",
    excerpt:
      "From driver vetting to medical protocols — what every parent should ask before signing a consent form.",
    category: "Safety",
    date: "Apr 2026",
  },
  {
    slug: "mindfulness-for-children",
    title: "Mindfulness for children: small practices, lasting calm",
    excerpt:
      "Age-appropriate breathing, journaling and gratitude routines you can adopt at home this week.",
    category: "Wellness",
    date: "Mar 2026",
  },
];

export const faqs = [
  {
    q: "How are KIDENTURE trips booked?",
    a: "Trips are offered exclusively through partner schools. Your school shares a unique enrollment link with you — there is no direct-to-parent sale.",
  },
  {
    q: "What safety features do you provide?",
    a: "Every trip runs with live GPS tracking of each vehicle and CCTV monitoring on board, so schools and parents can see exactly where the group is for the whole journey. Facilitators on every trip are first-aid trained.",
  },
  {
    q: "What's included in the price?",
    a: "Pricing is fully all-inclusive: transport, meals, facilitation, activity materials, and the experience itself.",
  },
  {
    q: "What is your cancellation policy?",
    a: "Free cancellation up to 7 days before the trip, 50% refund between 3–7 days, and no refund within 3 days.",
  },
  {
    q: "Is parental consent mandatory?",
    a: "Yes. A digitally-signed, versioned consent (with DPDP acknowledgment) is mandatory before any child can attend.",
  },
  {
    q: "What is the minimum and maximum group size?",
    a: "Minimum 15 children per trip; maximum 40 children per trip. 1-day trips are for ages 4–12; 2-day trips are for ages 6–12.",
  },
];
