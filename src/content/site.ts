/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  EVERYTHING YOU EDIT LIVES IN THIS FILE.
 *
 *  Every word, price and link on the website is read from here. Change a value
 *  below, save, and the site updates.
 *
 *  Most of the content is now drawn from real sources: Miki's own writing about
 *  her practice, her Instagram profile, and the Forma Gym Walnut Creek
 *  newsletter announcing her sessions.
 *
 *  Anything still marked  // TODO:CONFIRM  is a genuine unknown. Ask Miki.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const site = {
  practitioner: "Miki",
  fullName: "Miki (Michal) Yakobovich",
  businessName: "MIKI Healing",
  brandTagline: "Energy · Awareness · Healing",
  domain: "https://miki4.com",

  location: {
    city: "Alamo",
    region: "CA",
    streetAddress: "11B Orchard Ct.",
    postalCode: "94507",
    serviceArea: "Alamo, Danville, Walnut Creek and the surrounding East Bay",
  },

  contact: {
    phone: "(925) 286-4654",
    phoneHref: "tel:+19252864654",
    // TODO:CONFIRM — which address she wants on a public website. Her Forma
    // address is already public in the gym newsletter; a personal one is not.
    email: "miki.yako@formagym.com",
  },

  // TODO:CONFIRM — paste a scheduling link here once an account exists.
  // Works with Calendly, Acuity, Cal.com or SavvyCal. Until then the booking
  // page shows a phone and message panel instead.
  scheduler: {
    provider: "Calendly",
    embedUrl: null as string | null,
  },

  social: {
    instagram: "https://www.instagram.com/miki.healing/",
    instagramHandle: "@miki.healing",
  },
} as const;

/* ── Where Miki practises ─────────────────────────────────────────────────── */
/**
 * Two venues. Details for the Alamo studio come from the studio's own website,
 * and the Forma hours come from the Forma Walnut Creek newsletter of
 * 19 August 2026.
 *
 * TODO:CONFIRM — that Miki wants people calling her directly for Alamo rather
 * than calling the studio, and that the Forma hours are still current.
 */

export const venues = [
  {
    name: "Reiki Harmony Wellness Studio",
    locality: "Alamo",
    address: "11B Orchard Ct., Alamo, CA 94507",
    detail:
      "Private Reiki and Access Bars sessions, in a quiet room with crystals, tuning forks and sound bowls to hand.",
    hours: null as string[] | null,
    bookingLabel: "Call or message me directly",
    bookingHref: "tel:+19252864654",
  },
  {
    name: "The Spa at Forma Gym",
    locality: "Walnut Creek",
    address: "Walnut Creek, CA",
    detail:
      "Reiki sessions alongside the spa's massage and skin care treatments. Sauna, steam and jacuzzi can be enjoyed before or after.",
    hours: [
      "Mondays, 9:00am to 1:00pm",
      "Thursdays, 3:30pm to 7:30pm",
    ] as string[] | null,
    bookingLabel: "Forma front desk · (925) 932-6400",
    bookingHref: "tel:+19259326400",
  },
];

/* ── Brand assets and photography ─────────────────────────────────────────── */

export const logo = {
  wordmark: { src: "/logo/miki-wordmark.png", width: 1523, height: 403 },
  lockup: { src: "/logo/miki-lockup.png", width: 1200, height: 688 },
};

export const photos = {
  hands: {
    src: "/photos/session-shoulders.jpg",
    alt: "Miki resting both hands lightly at the collarbones of a client lying clothed on the treatment table, eyes closed",
  },
  portrait: {
    src: "/photos/miki-portrait.jpg",
    alt: "Miki standing beside a set of tuned chimes in her treatment room, holding the striker",
  },
  atTable: {
    src: "/photos/miki-at-table.jpg",
    alt: "Miki holding a client's ankles at the foot of the treatment table, a chakra chart on the wall behind her",
  },
  feet: {
    src: "/photos/session-hands.jpg",
    alt: "Miki cradling a client's hand and wrist during a session",
  },
  // Also available but not yet placed: /photos/miki-with-client.jpg
};

