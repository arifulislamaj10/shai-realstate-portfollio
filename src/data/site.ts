export const siteConfig = {
  name: "Shan Shai",
  title: "Licensed Real Estate Salesperson",
  company: "Hamana Homes",
  location: "Magalang, Pampanga, Near Clark",
  facebook: "https://www.facebook.com/shai.dane",
  facebookHandle: "@shai.dane",
  /** Display format, e.g. "+63 917 123 4567" */
  phone: "",
  /** WhatsApp digits without + (e.g. "639171234567"). Falls back to phone if empty. */
  whatsapp: "",
  hamanaWebsite: "https://hamanahomes.com.ph/",
  hamanaUnits: "https://hamanahomes.com.ph/units/",
  profilePhoto: "/images/shai.png",
  hamanaLogo: "/images/hamana-logo.png",
  heroBackground: "/images/hamana-hero.jpg",
};

export const heroContent = {
  eyebrow: "Hamana Homes · Magalang, Pampanga",
  headline: "Homes for sale near Clark",
  description:
    "I'm Shan Shai, agent for Hamana Homes. I can help with site visits, reservations, and Pag-IBIG or bank financing.",
  primaryCta: { label: "Book a Site Visit", href: "#contact" },
  secondaryCta: { label: "View Portfolio", href: "#portfolio" },
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
  { number: "4", label: "Deals Closed" },
  { number: "4", label: "Happy Clients" },
  { number: "100%", label: "Satisfied" },
];

export const highlights = [
  "Accredited Hamana Homes agent",
  "Knows Nanea, Meana, Onea, and Kanea models",
  "Pag-IBIG and bank loan assistance",
  "4 closed deals so far",
];

export const services = [
  {
    title: "Unit Reservation",
    description:
      "If you want to reserve a unit, I'll explain the requirements and help with the paperwork.",
    icon: "home",
    image: "/images/nanea.jpg",
  },
  {
    title: "Financing Help",
    description:
      "I can compute your monthly payment and assist with Pag-IBIG, bank, or in-house financing.",
    icon: "money",
    image: "/images/hamana-units-banner.jpg",
  },
  {
    title: "Site Visit",
    description:
      "Free site trip to Hamana Homes Magalang. You can see the model units and the community.",
    icon: "map",
    image: "/images/hamana-hero.jpg",
  },
  {
    title: "Turnover Support",
    description:
      "I stay with you from reservation until you get your keys — updates, inspection, and turnover day.",
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
    description: "Video walkthrough of Phase 1 — buildings, roads, and project layout.",
    youtubeId: "ND7H4XUW4-M",
    startAt: 119,
    tag: "Development",
  },
  {
    id: "hamana-house-features",
    title: "Inside the Units",
    description: "See what's inside a Hamana Homes unit — layout and finishes.",
    youtubeId: "GpNV4_VioR0",
    tag: "Unit Tour",
  },
  {
    id: "hamana-live-play",
    title: "Community & Amenities",
    description: "Look at the community area and spaces around Hamana Homes.",
    youtubeId: "iwLHrnaKDsI",
    tag: "Community",
  },
];

export const portfolioItems = [
  {
    id: "hamana-master",
    name: "Hamana Homes Magalang",
    category: "community",
    tag: "15 Hectare Community",
    location: "Magalang, Pampanga · Near Clark",
    image: "/images/hamana-hero.jpg",
    featured: true,
  },
  {
    id: "nanea",
    name: "Nanea",
    category: "single-attached",
    tag: "Single Attached",
    location: "Magalang, Pampanga. Sold",
    image: "/images/nanea.jpg",
  },
  {
    id: "meana",
    name: "Meana",
    category: "duplex",
    tag: "Duplex",
    location: "Magalang, Pampanga. Sold",
    image: "/images/meana.jpg",
  },
  {
    id: "onea",
    name: "Onea Duplex Deluxe",
    category: "duplex",
    tag: "Duplex Deluxe",
    location: "Magalang, Pampanga. Sold",
    image: "/images/onea.jpg",
  },
  {
    id: "kanea",
    name: "Kanea 3 Unit Townhouse",
    category: "townhouse",
    tag: "Townhouse",
    location: "Magalang, Pampanga. Sold",
    image: "/images/kanea.jpg",
  },
];

export const portfolioFilters = [
  { id: "all", label: "All" },
  { id: "community", label: "Community" },
  { id: "single-attached", label: "Single Attached" },
  { id: "duplex", label: "Duplex" },
  { id: "townhouse", label: "Townhouse" },
];

export const testimonials = [
  {
    quote:
      "First time buyer kami and Shan was very patient. From reservation hanggang turnover, maayos lahat. Happy kami sa Nanea unit namin.",
    clientName: "Client · Nanea",
    unit: "Nanea Single Attached",
    location: "Magalang, Pampanga",
    price: "₱2.48M",
    image: "/images/client-key-1.jpg",
  },
  {
    quote:
      "She arranged our site visit and explained everything step by step. Smooth yung process ng Meana duplex namin. Recommended siya.",
    clientName: "Client · Meana",
    unit: "Meana Duplex",
    location: "Magalang, Pampanga",
    price: "₱2.95M",
    image: "/images/client-key-2.jpg",
  },
  {
    quote:
      "OFW ako so kailangan ko ng someone na mapagkakatiwalaan. Shan updated us regularly until nakuha namin ang Onea unit. Salamat!",
    clientName: "Client · Onea",
    unit: "Onea Duplex Deluxe",
    location: "Clark area, Pampanga",
    price: "₱3.35M",
    image: "/images/client-key-3.jpg",
  },
  {
    quote:
      "Tinulungan kami ni Shan sa Pag-IBIG loan for our Kanea townhouse. Andito siya until nakuha namin ang keys. Satisfied kami.",
    clientName: "Client · Kanea",
    unit: "Kanea Townhouse",
    location: "Magalang, Pampanga",
    price: "₱2.75M",
    image: "/images/client-key-4.jpg",
  },
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#videos", label: "Videos" },
  { href: "#contact", label: "Contact" },
];

export const defaultWhatsAppMessage =
  "Hi Shan, ask ko lang about Hamana Homes.";

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
    "Hi Shan, message from your website:",
    "",
    `Name: ${fields.name}`,
    `Email: ${fields.email}`,
    `Phone: ${fields.phone || "Not provided"}`,
    `Interest: ${fields.interest}`,
    "",
    fields.message,
  ].join("\n");
}
