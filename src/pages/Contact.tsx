import type { FormEvent, ReactNode } from "react";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  FileText,
  Mail,
  MessageCircle,
  Phone,
  Rocket,
  Send,
  ShieldCheck,
  Sparkles,
  Target,
  WandSparkles,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router";

const CONTACT_EMAIL = "hello@motiora.com";
const CONTACT_PHONE = "+94 00 000 0000";
const WHATSAPP_LINK = "https://wa.me/94XXXXXXXXX";

const inquiryTypes = [
  "Business system",
  "Website / web platform",
  "Automation tool",
  "MVP / product idea",
  "UI/UX improvement",
  "Other",
];

const budgetRanges = [
  "Not sure yet",
  "Starter scope",
  "Medium project",
  "Advanced system",
  "Long-term product",
];

const timelineOptions = [
  "Flexible",
  "Within 2 weeks",
  "Within 1 month",
  "1–3 months",
  "Long-term",
];

const contactRoutes = [
  {
    title: "Project inquiry",
    description:
      "Use the form when you have a project idea, workflow problem, or system requirement.",
    icon: FileText,
  },
  {
    title: "Quick discussion",
    description:
      "Use WhatsApp or phone when you need a quick first conversation before writing a full brief.",
    icon: MessageCircle,
  },
  {
    title: "Formal request",
    description:
      "Use email when you want to share documents, links, requirements, or a structured proposal.",
    icon: Mail,
  },
];

const intakeChecklist = [
  "What problem should the software solve?",
  "Who will use it?",
  "What actions should users complete?",
  "Do you need login, roles, dashboard, or admin controls?",
  "Do you already have content, branding, or screenshots?",
  "Is there a target launch date?",
];

