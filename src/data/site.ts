export const siteConfig = {
  name: "Rish",
  title: "In-house Real Estate Agent",
  company: "Hamana Homes",
  location: "Magalang, Pampanga, near Clark",
  facebook: "https://www.facebook.com/shai.dane",
  facebookHandle: "@shai.dane",
  /** Display format, e.g. "+63 917 123 4567" */
  phone: "",
  /** WhatsApp digits without + (e.g. "639171234567"). Falls back to phone if empty. */
  whatsapp: "",
  hamanaWebsite: "https://hamanahomes.com.ph/",
  hamanaUnits: "https://hamanahomes.com.ph/units/",
  profilePhoto: "/images/rish-profile.jpeg",
  hamanaLogo: "/images/hamana-logo.png",
  heroBackground: "/images/hamana-hero.jpg",
};

export const heroContent = {
  eyebrow: "Hamana Homes, Magalang, Pampanga",
  headline: "Homes for sale near Clark",
  description:
    "Hi, I'm Rish, in-house agent for Hamana Homes. I closed 5 deals in 3 months. I help with site visits, reservations, bank loans, and turnover.",
  primaryCta: { label: "Book a Site Visit", href: "#contact" },
  secondaryCta: { label: "See Closed Deals", href: "#portfolio" },
};

export const aboutContent = {
  sectionTitle: "Rish, Hamana Homes Agent",
  intro:
    "Hi, I'm Rish, an in-house real estate agent for Hamana Homes in Magalang, Pampanga, near Clark.",
  trackRecord:
    "I closed 5 deals in just 3 months. I help buyers with site visits, reservations, bank loans, and turnover. Message me if you want to check available units or schedule a visit.",
  turnover:
    "For RFO units or Ready for Occupancy, turnover is 2 to 3 months. For near ready units it's 6 months. For regular units it takes 12 months.",
  virtualTripping:
    "We also do online presentation or virtual tripping, especially for OFWs and far away locations.",
  payment:
    "Reservation fee is only ₱25,000. We offer flexible payment terms and Paylite for lighter monthly payment.",
};

export const heroCarouselSlides = [
  { image: "/images/hamana-hero.jpg", title: "Hamana Homes Magalang", subtitle: "Magalang, Pampanga" },
  { image: "/images/hamana-banner2.jpg", title: "Hamana Community", subtitle: "Near Clark" },
  { image: "/images/hamana-banner3.jpg", title: "15 Hectare Project", subtitle: "Hamana Homes" },
  { image: "/images/hamana-banner4.jpg", title: "Pacifica Homes", subtitle: "Magalang" },
  { image: "/images/hamana-banner5.jpg", title: "Hamana Homes", subtitle: "Pampanga" },
  { image: "/images/nanea.jpg", title: "Nanea", subtitle: "Single Attached" },
  { image: "/images/meana.jpg", title: "Meana", subtitle: "Duplex" },
  { image: "/images/onea.jpg", title: "Onea", subtitle: "Duplex Deluxe" },
  { image: "/images/kanea.jpg", title: "Kanea", subtitle: "Townhouse" },
];

export const stats = [
  { number: "5", label: "Deals Closed" },
  { number: "5", label: "Happy Clients" },
  { number: "3", label: "Months" },
];

export const highlights = [
  "In-house Hamana Homes agent",
  "5 deals closed in 3 months",
  "Nanea, Meana, Onea, and Kanea models",
  "Pag-IBIG and bank loan help",
  "Virtual tripping for OFWs",
  "₱25,000 reservation fee",
];

export const services = [
  {
    title: "Unit Reservation",
    description:
      "Reservation fee is ₱25,000. I will explain the requirements, payment terms, and Paylite options.",
    icon: "home",
    image: "/images/nanea.jpg",
  },
  {
    title: "Financing Help",
    description:
      "Pag-IBIG, bank, or in-house financing. I can compute your monthly payment and help with Paylite.",
    icon: "money",
    image: "/images/hamana-units-banner.jpg",
  },
  {
    title: "Site Visit",
    description:
      "Free site trip to Hamana Homes Magalang. You can see the model units and the community.",
    icon: "map",
    image: "/images/site-visit.jpeg",
  },
  {
    title: "Virtual Tripping",
    description:
      "Online presentation or virtual site tour for OFWs and buyers who cannot visit yet.",
    icon: "key",
    image: "/images/deal-1.jpeg",
  },
  {
    title: "Turnover Support",
    description:
      "RFO in 2 to 3 months, near ready in 6 months, regular units in 12 months. I stay with you until you get your keys.",
    icon: "key",
    image: "/images/onea.jpg",
  },
];

