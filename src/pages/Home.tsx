import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Boxes,
  CheckCircle2,
  CircleDot,
  FileCode2,
  Gauge,
  Layers3,
  MoveRight,
  Orbit,
  Rocket,
  ShieldCheck,
  Sparkles,
  WandSparkles,
  Wrench,
  Zap,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { Link } from "react-router";
import { featuredProjects, featuredTools } from "../data/site";

const buildFlow = [
  {
    title: "Frame",
    description:
      "Clarify the business problem, target users, workflow, data, and real purpose of the system.",
    icon: Gauge,
  },
  {
    title: "Shape",
    description:
      "Design the structure, screens, user journeys, modules, and product behavior before development.",
    icon: Layers3,
  },
  {
    title: "Build",
    description:
      "Develop the frontend, backend, database, APIs, authentication, dashboards, and integrations.",
    icon: FileCode2,
  },
  {
    title: "Launch",
    description:
      "Deploy, test, optimize performance, prepare analytics, and improve based on real usage.",
    icon: Rocket,
  },
];

const principles = [
  "Business-first product thinking",
  "Clean interface architecture",
  "Fast low-spec performance",
  "Secure data and access flow",
  "Maintainable codebase",
  "Launch-ready deployment",
];

const orbitNodes = [
  { label: "Strategy", icon: Gauge, x: "8%", y: "30%" },
  { label: "UX", icon: Layers3, x: "78%", y: "28%" },
  { label: "Build", icon: FileCode2, x: "72%", y: "72%" },
  { label: "Launch", icon: Rocket, x: "16%", y: "74%" },
];

const galaxyRouteCards = [
  {
    title: "Workflow Strategy",
    eyebrow: "01 · Scope",
    description:
      "We study the business process, users, roles, data flow, and problems before deciding what to build.",
    output: "Clear product scope",
    icon: Gauge,
  },
  {
    title: "Digital Experience",
    eyebrow: "02 · UX/UI",
    description:
      "We design clean web experiences, dashboards, portals, and customer-facing journeys around real user actions.",
    output: "Usable interface plan",
    icon: Layers3,
  },
  {
    title: "System Engineering",
    eyebrow: "03 · Build",
    description:
      "We develop frontend, backend, APIs, database structure, authentication, and business logic as one system.",
    output: "Working software core",
    icon: FileCode2,
  },
  {
    title: "Launch & Improve",
    eyebrow: "04 · Growth",
    description:
      "We deploy, test, optimize, monitor, and prepare the product for real users and future scaling.",
    output: "Live system roadmap",
    icon: Rocket,
  },
];

const capabilityOrbitItems = [
  {
    title: "Business Systems",
    description:
      "Custom ERP-style systems, dashboards, admin panels, portals, POS flows, inventory flows, and internal workflow platforms.",
    icon: Boxes,
    signal: "Systems",
  },
  {
    title: "Web Platforms",
    description:
      "Premium company websites, landing pages, ordering sites, service platforms, and conversion-focused digital presence.",
    icon: Layers3,
    signal: "Web",
  },
  {
    title: "Automation Tools",
    description:
      "Calculators, generators, report helpers, workflow utilities, and small tools that reduce repetitive business work.",
    icon: Wrench,
    signal: "Tools",
  },
  {
    title: "MVP Products",
    description:
      "SaaS ideas, product prototypes, customer portals, startup MVPs, and scalable foundations for future digital products.",
    icon: Rocket,
    signal: "MVP",
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
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.34, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function Label({
  children,
  tone = "lime",
}: {
  children: ReactNode;
  tone?: "lime" | "amber";
}) {
  return (
    <div
      className={`mb-4 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.22em] ${
        tone === "lime" ? "text-[#d8ff73]" : "text-[#f6c85f]"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          tone === "lime" ? "bg-[#d8ff73]" : "bg-[#f6c85f]"
        }`}
      />
      {children}
    </div>
  );
}

function usePerformanceMotion() {
  const reduceMotion = useReducedMotion();
  const [canAnimate, setCanAnimate] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia("(min-width: 900px) and (pointer: fine)");

    const update = () => {
      setCanAnimate(media.matches);
    };

    update();
    media.addEventListener("change", update);

    return () => {
      media.removeEventListener("change", update);
    };
  }, []);

  return !reduceMotion && canAnimate;
}