const responseFlow = [
  {
    title: "Brief review",
    description:
      "Your message is reviewed to understand the goal, scope, and expected output.",
    icon: Target,
  },
  {
    title: "Direction call",
    description:
      "The project direction is clarified before design or development starts.",
    icon: MessageCircle,
  },
  {
    title: "Next step plan",
    description:
      "You receive a practical direction for scope, timeline, and build approach.",
    icon: Rocket,
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

function ContactOrbit() {
  const reduceMotion = useReducedMotion();

  const orbitPath =
    "M90 235 C90 80 720 80 720 235 C720 390 90 390 90 235Z";

  return (
    <div className="pointer-events-none absolute right-[-220px] top-[-110px] hidden h-[470px] w-[830px] opacity-90 lg:block">
      <svg
        className="h-full w-full overflow-visible"
        viewBox="0 0 830 470"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="contactOrbitGradient"
            x1="90"
            y1="90"
            x2="720"
            y2="390"
          >
            <stop stopColor="#D8FF73" stopOpacity="0.9" />
            <stop offset="0.55" stopColor="#8AFF80" stopOpacity="0.56" />
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
          stroke="url(#contactOrbitGradient)"
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

function Contact() {
  const reduceMotion = useReducedMotion();

  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: inquiryTypes[0],
    budget: budgetRanges[0],
    timeline: timelineOptions[0],
    message: "",
  });

  const isReady = useMemo(() => {
    return form.name.trim() && form.email.trim() && form.message.trim();
  }, [form.email, form.message, form.name]);

  const updateField = (field: keyof typeof form, value: string) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = `Motiora project inquiry - ${form.projectType}`;

    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Project type: ${form.projectType}`,
      `Budget range: ${form.budget}`,
      `Timeline: ${form.timeline}`,
      "",
      "Project message:",
      form.message,
    ].join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="overflow-hidden">
      <section className="relative px-5 pb-14 pt-28 lg:px-8 lg:pb-20 lg:pt-[7.35rem]">
        <ContactOrbit />

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Label>Contact Motiora</Label>

              <h1 className="text-balance max-w-3xl text-[34px] font-black leading-[1.05] tracking-[-0.045em] text-white sm:text-[44px] lg:text-[56px]">
                Start with a clear brief,{" "}
                <span className="forge-gradient">
                  then shape the right software direction.
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[#aeb8aa]">
                Use this page to explain what you want to build, improve, or
                automate. The goal is to understand the project clearly before
                deciding the right design and development path.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="forge-primary group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-black transition hover:-translate-y-0.5"
                >
                  Email Motiora
                  <ArrowRight
                    size={17}
                    className="transition group-hover:translate-x-1"
                  />
                </a>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="forge-ghost inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-[#dce5d8] transition hover:-translate-y-0.5 hover:text-[#d8ff73]"
                >
                  WhatsApp
                  <MessageCircle size={16} />
                </a>
              </div>
            </motion.div>

            <Reveal delay={0.06}>
              <div className="rounded-[1.8rem] border border-white/[0.08] bg-white/[0.022] p-5">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#d8ff73]">
                      Contact standard
                    </p>

                    <h2 className="mt-2 text-xl font-black tracking-[-0.03em] text-white">
                      Clear message, better direction.
                    </h2>
                  </div>

                  <div className="grid h-12 w-12 place-items-center rounded-2xl border border-[#d8ff73]/14 bg-[#d8ff73]/10 text-[#d8ff73]">
                    <Sparkles size={22} />
                  </div>
                </div>

                <p className="text-sm leading-7 text-[#9aa69a]">
                  A good first message does not need to be perfect. It only
                  needs to explain the goal, current problem, expected users, and
                  the result you want from the software.
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {["Goal", "Users", "Launch"].map((item, index) => (
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
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[1fr_0.78fr]">
          <Reveal>
            <form
              onSubmit={handleSubmit}
              className="rounded-[1.8rem] border border-white/[0.08] bg-white/[0.022] p-5 md:p-6"
            >
              <Label tone="amber">Project intake</Label>

              <h2 className="text-balance text-[27px] font-black leading-tight tracking-[-0.035em] text-white md:text-[36px]">
                Tell Motiora what needs to be built.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#9aa69a]">
                Fill the project brief and it will open as a prepared email.
                This keeps the contact flow simple while the site is frontend
                only.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#8d9a87]">
                    Your name
                  </span>
                  <input
                    value={form.name}
                    onChange={(event) => updateField("name", event.target.value)}
                    placeholder="Enter your name"
                    className="rounded-2xl border border-white/[0.08] bg-[#070907]/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-[#64705f] focus:border-[#d8ff73]/35"
                    required
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#8d9a87]">
                    Email
                  </span>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(event) =>
                      updateField("email", event.target.value)
                    }
                    placeholder="you@example.com"
                    className="rounded-2xl border border-white/[0.08] bg-[#070907]/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-[#64705f] focus:border-[#d8ff73]/35"
                    required
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#8d9a87]">
                    Project type
                  </span>
                  <select
                    value={form.projectType}
                    onChange={(event) =>
                      updateField("projectType", event.target.value)
                    }
                    className="rounded-2xl border border-white/[0.08] bg-[#070907]/70 px-4 py-3 text-sm text-white outline-none transition focus:border-[#d8ff73]/35"
                  >
                    {inquiryTypes.map((item) => (
                      <option key={item} value={item} className="bg-[#070907]">
                        {item}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="grid gap-2">
                  <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#8d9a87]">
                    Budget range
                  </span>
                  <select
                    value={form.budget}
                    onChange={(event) =>
                      updateField("budget", event.target.value)
                    }
                    className="rounded-2xl border border-white/[0.08] bg-[#070907]/70 px-4 py-3 text-sm text-white outline-none transition focus:border-[#d8ff73]/35"
                  >
                    {budgetRanges.map((item) => (
                      <option key={item} value={item} className="bg-[#070907]">
                        {item}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="grid gap-2 md:col-span-2">
                  <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#8d9a87]">
                    Timeline
                  </span>
                  <select
                    value={form.timeline}
                    onChange={(event) =>
                      updateField("timeline", event.target.value)
                    }
                    className="rounded-2xl border border-white/[0.08] bg-[#070907]/70 px-4 py-3 text-sm text-white outline-none transition focus:border-[#d8ff73]/35"
                  >
                    {timelineOptions.map((item) => (
                      <option key={item} value={item} className="bg-[#070907]">
                        {item}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="grid gap-2 md:col-span-2">
                  <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#8d9a87]">
                    Project message
                  </span>
                  <textarea
                    value={form.message}
                    onChange={(event) =>
                      updateField("message", event.target.value)
                    }
                    placeholder="Describe what you need, the problem, users, important features, and expected result..."
                    rows={7}
                    className="resize-none rounded-2xl border border-white/[0.08] bg-[#070907]/70 px-4 py-3 text-sm leading-7 text-white outline-none transition placeholder:text-[#64705f] focus:border-[#d8ff73]/35"
                    required
                  />
                </label>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs leading-6 text-[#7d897b]">
                  Required: name, email, and project message.
                </p>

                <button
                  type="submit"
                  disabled={!isReady}
                  className="forge-primary inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-black transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:translate-y-0"
                >
                  Prepare email
                  <Send size={16} />
                </button>
              </div>
            </form>
          </Reveal>

          <div className="grid gap-5">
            <Reveal delay={0.04}>
              <div className="rounded-[1.8rem] border border-[#d8ff73]/18 bg-[#0d130d]/68 p-5 md:p-6">
                <Label>Direct contact</Label>

                <div className="grid gap-3">
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="group flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-[#070907]/54 px-4 py-3.5 transition hover:border-[#d8ff73]/28 hover:bg-[#d8ff73]/[0.04]"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#d8ff73]/10 text-[#d8ff73]">
                      <Mail size={18} />
                    </span>

                    <span>
                      <span className="block text-sm font-black text-white">
                        Email
                      </span>
                      <span className="block text-xs text-[#8d9a87] transition group-hover:text-[#d8ff73]">
                        {CONTACT_EMAIL}
                      </span>
                    </span>
                  </a>

                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-[#070907]/54 px-4 py-3.5 transition hover:border-[#d8ff73]/28 hover:bg-[#d8ff73]/[0.04]"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#d8ff73]/10 text-[#d8ff73]">
                      <MessageCircle size={18} />
                    </span>

                    <span>
                      <span className="block text-sm font-black text-white">
                        WhatsApp
                      </span>
                      <span className="block text-xs text-[#8d9a87] transition group-hover:text-[#d8ff73]">
                        Start quick discussion
                      </span>
                    </span>
                  </a>

                  <a
                    href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
                    className="group flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-[#070907]/54 px-4 py-3.5 transition hover:border-[#d8ff73]/28 hover:bg-[#d8ff73]/[0.04]"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#d8ff73]/10 text-[#d8ff73]">
                      <Phone size={18} />
                    </span>

                    <span>
                      <span className="block text-sm font-black text-white">
                        Phone
                      </span>
                      <span className="block text-xs text-[#8d9a87] transition group-hover:text-[#d8ff73]">
                        {CONTACT_PHONE}
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-[1.8rem] border border-white/[0.08] bg-white/[0.022] p-5 md:p-6">
                <div className="mb-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.22em] text-[#f6c85f]">
                  <Clock3 size={14} />
                  Before sending
                </div>

                <div className="grid gap-3">
                  {intakeChecklist.slice(0, 4).map((item) => (
                    <div
                      key={item}
                      className="flex gap-3 rounded-2xl border border-white/[0.07] bg-[#070907]/50 px-4 py-3"
                    >
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 shrink-0 text-[#d8ff73]"
                      />
                      <p className="text-sm leading-6 text-[#c3cbbd]">
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

      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-8 max-w-2xl">
            <Label tone="amber">Contact routes</Label>

            <h2 className="text-balance text-[27px] font-black leading-tight tracking-[-0.035em] text-white md:text-[36px]">
              Choose the contact path that matches your situation.
            </h2>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-3">
            {contactRoutes.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.04}>
                  <motion.article
                    className="relative min-h-[220px] overflow-hidden rounded-[1.55rem] border border-white/[0.085] bg-[#070907]/76 p-5 transition hover:border-[#d8ff73]/28 hover:bg-[#0b0f0b]/92"
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
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[0.72fr_1.28fr]">
          <Reveal>
            <div className="rounded-[1.7rem] border border-[#d8ff73]/18 bg-[#0d130d]/68 p-6 md:p-8">
              <Label>After you contact</Label>

              <h2 className="text-balance text-[26px] font-black leading-tight tracking-[-0.035em] text-white md:text-[34px]">
                The next step is to turn the message into a clear direction.
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#9aa69a]">
                A project does not need to start with perfect requirements. It
                starts with a useful conversation, then becomes a clearer product
                direction.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-3">
            {responseFlow.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.04}>
                  <div className="min-h-[210px] rounded-[1.45rem] border border-white/[0.08] bg-white/[0.022] p-5">
                    <div className="mb-5 flex items-center justify-between">
                      <div className="grid h-10 w-10 place-items-center rounded-2xl border border-[#f6c85f]/14 bg-[#f6c85f]/10 text-[#f6c85f]">
                        <Icon size={19} />
                      </div>

                      <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#64705f]">
                        0{index + 1}
                      </span>
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
        <div className="mx-auto max-w-6xl rounded-[1.8rem] border border-[#d8ff73]/18 bg-[#0d130d]/68 p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
            <Reveal>
              <div className="mb-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.24em] text-[#d8ff73]">
                <ShieldCheck size={14} />
                Good brief format
              </div>

              <h2 className="text-balance text-[26px] font-black leading-tight tracking-[-0.035em] text-white md:text-[35px]">
                A useful brief can be simple.
              </h2>
            </Reveal>

            <div className="grid gap-3 sm:grid-cols-2">
              {intakeChecklist.map((item, index) => (
                <Reveal key={item} delay={index * 0.03}>
                  <div className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-[#070907]/54 px-4 py-3.5">
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
                Not ready to write everything?
              </p>

              <h2 className="mt-4 text-balance max-w-2xl text-[26px] font-black leading-tight tracking-[-0.035em] text-white md:text-[35px]">
                Start with a short message and shape the details after.
              </h2>
            </div>

            <Link
              to="/projects"
              className="forge-ghost inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:text-[#d8ff73]"
            >
              View project records
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;