/* ── Hero ─────────────────────────────────────────────────────────────────── */

export const hero = {
  // Drawn from Miki's own description of what she offers.
  headline: ["A space to slow down,", "and simply receive care."],
  subheadline:
    "Reiki and Access Bars with Miki, at Reiki Harmony Wellness Studio in Alamo and at the Spa at Forma Gym in Walnut Creek. Gentle touch, or no touch at all if you prefer. You stay fully clothed throughout.",
  ctaLabel: "Book a session",
  ctaHref: "/book",
  secondaryLabel: "What happens in a session",
  secondaryHref: "/services",
  proofLine: "Reiki Master · Access Bars practitioner · Alamo and Walnut Creek",
};

/* ── Tagline reveal ───────────────────────────────────────────────────────── */
// Miki's own words, from her writing about the practice.

export const tagline = {
  lines: [
    "We already carry more wisdom and capacity for healing than we realize.",
    "Sometimes we simply need a supportive space.",
  ],
};

/* ── Opening section ──────────────────────────────────────────────────────── */
// TODO:CONFIRM — read this back to Miki. It is written in her voice but the
// words are not verbatim hers.

export const intro = {
  heading: "Most people arrive carrying something they have been managing alone",
  body: "A worry that will not settle. Sleep that will not come. Pain that has outlasted the treatment for it. There is nothing wrong with asking someone to help you reconnect with what is already within you, and for an hour here, nothing is asked of you in return.",
};

/* ── Section headings ─────────────────────────────────────────────────────── */

export const sections = {
  benefits: "What people come for",
  steps: "What happens when you come in",
  stepsNote: "Every session is different. This is the shape of all of them.",
  services: "Sessions",
  servicesNote:
    "Reiki and Access Bars, privately in Alamo or through the spa at Forma Gym.",
  venues: "Where to find me",
  venuesNote: "Two places, booked two different ways.",
  faq: "Questions people ask before a first session",
  finalCta: "A space to slow down, and simply receive care",
  finalCtaBody:
    "Book a session, or call and ask whatever you need to ask before you decide. Both are fine.",
};

/* ── Benefits ─────────────────────────────────────────────────────────────── */
// This list is the one Forma Gym publishes for Miki's sessions, so it is
// already vetted language. Keep the medical hedging as it is.

export const benefits = [
  {
    icon: "moon",
    title: "Sleep that comes more easily",
    body: "The reason Miki started practising in the first place, and still one of the most common reasons people book.",
  },
  {
    icon: "heartbeat",
    title: "Relaxation and less stress",
    body: "Reiki creates the conditions for the body to settle. Most people describe a heaviness in the limbs and a slowing of the breath.",
  },
  {
    icon: "handsPraying",
    title: "Lower anxiety",
    body: "Often booked by people facing a medical procedure, and by people who simply cannot put a worry down.",
  },
  {
    icon: "leaf",
    title: "Improved mood and sense of well being",
    body: "A space where nothing is asked of you, and where you can reconnect with yourself for an hour.",
  },
  {
    icon: "flower",
    title: "Pain relief, alongside your treatment",
    body: "Frequently used next to conventional care during cancer treatment, surgery recovery and chronic pain. Never instead of it.",
  },
];

/* ── How a session works ──────────────────────────────────────────────────── */
// From Miki's own account of a session.

export const steps = [
  {
    number: "01",
    title: "We start with what you need",
    body: "Every session is different, because every person arrives with different needs, intentions and goals. We talk first about what is present for you and what you would like more of.",
  },
  {
    number: "02",
    title: "You rest, fully clothed",
    body: "I work with gentle touch, or with no touch at all if you prefer. Depending on what feels supportive, I may bring in crystals, tuning forks or sound healing.",
  },
  {
    number: "03",
    title: "You take something home",
    body: "If it feels right, I send you home with simple practices you can fold into daily life, to support you between sessions.",
  },
];

