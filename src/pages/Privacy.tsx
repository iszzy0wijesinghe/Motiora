import type { ReactNode } from "react";
import { useEffect } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Cookie,
  Database,
  Eye,
  FileText,
  Fingerprint,
  Globe2,
  LockKeyhole,
  Mail,
  Scale,
  Server,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router";
import BrandLogo from "../components/layout/BrandLogo";

const LAST_UPDATED = "31 July 2026";

const policyNavigation = [
  { id: "overview", label: "Overview" },
  { id: "information-we-collect", label: "Information collected" },
  { id: "how-we-use-information", label: "How information is used" },
  { id: "legal-bases", label: "Legal bases" },
  { id: "cookies", label: "Cookies and analytics" },
  { id: "sharing", label: "Information sharing" },
  { id: "international-processing", label: "International processing" },
  { id: "retention", label: "Data retention" },
  { id: "security", label: "Security" },
  { id: "your-rights", label: "Your rights" },
  { id: "product-services", label: "Product services" },
  { id: "children", label: "Children" },
  { id: "changes", label: "Policy changes" },
  { id: "contact", label: "Contact" },
];

const privacyPrinciples = [
  {
    title: "Purpose first",
    description:
      "We collect information only when it supports a clear website, communication, product, security, or business purpose.",
    icon: Fingerprint,
  },
  {
    title: "Limited collection",
    description:
      "We seek to collect only the information reasonably required for the relevant interaction.",
    icon: Database,
  },
  {
    title: "Protected access",
    description:
      "Administrative, technical, and organizational safeguards are used to reduce unauthorized access or disclosure.",
    icon: LockKeyhole,
  },
  {
    title: "Clear choices",
    description:
      "You may contact Motiora about accessing, correcting, deleting, or restricting the use of your personal information.",
    icon: UserCheck,
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
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.1,
      }}
      transition={{
        duration: 0.38,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}

function PolicyLabel({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#c9ff3b]/15 bg-[#c9ff3b]/[0.05] px-3 py-1.5 text-[9px] font-normal uppercase tracking-[0.16em] text-[#c9ff3b] sm:text-[10px]">
      <Sparkles size={11} />
      {children}
    </div>
  );
}

function BulletList({
  items,
}: {
  items: string[];
}) {
  return (
    <ul className="grid list-none gap-3 p-0">
      {items.map((item) => (
        <li
          key={item}
          className="flex min-w-0 items-start gap-2.5"
        >
          <CheckCircle2
            size={14}
            className="mt-[5px] shrink-0 text-[#c9ff3b]"
          />

          <span className="min-w-0 flex-1 break-words">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

function PolicySection({
  id,
  number,
  title,
  icon: Icon,
  children,
}: {
  id: string;
  number: string;
  title: string;
  icon: typeof ShieldCheck;
  children: ReactNode;
}) {
  return (
    <Reveal>
      <section
        id={id}
        className="scroll-mt-24 border-b border-white/[0.06] py-7 first:pt-2 last:border-b-0 sm:scroll-mt-28 sm:py-9"
      >
        {/* Header stays compact while body receives full width on mobile */}
        <div className="flex min-w-0 items-start gap-3 sm:gap-4">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-[0.85rem] border border-[#c9ff3b]/14 bg-[#c9ff3b]/[0.05] text-[#c9ff3b] sm:h-11 sm:w-11">
            <Icon size={17} />
          </div>

          <div className="min-w-0 flex-1 pt-0.5">
            <p className="text-[8px] font-normal uppercase tracking-[0.16em] text-[#697466] sm:text-[9px]">
              Section {number}
            </p>

            <h2 className="mt-1.5 break-words text-[18px] font-medium leading-[1.3] tracking-[-0.02em] text-white sm:text-[21px]">
              {title}
            </h2>
          </div>
        </div>

        {/* Full-width legal text on mobile */}
        <div className="policy-copy mt-5 min-w-0 space-y-4 break-words text-[14px] font-normal leading-[1.8] text-[#9aa398] sm:ml-[60px] sm:text-[13px] sm:leading-[1.9]">
          {children}
        </div>
      </section>
    </Reveal>
  );
}

function Privacy() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Privacy Policy | Motiora Software Solutions";

    let description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );

    const previousDescription =
      description?.getAttribute("content") ?? null;

    let descriptionCreated = false;

    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
      descriptionCreated = true;
    }

    description.content =
      "Learn how Motiora Software Solutions collects, uses, protects, and manages personal information.";

    return () => {
      document.title = previousTitle;

      if (descriptionCreated) {
        description?.remove();
      } else if (description && previousDescription !== null) {
        description.content = previousDescription;
      }
    };
  }, []);

  return (
    <main className="w-full min-w-0 overflow-x-clip">
      {/* Hero */}
      <section className="relative isolate px-4 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-28 lg:px-8 lg:pb-20 lg:pt-[7.5rem]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[-230px] top-[-150px] h-[420px] w-[420px] rounded-full bg-[#c9ff3b]/[0.05] blur-[115px] sm:left-[-190px] sm:h-[440px] sm:w-[440px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-260px] top-[-120px] h-[430px] w-[430px] rounded-full bg-[#f6c85f]/[0.03] blur-[125px] sm:right-[-220px] sm:h-[480px] sm:w-[480px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] [background-size:68px_68px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)] sm:[background-size:78px_78px]"
        />

        <div className="relative z-10 mx-auto grid w-full max-w-6xl min-w-0 items-center gap-9 lg:grid-cols-[1fr_0.7fr] lg:gap-12">
          <motion.div
            className="min-w-0"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.48,
              ease: "easeOut",
            }}
          >
            <PolicyLabel>Privacy at Motiora</PolicyLabel>

            <h1 className="max-w-3xl break-words text-balance text-[30px] font-medium leading-[1.12] tracking-[-0.032em] text-white min-[390px]:text-[33px] sm:text-[43px] sm:leading-[1.08] lg:text-[53px]">
              Clear information about how we handle{" "}
              <span className="forge-gradient">
                personal data.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-[14px] font-normal leading-7 text-[#a0aa9e] sm:text-[15px]">
              This Privacy Policy explains what information Motiora may collect,
              why it is used, how it is protected, and the choices available to
              people who visit our website or communicate with us.
            </p>

            <div className="mt-6 grid gap-2 min-[390px]:grid-cols-2 sm:flex sm:flex-wrap sm:gap-2.5">
              <span className="inline-flex min-h-9 items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-[10px] font-normal text-[#929c90]">
                <Clock3
                  size={12}
                  className="shrink-0 text-[#c9ff3b]"
                />

                Updated {LAST_UPDATED}
              </span>

              <span className="inline-flex min-h-9 items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-[10px] font-normal text-[#929c90]">
                <Globe2
                  size={12}
                  className="shrink-0 text-[#f6c85f]"
                />

                Sri Lanka
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 16,
              scale: 0.985,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.52,
              delay: 0.06,
              ease: "easeOut",
            }}
            className="relative mx-auto w-full min-w-0 max-w-[420px]"
          >
            <div className="pointer-events-none absolute inset-8 rounded-full bg-[#c9ff3b]/10 blur-[55px]" />

            <div className="relative min-w-0 overflow-hidden rounded-[1.4rem] border border-white/[0.09] bg-[#0b100b]/90 p-4 shadow-[0_24px_65px_rgba(0,0,0,0.32)] backdrop-blur-xl sm:rounded-[1.7rem] sm:p-6">
              <div className="flex min-w-0 items-center justify-between gap-3">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-[0.9rem] border border-[#c9ff3b]/18 bg-[#c9ff3b]/[0.07] text-[#c9ff3b] sm:h-12 sm:w-12">
                  <ShieldCheck size={21} />
                </div>

                <span className="min-w-0 truncate rounded-full border border-white/[0.07] bg-white/[0.025] px-2.5 py-1 text-[8px] font-normal uppercase tracking-[0.13em] text-[#768173]">
                  Privacy notice
                </span>
              </div>

              <h2 className="mt-5 text-[19px] font-medium tracking-[-0.02em] text-white sm:mt-6 sm:text-[20px]">
                Respectful by design.
              </h2>

              <p className="mt-3 text-[13px] font-normal leading-6 text-[#929c90]">
                Motiora aims to use personal information transparently,
                responsibly, and only for defined purposes.
              </p>

              <div className="mt-5 grid gap-2 sm:mt-6">
                {[
                  "Purpose-limited collection",
                  "Controlled access",
                  "Reasonable retention",
                  "User privacy requests",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex min-w-0 items-center gap-2.5 rounded-xl border border-white/[0.06] bg-white/[0.018] px-3 py-2.5"
                  >
                    <CheckCircle2
                      size={14}
                      className="shrink-0 text-[#c9ff3b]"
                    />

                    <span className="min-w-0 break-words text-[11px] font-normal text-[#a3ada0]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 border-t border-white/[0.065] pt-5 sm:mt-6">
                <BrandLogo
                  variant="long"
                  appearance="light"
                  className="h-auto w-[118px] object-contain sm:w-[125px]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="forge-line" />

      {/* Principles */}
      <section className="px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {privacyPrinciples.map((principle, index) => {
              const Icon = principle.icon;

              return (
                <Reveal
                  key={principle.title}
                  delay={index * 0.03}
                >
                  <div className="flex h-full min-w-0 items-start gap-3 rounded-[1.15rem] border border-white/[0.07] bg-white/[0.018] p-4 sm:block sm:rounded-[1.3rem] sm:p-5">
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-[#c9ff3b]/12 bg-[#c9ff3b]/[0.04] text-[#c9ff3b]">
                      <Icon size={17} />
                    </div>

                    <div className="min-w-0 sm:mt-4">
                      <h2 className="text-[14px] font-medium text-white">
                        {principle.title}
                      </h2>

                      <p className="mt-2 text-[12px] font-normal leading-6 text-[#858f6 text-[#858f83]">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main policy */}
      <section className="px-4 pb-16 pt-5 sm:px-6 sm:pb-20 sm:pt-8 lg:px-8 lg:pb-28 lg:pt-12">
        <div className="mx-auto grid w-full max-w-6xl min-w-0 gap-6 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-12">
          {/* Desktop contents */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="text-[8px] font-normal uppercase tracking-[0.2em] text-[#657163]">
                Privacy contents
              </p>

              <nav
                aria-label="Privacy policy contents"
                className="mt-4 grid gap-1"
              >
                {policyNavigation.map((item, index) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="group flex min-w-0 items-center gap-2 rounded-[0.65rem] px-2.5 py-2 text-[10px] font-normal text-[#788376] transition hover:bg-white/[0.025] hover:text-white"
                  >
                    <span className="w-4 shrink-0 text-[8px] text-[#4f5a4d]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="min-w-0 flex-1 break-words">
                      {item.label}
                    </span>

                    <ArrowRight
                      size={10}
                      className="shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </a>
                ))}
              </nav>

              <div className="mt-6 rounded-[1rem] border border-[#c9ff3b]/10 bg-[#c9ff3b]/[0.03] p-4">
                <Scale
                  size={16}
                  className="text-[#c9ff3b]"
                />

                <p className="mt-3 text-[10px] font-medium text-white">
                  Policy scope
                </p>

                <p className="mt-2 text-[10px] font-normal leading-5 text-[#788376]">
                  This page covers Motiora’s corporate website, enquiries, and
                  general business communications.
                </p>
              </div>
            </div>
          </aside>

          {/* Mobile contents */}
          <details className="group min-w-0 rounded-[1.1rem] border border-white/[0.07] bg-white/[0.018] lg:hidden">
            <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-[12px] font-normal text-white [&::-webkit-details-marker]:hidden">
              <span className="inline-flex items-center gap-2">
                <FileText
                  size={15}
                  className="text-[#c9ff3b]"
                />

                Privacy policy contents
              </span>

              <ChevronDown
                size={16}
                className="shrink-0 text-[#778274] transition-transform duration-300 group-open:rotate-180"
              />
            </summary>

            <div className="border-t border-white/[0.06] p-3">
              <nav
                aria-label="Mobile privacy policy contents"
                className="grid grid-cols-1 gap-1.5 min-[390px]:grid-cols-2"
              >
                {policyNavigation.map((item, index) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="flex min-h-10 min-w-0 items-center gap-2 rounded-[0.7rem] border border-white/[0.055] bg-[#070907]/40 px-3 py-2 text-[10px] font-normal text-[#929c90] transition hover:border-[#c9ff3b]/15 hover:text-[#c9ff3b]"
                  >
                    <span className="shrink-0 text-[8px] text-[#596455]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="min-w-0 break-words">
                      {item.label}
                    </span>
                  </a>
                ))}
              </nav>
            </div>
          </details>

          {/* Policy article */}
          <article className="min-w-0 border-y border-white/[0.065] bg-transparent px-0 py-1 sm:rounded-[1.5rem] sm:border sm:bg-[#080b08]/70 sm:px-6 sm:py-2 lg:px-8">
            <PolicySection
              id="overview"
              number="01"
              title="Who we are and when this policy applies"
              icon={Eye}
            >
              <p>
                Motiora Software Solutions, referred to in this policy as
                “Motiora”, “we”, “us”, or “our”, is an independently operated
                software venture based in Sri Lanka.
              </p>

              <p>
                This policy applies when you visit the Motiora website, submit
                an enquiry, request a proposal, communicate with us, apply to
                work with us, or otherwise interact with Motiora through our
                corporate website.
              </p>

              <p>
                Certain Motiora products or services may provide a separate
                privacy notice. Where a product-specific notice is provided, it
                applies alongside this policy and governs the processing
                described in that notice.
              </p>
            </PolicySection>

            <PolicySection
              id="information-we-collect"
              number="02"
              title="Information we may collect"
              icon={Database}
            >
              <p>
                The information collected depends on how you interact with
                Motiora. It may include:
              </p>

              <BulletList
                items={[
                  "Identity information, such as your name.",
                  "Contact information, such as your email address, telephone number, company, or organization.",
                  "Project information included in an enquiry, brief, message, attachment, proposal request, or meeting request.",
                  "Business communication records, including correspondence and agreed project requirements.",
                  "Technical information, such as browser type, device type, approximate location, IP address, referring page, and basic diagnostic logs.",
                  "Consent and preference records, where a choice or permission must be recorded.",
                  "Information you voluntarily provide when communicating with Motiora.",
                ]}
              />

              <p>
                Please avoid sending passwords, payment card details, government
                identification records, health data, or other highly sensitive
                information through the general contact form unless Motiora has
                specifically requested it through an appropriate secure
                channel.
              </p>
            </PolicySection>

            <PolicySection
              id="how-we-use-information"
              number="03"
              title="How we use personal information"
              icon={FileText}
            >
              <p>
                Motiora may use personal information to:
              </p>

              <BulletList
                items={[
                  "Respond to enquiries and communication.",
                  "Understand a requested project, service, product, or collaboration.",
                  "Prepare proposals, estimates, agreements, and project plans.",
                  "Provide, maintain, support, and improve Motiora services.",
                  "Manage business relationships and project communication.",
                  "Protect the website, systems, users, and infrastructure from misuse or security threats.",
                  "Diagnose errors, monitor technical performance, and improve accessibility or usability.",
                  "Comply with applicable legal, regulatory, accounting, or contractual requirements.",
                  "Establish, exercise, or defend legal rights.",
                ]}
              />

              <p>
                Motiora does not sell personal information to advertisers or
                data brokers.
              </p>
            </PolicySection>

            <PolicySection
              id="legal-bases"
              number="04"
              title="Legal bases for processing"
              icon={Scale}
            >
              <p>
                Depending on the context, Motiora may process personal
                information on one or more of the following grounds:
              </p>

              <BulletList
                items={[
                  "Your consent.",
                  "Taking steps requested by you before entering into an agreement.",
                  "Performing or administering an agreement with you or your organization.",
                  "Compliance with a legal obligation.",
                  "Motiora’s legitimate business interests, where those interests are not overridden by your rights and interests.",
                  "Protecting the rights, safety, infrastructure, or property of Motiora, its users, or another person.",
                ]}
              />

              <p>
                Where processing depends on consent, you may withdraw that
                consent by contacting Motiora. Withdrawal does not affect
                processing that was lawful before consent was withdrawn.
              </p>
            </PolicySection>

            <PolicySection
              id="cookies"
              number="05"
              title="Cookies, local storage, and analytics"
              icon={Cookie}
            >
              <p>
                The Motiora website may use essential cookies or similar browser
                storage required for security, navigation, accessibility,
                preferences, and reliable operation.
              </p>

              <p>
                Motiora may also use limited analytics to understand general
                website performance, traffic patterns, and technical issues.
                Where non-essential analytics, advertising, or tracking
                technologies are introduced, Motiora will provide appropriate
                notice and choices where required.
              </p>

              <p>
                You can control cookies through your browser settings. Blocking
                essential storage may affect some website functions.
              </p>
            </PolicySection>

            <PolicySection
              id="sharing"
              number="06"
              title="When information may be shared"
              icon={Users}
            >
              <p>
                Motiora may disclose limited personal information to carefully
                selected service providers where necessary to operate the
                website or conduct business. These providers may include:
              </p>

              <BulletList
                items={[
                  "Website hosting and infrastructure providers.",
                  "Email, communication, scheduling, and productivity providers.",
                  "Security, monitoring, backup, and technical support providers.",
                  "Professional advisers, such as accountants or legal advisers.",
                  "Contractors or collaborators supporting an agreed project.",
                  "Public authorities where disclosure is required by applicable law.",
                ]}
              />

              <p>
                Motiora expects service providers to process information only
                for authorized purposes and to apply appropriate confidentiality
                and security protections.
              </p>

              <p>
                Personal information may also be disclosed as part of a genuine
                restructuring, investment, acquisition, transfer, or sale of a
                relevant business or product, subject to appropriate safeguards.
              </p>
            </PolicySection>

            <PolicySection
              id="international-processing"
              number="07"
              title="International processing and service providers"
              icon={Globe2}
            >
              <p>
                Some technology and infrastructure providers used by Motiora may
                store or process information in countries outside Sri Lanka.
              </p>

              <p>
                Where personal information is processed internationally,
                Motiora seeks to use appropriate contractual, organizational,
                and technical measures required by applicable law and
                proportionate to the nature of the processing.
              </p>
            </PolicySection>

            <PolicySection
              id="retention"
              number="08"
              title="How long information is retained"
              icon={Clock3}
            >
              <p>
                Motiora retains personal information only for as long as it is
                reasonably required for the purpose for which it was collected,
                including communication, project administration, security,
                accounting, dispute resolution, and legal compliance.
              </p>

              <p>
                Retention periods may differ depending on the type of
                information, the relationship involved, contractual
                obligations, security requirements, and applicable law.
              </p>

              <p>
                When information is no longer required, Motiora will seek to
                delete, anonymize, or securely isolate it, subject to legitimate
                backup, legal, and record-keeping requirements.
              </p>
            </PolicySection>

            <PolicySection
              id="security"
              number="09"
              title="How information is protected"
              icon={LockKeyhole}
            >
              <p>
                Motiora uses reasonable administrative, technical, and
                organizational safeguards designed to protect personal
                information against unauthorized access, disclosure,
                alteration, loss, or misuse.
              </p>

              <p>
                Measures may include controlled administrative access,
                authentication, encrypted connections, infrastructure
                protections, backups, access logging, secure development
                practices, and service-provider controls.
              </p>

              <p>
                No website, storage system, or internet transmission method can
                be guaranteed to be completely secure. You should use caution
                when transmitting sensitive information online.
              </p>
            </PolicySection>

            <PolicySection
              id="your-rights"
              number="10"
              title="Your privacy rights and choices"
              icon={UserCheck}
            >
              <p>
                Subject to applicable law and relevant exceptions, you may ask
                Motiora to:
              </p>

              <BulletList
                items={[
                  "Confirm whether Motiora processes personal information relating to you.",
                  "Provide access to relevant personal information.",
                  "Correct or complete inaccurate information.",
                  "Delete information where there is a valid legal basis for deletion.",
                  "Stop or restrict certain processing.",
                  "Consider an objection to specific processing.",
                  "Record the withdrawal of consent where processing relies on consent.",
                  "Explain how a privacy request has been handled.",
                ]}
              />

              <p>
                Motiora may need to verify your identity before responding to a
                request. Some requests may be limited where information must be
                retained for legal, security, contractual, or legitimate
                record-keeping reasons.
              </p>

              <p>
                You may also have the right to raise a concern with the Data
                Protection Authority of Sri Lanka.
              </p>
            </PolicySection>

            <PolicySection
              id="product-services"
              number="11"
              title="Motiora products and third-party services"
              icon={Server}
            >
              <p>
                Motiora develops and operates software products, including
                public utilities and online platforms. Product-specific data
                handling may differ from the corporate website because a
                product may process accounts, uploaded files, transaction
                records, technical logs, or other service-related information.
              </p>

              <p>
                Where a Motiora product publishes its own privacy policy,
                security notice, or terms, those product-specific documents
                apply to the relevant service.
              </p>

              <p>
                The Motiora website may also link to third-party websites.
                Motiora does not control the privacy practices of independent
                third parties, and their own policies apply when you use their
                services.
              </p>
            </PolicySection>

            <PolicySection
              id="children"
              number="12"
              title="Children’s privacy"
              icon={ShieldCheck}
            >
              <p>
                The Motiora corporate website is intended for business and
                general professional audiences. Motiora does not knowingly seek
                personal information from children through its general contact
                and project enquiry services.
              </p>

              <p>
                A parent or guardian who believes a child has submitted personal
                information may contact Motiora so the matter can be reviewed.
              </p>
            </PolicySection>

            <PolicySection
              id="changes"
              number="13"
              title="Changes to this Privacy Policy"
              icon={FileText}
            >
              <p>
                Motiora may update this Privacy Policy when services, products,
                technologies, legal requirements, or business operations
                change.
              </p>

              <p>
                The current version will be published on this page with an
                updated revision date. Material changes may also be communicated
                through an additional notice where appropriate.
              </p>
            </PolicySection>

            <PolicySection
              id="contact"
              number="14"
              title="Contact Motiora about privacy"
              icon={Mail}
            >
              <p>
                To ask a privacy question, report a concern, or exercise a
                privacy right, contact Motiora through the website contact page.
              </p>

              <div className="mt-5 min-w-0 rounded-[1.1rem] border border-[#c9ff3b]/12 bg-[#c9ff3b]/[0.035] p-4 sm:rounded-[1.25rem] sm:p-5">
                <p className="text-[9px] font-normal uppercase tracking-[0.16em] text-[#c9ff3b]">
                  Privacy contact
                </p>

                <p className="mt-2 break-words text-[14px] font-medium text-white">
                  Motiora Software Solutions
                </p>

                <p className="mt-1 text-[11px] font-normal text-[#849181]">
                  Sri Lanka
                </p>

                <Link
                  to="/contact"
                  className="group mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#c9ff3b] px-4 py-3 text-[11px] font-medium !text-[#091006] transition hover:-translate-y-0.5 hover:bg-[#d3ff60] hover:!text-[#091006] sm:w-auto sm:py-2.5"
                >
                  Submit a privacy request

                  <ArrowRight
                    size={13}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </PolicySection>
          </article>
        </div>
      </section>

      {/* Closing notice */}
      <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-5 border-y border-white/[0.07] py-7 sm:flex-row sm:items-center sm:py-8">
              <div className="min-w-0">
                <p className="text-[9px] font-normal uppercase tracking-[0.16em] text-[#c9ff3b]">
                  Privacy questions
                </p>

                <p className="mt-2 max-w-xl break-words text-[16px] font-medium leading-6 text-white sm:text-[17px]">
                  Contact Motiora when you need clarification about your
                  information.
                </p>
              </div>

              <Link
                to="/contact"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-3 text-[11px] font-normal text-[#a7b0a4] transition hover:border-[#c9ff3b]/20 hover:text-[#c9ff3b] sm:w-auto sm:border-transparent sm:bg-transparent sm:px-0"
              >
                Open contact page

                <ArrowRight
                  size={13}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

export default Privacy;