import type { ReactNode } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Compass,
  Eye,
  FileCode2,
  Gauge,
  Layers3,
  MessageSquare,
  MoveRight,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router";

const identityCards = [
  {
    title: "Product-minded",
    description:
      "Motiora treats every website, platform, or tool as a product with users, goals, structure, and future direction.",
    icon: Target,
  },
  {
    title: "Design-aware",
    description:
      "Interfaces are shaped to feel premium, but the design always supports clarity, speed, and real user actions.",
    icon: Eye,
  },
  {
    title: "Engineering-focused",
    description:
      "Code structure, data flow, performance, and maintainability matter from the first version.",
    icon: FileCode2,
  },
];

const studioPrinciples = [
  {
    title: "Clarity before complexity",
    description:
      "A simple, understandable system is stronger than a crowded interface with unnecessary features.",
    icon: Compass,
  },
  {
    title: "Systems before screens",
    description:
      "The workflow, data, roles, states, and actions are understood before visual polish is added.",
    icon: Layers3,
  },
  {
    title: "Performance is part of design",
    description:
      "A premium interface should still feel smooth on normal devices, not only on high-end machines.",
    icon: Zap,
  },
  {
    title: "Launch is not the end",
    description:
      "A good system should be ready to improve after real users begin using it.",
    icon: Rocket,
  },
];

const workingStyle = [
  "Understand the real workflow before proposing screens",
  "Keep navigation, states, and actions easy to follow",
  "Build frontend and backend with one product direction",
  "Avoid unnecessary complexity in the first version",
  "Prioritize clean structure for future changes",
  "Prepare the product for real launch conditions",
];

