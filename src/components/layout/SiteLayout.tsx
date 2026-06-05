import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SpaceBackdrop from "../visuals/SpaceBackdrop";

const orbitStars = [
  { x: "13%", y: "18%", delay: 0.02, size: 3, moveX: 90, moveY: -38 },
  { x: "22%", y: "74%", delay: 0.08, size: 2, moveX: -76, moveY: 46 },
  { x: "32%", y: "28%", delay: 0.14, size: 3, moveX: 84, moveY: 34 },
  { x: "41%", y: "82%", delay: 0.2, size: 2, moveX: -82, moveY: -38 },
  { x: "50%", y: "14%", delay: 0.26, size: 3, moveX: 66, moveY: 58 },
  { x: "58%", y: "68%", delay: 0.32, size: 2, moveX: -72, moveY: -44 },
  { x: "67%", y: "34%", delay: 0.38, size: 3, moveX: 74, moveY: -36 },
  { x: "76%", y: "78%", delay: 0.44, size: 2, moveX: -84, moveY: 42 },
  { x: "84%", y: "24%", delay: 0.5, size: 3, moveX: 82, moveY: 36 },
  { x: "91%", y: "58%", delay: 0.56, size: 2, moveX: -78, moveY: -48 },
];

function getDesktopPortalState() {
  if (typeof window === "undefined") return false;

  return window.matchMedia("(min-width: 1024px) and (pointer: fine)").matches;
}

function useDesktopPortal() {
  const [enabled, setEnabled] = useState(getDesktopPortalState);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia("(min-width: 1024px) and (pointer: fine)");

    const update = () => {
      setEnabled(media.matches);
    };

    update();
    media.addEventListener("change", update);

    return () => {
      media.removeEventListener("change", update);
    };
  }, []);

  return enabled;
}

function GalaxyPortal() {
  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-40 overflow-hidden bg-[#070907]/42 lg:left-[86px]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1.28, ease: "easeOut" }}
    >
      <motion.div
        className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d8ff73]/[0.12] blur-2xl"
        initial={{ scale: 0.28, opacity: 0.2 }}
        animate={{ scale: 1.55, opacity: [0.18, 0.42, 0] }}
        transition={{ duration: 1.22, ease: "easeOut" }}
      />

      <motion.div
        className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d8ff73]/45 shadow-[0_0_70px_rgba(216,255,115,0.18)]"
        initial={{ scale: 0.2, rotate: -44, opacity: 0 }}
        animate={{ scale: 1.42, rotate: 70, opacity: [0, 0.86, 0] }}
        transition={{ duration: 1.18, ease: "easeOut" }}
      />

      <motion.div
        className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#f6c85f]/38 shadow-[0_0_62px_rgba(246,200,95,0.16)]"
        initial={{ scale: 0.16, rotate: 38, opacity: 0 }}
        animate={{ scale: 1.64, rotate: -62, opacity: [0, 0.76, 0] }}
        transition={{ duration: 1.25, ease: "easeOut" }}
      />

      <motion.div
        className="absolute left-1/2 top-1/2 h-[250px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-[999px] border border-[#d8ff73]/18"
        initial={{ scale: 0.18, rotate: -22, opacity: 0 }}
        animate={{ scale: 1.18, rotate: 18, opacity: [0, 0.72, 0] }}
        transition={{ duration: 1.15, ease: "easeOut", delay: 0.04 }}
      />

      <motion.div
        className="absolute left-1/2 top-1/2 h-[210px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-[999px] border border-[#f6c85f]/14"
        initial={{ scale: 0.16, rotate: 28, opacity: 0 }}
        animate={{ scale: 1.24, rotate: -20, opacity: [0, 0.62, 0] }}
        transition={{ duration: 1.18, ease: "easeOut", delay: 0.08 }}
      />

      <motion.div
        className="absolute left-1/2 top-1/2 h-px w-[72vw] max-w-[980px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-[#d8ff73]/70 to-transparent shadow-[0_0_18px_rgba(216,255,115,0.42)]"
        initial={{ scaleX: 0, opacity: 0, rotate: -18 }}
        animate={{ scaleX: [0, 1.15, 0.72], opacity: [0, 0.85, 0], rotate: 16 }}
        transition={{ duration: 1.02, ease: "easeOut", delay: 0.08 }}
      />

      <motion.div
        className="absolute left-1/2 top-1/2 h-[130px] w-[130px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d8ff73]/35 bg-[#d8ff73]/10 shadow-[0_0_58px_rgba(216,255,115,0.22)]"
        initial={{ scale: 0.1, opacity: 0 }}
        animate={{ scale: [0.1, 1.2, 0.3], opacity: [0, 0.78, 0] }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.02 }}
      />

      <motion.span
        className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d8ff73] shadow-[0_0_20px_rgba(216,255,115,0.9)]"
        initial={{ opacity: 0, x: -260, y: -45, scale: 0.4 }}
        animate={{
          opacity: [0, 1, 0],
          x: [-260, 0, 260],
          y: [-45, -96, 40],
          scale: [0.4, 1, 0.5],
        }}
        transition={{ duration: 1.04, ease: "easeOut", delay: 0.12 }}
      />

      <motion.span
        className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f6c85f] shadow-[0_0_18px_rgba(246,200,95,0.75)]"
        initial={{ opacity: 0, x: 230, y: 58, scale: 0.4 }}
        animate={{
          opacity: [0, 0.9, 0],
          x: [230, -20, -240],
          y: [58, 100, -38],
          scale: [0.4, 1, 0.5],
        }}
        transition={{ duration: 1.08, ease: "easeOut", delay: 0.16 }}
      />

      {orbitStars.map((star, index) => (
        <motion.span
          key={`${star.x}-${star.y}-${index}`}
          className="absolute rounded-full bg-[#d8ff73] shadow-[0_0_14px_rgba(216,255,115,0.75)]"
          style={{
            left: star.x,
            top: star.y,
            width: star.size,
            height: star.size,
          }}
          initial={{ opacity: 0, scale: 0.15, x: 0, y: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.15, 1.15, 0.35],
            x: [0, star.moveX],
            y: [0, star.moveY],
          }}
          transition={{
            duration: 1.05,
            ease: "easeOut",
            delay: star.delay,
          }}
        />
      ))}
    </motion.div>
  );
}

