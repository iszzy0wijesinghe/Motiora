/** @format */

import type { ReactNode } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  FileCode2,
  Gauge,
  Layers3,
  MoveRight,
  Rocket,
  Target,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router";
import { projectRecords } from "../data/projects";

const projectSignals = [
  {
    title: "Clear business purpose",
    description:
      "Every project starts with the business goal, customer need, and workflow problem it should solve.",
    icon: Target,
  },
  {
    title: "Structured product flow",
    description:
      "Pages, modules, actions, and user journeys are planned before the interface is polished.",
    icon: Layers3,
  },
  {
    title: "Reliable build direction",
    description:
      "Frontend, backend, data, integrations, and future scaling are considered as one connected product.",
    icon: FileCode2,
  },
  {
    title: "Customer-ready delivery",
    description:
      "The final result should feel usable, professional, maintainable, and ready to support real business use.",
    icon: Gauge,
  },
];

const proofPoints = [
  "Clear customer journey",
  "Business-focused structure",
  "Professional interface direction",
  "Maintainable technical base",
  "Responsive user experience",
  "Ready for future improvements",
];

const caseMap = [
  {
    title: "Visual preview",
    description: "Project cards show the first approved visual direction.",
    icon: Layers3,
  },
  {
    title: "Project story",
    description: "Each detail page explains the challenge and solution.",
    icon: Target,
  },
  {
    title: "System value",
    description: "Features and outcomes are written for customer understanding.",
    icon: FileCode2,
  },
  {
    title: "Next action",
    description: "Visitors can view the site or start a similar project.",
    icon: Rocket,
  },
];

