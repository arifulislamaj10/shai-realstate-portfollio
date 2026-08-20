export const siteConfig = {
  name: "Rish",
  title: "In-house Real Estate Agent",
  company: "Hamana Homes",
  location: "Magalang, Pampanga, near Clark",
  phone: "09948504295",
  email: "hamanarish02@gmail.com",
  facebook: "https://www.facebook.com/share/1MXLosivyL/",
  facebookPages: [
    {
      url: "https://www.facebook.com/share/1MXLosivyL/",
      label: "Personal Facebook",
    },
    {
      url: "https://www.facebook.com/share/1DU8EcYDcf/",
      label: "Hamana Homes Facebook",
    },
  ],
  /** WhatsApp digits without +. Falls back to phone if empty. */
  whatsapp: "",
  hamanaWebsite: "https://hamanahomes.com.ph/",
  hamanaUnits: "https://hamanahomes.com.ph/units/",
  profilePhoto: "/images/shai.png",
  hamanaLogo: "/images/hamana-logo.png",
  heroBackground: "/images/hamana-hero.jpg",
};

export const heroContent = {
  eyebrow: "Hamana Homes, Magalang, Pampanga",
  headline: "Get your Hamana Home Today",
  description:
    "Hi, I'm Rish, in-house agent for Hamana Homes. I closed 5 deals in 3 months. I help with site visits, reservations, bank loans, and turnover.",
  primaryCta: { label: "Book a Site Visit", href: "#contact" },
  secondaryCta: { label: "See Closed Deals", href: "#portfolio" },
};

export const aboutContent = {
  sectionTitle: "Rish, Hamana Homes Agent",
  intro:
    "Looking for a home in Magalang, Pampanga, near Clark? I'm Rish, an in-house real estate agent at Hamana Homes, here to make your home-buying journey easier from start to finish.",
  trackRecord:
    "With 5 successful deals closed in just 3 months, I personally assist buyers with site visits, reservations, bank financing, and turnover, so you have someone to guide you every step of the way.",
  timelineTitle: "Choose a Home That Fits Your Timeline",
  timeline: [
    "RFO / Ready for Occupancy: Turnover in 2–3 months",
    "Near-Ready Units: Turnover in around 6 months",
    "Regular Units: Turnover in around 12 months",
  ],
  paymentTitle: "Reserve for only ₱25,000!",
  payment:
    "Enjoy flexible payment terms and Paylite options designed to make your monthly payments more manageable.",
  ofwTitle: "For OFWs & Buyers Living Far Away",
  virtualTripping:
    "You don't have to be in Pampanga to start your home-buying journey. We offer online presentations and virtual tripping, allowing you to explore available homes from wherever you are.",
};

export const aboutPhdcContent = {
  pageTitle: "About PHDC",
  sections: [
    {
      id: "about-phdc",
      title: "About PHDC",
      image: {
        src: "/images/parent-company/pacifica-homes.jpg",
        alt: "Pacifica Homes Development Corporation",
      },
      paragraphs: [
        "Pacifica Homes Development Corporation (PHDC) leads the sale, construction, and delivery of premium affordable homes in the Philippines. Together with chairman Mr. Ted Po, president Mr. Leo Po, and their brothers on the board, PHDC aims to deliver superior quality homes with mid-market features at low-cost housing prices.",
        "PHDC uses innovative construction technology to build better homes that last. The company focuses on premium house features and better value compared to other developers in its category.",
        "Generous green open spaces, premium amenities, and wider road networks help residents move in and out of the community faster. That balance of urban convenience and suburban living is what PHDC aims to give every homeowner.",
      ],
    },
    {
      id: "about-hamana",
      title: "About Hamana Homes",
      paragraphs: [
        "Hamana Homes is a 15-hectare residential development with generous lot sizes and livable floor areas inspired by modern Asian home design.",
        "The project is planned with commercial areas that will include a transport hub for residents.",
        "The main entryway has a 16-meter wide right-of-way. The major access road is 12 meters wide. Collector and minor roads are 8 to 10 meters wide.",
        "Open spaces, landscaping, community facilities, path walks, and road networks make up almost 40% of the development. The main amenity area has a clubhouse, swimming pool, and basketball court. Pocket parks are spread across the community so all residents can reach them easily.",
      ],
    },
    {
      id: "about-company",
      title: "About the Company",
      image: {
        src: "/images/parent-company/century-pacific.jpg",
        alt: "Century Pacific Group brands",
      },
      paragraphs: [
        "Century Pacific Group is the parent company. It is a diversified group in food manufacturing, distribution, food retail, and real estate development. It was incorporated with the Philippine SEC on October 25, 2013.",
        "Century Pacific owns leading brands including Shakey's, Peri-Peri Chicken, Potato Corner, and many other household names in the Philippines.",
      ],
    },
  ],
  vision:
    "To be the most trusted developer of delightful, best-in-class, and affordable homes in the Philippines by delivering superior quality and value through focus and innovation, while providing a more sustainable way of building and living for the mass to mid-income markets.",
  mission: [
    "Owning the Customer-First Mindset",
    "Delivering Quality Work",
    "Ensure Continuous Personal Growth for our Employees",
    "Achieve Equitable Corporate Governance and Highest Social Responsibility Standards",
    "Advancing Sustainable Growth and Profitability for the Company",
  ],
};

