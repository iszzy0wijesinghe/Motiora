import type { ReactNode } from "react";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  CloudUpload,
  Cpu,
  Download,
  ExternalLink,
  FileArchive,
  FileCheck2,
  FileImage,
  FileText,
  Gauge,
  Image,
  Layers3,
  LockKeyhole,
  Merge,
  Minimize2,
  Repeat2,
  ScanText,
  ShieldCheck,
  Sparkles,
  WandSparkles,
  Zap,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router";

import fileGripLogo from "../assets/filegrip-logo.webp";

const FILEGRIP_URL = "https://filegrip.cc";
const FILEGRIP_TOOLS_URL = "https://filegrip.cc/tools";

const productFacts = [
  {
    label: "Status",
    value: "Live in production",
    icon: BadgeCheck,
  },
  {
    label: "Platform",
    value: "Browser-based tools",
    icon: Layers3,
  },
  {
    label: "File coverage",
    value: "PDF, document and image",
    icon: FileArchive,
  },
  {
    label: "Built by",
    value: "Motiora Software Solutions",
    icon: Cpu,
  },
];

const toolFamilies = [
  {
    title: "PDF operations",
    description:
      "Essential utilities for combining, separating, compressing, rotating and organizing PDF documents.",
    icon: FileText,
    items: [
      "Merge PDF",
      "Split PDF",
      "Compress PDF",
      "Rotate PDF",
      "Reorder pages",
      "Delete pages",
    ],
  },
  {
    title: "File conversion",
    description:
      "Focused conversion workflows between PDF, Word, image and other commonly used file formats.",
    icon: Repeat2,
    items: [
      "PDF to Word",
      "Word to PDF",
      "PDF to Image",
      "Image to PDF",
      "Document conversion",
      "Image conversion",
    ],
  },
  {
    title: "Image processing",
    description:
      "Practical image tools for reducing file size, changing dimensions and preparing visual assets.",
    icon: Image,
    items: [
      "Compress image",
      "Resize image",
      "Crop image",
      "Rotate image",
      "Convert image",
      "Format optimization",
    ],
  },
  {
    title: "Document security",
    description:
      "Utilities designed for protecting, unlocking, signing, redacting and watermarking sensitive documents.",
    icon: ShieldCheck,
    items: [
      "Protect PDF",
      "Unlock PDF",
      "Redact PDF",
      "Sign PDF",
      "Add watermark",
      "Secure documents",
    ],
  },
];

const featuredCapabilities = [
  {
    title: "Merge and organize",
    description:
      "Combine multiple documents into a single structured output through a direct file workflow.",
    icon: Merge,
  },
  {
    title: "Compress intelligently",
    description:
      "Reduce file size while preserving practical quality for sharing, storage and online use.",
    icon: Minimize2,
  },
  {
    title: "Convert formats",
    description:
      "Move files between useful document and image formats without installing desktop software.",
    icon: Repeat2,
  },
  {
    title: "Protect information",
    description:
      "Use dedicated security workflows for password protection, redaction and controlled document handling.",
    icon: LockKeyhole,
  },
];

const workflowSteps = [
  {
    number: "01",
    title: "Select the operation",
    description:
      "Choose the exact PDF, document, image or security task required for the file.",
    icon: Layers3,
  },
  {
    number: "02",
    title: "Add the file",
    description:
      "Upload the required input using a focused interface created for that specific operation.",
    icon: CloudUpload,
  },
  {
    number: "03",
    title: "Process the task",
    description:
      "FileGrip performs the selected file operation through its production processing system.",
    icon: WandSparkles,
  },
  {
    number: "04",
    title: "Receive the result",
    description:
      "Download the completed output and continue with the next task without unnecessary steps.",
    icon: Download,
  },
];

const engineeringStandards = [
  {
    title: "Purpose-focused tools",
    description:
      "Each utility is designed around one clear file operation rather than a complicated multipurpose interface.",
    icon: Gauge,
  },
  {
    title: "Controlled processing",
    description:
      "Uploads, processing states, errors and downloads are presented through a structured workflow.",
    icon: FileCheck2,
  },
  {
    title: "Privacy-aware design",
    description:
      "The product experience is shaped around responsible file handling and understandable user actions.",
    icon: ShieldCheck,
  },
  {
    title: "Production maintenance",
    description:
      "The platform is actively developed, monitored and improved by Motiora Software Solutions.",
    icon: Zap,
  },
];

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: 0.42,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({
  children,
  tone = "orange",
}: {
  children: ReactNode;
  tone?: "orange" | "lime";
}) {
  const isOrange = tone === "orange";

  return (
    <div
      className={`mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] ${
        isOrange
          ? "border-[#ff6b0f]/25 bg-[#ff6b0f]/10 text-[#ff9a59]"
          : "border-[#c9ff3b]/20 bg-[#c9ff3b]/10 text-[#c9ff3b]"
      }`}
    >
      <Sparkles size={12} />
      {children}
    </div>
  );
}

