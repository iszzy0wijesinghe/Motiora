/** @format */

import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  FileCode2,
  Gauge,
  Layers3,
  Target,
} from "lucide-react";
import { motion } from "motion/react";
import { Link, useParams } from "react-router";
import type { ProjectImageRatio } from "../data/projects";
import { projectRecords } from "../data/projects";

function getGalleryAspectClass(ratio?: ProjectImageRatio) {
  if (ratio === "mobile") return "aspect-[3/4] sm:aspect-[9/16]";
  if (ratio === "wide") return "aspect-video";

  return "aspect-[16/10]";
}

function ProjectDetails() {
  const { slug } = useParams();

  const project = projectRecords.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="px-5 pb-20 pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-[1.6rem] border border-white/[0.08] bg-white/[0.025] p-6">
          <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#f6c85f]">
            Project not found
          </p>

          <h1 className="mt-4 text-3xl font-black tracking-[-0.04em] text-white">
            This project page does not exist yet.
          </h1>

          <Link
            to="/projects"
            className="forge-primary mt-6 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-black"
          >
            Back to projects
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    );
  }

  const galleryImages = project.galleryImages || [];

  return (
    <div className="overflow-hidden">
      <section className="relative px-5 pb-14 pt-28 lg:px-8 lg:pb-20 lg:pt-[7.35rem]">
        <div className="mx-auto max-w-6xl">
          <Link
            to="/projects"
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2.5 text-xs font-black text-[#c3cbbd] transition hover:border-[#c9ff3b]/30 hover:text-[#c9ff3b]"
          >
            <ArrowLeft size={15} />
            Back to projects
          </Link>

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <p className="inline-flex items-center gap-2 rounded-full border border-[#c9ff3b]/18 bg-[#c9ff3b]/8 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-[#c9ff3b]">
                <FileCode2 size={13} />
                {project.category}
              </p>

              <h1 className="mt-5 text-balance text-[34px] font-black leading-[1.04] tracking-[-0.05em] text-white sm:text-[44px] lg:text-[58px]">
                {project.title}
              </h1>

              <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[#aeb8aa]">
                {project.description}
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4">
                  <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#64705f]">
                    Client
                  </p>
                  <p className="mt-2 text-sm font-bold text-[#c3cbbd]">
                    {project.client || "Motiora Project"}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4">
                  <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#64705f]">
                    Year
                  </p>
                  <p className="mt-2 text-sm font-bold text-[#c3cbbd]">
                    {project.year || "Latest"}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4">
                  <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#64705f]">
                    Type
                  </p>
                  <p className="mt-2 text-sm font-bold text-[#c3cbbd]">
                    {project.category}
                  </p>
                </div>
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="forge-primary inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-black transition hover:-translate-y-0.5"
                  >
                    View live site
                    <ExternalLink size={16} />
                  </a>
                ) : (
                  <span className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-5 py-3 text-sm font-bold text-[#8d9a87]">
                    Live site link pending
                    <ExternalLink size={16} />
                  </span>
                )}

                <Link
                  to="/contact"
                  className="forge-ghost inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-[#dce5d8] transition hover:-translate-y-0.5 hover:text-[#c9ff3b]"
                >
                  Build similar project
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="relative overflow-hidden rounded-[1.9rem] border border-white/[0.08] bg-[#0d130d]/72 shadow-[0_24px_80px_rgba(0,0,0,0.32)]"
              initial={{ opacity: 0, y: 20, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
            >
              <div className="relative aspect-[16/10]">
                {project.heroImage ? (
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="h-full w-full object-cover"
                    style={{
                      objectPosition:
                        project.heroImagePosition || "center center",
                    }}
                    draggable={false}
                  />
                ) : (
                  <div className="relative h-full w-full bg-gradient-to-br from-[#c9ff3b]/20 via-[#c9ff3b]/10 to-[#070907]">
                    <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#c9ff3b]/12 blur-3xl" />
                    <div className="absolute -bottom-20 left-10 h-48 w-48 rounded-full bg-[#f6c85f]/12 blur-3xl" />

                    <div className="absolute bottom-7 left-7 right-7">
                      <div className="mb-5 grid h-16 w-16 place-items-center rounded-2xl border border-[#c9ff3b]/18 bg-[#070907]/70 text-[#c9ff3b] backdrop-blur-md">
                        <FileCode2 size={28} />
                      </div>

                      <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#c9ff3b]">
                        Hero image coming soon
                      </p>

                      <h2 className="mt-2 text-2xl font-black tracking-[-0.04em] text-white">
                        {project.title}
                      </h2>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="forge-line" />

      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-3">
          {[
            {
              label: "Challenge",
              text: project.challenge,
              icon: Target,
              tone: "lime",
            },
            {
              label: "Solution",
              text: project.solution,
              icon: Layers3,
              tone: "amber",
            },
            {
              label: "Outcome",
              text: project.outcome,
              icon: Gauge,
              tone: "lime",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-[1.55rem] border border-white/[0.08] bg-[#070907]/68 p-5"
              >
                <div
                  className={`mb-5 grid h-11 w-11 place-items-center rounded-2xl border ${
                    item.tone === "lime"
                      ? "border-[#c9ff3b]/15 bg-[#c9ff3b]/10 text-[#c9ff3b]"
                      : "border-[#f6c85f]/15 bg-[#f6c85f]/10 text-[#f6c85f]"
                  }`}
                >
                  <Icon size={20} />
                </div>

                <h2 className="text-lg font-black tracking-[-0.02em] text-white">
                  {item.label}
                </h2>

                <p className="mt-3 text-sm leading-7 text-[#9aa69a]">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {galleryImages.length > 0 && (
        <section className="px-5 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 max-w-2xl">
              <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#c9ff3b]">
                Project views
              </p>

              <h2 className="mt-4 text-balance text-[27px] font-black leading-tight tracking-[-0.035em] text-white md:text-[36px]">
                Visual previews from the project.
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#9aa69a]">
                These images help visitors understand the interface direction,
                screen structure, and customer-facing experience.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {galleryImages.map((image, index) => (
                <motion.figure
                  key={image.src}
                  className={
                    image.ratio === "mobile"
                      ? ""
                      : index === 0
                        ? "md:col-span-2"
                        : ""
                  }
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.34,
                    delay: index * 0.04,
                    ease: "easeOut",
                  }}
                >
                  <div className="overflow-hidden rounded-[1.6rem] border border-white/[0.08] bg-[#0d130d]/72">
                    <div className={getGalleryAspectClass(image.ratio)}>
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="h-full w-full object-cover"
                        style={{
                          objectPosition: image.position || "center center",
                        }}
                        draggable={false}
                      />
                    </div>
                  </div>

                  {image.caption && (
                    <figcaption className="mt-3 text-sm font-semibold leading-6 text-[#9aa69a]">
                      {image.caption}
                    </figcaption>
                  )}
                </motion.figure>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="rounded-[1.7rem] border border-[#c9ff3b]/18 bg-[#0d130d]/68 p-6 md:p-8">
            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#c9ff3b]">
              Project structure
            </p>

            <h2 className="mt-4 text-balance text-[26px] font-black leading-tight tracking-[-0.035em] text-white md:text-[34px]">
              Built around practical features and a maintainable technology
              base.
            </h2>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.035] px-3.5 py-2 text-[11px] font-black uppercase tracking-[0.12em] text-[#c3cbbd]"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.services.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#c9ff3b]/14 bg-[#c9ff3b]/8 px-3.5 py-2 text-[11px] font-black uppercase tracking-[0.12em] text-[#c9ff3b]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {project.features.map((item, index) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-white/[0.08] bg-[#070907]/54 px-4 py-3.5"
              >
                <CheckCircle2
                  size={17}
                  className="mt-0.5 shrink-0 text-[#c9ff3b]"
                />
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#64705f]">
                    Feature 0{index + 1}
                  </p>
                  <p className="mt-1 text-sm font-semibold leading-6 text-[#c3cbbd]">
                    {item}
                  </p>
                </div>
              </div>
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
                  Similar project
                </p>

                <h2 className="mt-4 text-balance max-w-2xl text-[26px] font-black leading-tight tracking-[-0.035em] text-white md:text-[35px]">
                  Need a project with a similar structure or customer
                  experience?
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-7 text-[#9aa69a]">
                  Share the idea, workflow, or business goal. Motiora can help
                  shape it into a polished digital product.
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

export default ProjectDetails;