const notJust = [
  {
    title: "Not only visual design",
    description:
      "Motiora cares about the full product experience, not only how the page looks.",
  },
  {
    title: "Not only development",
    description:
      "The build is connected to user behavior, business logic, and launch readiness.",
  },
  {
    title: "Not only quick delivery",
    description:
      "Speed matters, but the work should still stay understandable, stable, and maintainable.",
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

function AboutOrbit() {
  const reduceMotion = useReducedMotion();

  const orbitPath =
    "M85 230 C85 80 720 80 720 230 C720 380 85 380 85 230Z";

  return (
    <div className="pointer-events-none absolute right-[-210px] top-[-110px] hidden h-[460px] w-[820px] opacity-90 lg:block">
      <svg
        className="h-full w-full overflow-visible"
        viewBox="0 0 820 460"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="aboutOrbitGradient"
            x1="85"
            y1="90"
            x2="720"
            y2="380"
          >
            <stop stopColor="#c9ff3b" stopOpacity="0.88" />
            <stop offset="0.55" stopColor="#c9ff3b" stopOpacity="0.56" />
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
          stroke="url(#aboutOrbitGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="95 900"
          vectorEffect="non-scaling-stroke"
        >
          {!reduceMotion && (
            <animate
              attributeName="stroke-dashoffset"
              values="0;-995"
              dur="28s"
              repeatCount="indefinite"
            />
          )}
        </path>
      </svg>
    </div>
  );
}

function About() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="overflow-hidden">
      <section className="relative px-5 pb-14 pt-28 lg:px-8 lg:pb-20 lg:pt-[7.35rem]">
        <AboutOrbit />

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Label>About Motiora</Label>

              <h1 className="text-balance max-w-3xl text-[34px] font-black leading-[1.05] tracking-[-0.045em] text-white sm:text-[44px] lg:text-[56px]">
                A software studio shaped around{" "}
                <span className="forge-gradient">
                  clarity, systems, and launch-ready thinking.
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[#aeb8aa]">
                Motiora is built for businesses and product ideas that need more
                than a nice interface. The focus is to understand the problem,
                shape the system clearly, and build software that can actually
                support real users.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="forge-primary group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-black transition hover:-translate-y-0.5"
                >
                  Work with Motiora
                  <ArrowRight
                    size={17}
                    className="transition group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  to="/projects"
                  className="forge-ghost inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-[#dce5d8] transition hover:-translate-y-0.5 hover:text-[#c9ff3b]"
                >
                  View project proof
                  <MoveRight size={16} />
                </Link>
              </div>
            </motion.div>

            <Reveal delay={0.06}>
              <div className="rounded-[1.8rem] border border-white/[0.08] bg-white/[0.022] p-5">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#c9ff3b]">
                      Studio position
                    </p>

                    <h2 className="mt-2 text-xl font-black tracking-[-0.03em] text-white">
                      Strategy + design + engineering.
                    </h2>
                  </div>

                  <div className="grid h-12 w-12 place-items-center rounded-2xl border border-[#c9ff3b]/14 bg-[#c9ff3b]/10 text-[#c9ff3b]">
                    <Sparkles size={22} />
                  </div>
                </div>

                <p className="text-sm leading-7 text-[#9aa69a]">
                  Motiora sits between product thinking and software execution.
                  The goal is to turn unclear digital needs into structured,
                  usable, and maintainable systems.
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {["Think", "Shape", "Build"].map((item, index) => (
                    <div
                      key={item}
                      className="rounded-[1.15rem] border border-white/[0.07] bg-[#070907]/58 p-4"
                    >
                      <p className="text-[24px] font-black tracking-[-0.04em] text-[#c9ff3b]">
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
            <Label tone="amber">Studio identity</Label>

            <h2 className="text-balance text-[27px] font-black leading-tight tracking-[-0.035em] text-white md:text-[36px]">
              Motiora is built around three connected disciplines.
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#9aa69a]">
              The identity is not limited to design or coding alone. Motiora
              combines product thinking, user experience, and engineering
              structure into one working style.
            </p>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-3">
            {identityCards.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.04}>
                  <motion.article
                    className="relative min-h-[250px] overflow-hidden rounded-[1.55rem] border border-white/[0.085] bg-[#070907]/76 p-5 transition hover:border-[#c9ff3b]/28 hover:bg-[#0b0f0b]/92"
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
              <Label>Studio principles</Label>

              <h2 className="text-balance text-[26px] font-black leading-tight tracking-[-0.035em] text-white md:text-[34px]">
                The rules that keep Motiora work focused.
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#9aa69a]">
                These principles help keep each project clean, practical, and
                easier to improve later. They also stop the product from becoming
                visually impressive but confusing to use.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {studioPrinciples.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.04}>
                  <div className="min-h-[180px] rounded-[1.45rem] border border-white/[0.08] bg-white/[0.022] p-5">
                    <div className="mb-4 grid h-10 w-10 place-items-center rounded-2xl border border-[#f6c85f]/14 bg-[#f6c85f]/10 text-[#f6c85f]">
                      <Icon size={19} />
                    </div>

                    <h3 className="text-base font-black text-white">
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
          <Reveal className="mb-8 max-w-2xl">
            <Label tone="amber">Working style</Label>

            <h2 className="text-balance text-[27px] font-black leading-tight tracking-[-0.035em] text-white md:text-[36px]">
              The process is calm, structured, and practical.
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#9aa69a]">
              Motiora’s working style is built to reduce confusion. Every
              decision should make the system easier to understand, easier to
              build, or easier to use.
            </p>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {workingStyle.map((item, index) => (
              <Reveal key={item} delay={index * 0.03}>
                <div className="flex min-h-[82px] items-center gap-3 rounded-2xl border border-white/[0.08] bg-[#070907]/54 px-4 py-3.5">
                  <CheckCircle2 size={17} className="shrink-0 text-[#c9ff3b]" />
                  <span className="text-sm font-semibold leading-6 text-[#c3cbbd]">
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
            <Label>What Motiora avoids</Label>

            <h2 className="text-balance text-[27px] font-black leading-tight tracking-[-0.035em] text-white md:text-[36px]">
              Premium software should not be confusing software.
            </h2>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-3">
            {notJust.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04}>
                <div className="relative min-h-[210px] overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-white/[0.022] p-5">
                  <div className="absolute -right-14 -top-14 h-28 w-28 rounded-full bg-[#f6c85f]/[0.04]" />

                  <div className="relative">
                    <div className="mb-5 grid h-10 w-10 place-items-center rounded-2xl border border-[#c9ff3b]/14 bg-[#c9ff3b]/10 text-[#c9ff3b]">
                      <ShieldCheck size={19} />
                    </div>

                    <h3 className="text-base font-black text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#9aa69a]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl rounded-[1.8rem] border border-[#c9ff3b]/18 bg-[#0d130d]/68 p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
            <Reveal>
              <div className="mb-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.24em] text-[#c9ff3b]">
                <MessageSquare size={14} />
                Communication standard
              </div>

              <h2 className="text-balance text-[26px] font-black leading-tight tracking-[-0.035em] text-white md:text-[35px]">
                Good software starts with clear conversation.
              </h2>
            </Reveal>

            <Reveal delay={0.06}>
              <p className="text-sm leading-7 text-[#aeb8aa]">
                Motiora projects work best when the goal is clear, the workflow
                is understood, and decisions are made with purpose. The process
                is not about adding more features. It is about building the right
                structure first, then improving it with care.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.032] px-3.5 py-2 text-[11px] font-black uppercase tracking-[0.12em] text-[#c3cbbd]">
                  <Code2 size={14} className="text-[#c9ff3b]" />
                  Clean build
                </span>

                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.032] px-3.5 py-2 text-[11px] font-black uppercase tracking-[0.12em] text-[#c3cbbd]">
                  <Gauge size={14} className="text-[#c9ff3b]" />
                  Clear scope
                </span>

                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.032] px-3.5 py-2 text-[11px] font-black uppercase tracking-[0.12em] text-[#c3cbbd]">
                  <ShieldCheck size={14} className="text-[#c9ff3b]" />
                  Stable direction
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-start justify-between gap-6 border-y border-white/[0.08] py-10 md:flex-row md:items-center">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#c9ff3b]">
                Start with clarity
              </p>

              <h2 className="mt-4 text-balance max-w-2xl text-[26px] font-black leading-tight tracking-[-0.035em] text-white md:text-[35px]">
                Have a digital idea that needs structure before development?
              </h2>
            </div>

            <Link
              to="/contact"
              className="forge-primary inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-black transition hover:-translate-y-0.5"
            >
              Talk to Motiora
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;