/* ── Services ─────────────────────────────────────────────────────────────── */
/**
 * TODO:CONFIRM — prices and session lengths.
 *
 * I have not invented these. Set `price` and `duration` to real values and they
 * appear on the site. Left as null, the card simply shows how to book instead,
 * so nothing false is published in the meantime.
 */

export type Service = {
  slug: string;
  name: string;
  duration: string | null;
  price: string | null;
  summary: string;
  includes: string[];
  bookingNote?: string;
};

export const services: Service[] = [
  {
    slug: "reiki-session",
    name: "Reiki session",
    duration: null,
    price: null,
    summary:
      "Reiki is a Japanese practice developed in the early twentieth century by Mikao Usui. The word means universal life energy. A session creates the conditions for deep relaxation, inner balance, and emotional and physical well being.",
    includes: [
      "A conversation first about what brought you in",
      "Gentle hands on work, or no touch at all if you prefer",
      "Crystals, tuning forks or sound healing where they suit the session",
      "Simple practices to take home with you",
    ],
    bookingNote:
      "At Reiki Harmony Wellness Studio, 11B Orchard Ct. in Alamo. Call or send a message to arrange a time.",
  },
  {
    slug: "access-bars",
    name: "Access Bars session",
    duration: null,
    price: null,
    summary:
      "A gentle hands on practice that lightly touches thirty two points on the head. Each point is associated with a different area of life, such as creativity, communication, money, peace, and hopes and dreams. Most people find it deeply relaxing and leave feeling lighter and more present.",
    includes: [
      "We talk first about what is present and what you would like to create",
      "Thirty two points on the head, touched lightly",
      "Questions asked throughout, to open up possibilities rather than to find quick answers",
      "Attention to what is already bringing you joy, not only where you feel stuck",
    ],
    bookingNote:
      "At Reiki Harmony Wellness Studio, 11B Orchard Ct. in Alamo. Call or send a message to arrange a time.",
  },
  {
    slug: "reiki-at-forma",
    name: "Reiki at Forma Gym, Walnut Creek",
    duration: null,
    price: null,
    summary:
      "I also practise at the Spa at Forma Gym in Walnut Creek, alongside their massage and skin care treatments. Sauna, steam and jacuzzi can be enjoyed before or after a session.",
    includes: [
      "Mondays, 9:00am to 1:00pm",
      "Thursdays, 3:30pm to 7:30pm",
      "Booked through the Forma front desk",
    ],
    bookingNote:
      "Schedule at the Forma front desk or call (925) 932-6400. Questions can come to me at miki.yako@formagym.com.",
  },
];

/* ── Risk reversal ────────────────────────────────────────────────────────── */

export const riskReversal = {
  title: "You can ask me anything before you book",
  body: "If you are unsure whether Reiki suits what you are dealing with, call me and ask. There is no expectation that you book anything, and I would rather you found the right practitioner than sat through a session being polite. You can also ask for the session to pause or stop at any point, without giving a reason.",
};

/* ── FAQ ──────────────────────────────────────────────────────────────────── */

