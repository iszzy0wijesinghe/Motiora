import {
  Boxes,
  Code2,
  FileCode2,
  FolderKanban,
  Gauge,
  Rocket,
  ShieldCheck,
  Sparkles,
  Workflow,
  Wrench,
  Zap,
} from "lucide-react";

export const navItems = [
  { label: "Work", href: "/projects" },
  { label: "Tools", href: "/tools" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const motioraArms = [
  {
    name: "Motiora Projects",
    status: "Active",
    short: "Client systems",
    description:
      "Custom websites, platforms, ERP, POS, CMS, HRM tools, dashboards, and operational software.",
    icon: FolderKanban,
  },
  {
    name: "Motiora Tools",
    status: "Active",
    short: "Public utilities",
    description:
      "Fast browser tools for files, documents, images, text, QR, productivity, and developer workflows.",
    icon: Wrench,
  },
  {
    name: "Motiora Dev",
    status: "Coming Soon",
    short: "Open engineering",
    description:
      "Reusable components, developer-first libraries, engineering experiments, and public contributions.",
    icon: Code2,
  },
  {
    name: "Motiora Pro",
    status: "Coming Soon",
    short: "Future SaaS",
    description:
      "Subscription products built by Motiora for businesses, teams, creators, and operators.",
    icon: Rocket,
  },
];

export const capabilities = [
  {
    title: "Web Platforms",
    description:
      "High-performance company websites, portals, dashboards, admin panels, and SaaS interfaces.",
    icon: FileCode2,
  },
  {
    title: "Business Systems",
    description:
      "ERP, POS, CMS, HRM, inventory, sales, reports, and workflow automation systems.",
    icon: Boxes,
  },
  {
    title: "System Architecture",
    description:
      "Clean structure, secure foundations, maintainable modules, and scalable data flow.",
    icon: Workflow,
  },
  {
    title: "Polished UX",
    description:
      "Minimal, responsive, accessible interfaces designed for real users and daily business work.",
    icon: Sparkles,
  },
];

export const featuredProjects = [
  {
    title: "Business Website Platform",
    category: "Website",
    description:
      "A fast company website with project showcases, strong mobile performance, and contact capture.",
    impact: "Public launch",
  },
  {
    title: "Retail POS System",
    category: "POS",
    description:
      "Sales, inventory, products, customers, reports, and role-based access for daily retail operations.",
    impact: "Operations",
  },
  {
    title: "HRM Workflow Tool",
    category: "HRM",
    description:
      "Employee workflows, review stages, dashboards, approvals, and admin reporting.",
    impact: "Process control",
  },
];

export const featuredTools = [
  "PDF Tools",
  "Image Converter",
  "Document Converter",
  "JSON Formatter",
  "QR Generator",
  "Text Utilities",
];

export const buildFlow = [
  {
    title: "Discover",
    description: "Understand the goal, users, workflow, and business problem.",
    icon: Gauge,
  },
  {
    title: "Architect",
    description: "Plan the interface, data structure, modules, and system flow.",
    icon: Workflow,
  },
  {
    title: "Build",
    description: "Develop clean UI, APIs, logic, database, and integrations.",
    icon: Zap,
  },
  {
    title: "Launch",
    description: "Deploy, test, optimize, and prepare the system for real users.",
    icon: Rocket,
  },
  {
    title: "Improve",
    description: "Refine performance, usability, features, and product direction.",
    icon: ShieldCheck,
  },
];