export const videoBlogPosts = [
  {
    id: "hamana-main-avp",
    title: "Hamana Homes Site Tour",
    description: "Official video tour of the Hamana Homes site in Magalang, near Clark.",
    youtubeId: "DyLMDfhBsto",
    tag: "Site Tour",
  },
  {
    id: "hamana-phase-1",
    title: "Phase 1 Development",
    description: "Video walkthrough of Phase 1. Buildings, roads, and project layout.",
    youtubeId: "ND7H4XUW4-M",
    startAt: 119,
    tag: "Development",
  },
  {
    id: "hamana-house-features",
    title: "Inside the Units",
    description: "See what's inside a Hamana Homes unit. Layout and finishes.",
    youtubeId: "GpNV4_VioR0",
    tag: "Unit Tour",
  },
  {
    id: "hamana-live-play",
    title: "Community and Amenities",
    description: "Community area and spaces around Hamana Homes.",
    youtubeId: "iwLHrnaKDsI",
    tag: "Community",
  },
];

export const availableUnits = [
  {
    id: "nanea",
    name: "Nanea",
    type: "Single Attached",
    beds: "2 to 3 BR",
    priceNote: "₱6.5M to ₱7.5M",
    image: "/images/nanea.jpg",
  },
  {
    id: "meana",
    name: "Meana",
    type: "Duplex",
    beds: "2 to 3 BR",
    priceNote: "₱4.6M to ₱5.3M",
    image: "/images/meana.jpg",
  },
  {
    id: "onea",
    name: "Onea",
    type: "Duplex Deluxe",
    beds: "3 BR",
    priceNote: "₱5.8M to ₱6.8M",
    image: "/images/onea.jpg",
  },
  {
    id: "kanea",
    name: "Kanea",
    type: "Townhouse",
    beds: "2 to 3 BR",
    priceNote: "₱3.4M to ₱4.2M",
    image: "/images/kanea.jpg",
  },
];

export const howToBuySteps = [
  {
    step: "1",
    title: "Message Rish",
    description: "Send a message on Facebook or WhatsApp. Say which unit you like or ask what is available.",
  },
  {
    step: "2",
    title: "Site visit",
    description: "Schedule a trip to Hamana Homes Magalang, or a virtual tripping session if you are abroad.",
  },
  {
    step: "3",
    title: "Choose your unit",
    description: "Pick the model that fits your budget. I will explain floor plan, price, and payment options.",
  },
  {
    step: "4",
    title: "Reserve",
    description: "Submit requirements and the ₱25,000 reservation fee. I will guide you with the paperwork.",
  },
  {
    step: "5",
    title: "Loan processing",
    description: "Pag-IBIG, bank, or in-house financing. I can help compute monthly payment and assist with documents.",
  },
  {
    step: "6",
    title: "Turnover",
    description: "RFO in 2 to 3 months, near ready in 6 months, regular in 12 months. I stay with you until you get your keys.",
  },
];

export const faqItems = [
  {
    question: "How much is the reservation fee?",
    answer: "Reservation fee is ₱25,000. Message me for the down payment based on the unit you choose.",
  },
  {
    question: "How long until turnover?",
    answer:
      "RFO units are about 2 to 3 months. Near ready units around 6 months. Regular units about 12 months.",
  },
  {
    question: "Can I use Pag-IBIG or a bank loan?",
    answer: "Yes. Hamana Homes accepts Pag-IBIG, bank financing, and in-house options.",
  },
  {
    question: "Is the site visit free?",
    answer: "Yes. I can arrange a free site trip to Hamana Homes Magalang.",
  },
  {
    question: "Do you offer virtual tripping?",
    answer: "Yes. We do online presentation or virtual tripping for OFWs and buyers who cannot visit yet.",
  },
  {
    question: "How do I reserve a unit?",
    answer: "Message me first. I will send the requirements, reservation fee, and next steps.",
  },
  {
    question: "I'm an OFW. Can I buy while I'm abroad?",
    answer: "Yes. Many OFW clients work with me remotely through virtual tripping.",
  },
  {
    question: "Where is Hamana Homes located?",
    answer: "Magalang, Pampanga, near Clark.",
  },
  {
    question: "What payment terms are available?",
    answer: "Flexible payment terms and Paylite are available. Message me to compute what fits your budget.",
  },
  {
    question: "Are there still available units?",
    answer: "Availability changes often. Message me for current units, pricing, and promos.",
  },
];