export const faqs = [
  {
    q: "What is Reiki?",
    a: "Reiki is a Japanese energy healing practice developed in the early twentieth century by Mikao Usui. The word means universal life energy, and refers to a life force that flows through all living beings. It was developed as a gentle practice that helps create the conditions for deep relaxation, inner balance, and emotional and physical well being.",
  },
  {
    q: "Do I have to believe in it for it to work?",
    a: "No. You do not have to believe anything, and you do not have to describe what you feel. Come and see what your body does with an hour of rest.",
  },
  {
    q: "Do I take my clothes off?",
    a: "No. You stay fully clothed for the whole session. Wear whatever you are comfortable lying down in.",
  },
  {
    q: "Will you touch me?",
    a: "Only if you want me to. I work with gentle touch, lightly placing my hands on or near the body, and I am equally happy to work with no touch at all. Tell me at the start which you prefer, and you can change your mind partway through.",
  },
  {
    q: "What is Access Bars?",
    a: "Access Bars is a gentle hands on practice that lightly touches thirty two points on the head. Each point is associated with a different area of life, such as creativity, communication, money, peace, and hopes and dreams. The intention is to help release limiting patterns and make space for more ease, clarity and possibility. Many people find it deeply relaxing and leave feeling lighter and calmer.",
  },
  {
    q: "How is an Access Bars session different from Reiki?",
    a: "Reiki is quieter. Access Bars involves more conversation: before we begin I invite you to share what is present in your life and what you would like more of, and we keep asking questions as we go, about where you feel stuck and also about what is already bringing you joy.",
  },
  {
    q: "Is this a replacement for medical treatment?",
    a: "No, and I will never suggest it is. This is a complementary practice that sits alongside your doctor, your therapist and your medication. I do not diagnose, and I will never advise anyone to stop or change a treatment.",
  },
  {
    q: "Can I book during cancer treatment or surgery recovery?",
    a: "Yes. Reiki is often used alongside conventional treatment during cancer care, recovery from surgery and chronic pain. Please tell your care team you are booking, and tell me what your body is currently managing so I can adjust.",
  },
  {
    q: "What does a session feel like?",
    a: "Most people describe warmth, a heaviness in the limbs, and the kind of drifting that happens just before sleep. Some notice very little during the session and feel the difference that evening. All of it is normal.",
  },
  {
    q: "What if I fall asleep?",
    a: "Then you needed the sleep. It happens often and it changes nothing about the session.",
  },
  {
    q: "Where do you practise?",
    a: "Two places. Private sessions are at Reiki Harmony Wellness Studio, 11B Orchard Ct. in Alamo. I also practise at the Spa at Forma Gym in Walnut Creek on Mondays from 9:00am to 1:00pm and Thursdays from 3:30pm to 7:30pm, booked through their front desk.",
  },
];

/* ── About ────────────────────────────────────────────────────────────────── */
// Drawn closely from Miki's own writing. Worth reading back to her before
// launch so the voice is hers, not a paraphrase of hers.

export const about = {
  heading: "It started with my son",
  paragraphs: [
    "My Reiki journey began because I wanted to help my son relax and fall asleep more easily. That was the whole of the ambition at the start.",
    "As I began practising on him, and later on myself, I was genuinely surprised by the impact it had on both of us. It became an important part of my own self care, helping me slow down, reconnect with myself, and find a greater sense of balance. Those experiences led me to deepen my studies and eventually become a Reiki Master.",
    "Reiki is more than a healing practice to me. It is a way of life. It aligns with my belief that we already carry more wisdom and capacity for healing than we often realize, and that sometimes we simply need the right tools, a supportive space, and someone to help us reconnect with that inner wisdom.",
    "I believe we are all energy, and that when we begin to shift our energy we also begin to shift the way we feel, think and move through life. Small, consistent shifts can lead to meaningful and lasting change. And when it is difficult to find those answers on our own, there is nothing wrong with asking someone to help us reconnect with what is already within us.",
    "Today I love creating that same space for every person who comes to see me. A space to slow down, reconnect with yourself, and simply receive care.",
  ],
  credentials: [
    "Reiki Master, Usui system",
    "Access Bars practitioner",
    "Private sessions at Reiki Harmony Wellness Studio, Alamo",
    "Practising at the Spa at Forma Gym, Walnut Creek",
  ],
};

/* ── Testimonials ─────────────────────────────────────────────────────────── */
/**
 * Deliberately empty.
 *
 * Invented quotes attributed to invented clients are fabricated reviews, and
 * for a health adjacent practice that is both dishonest and a real liability.
 *
 * Ask a few real clients for a sentence and permission to use their first name,
 * add them here, and the section appears on the site automatically.
 */
export type Testimonial = { quote: string; name: string; context: string };

export const testimonials: Testimonial[] = [
  // { quote: "…", name: "First name", context: "Client since 2024" },
];

/* ── Navigation ───────────────────────────────────────────────────────────── */

export const navLinks = [
  { label: "Sessions", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Book", href: "/book" },
];