function ScrollToTopOnRouteChange() {
  const location = useLocation();

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });

      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });

    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname]);

  return null;
}

function SiteLayout() {
  const location = useLocation();
  const reduceMotion = useReducedMotion();
  const desktopPortal = useDesktopPortal();

  // Galaxy portal is desktop only. Mobile uses clean fade + slide + blur.
  const showPortal = desktopPortal && !reduceMotion;

  const pageInitial = reduceMotion
    ? { opacity: 0 }
    : desktopPortal
      ? {
          opacity: 0,
          y: 26,
          scale: 0.978,
          rotateX: 6,
          rotateY: -3,
        }
      : {
          opacity: 0,
          y: 16,
          filter: "blur(5px)",
        };

  const pageAnimate = reduceMotion
    ? { opacity: 1 }
    : desktopPortal
      ? {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          rotateY: 0,
        }
      : {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        };

  const pageExit = reduceMotion
    ? { opacity: 0 }
    : desktopPortal
      ? {
          opacity: 0,
          y: -14,
          scale: 0.99,
          rotateX: -4,
          rotateY: 3,
        }
      : {
          opacity: 0,
          y: -10,
          filter: "blur(4px)",
        };

  return (
    <div className="forge-shell relative min-h-screen bg-[#070907] text-[#f6f8ef]">
      <SpaceBackdrop />

      <Navbar />
      <ScrollToTopOnRouteChange />

      <AnimatePresence mode="wait">
        {showPortal && <GalaxyPortal key={`portal-${location.pathname}`} />}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          id="main-content"
          className="relative z-10 min-h-screen overflow-hidden lg:pl-[86px]"
          initial={pageInitial}
          animate={pageAnimate}
          exit={pageExit}
          transition={{
            duration: desktopPortal ? 0.56 : 0.3,
            ease: "easeOut",
          }}
          style={{
            transformOrigin: "center top",
            transformStyle: desktopPortal ? "preserve-3d" : "flat",
          }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      <div className="relative z-20 lg:pl-[86px]">
        <Footer />
      </div>
    </div>
  );
}

export default SiteLayout;
