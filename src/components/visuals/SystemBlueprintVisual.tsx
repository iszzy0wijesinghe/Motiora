import type { LucideIcon } from "lucide-react";
import {
  Boxes,
  FolderKanban,
  Rocket,
  Sparkles,
  WandSparkles,
  Wrench,
  Zap,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

type Planet = {
  title: string;
  icon: LucideIcon;
  rx: number;
  ry: number;
  phase: number;
  duration: number;
};

const planets: Planet[] = [
  { title: "Projects", icon: FolderKanban, rx: 215, ry: 74, phase: 0, duration: 34 },
  { title: "Tools", icon: Wrench, rx: 185, ry: 118, phase: Math.PI * 0.58, duration: 40 },
  { title: "Systems", icon: Boxes, rx: 215, ry: 74, phase: Math.PI, duration: 34 },
  { title: "Products", icon: Rocket, rx: 185, ry: 118, phase: Math.PI * 1.55, duration: 40 },
];

const stars = [
  { left: "8%", top: "24%", size: 3, delay: 0 },
  { left: "17%", top: "66%", size: 4, delay: 0.3 },
  { left: "28%", top: "12%", size: 3, delay: 0.8 },
  { left: "38%", top: "84%", size: 4, delay: 0.2 },
  { left: "49%", top: "9%", size: 3, delay: 1 },
  { left: "60%", top: "88%", size: 4, delay: 0.45 },
  { left: "70%", top: "16%", size: 4, delay: 0.6 },
  { left: "80%", top: "78%", size: 3, delay: 0.9 },
  { left: "88%", top: "32%", size: 4, delay: 0.15 },
  { left: "93%", top: "58%", size: 3, delay: 0.7 },
];

function createOrbit(rx: number, ry: number, phase: number) {
  const steps = 90;
  const x: number[] = [];
  const y: number[] = [];

  for (let i = 0; i <= steps; i += 1) {
    const angle = phase + (Math.PI * 2 * i) / steps;
    x.push(Math.cos(angle) * rx);
    y.push(Math.sin(angle) * ry);
  }

  return { x, y };
}

function PlanetNode({ title, icon: Icon, rx, ry, phase, duration }: Planet) {
  const reduceMotion = useReducedMotion();
  const orbit = createOrbit(rx, ry, phase);

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 z-30 flex w-20 -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center will-change-transform"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={
        reduceMotion
          ? {
              opacity: 1,
              scale: 1,
              x: Math.cos(phase) * rx,
              y: Math.sin(phase) * ry,
            }
          : {
              opacity: 1,
              scale: 1,
              x: orbit.x,
              y: orbit.y,
            }
      }
      transition={
        reduceMotion
          ? { duration: 0.4 }
          : {
              opacity: { duration: 0.5 },
              scale: { duration: 0.5 },
              x: { duration, repeat: Infinity, ease: "linear" },
              y: { duration, repeat: Infinity, ease: "linear" },
            }
      }
    >
      <div className="relative grid h-12 w-12 place-items-center rounded-full text-cyan-100">
        <div className="absolute inset-0 rounded-full bg-cyan-300/16 blur-xl" />
        <div className="absolute inset-1 rounded-full border border-cyan-300/25 bg-[#071426]/58 shadow-[0_0_38px_rgba(0,209,255,0.18)] backdrop-blur-md" />
        <Icon className="relative z-10" size={19} />
      </div>

      <p className="mt-2 text-[10px] font-black uppercase tracking-[0.14em] text-slate-300 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
        {title}
      </p>
    </motion.div>
  );
}

function SystemBlueprintVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="spatial-perspective relative mx-auto min-h-[390px] w-full max-w-[580px] lg:min-h-[500px]"
      initial={{ opacity: 0, y: 18, rotateX: 8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      aria-label="Motiora spatial galaxy visual"
    >
      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="absolute right-8 top-12 h-64 w-64 rounded-full bg-purple-500/12 blur-3xl" />

      {stars.map((star, index) => (
        <motion.span
          key={`${star.left}-${star.top}-${index}`}
          className="absolute rounded-full bg-cyan-100"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
          }}
          animate={
            reduceMotion
              ? { opacity: 0.55 }
              : { opacity: [0.18, 0.9, 0.18], scale: [0.8, 1.3, 0.8] }
          }
          transition={{
            duration: 3.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: star.delay,
          }}
        />
      ))}

      <svg
        className="absolute inset-0 h-full w-full spatial-plane"
        viewBox="0 0 580 500"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="galaxyLine" x1="64" y1="80" x2="516" y2="420">
            <stop stopColor="#00D1FF" />
            <stop offset="0.45" stopColor="#2563EB" />
            <stop offset="1" stopColor="#7C3AED" />
          </linearGradient>

          <radialGradient id="galaxyGlow" cx="50%" cy="50%" r="50%">
            <stop stopColor="#00D1FF" stopOpacity="0.32" />
            <stop offset="0.45" stopColor="#2563EB" stopOpacity="0.12" />
            <stop offset="1" stopColor="#050B16" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="290" cy="250" r="178" fill="url(#galaxyGlow)" />

        <motion.ellipse
          cx="290"
          cy="250"
          rx="215"
          ry="74"
          stroke="url(#galaxyLine)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.7"
          initial={{ pathLength: 0 }}
          animate={reduceMotion ? { pathLength: 1 } : { pathLength: 1, rotate: 360 }}
          transition={
            reduceMotion
              ? { duration: 0.8 }
              : {
                  pathLength: { duration: 1.1, ease: "easeOut" },
                  rotate: { duration: 34, repeat: Infinity, ease: "linear" },
                }
          }
          style={{ transformOrigin: "290px 250px" }}
        />

        <motion.ellipse
          cx="290"
          cy="250"
          rx="185"
          ry="118"
          stroke="url(#galaxyLine)"
          strokeWidth="1.1"
          strokeDasharray="8 14"
          strokeLinecap="round"
          opacity="0.5"
          initial={{ pathLength: 0 }}
          animate={reduceMotion ? { pathLength: 1 } : { pathLength: 1, rotate: -360 }}
          transition={
            reduceMotion
              ? { duration: 0.8 }
              : {
                  pathLength: { duration: 1.1, delay: 0.12, ease: "easeOut" },
                  rotate: { duration: 40, repeat: Infinity, ease: "linear" },
                }
          }
          style={{ transformOrigin: "290px 250px" }}
        />

        <motion.ellipse
          cx="290"
          cy="250"
          rx="140"
          ry="140"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1"
          strokeDasharray="4 12"
          opacity="0.42"
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "290px 250px" }}
        />
      </svg>

      <motion.div
        className="absolute left-1/2 top-1/2 z-20 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 rounded-full border border-cyan-300/20 bg-cyan-300/10 blur-sm" />
        <div className="relative grid h-full w-full place-items-center rounded-full border border-white/10 bg-[#071426]/54 shadow-[0_0_90px_rgba(0,209,255,0.18)] backdrop-blur-xl">
          <div className="absolute inset-4 rounded-full border border-white/[0.06]" />
          <div className="absolute inset-8 rounded-full border border-cyan-300/10" />

          <div className="text-center">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-cyan-200 shadow-[0_0_48px_rgba(0,209,255,0.18)]">
              <WandSparkles size={25} />
            </div>

            <p className="mt-4 text-[13px] font-black uppercase tracking-[0.24em] text-white">
              Motiora
            </p>
            <p className="mt-1 text-[9px] font-black uppercase tracking-[0.18em] text-slate-500">
              spatial system
            </p>
          </div>
        </div>
      </motion.div>

      {planets.map((planet) => (
        <PlanetNode key={planet.title} {...planet} />
      ))}

      <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 items-center gap-3">
        {["Secure", "Scalable", "Fast"].map((item) => (
          <span
            key={item}
            className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-slate-400"
          >
            {item === "Secure" && <Sparkles size={12} className="text-cyan-200" />}
            {item === "Scalable" && <Zap size={12} className="text-cyan-200" />}
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default SystemBlueprintVisual;