function FileGripLogo({
  className = "",
}: {
  className?: string;
}) {
  return (
    <img
      src={fileGripLogo}
      alt="FileGrip"
      draggable={false}
      className={`h-auto object-contain ${className}`}
    />
  );
}

function ProductSystemVisual() {
  const reduceMotion = useReducedMotion();

  const nodes = [
    {
      label: "PDF",
      icon: FileText,
      position: "left-[7%] top-[14%]",
    },
    {
      label: "Image",
      icon: FileImage,
      position: "right-[5%] top-[19%]",
    },
    {
      label: "Secure",
      icon: LockKeyhole,
      position: "left-[3%] bottom-[17%]",
    },
    {
      label: "Convert",
      icon: Repeat2,
      position: "right-[4%] bottom-[13%]",
    },
  ];

  return (
    <motion.div
      className="relative mx-auto min-h-[420px] w-full max-w-[540px]"
      initial={{ opacity: 0, y: 20, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.58,
        delay: 0.08,
        ease: "easeOut",
      }}
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff6b0f]/10 blur-[80px]" />

      <svg
        viewBox="0 0 540 420"
        fill="none"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient
            id="fileGripRoute"
            x1="70"
            y1="55"
            x2="475"
            y2="365"
          >
            <stop stopColor="#ff6b0f" stopOpacity="0.9" />
            <stop offset="0.5" stopColor="#ff9b5c" stopOpacity="0.45" />
            <stop offset="1" stopColor="#ff6b0f" stopOpacity="0.82" />
          </linearGradient>
        </defs>

        <ellipse
          cx="270"
          cy="210"
          rx="205"
          ry="128"
          stroke="rgba(255,255,255,0.07)"
          strokeWidth="1"
          strokeDasharray="8 13"
        />

        <ellipse
          cx="270"
          cy="210"
          rx="158"
          ry="97"
          stroke="rgba(255,107,15,0.13)"
          strokeWidth="1"
        />

        <motion.ellipse
          cx="270"
          cy="210"
          rx="205"
          ry="128"
          stroke="url(#fileGripRoute)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="120 980"
          animate={
            reduceMotion
              ? undefined
              : {
                  strokeDashoffset: [0, -1100],
                }
          }
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </svg>

      <motion.div
        className="absolute left-1/2 top-1/2 z-10 w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-white/[0.1] bg-[#111419]/92 p-6 text-center shadow-[0_32px_85px_rgba(0,0,0,0.46)] backdrop-blur-xl"
        animate={
          reduceMotion
            ? undefined
            : {
                y: [0, -7, 0],
              }
        }
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-[1.1rem] bg-[#ff6b0f] text-white shadow-[0_16px_40px_rgba(255,107,15,0.25)]">
          <CloudUpload size={25} />
        </div>

        <FileGripLogo className="mx-auto mt-6 w-[145px]" />

        <p className="mt-4 text-sm font-medium text-white">
          One product.
          <br />
          Many file operations.
        </p>

        <div className="mt-5 flex items-center justify-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#27d87b]" />

          <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-white/45">
            Production online
          </span>
        </div>
      </motion.div>

      {nodes.map((node, index) => {
        const Icon = node.icon;

        return (
          <motion.div
            key={node.label}
            className={`absolute z-20 ${node.position}`}
            animate={
              reduceMotion
                ? undefined
                : {
                    y: [0, index % 2 === 0 ? -5 : 5, 0],
                }
            }
            transition={{
              duration: 5 + index * 0.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="flex items-center gap-2 rounded-full border border-white/[0.1] bg-[#101318]/90 px-3 py-2 shadow-[0_14px_38px_rgba(0,0,0,0.3)] backdrop-blur-md">
              <Icon size={14} className="text-[#ff6b0f]" />

              <span className="text-[10px] font-medium text-white/65">
                {node.label}
              </span>
            </div>
          </motion.div>
        );
      })}

      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-4 text-[9px] font-medium uppercase tracking-[0.15em] text-white/30">
        <span>Upload</span>
        <ArrowRight size={11} className="text-[#ff6b0f]" />
        <span>Process</span>
        <ArrowRight size={11} className="text-[#ff6b0f]" />
        <span>Download</span>
      </div>
    </motion.div>
  );
}

function Tools() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative isolate px-5 pb-16 pt-28 lg:px-8 lg:pb-24 lg:pt-[7.5rem]">
        <div className="pointer-events-none absolute left-[-220px] top-0 h-[500px] w-[500px] rounded-full bg-[#ff6b0f]/[0.07] blur-[120px]" />

        <div className="pointer-events-none absolute right-[-230px] top-10 h-[530px] w-[530px] rounded-full bg-[#ff6b0f]/[0.045] blur-[130px]" />

        <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] [background-size:76px_76px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />

        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.54,
              ease: "easeOut",
            }}
          >
            <SectionLabel>
              Independent Motiora product · Live
            </SectionLabel>

            <FileGripLogo className="w-[176px] sm:w-[210px]" />

            <h1 className="mt-8 max-w-3xl text-balance text-[37px] font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[59px]">
              File tools designed to make difficult tasks feel{" "}
              <span className="text-[#ff7420]">straightforward.</span>
            </h1>

            <p className="mt-6 max-w-xl text-[15px] font-normal leading-7 text-[#a3a8b0] sm:text-base">
              FileGrip is a production platform for converting, compressing,
              organizing, editing and protecting PDF, document and image files
              through focused online workflows.
            </p>

            <p className="mt-3 max-w-xl text-sm font-normal leading-7 text-[#747b85]">
              Created, developed, owned and maintained by Motiora Software
              Solutions.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={FILEGRIP_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-[#ff6b0f] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_44px_rgba(255,107,15,0.23)] transition hover:-translate-y-0.5 hover:bg-[#ff7d2e]"
              >
                Visit FileGrip

                <ExternalLink
                  size={16}
                  className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href={FILEGRIP_TOOLS_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/[0.11] bg-white/[0.035] px-6 py-3.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:border-[#ff6b0f]/35 hover:bg-[#ff6b0f]/[0.055]"
              >
                Browse tools
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-2.5">
              {[
                "No installation",
                "Simple workflow",
                "Production platform",
                "Privacy-aware",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-[11px] font-normal text-[#9ba1a9]"
                >
                  <CheckCircle2 size={13} className="text-[#29d87c]" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <ProductSystemVisual />
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#ff6b0f]/30 to-transparent" />

      {/* Product facts */}
      <section className="px-5 py-10 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {productFacts.map((fact, index) => {
            const Icon = fact.icon;

            return (
              <Reveal key={fact.label} delay={index * 0.035}>
                <div className="h-full rounded-[1.3rem] border border-white/[0.075] bg-white/[0.022] p-4">
                  <Icon size={18} className="text-[#ff6b0f]" />

                  <p className="mt-4 text-[9px] font-medium uppercase tracking-[0.17em] text-white/35">
                    {fact.label}
                  </p>

                  <p className="mt-2 text-sm font-medium leading-6 text-white">
                    {fact.value}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Product introduction */}
      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <SectionLabel>Product purpose</SectionLabel>

              <h2 className="text-balance text-[29px] font-semibold leading-tight tracking-[-0.035em] text-white md:text-[39px]">
                A focused platform for everyday file operations.
              </h2>

              <p className="mt-5 max-w-md text-sm font-normal leading-7 text-[#8f959e]">
                FileGrip brings frequently needed file tasks into one consistent
                product while keeping each individual tool direct and easy to
                understand.
              </p>

              <a
                href={FILEGRIP_URL}
                target="_blank"
                rel="noreferrer"
                className="group mt-7 inline-flex items-center gap-2 text-sm font-medium text-[#ff7b2c]"
              >
                Explore the live product

                <ExternalLink
                  size={15}
                  className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2">
            {featuredCapabilities.map((capability, index) => {
              const Icon = capability.icon;

              return (
                <Reveal key={capability.title} delay={index * 0.04}>
                  <motion.article
                    className="group relative h-full min-h-[230px] overflow-hidden rounded-[1.5rem] border border-white/[0.085] bg-[#0d1015]/82 p-5 transition hover:border-[#ff6b0f]/30 hover:bg-[#111419]"
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            y: -4,
                          }
                    }
                    transition={{
                      duration: 0.22,
                      ease: "easeOut",
                    }}
                  >
                    <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#ff6b0f]/[0.04] transition group-hover:bg-[#ff6b0f]/[0.075]" />

                    <div className="relative">
                      <div className="grid h-11 w-11 place-items-center rounded-2xl border border-[#ff6b0f]/18 bg-[#ff6b0f]/10 text-[#ff6b0f]">
                        <Icon size={20} />
                      </div>

                      <h3 className="mt-6 text-lg font-semibold tracking-[-0.02em] text-white">
                        {capability.title}
                      </h3>

                      <p className="mt-3 text-sm font-normal leading-6 text-[#858b94]">
                        {capability.description}
                      </p>
                    </div>
                  </motion.article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tool ecosystem */}
      <section className="relative px-5 py-16 lg:px-8 lg:py-24">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff6b0f]/[0.025] blur-[110px]" />

        <div className="relative mx-auto max-w-6xl">
          <Reveal className="max-w-2xl">
            <SectionLabel>Tool ecosystem</SectionLabel>

            <h2 className="text-balance text-[29px] font-semibold leading-tight tracking-[-0.035em] text-white md:text-[39px]">
              Four connected areas. One consistent product.
            </h2>

            <p className="mt-4 max-w-xl text-sm font-normal leading-7 text-[#8f959e]">
              Users can move between PDF, conversion, image and document
              security tools without learning a different product each time.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {toolFamilies.map((family, index) => {
              const Icon = family.icon;

              return (
                <Reveal key={family.title} delay={index * 0.04}>
                  <motion.article
                    className={`relative h-full overflow-hidden rounded-[1.65rem] border border-white/[0.085] p-6 ${
                      index === 0 || index === 3
                        ? "bg-[#111419]"
                        : "bg-[#0c0f14]"
                    }`}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            y: -4,
                          }
                    }
                    transition={{
                      duration: 0.22,
                      ease: "easeOut",
                    }}
                  >
                    <div className="absolute -right-24 -top-24 h-52 w-52 rounded-full bg-[#ff6b0f]/[0.04]" />

                    <div className="relative">
                      <div className="flex items-start gap-4">
                        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#ff6b0f] text-white shadow-[0_15px_36px_rgba(255,107,15,0.16)]">
                          <Icon size={22} />
                        </div>

                        <div>
                          <p className="text-[9px] font-medium uppercase tracking-[0.17em] text-[#ff7b2c]">
                            Area 0{index + 1}
                          </p>

                          <h3 className="mt-2 text-xl font-semibold tracking-[-0.025em] text-white">
                            {family.title}
                          </h3>
                        </div>
                      </div>

                      <p className="mt-5 text-sm font-normal leading-7 text-[#898f98]">
                        {family.description}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {family.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-[10px] font-normal text-white/55"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="mt-8 flex justify-center">
            <a
              href={FILEGRIP_TOOLS_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-[#ff6b0f]/25 bg-[#ff6b0f]/10 px-5 py-3 text-sm font-medium text-[#ff8d45] transition hover:border-[#ff6b0f]/45 hover:bg-[#ff6b0f]/15"
            >
              View all FileGrip tools

              <ExternalLink
                size={15}
                className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </Reveal>
        </div>
      </section>

      {/* Workflow */}
      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.76fr_1.24fr]">
          <Reveal>
            <div>
              <SectionLabel>Product workflow</SectionLabel>

              <h2 className="text-balance text-[29px] font-semibold leading-tight tracking-[-0.035em] text-white md:text-[39px]">
                A predictable route from input to result.
              </h2>

              <p className="mt-5 max-w-md text-sm font-normal leading-7 text-[#8f959e]">
                FileGrip keeps its core interaction model consistent across
                different file operations, reducing confusion and unnecessary
                decisions.
              </p>

              <div className="mt-8 rounded-[1.4rem] border border-[#ff6b0f]/18 bg-[#ff6b0f]/[0.055] p-5">
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#ff8a3e]">
                  Core interaction
                </p>

                <p className="mt-3 text-lg font-medium text-white">
                  Choose → Upload → Process → Download
                </p>
              </div>
            </div>
          </Reveal>

          <div className="relative">
            <div className="pointer-events-none absolute bottom-6 left-[25px] top-6 hidden w-px bg-gradient-to-b from-[#ff6b0f]/50 via-[#ff6b0f]/20 to-transparent sm:block" />

            <div className="grid gap-4">
              {workflowSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <Reveal key={step.title} delay={index * 0.04}>
                    <div className="relative grid gap-4 rounded-[1.45rem] border border-white/[0.08] bg-[#0d1015]/76 p-5 sm:grid-cols-[52px_1fr] sm:items-start">
                      <div className="relative z-10 grid h-[52px] w-[52px] place-items-center rounded-full border border-[#ff6b0f]/25 bg-[#101318] text-[#ff6b0f]">
                        <Icon size={20} />
                      </div>

                      <div>
                        <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#ff7b2c]">
                          Step {step.number}
                        </p>

                        <h3 className="mt-2 text-lg font-semibold tracking-[-0.02em] text-white">
                          {step.title}
                        </h3>

                        <p className="mt-2 text-sm font-normal leading-6 text-[#858b94]">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Engineering */}
      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal className="max-w-2xl">
            <SectionLabel>Engineering approach</SectionLabel>

            <h2 className="text-balance text-[29px] font-semibold leading-tight tracking-[-0.035em] text-white md:text-[39px]">
              Developed as a production product, not a design experiment.
            </h2>

            <p className="mt-4 max-w-xl text-sm font-normal leading-7 text-[#8f959e]">
              FileGrip combines product design, processing infrastructure,
              responsive interfaces and ongoing platform maintenance.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {engineeringStandards.map((standard, index) => {
              const Icon = standard.icon;

              return (
                <Reveal key={standard.title} delay={index * 0.035}>
                  <div className="h-full min-h-[245px] rounded-[1.5rem] border border-white/[0.08] bg-white/[0.022] p-5">
                    <div className="grid h-11 w-11 place-items-center rounded-2xl border border-[#ff6b0f]/20 bg-[#ff6b0f]/10 text-[#ff6b0f]">
                      <Icon size={20} />
                    </div>

                    <h3 className="mt-6 text-lg font-semibold tracking-[-0.02em] text-white">
                      {standard.title}
                    </h3>

                    <p className="mt-3 text-sm font-normal leading-6 text-[#858b94]">
                      {standard.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Motiora ownership */}
      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="relative overflow-hidden rounded-[1.8rem] border border-[#c9ff3b]/18 bg-[#0d130d]/78 p-6 md:p-9">
              <div className="pointer-events-none absolute right-[-130px] top-[-130px] h-[380px] w-[380px] rounded-full bg-[#c9ff3b]/[0.055] blur-[85px]" />

              <div className="relative grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
                <div>
                  <SectionLabel tone="lime">
                    Motiora product ownership
                  </SectionLabel>

                  <h2 className="text-balance text-[28px] font-semibold leading-tight tracking-[-0.035em] text-white md:text-[38px]">
                    FileGrip is developed and operated by Motiora Software
                    Solutions.
                  </h2>
                </div>

                <div>
                  <p className="text-sm font-normal leading-7 text-[#9aa69a]">
                    Motiora is responsible for the FileGrip product experience,
                    technical architecture, processing workflows, maintenance,
                    improvements and continued production development.
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {[
                      {
                        title: "Product design",
                        icon: Sparkles,
                      },
                      {
                        title: "Platform engineering",
                        icon: Cpu,
                      },
                      {
                        title: "Ongoing maintenance",
                        icon: Gauge,
                      },
                    ].map((item) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.title}
                          className="rounded-[1.15rem] border border-[#c9ff3b]/10 bg-[#c9ff3b]/[0.035] p-4"
                        >
                          <Icon size={18} className="text-[#c9ff3b]" />

                          <p className="mt-3 text-xs font-medium text-white">
                            {item.title}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-20 pt-12 lg:px-8 lg:pb-28 lg:pt-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-start justify-between gap-7 border-y border-white/[0.085] py-10 md:flex-row md:items-center">
            <div>
              <FileGripLogo className="w-[135px]" />

              <h2 className="mt-5 max-w-2xl text-balance text-[28px] font-semibold leading-tight tracking-[-0.035em] text-white md:text-[37px]">
                Choose the file task. FileGrip handles the workflow.
              </h2>

              <p className="mt-3 text-sm font-normal text-[#858b94]">
                Open the production platform and select the tool you need.
              </p>
            </div>

            <div className="flex shrink-0 flex-wrap gap-3">
              <a
                href={FILEGRIP_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-[#ff6b0f] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_44px_rgba(255,107,15,0.22)] transition hover:-translate-y-0.5 hover:bg-[#ff7d2e]"
              >
                Open FileGrip

                <ExternalLink
                  size={16}
                  className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:border-[#c9ff3b]/25 hover:text-[#c9ff3b]"
              >
                Contact Motiora
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Tools;