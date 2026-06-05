import type { ReactNode } from "react";
import {
  ArrowRight,
  CheckCircle2,
  FileCode2,
  Gauge,
  Layers3,
  LineChart,
  MoveRight,
  ShieldCheck,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router";
import { featuredProjects } from "../data/site";

const projectSignals = [
  {
    title: "Problem clarity",
    description:
      "Each project starts by identifying the actual workflow issue, business gap, or user friction.",
    icon: Target,
  },
  {
    title: "System structure",
    description:
      "Screens, modules, roles, data flow, and navigation are planned before the interface is polished.",
    icon: Layers3,
  },
  {
    title: "Technical execution",
    description:
      "Frontend, backend, database, APIs, and integrations are treated as one connected product.",
    icon: FileCode2,
  },
  {
    title: "Launch value",
    description:
      "The final result must be usable, maintainable, fast enough, and ready for real business operation.",
    icon: Gauge,
  },
];

const proofPoints = [
  "Clear user journey",
  "Useful business flow",
  "Clean interface states",
  "Maintainable code direction",
  "Performance-aware UI",
  "Launch-ready structure",
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

function ProjectsPageOrbit() {
  const reduceMotion = useReducedMotion();

  const orbitPath =
    "M90 235 C90 80 725 80 725 235 C725 390 90 390 90 235Z";

  return (
    <div className="pointer-events-none absolute right-[-190px] top-[-95px] hidden h-[460px] w-[820px] opacity-90 lg:block">
      <svg
        className="h-full w-full overflow-visible"
        viewBox="0 0 820 470"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="projectProofOrbitGradient"
            x1="90"
            y1="95"
            x2="725"
            y2="390"
          >
            <stop stopColor="#D8FF73" stopOpacity="0.88" />
            <stop offset="0.55" stopColor="#8AFF80" stopOpacity="0.58" />
            <stop offset="1" stopColor="#F6C85F" stopOpacity="0.78" />
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
          stroke="url(#projectProofOrbitGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="95 900"
          vectorEffect="non-scaling-stroke"
        >
          {!reduceMotion && (
            <animate
              attributeName="stroke-dashoffset"
              values="0;-995"
              dur="26s"
              repeatCount="indefinite"
            />
          )}
        </path>
      </svg>
    </div>
  );
}

function Projects() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="overflow-hidden">
      <section className="relative px-5 pb-14 pt-28 lg:px-8 lg:pb-20 lg:pt-[7.35rem]">
        <ProjectsPageOrbit />

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Label>Project proof</Label>

              <h1 className="text-balance max-w-3xl text-[34px] font-black leading-[1.05] tracking-[-0.045em] text-white sm:text-[44px] lg:text-[56px]">
                Work shaped around{" "}
                <span className="forge-gradient">problems, systems, and measurable value.</span>
              </h1>

              <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[#aeb8aa]">
                This page is where Motiora work is presented as proof: what the
                project needed, how the product direction was shaped, and what
                kind of value the final system was designed to create.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="forge-primary group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-black transition hover:-translate-y-0.5"
                >
                  Discuss a project
                  <ArrowRight
                    size={17}
                    className="transition group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  to="/tools"
                  className="forge-ghost inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-[#dce5d8] transition hover:-translate-y-0.5 hover:text-[#d8ff73]"
                >
                  View tools
                  <MoveRight size={16} />
                </Link>
              </div>
            </motion.div>

            <Reveal delay={0.06}>
              <div className="rounded-[1.8rem] border border-white/[0.08] bg-white/[0.022] p-5">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#d8ff73]">
                      Project lens
                    </p>
                    <h2 className="mt-2 text-xl font-black tracking-[-0.03em] text-white">
                      How each work item is judged
                    </h2>
                  </div>

                  <div className="grid h-12 w-12 place-items-center rounded-2xl border border-[#d8ff73]/14 bg-[#d8ff73]/10 text-[#d8ff73]">
                    <LineChart size={22} />
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {["Need", "Flow", "Build", "Outcome"].map((item, index) => (
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
                  ))}
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
            <Label tone="amber">Case file index</Label>

            <h2 className="text-balance text-[27px] font-black leading-tight tracking-[-0.035em] text-white md:text-[36px]">
              Each project is treated like a product decision, not a visual task.
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#9aa69a]">
              Instead of repeating what Motiora builds, this section shows how
              work is evaluated: problem, direction, system value, and delivery
              quality.
            </p>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {projectSignals.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.04}>
                  <motion.article
                    className="relative min-h-[245px] overflow-hidden rounded-[1.55rem] border border-white/[0.085] bg-[#070907]/76 p-5 transition hover:border-[#d8ff73]/28 hover:bg-[#0b0f0b]/92"
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
            <Label>Work records</Label>

            <h2 className="text-balance text-[27px] font-black leading-tight tracking-[-0.035em] text-white md:text-[36px]">
              Selected work, shown as delivery records.
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#9aa69a]">
              These entries are intentionally structured like records, so each
              project can later expand into a full case study with screenshots,
              stack details, and measurable outcomes.
            </p>
          </Reveal>

          <div className="grid gap-4">
            {featuredProjects.map((project, index) => (
              <Reveal key={project.title} delay={index * 0.04}>
                <motion.article
                  className="group rounded-[1.6rem] border border-white/[0.08] bg-white/[0.022] p-5 transition hover:border-[#d8ff73]/24 hover:bg-[#d8ff73]/[0.035]"
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -4,
                        }
                  }
                  transition={{ duration: 0.22, ease: "easeOut" }}
                >
                  <div className="grid gap-5 md:grid-cols-[56px_1fr_auto] md:items-start">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl border border-[#d8ff73]/14 bg-[#d8ff73]/10 text-[#d8ff73]">
                      <FileCode2 size={22} />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg font-black tracking-[-0.02em] text-white">
                          {project.title}
                        </h3>

                        <span className="rounded-full bg-[#f6c85f]/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-[#f6c85f]">
                          {project.category}
                        </span>
                      </div>

                      <p className="mt-2 max-w-3xl text-sm leading-7 text-[#9aa69a]">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.16em] text-[#64705f] transition group-hover:text-[#d8ff73]">
                      Record 0{index + 1}
                      <ArrowRight size={15} />
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 border-t border-white/[0.07] pt-5 md:grid-cols-3">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#64705f]">
                        Problem
                      </p>
                      <p className="mt-2 text-sm leading-6 text-[#c3cbbd]">
                        Manual, unclear, or under-optimized digital workflow.
                      </p>
                    </div>

                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#64705f]">
                        Direction
                      </p>
                      <p className="mt-2 text-sm leading-6 text-[#c3cbbd]">
                        Structured product flow with clear interface behavior.
                      </p>
                    </div>

                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#64705f]">
                        Value
                      </p>
                      <p className="mt-2 text-sm leading-6 text-[#c3cbbd]">
                        Better usability, cleaner operation, and stronger launch
                        readiness.
                      </p>
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
              <Label tone="amber">Proof checklist</Label>

              <h2 className="text-balance text-[26px] font-black leading-tight tracking-[-0.035em] text-white md:text-[34px]">
                What a project must prove before it feels complete.
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#9aa69a]">
                A finished project should not only look premium. It should show
                that the user flow, technical structure, and business use case
                are strong enough to continue growing.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2">
            {proofPoints.map((item, index) => (
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
          <div className="flex flex-col items-start justify-between gap-6 border-y border-white/[0.08] py-10 md:flex-row md:items-center">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#d8ff73]">
                Build the next record
              </p>

              <h2 className="mt-4 text-balance max-w-2xl text-[26px] font-black leading-tight tracking-[-0.035em] text-white md:text-[35px]">
                Have a project that needs to become a strong case study?
              </h2>
            </div>

            <Link
              to="/contact"
              className="forge-primary inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-black transition hover:-translate-y-0.5"
            >
              Start discussion
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;