function ForgeField() {
  const allowMotion = usePerformanceMotion();

  return (
    <motion.div
      className="forge-perspective relative mx-auto min-h-[380px] w-full max-w-[560px] md:min-h-[470px]"
      initial={{ opacity: 0, y: 18, rotateX: 8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d8ff73]/8 blur-2xl" />
      <div className="absolute right-8 top-12 h-44 w-44 rounded-full bg-[#f6c85f]/8 blur-2xl" />

      <svg
        className="absolute inset-0 h-full w-full forge-plane"
        viewBox="0 0 560 470"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="forgeOrbit" x1="70" y1="75" x2="490" y2="395">
            <stop stopColor="#D8FF73" />
            <stop offset="0.55" stopColor="#8AFF80" />
            <stop offset="1" stopColor="#F6C85F" />
          </linearGradient>
        </defs>

        <motion.ellipse
          cx="280"
          cy="235"
          rx="215"
          ry="72"
          stroke="url(#forgeOrbit)"
          strokeWidth="1.35"
          opacity="0.62"
          animate={allowMotion ? { rotate: 360 } : undefined}
          transition={{ duration: 58, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "280px 235px" }}
        />

        <ellipse
          cx="280"
          cy="235"
          rx="175"
          ry="118"
          stroke="rgba(216,255,115,0.16)"
          strokeWidth="1"
          strokeDasharray="8 14"
          opacity="0.42"
        />

        <ellipse
          cx="280"
          cy="235"
          rx="132"
          ry="132"
          stroke="rgba(246,248,239,0.1)"
          strokeWidth="1"
          strokeDasharray="4 12"
          opacity="0.36"
        />

        <circle cx="280" cy="235" r="155" fill="rgba(216,255,115,0.035)" />
      </svg>

      <motion.div
        className="absolute left-1/2 top-1/2 z-20 h-[170px] w-[170px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        animate={allowMotion ? { y: [0, -7, 0] } : undefined}
        transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 rounded-full border border-[#d8ff73]/20 bg-[#d8ff73]/8" />

        <div className="relative grid h-full w-full place-items-center rounded-full border border-white/10 bg-[#0d130d]/70 shadow-[0_0_58px_rgba(216,255,115,0.12)] backdrop-blur-md">
          <div className="absolute inset-4 rounded-full border border-white/[0.06]" />
          <div className="absolute inset-8 rounded-full border border-[#d8ff73]/10" />

          <div className="text-center">
            <div className="mx-auto grid h-[52px] w-[52px] place-items-center rounded-full border border-[#d8ff73]/20 bg-[#d8ff73]/10 text-[#d8ff73]">
              <WandSparkles size={24} />
            </div>

            <p className="mt-4 text-[13px] font-black uppercase tracking-[0.24em] text-white">
              Motiora
            </p>
            <p className="mt-1 text-[9px] font-black uppercase tracking-[0.18em] text-[#8d9a87]">
              software core
            </p>
          </div>
        </div>
      </motion.div>

      {orbitNodes.map((node) => {
        const Icon = node.icon;

        return (
          <div
            key={node.label}
            className="absolute z-30 flex flex-col items-center gap-2 text-center"
            style={{ left: node.x, top: node.y }}
          >
            <span className="grid h-11 w-11 place-items-center rounded-full border border-[#d8ff73]/20 bg-[#0d130d]/70 text-[#d8ff73] backdrop-blur-md">
              <Icon size={18} />
            </span>

            <span className="text-[10px] font-black uppercase tracking-[0.14em] text-[#c3cbbd]">
              {node.label}
            </span>
          </div>
        );
      })}

      <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 items-center gap-3 text-[10px] font-black uppercase tracking-[0.16em] text-[#7d897b]">
        <span className="flex items-center gap-1.5">
          <ShieldCheck size={12} className="text-[#d8ff73]" />
          Secure
        </span>
        <span className="flex items-center gap-1.5">
          <Orbit size={12} className="text-[#d8ff73]" />
          Scalable
        </span>
        <span className="flex items-center gap-1.5">
          <Zap size={12} className="text-[#d8ff73]" />
          Fast
        </span>
      </div>
    </motion.div>
  );
}

function ScrollForge() {
  const ref = useRef<HTMLElement | null>(null);
  const allowMotion = usePerformanceMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const routeLength = useTransform(scrollYProgress, [0.16, 0.72], [0, 1]);
  const routeGlow = useTransform(
    scrollYProgress,
    [0.16, 0.46, 0.72],
    [0.25, 1, 0.35],
  );
  const panelY = useTransform(scrollYProgress, [0, 1], [18, -18]);
  const panelRotateX = useTransform(scrollYProgress, [0, 0.5, 1], [5, 0, -4]);

  return (
    <section ref={ref} className="relative px-5 py-14 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.66fr_1.34fr]">
        <div className="lg:py-8">
          <Reveal>
            <Label>Motiora build galaxy</Label>

            <h2 className="text-balance max-w-xl text-[27px] font-black leading-tight tracking-[-0.035em] text-white md:text-[36px]">
              A compact route from business problem to live software.
            </h2>

            <p className="mt-4 max-w-md text-sm leading-7 text-[#9aa69a]">
              Motiora does not only design screens. We connect strategy,
              interface design, engineering, and launch into one controlled
              software delivery path.
            </p>

            <div className="mt-6 grid gap-2 text-[11px] font-black uppercase tracking-[0.16em] text-[#7d897b]">
              <span className="flex items-center gap-2">
                <CircleDot size={13} className="text-[#d8ff73]" />
                Business-first scope
              </span>
              <span className="flex items-center gap-2">
                <CircleDot size={13} className="text-[#f6c85f]" />
                Clean product structure
              </span>
              <span className="flex items-center gap-2">
                <CircleDot size={13} className="text-[#8aff80]" />
                Launch-ready engineering
              </span>
            </div>
          </Reveal>
        </div>

        <motion.div
          className="forge-perspective relative min-h-[560px] overflow-hidden rounded-[2rem] border border-[#f6f8ef]/[0.08] bg-[#0b0f0b]/52 p-4 forge-depth-shadow md:min-h-[540px] md:p-6"
          style={
            allowMotion
              ? {
                  y: panelY,
                  rotateX: panelRotateX,
                }
              : undefined
          }
        >
          <motion.div
            className="pointer-events-none absolute inset-0 z-0"
            animate={allowMotion ? { rotate: 360 } : undefined}
            transition={{ duration: 72, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d8ff73]/10" />
            <div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#f6c85f]/10" />
            <div className="absolute left-1/2 top-1/2 h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8aff80]/10" />
          </motion.div>

          <svg
            className="pointer-events-none absolute inset-0 z-0 h-full w-full"
            viewBox="0 0 820 540"
            fill="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="motioraBuildOrbitGradient"
                x1="120"
                y1="120"
                x2="700"
                y2="420"
              >
                <stop stopColor="#D8FF73" stopOpacity="0.98" />
                <stop offset="0.5" stopColor="#8AFF80" stopOpacity="0.8" />
                <stop offset="1" stopColor="#F6C85F" stopOpacity="0.9" />
              </linearGradient>

              <radialGradient id="motioraBuildCore" cx="50%" cy="50%" r="50%">
                <stop stopColor="#D8FF73" stopOpacity="0.14" />
                <stop offset="1" stopColor="#D8FF73" stopOpacity="0" />
              </radialGradient>
            </defs>

            <ellipse
              cx="410"
              cy="270"
              rx="285"
              ry="150"
              fill="url(#motioraBuildCore)"
            />

            <ellipse
              cx="410"
              cy="270"
              rx="290"
              ry="154"
              stroke="rgba(246,248,239,0.08)"
              strokeWidth="1.3"
              strokeDasharray="9 18"
            />

            <motion.ellipse
              cx="410"
              cy="270"
              rx="290"
              ry="154"
              stroke="url(#motioraBuildOrbitGradient)"
              strokeWidth="2.4"
              strokeLinecap="round"
              style={
                allowMotion
                  ? {
                      pathLength: routeLength,
                      opacity: routeGlow,
                    }
                  : undefined
              }
            />

            <ellipse
              cx="410"
              cy="270"
              rx="180"
              ry="92"
              stroke="rgba(216,255,115,0.15)"
              strokeWidth="1.05"
              strokeDasharray="7 14"
            />

            <ellipse
              cx="410"
              cy="270"
              rx="112"
              ry="58"
              stroke="rgba(246,200,95,0.13)"
              strokeWidth="1"
              strokeDasharray="5 12"
            />

            {allowMotion && (
              <>
                <motion.circle
                  r="5"
                  fill="#D8FF73"
                  animate={{
                    cx: [120, 410, 700, 410, 120],
                    cy: [270, 116, 270, 424, 270],
                  }}
                  transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                />

                <motion.circle
                  r="4"
                  fill="#F6C85F"
                  animate={{
                    cx: [700, 410, 120, 410, 700],
                    cy: [270, 424, 270, 116, 270],
                  }}
                  transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                />
              </>
            )}
          </svg>

          <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden h-28 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[#d8ff73]/20 bg-[#0d130d]/84 text-center text-[#d8ff73] shadow-[0_0_64px_rgba(216,255,115,0.1)] md:grid">
            <div className="absolute inset-4 rounded-full border border-white/[0.06]" />
            <Sparkles size={28} />
          </div>

          <div className="relative z-20 grid gap-3 md:grid-cols-2">
            {galaxyRouteCards.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  className="relative min-h-[206px] overflow-hidden rounded-[1.45rem] border border-[#f6f8ef]/[0.085] bg-[#070907]/88 p-4 backdrop-blur-md transition hover:border-[#d8ff73]/30 hover:bg-[#d8ff73]/[0.045]"
                  initial={{ opacity: 0, y: 18, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.28 }}
                  transition={{
                    duration: 0.38,
                    ease: "easeOut",
                    delay: index * 0.04,
                  }}
                  whileHover={
                    allowMotion
                      ? {
                          y: -5,
                          scale: 1.01,
                        }
                      : undefined
                  }
                >
                  <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#d8ff73]/[0.045]" />

                  <div className="relative">
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-2xl border border-[#d8ff73]/15 bg-[#0d130d]/72 text-[#d8ff73]">
                        <Icon size={19} />
                      </div>

                      <span className="rounded-full border border-[#f6c85f]/14 bg-[#f6c85f]/[0.055] px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.13em] text-[#f6c85f]">
                        {item.eyebrow}
                      </span>
                    </div>

                    <h3 className="text-base font-black tracking-[-0.02em] text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#9aa69a]">
                      {item.description}
                    </p>

                    <div className="mt-4 rounded-2xl border border-[#d8ff73]/10 bg-[#d8ff73]/[0.045] px-3 py-2">
                      <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#d8ff73]">
                        {item.output}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CapabilityOrbit() {
  const allowMotion = usePerformanceMotion();

  const mainOrbitPath =
    "M90 360 C90 135 1010 135 1010 360 C1010 585 90 585 90 360Z";

  const innerOrbitPath =
    "M245 360 C245 220 855 220 855 360 C855 500 245 500 245 360Z";

  return (
    <section className="relative isolate overflow-visible px-5 pb-8 pt-16 lg:px-8 lg:pb-10 lg:pt-24">
      <div className="relative z-10 mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <Label tone="amber">Capability orbit</Label>

          <h2 className="text-balance text-[27px] font-black leading-tight tracking-[-0.035em] text-white md:text-[36px]">
            Motiora builds software across four connected directions.
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-[#9aa69a]">
            We focus on practical software for real businesses: internal
            systems, public web platforms, automation tools, and MVP foundations
            that can grow into scalable products.
          </p>
        </Reveal>

        <div className="relative mt-20 pb-24 lg:pb-28">
          <div className="pointer-events-none absolute left-1/2 top-[112%] z-0 h-[780px] w-[1320px] -translate-x-1/2 -translate-y-1/2 opacity-100">
            <svg
              className="h-full w-full overflow-visible"
              viewBox="0 0 1100 720"
              fill="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient
                  id="capabilityWideOrbitGradient"
                  x1="90"
                  y1="165"
                  x2="1010"
                  y2="585"
                >
                  <stop stopColor="#D8FF73" stopOpacity="0.92" />
                  <stop offset="0.5" stopColor="#8AFF80" stopOpacity="0.68" />
                  <stop offset="1" stopColor="#F6C85F" stopOpacity="0.86" />
                </linearGradient>

                <linearGradient
                  id="capabilityInnerOrbitGradient"
                  x1="245"
                  y1="220"
                  x2="855"
                  y2="500"
                >
                  <stop stopColor="#F6C85F" stopOpacity="0.66" />
                  <stop offset="1" stopColor="#D8FF73" stopOpacity="0.62" />
                </linearGradient>
              </defs>

              <path
                d={mainOrbitPath}
                stroke="rgba(216,255,115,0.18)"
                strokeWidth="1.35"
                strokeDasharray="10 18"
                vectorEffect="non-scaling-stroke"
              />

              <path
                d={innerOrbitPath}
                stroke="rgba(246,200,95,0.13)"
                strokeWidth="1"
                strokeDasharray="7 16"
                vectorEffect="non-scaling-stroke"
              />

              <path
                d={mainOrbitPath}
                stroke="url(#capabilityWideOrbitGradient)"
                strokeWidth="2.35"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="140 1320"
                vectorEffect="non-scaling-stroke"
              >
                {allowMotion && (
                  <animate
                    attributeName="stroke-dashoffset"
                    values="0;-1460"
                    dur="28s"
                    repeatCount="indefinite"
                  />
                )}
              </path>

              <path
                d={innerOrbitPath}
                stroke="url(#capabilityInnerOrbitGradient)"
                strokeWidth="1.55"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="90 940"
                vectorEffect="non-scaling-stroke"
              >
                {allowMotion && (
                  <animate
                    attributeName="stroke-dashoffset"
                    values="0;1030"
                    dur="34s"
                    repeatCount="indefinite"
                  />
                )}
              </path>

              {allowMotion && (
                <>
                  <circle r="4.8" fill="#D8FF73">
                    <animateMotion
                      dur="22s"
                      repeatCount="indefinite"
                      path={mainOrbitPath}
                    />
                  </circle>

                  <circle r="4" fill="#F6C85F">
                    <animateMotion
                      dur="26s"
                      repeatCount="indefinite"
                      path={innerOrbitPath}
                    />
                  </circle>
                </>
              )}
            </svg>
          </div>

          <div className="relative z-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {capabilityOrbitItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.03}>
                  <motion.article
                    className="relative min-h-[250px] overflow-hidden rounded-[1.55rem] border border-white/[0.09] bg-[#070907]/94 p-5 shadow-[0_18px_46px_rgba(0,0,0,0.22)] transition hover:border-[#f6c85f]/30 hover:bg-[#0b0f0b]/96"
                    whileHover={
                      allowMotion
                        ? {
                            y: -5,
                            scale: 1.01,
                          }
                        : undefined
                    }
                    transition={{ duration: 0.22, ease: "easeOut" }}
                  >
                    <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#f6c85f]/[0.035]" />
                    <div className="absolute -bottom-16 left-8 h-28 w-28 rounded-full bg-[#d8ff73]/[0.028]" />

                    <div className="relative">
                      <div className="mb-5 flex items-center justify-between gap-3">
                        <div className="grid h-11 w-11 place-items-center rounded-2xl border border-[#f6c85f]/14 bg-[#f6c85f]/10 text-[#f6c85f]">
                          <Icon size={20} />
                        </div>

                        <span className="rounded-full border border-[#d8ff73]/12 bg-[#d8ff73]/[0.055] px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-[#d8ff73]">
                          {item.signal}
                        </span>
                      </div>

                      <h3 className="text-lg font-black tracking-[-0.02em] text-white">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-[#9aa69a]">
                        {item.description}
                      </p>

                      <div className="mt-6 h-px w-full bg-gradient-to-r from-[#f6c85f]/35 via-[#d8ff73]/18 to-transparent" />

                      <p className="mt-4 text-[10px] font-black uppercase tracking-[0.16em] text-[#64705f]">
                        Motiora software scope · 0{index + 1}
                      </p>
                    </div>
                  </motion.article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <div className="overflow-hidden">
      <section className="relative min-h-[92svh] px-5 pb-12 pt-28 lg:px-8 lg:pb-16 lg:pt-[7.35rem]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[13%] -z-10 h-[180px] w-[76vw] max-w-[1280px] -translate-x-1/2 opacity-70 sm:h-[220px] lg:top-[12%] lg:h-[260px] lg:w-[72vw]"
        >
          <svg
            viewBox="0 0 1200 260"
            className="h-full w-full overflow-visible motiora-svg-watermark"
          >
            <defs>
              <clipPath id="motiora-clip-m">
                <rect x="120" y="0" width="210" height="260" />
              </clipPath>

              <clipPath id="motiora-clip-o1">
                <rect x="310" y="0" width="135" height="260" />
              </clipPath>

              <clipPath id="motiora-clip-t">
                <rect x="435" y="0" width="100" height="260" />
              </clipPath>

              <clipPath id="motiora-clip-i">
                <rect x="525" y="0" width="75" height="260" />
              </clipPath>

              <clipPath id="motiora-clip-o2">
                <rect x="590" y="0" width="135" height="260" />
              </clipPath>

              <clipPath id="motiora-clip-r">
                <rect x="715" y="0" width="105" height="260" />
              </clipPath>

              <clipPath id="motiora-clip-a">
                <rect x="810" y="0" width="155" height="260" />
              </clipPath>
            </defs>

            <text
              x="600"
              y="150"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="210"
              className="motiora-svg-base-word"
            >
              Motiora
            </text>

            {[
              { clipId: "motiora-clip-m", delay: "0s" },
              { clipId: "motiora-clip-o1", delay: "6s" },
              { clipId: "motiora-clip-t", delay: "12s" },
              { clipId: "motiora-clip-i", delay: "18s" },
              { clipId: "motiora-clip-o2", delay: "24s" },
              { clipId: "motiora-clip-r", delay: "30s" },
              { clipId: "motiora-clip-a", delay: "36s" },
            ].map((item) => (
              <text
                key={item.clipId}
                x="600"
                y="150"
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="210"
                className="motiora-svg-route-word"
                clipPath={`url(#${item.clipId})`}
                style={{ animationDelay: item.delay }}
              >
                Motiora
              </text>
            ))}
          </svg>
        </div>

        <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <Label>Motiora software company</Label>

            <h1 className="text-balance max-w-2xl text-[33px] font-black leading-[1.05] tracking-[-0.045em] text-white sm:text-[42px] lg:text-[48px]">
              We build digital systems that{" "}
              <span className="forge-gradient">move businesses forward.</span>
            </h1>

            <p className="mt-5 max-w-xl text-[15px] leading-7 text-[#aeb8aa]">
              Motiora designs and engineers business platforms, public web
              systems, automation tools, and future-ready products with clean
              interfaces, reliable code, and launch-focused execution.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="forge-primary group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-black transition hover:-translate-y-0.5"
              >
                Start a project
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/projects"
                className="forge-ghost inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-[#dce5d8] transition hover:-translate-y-0.5 hover:text-[#d8ff73]"
              >
                View work
                <MoveRight size={16} />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-[11px] font-black uppercase tracking-[0.16em] text-[#7d897b]">
              {["Business systems", "Web platforms", "Automation tools"].map(
                (item) => (
                  <span key={item} className="flex items-center gap-2">
                    <CircleDot size={13} className="text-[#d8ff73]" />
                    {item}
                  </span>
                ),
              )}
            </div>
          </motion.div>

          <ForgeField />
        </div>
      </section>

      <div className="forge-line" />

      <ScrollForge />

      <CapabilityOrbit />

      <section className="relative z-10 px-5 pb-16 pt-10 lg:px-8 lg:pb-24 lg:pt-14">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-8">
            <Label>Execution framework</Label>

            <h2 className="text-balance max-w-2xl text-[27px] font-black leading-tight tracking-[-0.035em] text-white md:text-[36px]">
              Built with a practical software delivery framework.
            </h2>
          </Reveal>

          <div className="grid gap-3 lg:grid-cols-4">
            {buildFlow.map((step, index) => {
              const Icon = step.icon;

              return (
                <Reveal key={step.title} delay={index * 0.04}>
                  <div className="min-h-[188px] rounded-[1.35rem] border border-white/[0.07] bg-white/[0.022] p-4 transition hover:border-[#d8ff73]/25 hover:bg-[#d8ff73]/[0.04]">
                    <div className="mb-6 flex items-center justify-between">
                      <div className="grid h-10 w-10 place-items-center rounded-2xl bg-[#d8ff73]/10 text-[#d8ff73]">
                        <Icon size={19} />
                      </div>

                      <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#64705f]">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-base font-black text-white">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#9aa69a]">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[1fr_0.72fr]">
          <Reveal>
            <div className="rounded-[1.7rem] border border-white/[0.08] bg-white/[0.022] p-5 md:p-6">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <Label>Selected work</Label>

                  <h2 className="text-[24px] font-black tracking-[-0.03em] text-white md:text-[30px]">
                    Practical systems with clear business value.
                  </h2>
                </div>

                <Link
                  to="/projects"
                  className="forge-ghost hidden items-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold text-white transition hover:text-[#d8ff73] sm:inline-flex"
                >
                  See work
                  <ArrowRight size={15} />
                </Link>
              </div>

              <div className="divide-y divide-white/[0.08]">
                {featuredProjects.map((project) => (
                  <article
                    key={project.title}
                    className="grid gap-3 py-4 sm:grid-cols-[36px_1fr_auto]"
                  >
                    <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#d8ff73]/10 text-[#d8ff73]">
                      <FileCode2 size={17} />
                    </div>

                    <div>
                      <h3 className="text-sm font-black text-white">
                        {project.title}
                      </h3>
                      <p className="mt-1 max-w-xl text-sm leading-6 text-[#9aa69a]">
                        {project.description}
                      </p>
                    </div>

                    <span className="h-fit rounded-full bg-[#f6c85f]/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-[#f6c85f]">
                      {project.category}
                    </span>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="rounded-[1.7rem] border border-white/[0.08] bg-[#0d130d]/65 p-5 md:p-6">
              <Label tone="amber">Tool layer</Label>

              <h2 className="text-[24px] font-black tracking-[-0.03em] text-white md:text-[30px]">
                Small tools that solve real daily problems.
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#9aa69a]">
                Alongside client systems, Motiora experiments with lightweight
                public utilities that are fast to launch, easy to use, and built
                around practical workflows.
              </p>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {featuredTools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-white/10 bg-white/[0.032] px-3.5 py-2 text-[11px] font-black uppercase tracking-[0.12em] text-[#c3cbbd] transition hover:border-[#d8ff73]/30 hover:bg-[#d8ff73]/[0.08] hover:text-[#d8ff73]"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <Link
                to="/tools"
                className="forge-ghost mt-6 inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold text-white transition hover:text-[#d8ff73]"
              >
                Open tools
                <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl rounded-[1.8rem] border border-[#d8ff73]/18 bg-[#0d130d]/68 p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
            <Reveal>
              <div className="mb-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.24em] text-[#d8ff73]">
                <Sparkles size={14} />
                Engineering standard
              </div>

              <h2 className="text-balance text-[26px] font-black leading-tight tracking-[-0.035em] text-white md:text-[35px]">
                Software should feel premium and stay maintainable.
              </h2>
            </Reveal>

            <div className="grid gap-3 sm:grid-cols-2">
              {principles.map((item, index) => (
                <Reveal key={item} delay={index * 0.03}>
                  <div className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-[#070907]/42 px-4 py-3.5">
                    <CheckCircle2
                      size={17}
                      className="shrink-0 text-[#d8ff73]"
                    />
                    <span className="text-sm font-semibold text-[#c3cbbd]">
                      {item}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-start justify-between gap-6 border-y border-white/[0.08] py-10 md:flex-row md:items-center">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#d8ff73]">
                Start with Motiora
              </p>

              <h2 className="mt-4 text-balance max-w-2xl text-[26px] font-black leading-tight tracking-[-0.035em] text-white md:text-[35px]">
                Have a business workflow worth turning into software?
              </h2>
            </div>

            <Link
              to="/contact"
              className="forge-primary inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-black transition hover:-translate-y-0.5"
            >
              Start a project
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;