const previewGradients = [
  "from-[#c9ff3b]/22 via-[#c9ff3b]/10 to-[#070907]",
  "from-[#f6c85f]/22 via-[#c9ff3b]/10 to-[#070907]",
  "from-[#c9ff3b]/20 via-[#c9ff3b]/10 to-[#070907]",
  "from-[#c9ff3b]/16 via-[#f6c85f]/12 to-[#070907]",
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
        tone === "lime" ? "text-[#c9ff3b]" : "text-[#f6c85f]"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          tone === "lime" ? "bg-[#c9ff3b]" : "bg-[#f6c85f]"
        }`}
      />
      {children}
    </div>
  );
}

function ProjectsPageOrbit() {
  const reduceMotion = useReducedMotion();

  const orbitPath = "M90 235 C90 80 725 80 725 235 C725 390 90 390 90 235Z";

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
            <stop stopColor="#c9ff3b" stopOpacity="0.88" />
            <stop offset="0.55" stopColor="#c9ff3b" stopOpacity="0.58" />
            <stop offset="1" stopColor="#F6C85F" stopOpacity="0.78" />
          </linearGradient>
        </defs>

        <path
          d={orbitPath}
          stroke="rgba(201,255,59,0.13)"
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
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Label>Selected work</Label>

              <h1 className="text-balance max-w-3xl text-[34px] font-black leading-[1.04] tracking-[-0.05em] text-white sm:text-[44px] lg:text-[58px]">
                Digital projects built to look sharp, work clearly, and support{" "}
                <span className="forge-gradient">real business goals.</span>
              </h1>

              <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[#aeb8aa]">
                Explore Motiora project work through customer-ready previews.
                Each project page shows what was built, why it matters, how it
                works, and how it can support a real business workflow.
              </p>

              <div className="mt-8 grid gap-3 sm:max-w-xl sm:grid-cols-2">
                <Link
                  to="/contact"
                  className="forge-primary group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-black transition hover:-translate-y-0.5"
                >
                  Start a project
                  <ArrowRight
                    size={17}
                    className="transition group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  to="/tools"
                  className="forge-ghost inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-[#dce5d8] transition hover:-translate-y-0.5 hover:text-[#c9ff3b]"
                >
                  View tools
                  <MoveRight size={16} />
                </Link>
              </div>
            </motion.div>

            <Reveal delay={0.06}>
              <div className="relative overflow-hidden rounded-[1.9rem] border border-white/[0.08] bg-[#0b0f0b]/72 p-5 shadow-[0_22px_70px_rgba(0,0,0,0.28)]">
                <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#c9ff3b]/10 blur-3xl" />
                <div className="absolute -bottom-20 left-10 h-44 w-44 rounded-full bg-[#f6c85f]/10 blur-3xl" />

                <div className="relative">
                  <div className="mb-6">
                    <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#c9ff3b]">
                      Project experience
                    </p>

                    <h2 className="mt-2 text-[24px] font-black leading-tight tracking-[-0.04em] text-white">
                      Each case page is built to explain the work clearly.
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-[#9aa69a]">
                      Instead of a flat gallery, each project has a dedicated
                      page with visuals, context, features, value, and next
                      actions.
                    </p>
                  </div>

                  <div className="grid gap-3">
                    {caseMap.map((item, index) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.title}
                          className="group flex items-start gap-3 rounded-[1.15rem] border border-white/[0.07] bg-[#070907]/68 p-3.5 transition hover:border-[#c9ff3b]/24 hover:bg-[#c9ff3b]/[0.035]"
                        >
                          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl border border-[#c9ff3b]/14 bg-[#c9ff3b]/10 text-[#c9ff3b]">
                            <Icon size={18} />
                          </div>

                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#64705f]">
                                0{index + 1}
                              </p>
                              <p className="text-sm font-black tracking-[-0.02em] text-white">
                                {item.title}
                              </p>
                            </div>

                            <p className="mt-1.5 text-xs leading-5 text-[#8d9a87]">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="forge-line" />

      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <Label>Project showcase</Label>

              <h2 className="text-balance text-[27px] font-black leading-tight tracking-[-0.035em] text-white md:text-[36px]">
                Featured projects with dedicated case pages.
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#9aa69a]">
                These cards give a quick overview. Open a project to view the
                full project story, approved images, core features, technology
                stack, and site link when available.
              </p>
            </div>

            <Link
              to="/contact"
              className="forge-ghost inline-flex w-fit items-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold text-white transition hover:text-[#c9ff3b]"
            >
              Build something similar
              <ArrowRight size={15} />
            </Link>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2">
            {projectRecords.map((project, index) => {
              const gradient =
                previewGradients[index % previewGradients.length];

              return (
                <Reveal key={project.slug} delay={index * 0.04}>
                  <motion.article
                    className="group relative overflow-hidden rounded-[1.7rem] border border-white/[0.08] bg-[#070907]/76 transition hover:border-[#c9ff3b]/28 hover:bg-[#0b0f0b]/92"
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            y: -5,
                            scale: 1.005,
                          }
                    }
                    transition={{ duration: 0.22, ease: "easeOut" }}
                  >
                    <div className="relative aspect-[16/10] overflow-hidden border-b border-white/[0.07] bg-[#0d130d]">
                      {project.cardImage ? (
                        <img
                          src={project.cardImage}
                          alt={project.title}
                          className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.04] group-hover:opacity-100"
                          style={{
                            objectPosition:
                              project.cardImagePosition || "center center",
                          }}
                          draggable={false}
                        />
                      ) : (
                        <div
                          className={`relative h-full w-full bg-gradient-to-br ${gradient}`}
                        >
                          <div className="absolute left-6 top-6 rounded-full border border-[#c9ff3b]/18 bg-[#070907]/72 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-[#c9ff3b] backdrop-blur-md">
                            Preview coming soon
                          </div>

                          <div className="absolute bottom-6 left-6 right-6">
                            <div className="mb-4 grid h-14 w-14 place-items-center rounded-2xl border border-[#c9ff3b]/18 bg-[#070907]/70 text-[#c9ff3b] backdrop-blur-md">
                              <FileCode2 size={24} />
                            </div>

                            <div className="h-3 w-3/4 rounded-full bg-white/12" />
                            <div className="mt-3 h-3 w-1/2 rounded-full bg-[#c9ff3b]/18" />
                          </div>

                          <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#c9ff3b]/10 blur-3xl" />
                          <div className="absolute -bottom-20 left-10 h-44 w-44 rounded-full bg-[#f6c85f]/10 blur-3xl" />
                        </div>
                      )}

                      <div className="absolute right-4 top-4 rounded-full bg-[#f6c85f]/12 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-[#f6c85f] backdrop-blur-md">
                        {project.category}
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#64705f]">
                            Project 0{index + 1}
                          </p>

                          <h3 className="mt-2 text-xl font-black tracking-[-0.03em] text-white">
                            {project.title}
                          </h3>
                        </div>

                        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#c9ff3b]/16 bg-[#c9ff3b]/10 text-[#c9ff3b]">
                          <Rocket size={18} />
                        </div>
                      </div>

                      <p className="mt-3 line-clamp-3 text-sm leading-7 text-[#9aa69a]">
                        {project.shortDescription}
                      </p>

                      <div className="mt-5 grid gap-3 sm:grid-cols-3">
                        <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] px-3 py-3">
                          <p className="text-[9px] font-black uppercase tracking-[0.16em] text-[#64705f]">
                            Focus
                          </p>
                          <p className="mt-1 text-xs font-semibold text-[#c3cbbd]">
                            {project.category}
                          </p>
                        </div>

                        <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] px-3 py-3">
                          <p className="text-[9px] font-black uppercase tracking-[0.16em] text-[#64705f]">
                            Delivery
                          </p>
                          <p className="mt-1 text-xs font-semibold text-[#c3cbbd]">
                            {project.year || "Latest"}
                          </p>
                        </div>

                        <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] px-3 py-3">
                          <p className="text-[9px] font-black uppercase tracking-[0.16em] text-[#64705f]">
                            Images
                          </p>
                          <p className="mt-1 text-xs font-semibold text-[#c3cbbd]">
                            {project.galleryImages?.length || 0} views
                          </p>
                        </div>
                      </div>

                      <div className="mt-5 flex flex-wrap gap-2.5">
                        <Link
                          to={`/projects/${project.slug}`}
                          className="inline-flex items-center gap-2 rounded-full border border-[#c9ff3b]/18 bg-[#c9ff3b]/10 px-4 py-2.5 text-xs font-black text-[#c9ff3b] transition hover:bg-[#c9ff3b] hover:text-[#11160b]"
                        >
                          View project
                          <ArrowRight size={14} />
                        </Link>

                        {project.liveUrl ? (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2.5 text-xs font-bold text-[#c3cbbd] transition hover:border-[#c9ff3b]/28 hover:text-[#c9ff3b]"
                          >
                            Visit site
                            <ExternalLink size={13} />
                          </a>
                        ) : (
                          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2.5 text-xs font-bold text-[#9aa69a]">
                            Site link pending
                            <ExternalLink size={13} />
                          </span>
                        )}
                      </div>
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
            <Label tone="amber">Delivery standard</Label>

            <h2 className="text-balance text-[27px] font-black leading-tight tracking-[-0.035em] text-white md:text-[36px]">
              Designed to be useful after launch, not only impressive on screen.
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#9aa69a]">
              A strong project should communicate clearly, support the business
              process, stay maintainable, and be ready for future improvements.
            </p>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {projectSignals.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.04}>
                  <motion.article
                    className="relative min-h-[245px] overflow-hidden rounded-[1.55rem] border border-white/[0.085] bg-[#070907]/76 p-5 transition hover:border-[#c9ff3b]/28 hover:bg-[#0b0f0b]/92"
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
                    <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#c9ff3b]/[0.04]" />

                    <div className="relative">
                      <div className="mb-5 flex items-center justify-between">
                        <div className="grid h-11 w-11 place-items-center rounded-2xl border border-[#c9ff3b]/15 bg-[#c9ff3b]/10 text-[#c9ff3b]">
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
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[0.72fr_1.28fr]">
          <Reveal>
            <div className="rounded-[1.7rem] border border-[#c9ff3b]/18 bg-[#0d130d]/68 p-6 md:p-8">
              <Label tone="amber">Project checklist</Label>

              <h2 className="text-balance text-[26px] font-black leading-tight tracking-[-0.035em] text-white md:text-[34px]">
                What every finished project should deliver.
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#9aa69a]">
                A project should not only look premium. It should guide
                customers clearly, support the workflow, and give the business a
                stronger digital base.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2">
            {proofPoints.map((item, index) => (
              <Reveal key={item} delay={index * 0.03}>
                <div className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-[#070907]/54 px-4 py-3.5">
                  <CheckCircle2 size={17} className="shrink-0 text-[#c9ff3b]" />
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
          <div className="relative overflow-hidden rounded-[1.8rem] border border-white/[0.08] bg-[#0d130d]/68 p-6 md:p-8">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#c9ff3b]/10 blur-3xl" />

            <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#c9ff3b]">
                  Start your project
                </p>

                <h2 className="mt-4 text-balance max-w-2xl text-[26px] font-black leading-tight tracking-[-0.035em] text-white md:text-[35px]">
                  Need a website, system, or tool that feels ready for real
                  customers?
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-7 text-[#9aa69a]">
                  Share the workflow, business goal, or idea. Motiora can shape
                  it into a clear digital product direction.
                </p>
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
        </div>
      </section>
    </div>
  );
}

export default Projects;