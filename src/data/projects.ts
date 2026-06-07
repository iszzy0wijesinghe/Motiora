/** @format */

export type ProjectImageRatio = "card" | "hero" | "gallery" | "wide" | "mobile";

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
  ratio?: ProjectImageRatio;
  position?: string;
};

export type ProjectRecord = {
  slug: string;
  title: string;
  category: string;
  client?: string;
  year?: string;

  cardImage?: string;
  cardImagePosition?: string;

  heroImage?: string;
  heroImagePosition?: string;

  galleryImages?: ProjectImage[];

  liveUrl?: string;

  shortDescription: string;
  description: string;

  challenge: string;
  solution: string;
  outcome: string;

  stack: string[];
  services: string[];
  features: string[];
};

export const projectRecords: ProjectRecord[] = [
  {
    slug: "baura-bakers-website",
    title: "Baura Bakers Website",
    category: "Web Platform",
    client: "Baura Bakers",
    year: "2026",

    cardImage: "/project-images/baura-bakers/card.webp",
    cardImagePosition: "center center",

    heroImage: "/project-images/baura-bakers/hero.webp",
    heroImagePosition: "center center",

    liveUrl: "",

    shortDescription:
      "A modern bakery website built to present products clearly, improve customer trust, and guide visitors toward ordering.",

    description:
      "Baura Bakers Website is a polished digital presence for a bakery brand. The website is designed to showcase products, communicate trust, and make the ordering direction simple for customers across desktop and mobile devices.",

    challenge:
      "The business needed a professional website that could present bakery products clearly, improve brand credibility, and support customer ordering without depending only on social media conversations.",

    solution:
      "The website was structured with a product-focused layout, mobile-first sections, clear call-to-actions, brand visuals, and an ordering direction that can later expand into online payments and account-based customer features.",

    outcome:
      "The final direction gives the bakery a stronger online presence, improves product visibility, supports customer trust, and creates a solid foundation for future online ordering and payment integration.",

    stack: ["React", "TypeScript", "Tailwind CSS", "Vite"],

    services: [
      "Website UI Design",
      "Frontend Development",
      "Responsive Layout",
      "Ordering Flow Planning",
    ],

    features: [
      "Product-focused landing sections",
      "Mobile responsive website layout",
      "Customer ordering direction",
      "Premium bakery brand presentation",
      "Future payment gateway readiness",
    ],

    galleryImages: [
      {
        src: "/project-images/baura-bakers/home.webp",
        alt: "Baura Bakers homepage preview",
        caption: "Homepage layout designed around product visibility and brand trust.",
        ratio: "gallery",
        position: "center top",
      },
      {
        src: "/project-images/baura-bakers/products.webp",
        alt: "Baura Bakers product section preview",
        caption: "Product browsing section shaped for clear customer decision-making.",
        ratio: "wide",
        position: "center center",
      },
      {
        src: "/project-images/baura-bakers/mobile.webp",
        alt: "Baura Bakers mobile website preview",
        caption: "Mobile-first experience for browsing and starting an order.",
        ratio: "mobile",
        position: "center top",
      },
    ],
  },
  {
    slug: "business-dashboard-system",
    title: "Business Dashboard System",
    category: "Business System",
    client: "Internal Concept",
    year: "2026",

    cardImage: "/project-images/business-dashboard/card.webp",
    cardImagePosition: "center center",

    heroImage: "/project-images/business-dashboard/hero.webp",
    heroImagePosition: "center center",

    liveUrl: "",

    shortDescription:
      "A dashboard-style interface designed to help teams review activity, records, and business signals faster.",

    description:
      "Business Dashboard System is a structured interface concept focused on operational clarity. It brings summary data, records, and performance signals into a clean dashboard experience for easier daily review.",

    challenge:
      "Business users often need to review different records, reports, and performance details from multiple places, which makes daily monitoring slower and less clear.",

    solution:
      "The dashboard direction uses summary cards, clean data sections, filtering, readable tables, and role-aware interface planning to make business information easier to understand and act on.",

    outcome:
      "The result supports faster review, clearer visibility, and a stronger base for future reporting, internal management, or analytics-driven business tools.",

    stack: ["React", "TypeScript", "REST API", "Dashboard UI"],

    services: [
      "Dashboard UI Planning",
      "Frontend Development",
      "Data View Design",
      "System Flow Planning",
    ],

    features: [
      "Summary analytics sections",
      "Record management layout",
      "Search and filter direction",
      "Role-aware interface planning",
      "Report-friendly structure",
    ],

    galleryImages: [
      {
        src: "/project-images/business-dashboard/overview.webp",
        alt: "Business dashboard overview screen",
        caption: "Dashboard overview with important business summary sections.",
        ratio: "gallery",
        position: "center top",
      },
      {
        src: "/project-images/business-dashboard/table.webp",
        alt: "Business dashboard records table",
        caption: "Record-focused layout for reviewing operational data.",
        ratio: "wide",
        position: "center center",
      },
    ],
  },
  {
    slug: "automation-tool-layer",
    title: "Automation Tool Layer",
    category: "Automation Tool",
    client: "Motiora Tools",
    year: "2026",

    cardImage: "/project-images/automation-tools/card.webp",
    cardImagePosition: "center center",

    heroImage: "/project-images/automation-tools/hero.webp",
    heroImagePosition: "center center",

    liveUrl: "",

    shortDescription:
      "A lightweight tool layer designed to reduce repetitive work and make small business tasks faster.",

    description:
      "Automation Tool Layer represents Motiora’s focused utility direction. Instead of building one large system for every small need, this approach creates fast and practical tools for specific daily tasks.",

    challenge:
      "Many teams spend unnecessary time on repetitive manual actions, small calculations, formatting work, and routine digital tasks that could be simplified.",

    solution:
      "The tool layer is designed around small, focused utilities with simple inputs, fast outputs, responsive interfaces, and reusable logic that can support multiple workflows.",

    outcome:
      "The result helps users save time, reduce manual errors, and complete common tasks with less friction through lightweight digital tools.",

    stack: ["React", "TypeScript", "Utility Logic", "Responsive UI"],

    services: [
      "Tool UI Design",
      "Frontend Development",
      "Workflow Simplification",
      "Reusable Component Planning",
    ],

    features: [
      "Focused single-task tools",
      "Fast loading interface",
      "Simple form-based workflows",
      "Reusable utility components",
      "Mobile-friendly usage",
    ],

    galleryImages: [
      {
        src: "/project-images/automation-tools/tool-preview.webp",
        alt: "Automation tool interface preview",
        caption: "Simple tool interface focused on quick task completion.",
        ratio: "gallery",
        position: "center center",
      },
      {
        src: "/project-images/automation-tools/mobile.webp",
        alt: "Automation tool mobile preview",
        caption: "Responsive layout for mobile usage.",
        ratio: "mobile",
        position: "center top",
      },
    ],
  },
];