import type { ReactNode } from "react";
import {
  ArrowRight,
  Calculator,
  CheckCircle2,
  Clock3,
  FileText,
  Gauge,
  Layers3,
  Search,
  Sparkles,
  WandSparkles,
  Wrench,
  Zap,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router";
import { featuredTools } from "../data/site";

const toolGroups = [
  {
    title: "Business Calculators",
    description:
      "Simple calculators for pricing, stock, profit, totals, estimates, and repeat business decisions.",
    icon: Calculator,
    signal: "Calculate",
  },
  {
    title: "Workflow Helpers",
    description:
      "Small utilities that reduce manual steps, clean repeated tasks, and speed up daily operations.",
    icon: Wrench,
    signal: "Assist",
  },
  {
    title: "Content Generators",
    description:
      "Quick generators for structured text, labels, summaries, templates, and business-ready outputs.",
    icon: WandSparkles,
    signal: "Generate",
  },
  {
    title: "Data Tools",
    description:
      "Lightweight tools for searching, filtering, formatting, checking, and understanding useful data.",
    icon: Search,
    signal: "Organize",
  },
];

const toolStandards = [
  "Fast to open",
  "Easy to understand",
  "Focused on one job",
  "Useful without training",
  "Works on normal devices",
  "Ready to improve later",
];

const labSteps = [
  {
    title: "Spot a repeated task",
    description:
      "We look for small actions people repeat every day inside business workflows.",
    icon: Clock3,
  },
  {
    title: "Reduce the steps",
    description:
      "The tool is shaped to remove friction, avoid confusion, and make the result faster.",
    icon: Gauge,
  },
  {
    title: "Build a usable utility",
    description:
      "The final tool stays lightweight, clear, and focused instead of becoming a heavy system.",
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

function ToolLabOrbit() {
  const reduceMotion = useReducedMotion();

  const orbitPath =
    "M80 230 C80 80 720 80 720 230 C720 380 80 380 80 230Z";

  return (
    <div className="pointer-events-none absolute right-[-210px] top-[-105px] hidden h-[460px] w-[820px] opacity-90 lg:block">
      <svg
        className="h-full w-full overflow-visible"
        viewBox="0 0 820 460"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="toolsOrbitGradient"
            x1="80"
            y1="90"
            x2="720"
            y2="380"
          >
            <stop stopColor="#D8FF73" stopOpacity="0.88" />
            <stop offset="0.55" stopColor="#8AFF80" stopOpacity="0.56" />
            <stop offset="1" stopColor="#F6C85F" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        <path
          d={orbitPath}
          stroke="rgba(216,255,115,0.13)"
          strokeWidth="1.2"
          strokeDasharray="10 18"
          vectorEffect="non-scaling-stroke"
        />

        <path
          d={orbitPath}
          stroke="url(#toolsOrbitGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="90 900"
          vectorEffect="non-scaling-stroke"
        >
          {!reduceMotion && (
            <animate
              attributeName="stroke-dashoffset"
              values="0;-990"
              dur="28s"
              repeatCount="indefinite"
            />
          )}
        </path>
      </svg>
    </div>
  );
}

function Tools() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="overflow-hidden">
      <section className="relative px-5 pb-14 pt-28 lg:px-8 lg:pb-20 lg:pt-[7.35rem]">
        <ToolLabOrbit />

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Label>Motiora tool lab</Label>

              <h1 className="text-balance max-w-3xl text-[34px] font-black leading-[1.05] tracking-[-0.045em] text-white sm:text-[44px] lg:text-[56px]">
                Lightweight tools for{" "}
                <span className="forge-gradient">
                  faster everyday decisions.
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[#aeb8aa]">
                Motiora tools are small, focused utilities built to solve one
                useful task at a time — calculators, generators, workflow
                helpers, and data tools that make daily work easier.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="forge-primary group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-black transition hover:-translate-y-0.5"
                >
                  Request a tool
                  <ArrowRight
                    size={17}
                    className="transition group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  to="/projects"
                  className="forge-ghost inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-[#dce5d8] transition hover:-translate-y-0.5 hover:text-[#d8ff73]"
                >
                  View projects
                  <Layers3 size={16} />
                </Link>
              </div>
            </motion.div>

            <Reveal delay={0.06}>
              <div className="rounded-[1.8rem] border border-white/[0.08] bg-white/[0.022] p-5">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#d8ff73]">
                      Tool principle
                    </p>

                    <h2 className="mt-2 text-xl font-black tracking-[-0.03em] text-white">
                      Small utility, clear result.
                    </h2>
                  </div>

                  <div className="grid h-12 w-12 place-items-center rounded-2xl border border-[#d8ff73]/14 bg-[#d8ff73]/10 text-[#d8ff73]">
                    <Sparkles size={22} />
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {["Input", "Process", "Output", "Reuse"].map(
                    (item, index) => (
                      <div
                        key={item}
                        className="rounded-[1.15rem] border border-white/[0.07] bg-[#070907]/58 p-4"
                      >
                        <p className="text-[24px] font-black tracking-[-0.04em] text-[#d8ff73]">
                          0{index + 1}
                        </p>
                        <p className="mt-2 text-xs font-black uppercase tracking-[0.14em] text-[#8d9a87]">
                          {item}
                        </p>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="forge-line" />

      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-8 max-w-2xl">
            <Label tone="amber">Tool categories</Label>

            <h2 className="text-balance text-[27px] font-black leading-tight tracking-[-0.035em] text-white md:text-[36px]">
              Tools are grouped by the kind of work they make easier.
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#9aa69a]">
              The goal is not to build large systems here. The goal is to create
              focused utilities that save time, reduce mistakes, and support
              quick decisions.
            </p>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {toolGroups.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.04}>
                  <motion.article
                    className="relative min-h-[255px] overflow-hidden rounded-[1.55rem] border border-white/[0.085] bg-[#070907]/76 p-5 transition hover:border-[#d8ff73]/28 hover:bg-[#0b0f0b]/92"
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            y: -5,
                            scale: 1.01,
                          }
                    }
                    transition={{ duration: 0.22, ease: "easeOut" }}
                  >
                    <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#d8ff73]/[0.04]" />

                    <div className="relative">
                      <div className="mb-5 flex items-center justify-between">
                        <div className="grid h-11 w-11 place-items-center rounded-2xl border border-[#d8ff73]/15 bg-[#d8ff73]/10 text-[#d8ff73]">
                          <Icon size={20} />
                        </div>

                        <span className="rounded-full border border-[#f6c85f]/12 bg-[#f6c85f]/[0.055] px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-[#f6c85f]">
                          {item.signal}
                        </span>
                      </div>

                      <h3 className="text-lg font-black tracking-[-0.02em] text-white">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-[#9aa69a]">
                        {item.description}
                      </p>

                      <div className="mt-6 h-px w-full bg-gradient-to-r from-[#d8ff73]/35 via-[#f6c85f]/18 to-transparent" />

                      <p className="mt-4 text-[10px] font-black uppercase tracking-[0.16em] text-[#64705f]">
                        Utility area · 0{index + 1}
                      </p>
                    </div>
                  </motion.article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-8 max-w-2xl">
            <Label>Available tools</Label>

            <h2 className="text-balance text-[27px] font-black leading-tight tracking-[-0.035em] text-white md:text-[36px]">
              A growing list of focused utilities.
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#9aa69a]">
              These tools can start as simple public utilities and later grow
              into stronger product features or business workflow modules.
            </p>
          </Reveal>

          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {featuredTools.map((tool, index) => (
              <Reveal key={tool} delay={index * 0.03}>
                <motion.article
                  className="group relative overflow-hidden rounded-[1.45rem] border border-white/[0.08] bg-white/[0.022] p-5 transition hover:border-[#d8ff73]/24 hover:bg-[#d8ff73]/[0.035]"
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -4,
                        }
                  }
                  transition={{ duration: 0.22, ease: "easeOut" }}
                >
                  <div className="absolute -right-14 -top-14 h-28 w-28 rounded-full bg-[#f6c85f]/[0.04]" />

                  <div className="relative">
                    <div className="mb-5 flex items-center justify-between gap-3">
                      <div className="grid h-11 w-11 place-items-center rounded-2xl border border-[#d8ff73]/14 bg-[#d8ff73]/10 text-[#d8ff73]">
                        <FileText size={20} />
                      </div>

                      <span className="text-[11px] font-black uppercase tracking-[0.18em] text-[#64705f]">
                        Tool 0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-lg font-black tracking-[-0.02em] text-white">
                      {tool}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#9aa69a]">
                      A focused Motiora utility designed to support a clear,
                      repeatable task with a clean and simple workflow.
                    </p>

                    <div className="mt-5 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.16em] text-[#64705f] transition group-hover:text-[#d8ff73]">
                      Utility record
                      <ArrowRight size={15} />
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[0.72fr_1.28fr]">
          <Reveal>
            <div className="rounded-[1.7rem] border border-[#d8ff73]/18 bg-[#0d130d]/68 p-6 md:p-8">
              <Label tone="amber">Tool quality</Label>

              <h2 className="text-balance text-[26px] font-black leading-tight tracking-[-0.035em] text-white md:text-[34px]">
                A tool is useful only when it stays simple.
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#9aa69a]">
                Motiora tools avoid unnecessary complexity. Each tool should
                open fast, explain itself clearly, and produce a useful output
                without making the user think too much.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2">
            {toolStandards.map((item, index) => (
              <Reveal key={item} delay={index * 0.03}>
                <div className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-[#070907]/54 px-4 py-3.5">
                  <CheckCircle2 size={17} className="shrink-0 text-[#d8ff73]" />
                  <span className="text-sm font-semibold text-[#c3cbbd]">
                    {item}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-8 max-w-2xl">
            <Label>Tool lab process</Label>

            <h2 className="text-balance text-[27px] font-black leading-tight tracking-[-0.035em] text-white md:text-[36px]">
              From repeated task to reusable utility.
            </h2>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-3">
            {labSteps.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.04}>
                  <div className="min-h-[215px] rounded-[1.45rem] border border-white/[0.08] bg-white/[0.022] p-5">
                    <div className="mb-6 flex items-center justify-between">
                      <div className="grid h-11 w-11 place-items-center rounded-2xl border border-[#f6c85f]/14 bg-[#f6c85f]/10 text-[#f6c85f]">
                        <Icon size={20} />
                      </div>

                      <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#64705f]">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-lg font-black tracking-[-0.02em] text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#9aa69a]">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-start justify-between gap-6 border-y border-white/[0.08] py-10 md:flex-row md:items-center">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#d8ff73]">
                Request a utility
              </p>

              <h2 className="mt-4 text-balance max-w-2xl text-[26px] font-black leading-tight tracking-[-0.035em] text-white md:text-[35px]">
                Have a repeated task that should become a simple tool?
              </h2>
            </div>

            <Link
              to="/contact"
              className="forge-primary inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-black transition hover:-translate-y-0.5"
            >
              Request tool
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Tools;