export const portfolioItems = [
  {
    id: "hamana-master",
    name: "Hamana Homes Magalang",
    category: "community",
    tag: "15 Hectare Community",
    location: "Magalang, Pampanga, near Clark",
    image: "/images/hamana-hero.jpg",
    featured: true,
  },
  {
    id: "deal-1",
    name: "Closed Deal",
    category: "closed-deals",
    tag: "Turnover",
    location: "Magalang, Pampanga",
    image: "/images/deal-1.jpeg",
  },
  {
    id: "deal-2",
    name: "Closed Deal",
    category: "closed-deals",
    tag: "Turnover",
    location: "Magalang, Pampanga",
    image: "/images/deal-2.jpeg",
  },
  {
    id: "deal-3",
    name: "Closed Deal",
    category: "closed-deals",
    tag: "Turnover",
    location: "Magalang, Pampanga",
    image: "/images/deal-3.jpeg",
  },
  {
    id: "deal-4",
    name: "Closed Deal",
    category: "closed-deals",
    tag: "Turnover",
    location: "Magalang, Pampanga",
    image: "/images/deal-4.jpeg",
  },
  {
    id: "deal-5",
    name: "Closed Deal",
    category: "closed-deals",
    tag: "Turnover",
    location: "Magalang, Pampanga",
    image: "/images/deal-5.jpeg",
  },
];

export const portfolioFilters = [
  { id: "all", label: "All" },
  { id: "community", label: "Community" },
  { id: "closed-deals", label: "Closed Deals" },
];

export const testimonials = [
  {
    quote: "Smooth from reservation to turnover.",
    clientName: "Nanea buyer",
    unit: "Nanea Single Attached",
    location: "Magalang, Pampanga",
    price: "₱6.5M to ₱7.5M",
    image: "/images/deal-1.jpeg",
  },
  {
    quote: "Site visit and paperwork were easy to follow.",
    clientName: "Meana buyer",
    unit: "Meana Duplex",
    location: "Magalang, Pampanga",
    price: "₱4.6M to ₱5.3M",
    image: "/images/deal-2.jpeg",
  },
  {
    quote: "Good updates even while I was abroad.",
    clientName: "Onea buyer",
    unit: "Onea Duplex Deluxe",
    location: "Pampanga",
    price: "₱5.8M to ₱6.8M",
    image: "/images/deal-3.jpeg",
  },
  {
    quote: "Pag-IBIG process went well.",
    clientName: "Kanea buyer",
    unit: "Kanea Townhouse",
    location: "Magalang, Pampanga",
    price: "₱3.4M to ₱4.2M",
    image: "/images/deal-4.jpeg",
  },
  {
    quote: "Paylite helped with our monthly budget.",
    clientName: "Hamana Homes buyer",
    unit: "Hamana Homes unit",
    location: "Magalang, Pampanga",
    price: "₱25,000 reservation",
    image: "/images/deal-5.jpeg",
  },
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#units", label: "Units" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#videos", label: "Videos" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export const defaultWhatsAppMessage =
  "Hi Rish, I have a question about Hamana Homes.";

export function getWhatsAppDigits(): string {
  const raw = siteConfig.whatsapp || siteConfig.phone;
  let digits = raw.replace(/\D/g, "");
  if (!digits) return "";
  if (digits.startsWith("0")) digits = `63${digits.slice(1)}`;
  if (digits.length === 10 && digits.startsWith("9")) digits = `63${digits}`;
  return digits;
}

export function getWhatsAppUrl(message = defaultWhatsAppMessage): string | null {
  const digits = getWhatsAppDigits();
  if (!digits) return null;
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export function buildContactMessage(fields: {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}) {
  return [
    "Hi Rish, message from your website:",
    "",
    `Name: ${fields.name}`,
    `Email: ${fields.email}`,
    `Phone: ${fields.phone || "Not provided"}`,
    `Interest: ${fields.interest}`,
    "",
    fields.message,
  ].join("\n");
}