export const locationContent = {
  label: "Location",
  title: "Strategic Location",
  intro:
    "Near Clark, along Magalang-Mabalacat Highway in Magalang, Pampanga. Easy access to NLEX, SCTEX, Clark airport, schools, malls, and work areas.",
  address: "Mabalacat-Magalang Road, Santo Rosario and San Isidro, Magalang, Pampanga 2011",
  googleMapsUrl: "https://maps.app.goo.gl/rHCyo5x9PGMRCgw38",
  map: {
    src: "/images/location/vicinity-map.png",
    alt: "Hamana Homes location and nearby landmarks",
  },
  items: [
    {
      name: "NLEX",
      description: "Main connection to Manila, 11.4 km away through Dau Exit.",
      image: "/images/location/nlex.jpg",
    },
    {
      name: "SCTEX",
      description: "Highway to other northern towns and provinces, 18.4 km away.",
      image: "/images/location/sctex.jpg",
    },
    {
      name: "Clark International Airport",
      description: "Gateway to domestic and international flights, 10.7 km away.",
      image: "/images/location/clark-airport.jpg",
    },
    {
      name: "Future Train Station",
      description: "North-South Commuter Railway station coming soon nearby.",
      image: "/images/location/train-station.jpg",
    },
  ],
};

export const amenitiesContent = {
  label: "Amenities",
  title: "Community Amenities",
  intro:
    "Clubhouse, swimming pool, multi-purpose court, parks, playground, chapel, and 24-hour security inside Hamana Homes.",
  officialLink: "https://hamanahomes.com.ph/amenities/",
  items: [
    {
      name: "24-Hour Security Guardhouse",
      description: "Exclusive gated community with 24/7 security for peace and order.",
      image: "/images/amenities/guardhouse.jpg",
    },
    {
      name: "The Clubhouse",
      description: "A relaxing space for community events or small family get-togethers.",
      image: "/images/amenities/clubhouse.jpg",
    },
    {
      name: "Leisure Pool and Village Pavilion",
      description: "Lounge by the pool or celebrate special events in the village pavilion.",
      image: "/images/amenities/swimming-pool.jpg",
    },
    {
      name: "Multi-Purpose Court",
      description: "Open basketball court for sports with family and friends.",
      image: "/images/amenities/basketball-court.jpg",
    },
    {
      name: "The Playground",
      description: "Active play area for kids of any age.",
      image: "/images/amenities/playground.jpg",
    },
    {
      name: "Hamana Homes Chapel",
      description: "Spend quiet time in prayer alone or with the community.",
      image: "/images/amenities/chapel.png",
    },
    {
      name: "4 Linear Parks",
      description: "Jogging paths and play areas spread across the community.",
      image: "/images/amenities/linear-park.jpg",
    },
  ],
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
    quote:
      "We reserved our Nanea unit with Rish. She was very patient and clear from site visit to turnover. We are very satisfied and happy with our new home in Magalang.",
    clientName: "Nanea buyer",
    unit: "Nanea Single Attached",
    location: "Magalang, Pampanga",
    price: "₱6.5M to ₱7.5M",
    image: "/images/deal-1.jpeg",
  },
  {
    quote:
      "Rish arranged our site visit and explained every step for our Meana duplex. The whole process was smooth and we are satisfied with the service.",
    clientName: "Meana buyer",
    unit: "Meana Duplex",
    location: "Magalang, Pampanga",
    price: "₱4.6M to ₱5.3M",
    image: "/images/deal-2.jpeg",
  },
  {
    quote:
      "I am an OFW and Rish kept us updated the whole time. Virtual updates helped a lot until we got our Onea unit. Very satisfied with her work.",
    clientName: "Onea buyer",
    unit: "Onea Duplex Deluxe",
    location: "Pampanga",
    price: "₱5.8M to ₱6.8M",
    image: "/images/deal-3.jpeg",
  },
  {
    quote:
      "Rish helped us with Pag-IBIG for our Kanea townhouse. She stayed with us until we got our keys. We are satisfied and highly recommend her.",
    clientName: "Kanea buyer",
    unit: "Kanea Townhouse",
    location: "Magalang, Pampanga",
    price: "₱3.4M to ₱4.2M",
    image: "/images/deal-4.jpeg",
  },
  {
    quote:
      "From reservation to turnover, Rish made everything easy. Paylite and flexible terms helped our budget. Satisfied client and happy homeowner.",
    clientName: "Hamana Homes buyer",
    unit: "Hamana Homes unit",
    location: "Magalang, Pampanga",
    price: "₱25,000 reservation",
    image: "/images/deal-5.jpeg",
  },
];

export const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/about-phdc", label: "Parent Company" },
  { href: "/#services", label: "Services" },
  { href: "/#units", label: "Units" },
  { href: "/#location", label: "Location" },
  { href: "/#amenities", label: "Amenities" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/#videos", label: "Videos" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
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

export function getTelLink(): string {
  const digits = getWhatsAppDigits();
  return digits ? `tel:+${digits}` : "";
}

export function formatPhoneDisplay(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 11 && digits.startsWith("09")) {
    return `${digits.slice(0, 4)} ${digits.slice(4, 7)} ${digits.slice(7)}`;
  }
  return phone;
}
