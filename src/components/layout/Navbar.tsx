import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  FolderKanban,
  Home,
  Info,
  Mail,
  Menu,
  Sparkles,
  Wrench,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { navItems } from "../../data/site";
import motioraLogo from "../../assets/motioralogo.webp";

const navIconByHref: Record<string, LucideIcon> = {
  "/projects": FolderKanban,
  "/tools": Wrench,
  "/about": Info,
  "/contact": Mail,
};

function Mark() {
  return (
    <Link
      to="/"
      className="group grid h-11 w-11 place-items-center"
      aria-label="Go to Motiora home"
    >
      <img
        src={motioraLogo}
        alt="Motiora"
        className="h-10 w-10 object-contain transition duration-300 group-hover:scale-105"
        draggable={false}
      />
    </Link>
  );
}

function RailTooltip({ label }: { label: string }) {
  return (
    <span className="pointer-events-none absolute left-[56px] top-1/2 z-50 -translate-y-1/2 whitespace-nowrap rounded-full border border-[#f6f8ef]/10 bg-[#070907]/95 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-[#f6f8ef] opacity-0 shadow-xl shadow-black/40 backdrop-blur-xl transition duration-200 group-hover:translate-x-1 group-hover:opacity-100 group-focus-visible:translate-x-1 group-focus-visible:opacity-100">
      {label}
    </span>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const items = useMemo(() => navItems.filter((item) => item.href !== "/"), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      {/* Desktop left command rail - unchanged */}
      <aside className="fixed bottom-4 left-4 top-4 z-50 hidden w-[64px] flex-col items-center justify-between rounded-[2rem] border border-[#f6f8ef]/10 bg-[#070907]/78 px-2 py-3 shadow-[0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur-2xl lg:flex">
        <Mark />

        <nav
          aria-label="Main navigation"
          className="flex flex-col items-center gap-2"
        >
          <NavLink
            to="/"
            className="group relative grid h-11 w-11 place-items-center rounded-full transition"
          >
            {location.pathname === "/" && (
              <motion.span
                layoutId="forge-rail-active"
                className="absolute inset-0 rounded-full bg-[#d8ff73]"
                transition={{ type: "spring", stiffness: 430, damping: 34 }}
              />
            )}

            <motion.span
              className={`relative z-10 grid h-full w-full place-items-center rounded-full ${
                location.pathname === "/"
                  ? "text-[#101408]"
                  : "bg-white/[0.035] text-[#8d9a87] group-hover:bg-[#d8ff73]/10 group-hover:text-[#d8ff73]"
              }`}
              whileHover={{ scale: 1.08, rotate: -4 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: "spring", stiffness: 420, damping: 24 }}
            >
              <Home size={17} />
            </motion.span>

            <RailTooltip label="Home" />
          </NavLink>

          {items.map((item) => {
            const Icon = navIconByHref[item.href] ?? FolderKanban;
            const active = location.pathname.startsWith(item.href);

            return (
              <NavLink
                key={item.href}
                to={item.href}
                className="group relative grid h-11 w-11 place-items-center rounded-full transition"
              >
                {active && (
                  <motion.span
                    layoutId="forge-rail-active"
                    className="absolute inset-0 rounded-full bg-[#d8ff73]"
                    transition={{ type: "spring", stiffness: 430, damping: 34 }}
                  />
                )}

                <motion.span
                  className={`relative z-10 grid h-full w-full place-items-center rounded-full ${
                    active
                      ? "text-[#101408]"
                      : "bg-white/[0.035] text-[#8d9a87] group-hover:bg-[#d8ff73]/10 group-hover:text-[#d8ff73]"
                  }`}
                  whileHover={{ scale: 1.08, rotate: -4 }}
                  whileTap={{ scale: 0.94 }}
                  transition={{ type: "spring", stiffness: 420, damping: 24 }}
                >
                  <Icon size={17} />
                </motion.span>

                <RailTooltip label={item.label} />
              </NavLink>
            );
          })}
        </nav>

        <Link
          to="/contact"
          className="forge-primary grid h-11 w-11 place-items-center rounded-full transition hover:-translate-y-0.5"
          aria-label="Start project"
        >
          <ArrowUpRight size={17} />
        </Link>
      </aside>

      {/* Mobile top bar */}
      <header className="fixed inset-x-0 top-0 z-[70] px-4 pt-3 lg:hidden">
        <nav
          className={`mx-auto flex h-[56px] items-center justify-between rounded-full px-3 transition duration-300 ${
            scrolled || open
              ? "border border-[#f6f8ef]/12 bg-[#070907]/90 shadow-[0_18px_58px_rgba(0,0,0,0.42)] backdrop-blur-2xl"
              : "border border-[#f6f8ef]/[0.07] bg-[#070907]/58 shadow-[0_14px_44px_rgba(0,0,0,0.24)] backdrop-blur-xl"
          }`}
        >
          <div className="flex items-center gap-2.5">
            <Mark />

            <div className="leading-none">
              <span className="block text-sm font-black tracking-[-0.04em] text-white">
                Motiora
              </span>
              <span className="mt-1 block text-[9px] font-black uppercase tracking-[0.18em] text-[#d8ff73]/70">
                Software Studio
              </span>
            </div>
          </div>

          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/12 bg-white/[0.045] text-white shadow-lg shadow-black/20 transition active:scale-95"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </nav>
      </header>

      {/* Mobile full screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] overflow-y-auto bg-[#070907]/96 px-4 pb-6 pt-[86px] backdrop-blur-2xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <motion.div
              className="pointer-events-none absolute left-[-22%] top-[6%] h-72 w-72 rounded-full bg-[#d8ff73]/10 blur-3xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            />

            <motion.div
              className="pointer-events-none absolute bottom-[-16%] right-[-20%] h-80 w-80 rounded-full bg-[#f6c85f]/10 blur-3xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            />

            <motion.div
              className="relative mx-auto flex min-h-[calc(100vh-110px)] max-w-lg flex-col"
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
            >
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-4 shadow-2xl shadow-black/35">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#d8ff73]/18 bg-[#d8ff73]/8 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-[#d8ff73]">
                      <Sparkles size={12} />
                      Navigation
                    </div>

                    <h2 className="mt-4 max-w-[260px] text-[34px] font-black leading-[0.96] tracking-[-0.06em] text-white">
                      Move through Motiora.
                    </h2>

                    <p className="mt-3 max-w-sm text-sm leading-6 text-[#9aa69a]">
                      Explore projects, tools, studio direction, and contact
                      options.
                    </p>
                  </div>
                </div>
              </div>

              <nav aria-label="Mobile navigation" className="mt-4 grid gap-2">
                <Link
                  to="/"
                  className={`group flex items-center justify-between rounded-[1.35rem] border px-4 py-4 transition active:scale-[0.99] ${
                    location.pathname === "/"
                      ? "border-[#d8ff73]/70 bg-[#d8ff73] text-[#11160b]"
                      : "border-white/10 bg-white/[0.04] text-white"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={`grid h-10 w-10 place-items-center rounded-full ${
                        location.pathname === "/"
                          ? "bg-[#11160b]/10"
                          : "bg-white/[0.055] text-[#d8ff73]"
                      }`}
                    >
                      <Home size={18} />
                    </span>

                    <span>
                      <span className="block text-base font-black">Home</span>
                      <span
                        className={`mt-0.5 block text-[11px] font-bold ${
                          location.pathname === "/"
                            ? "text-[#11160b]/60"
                            : "text-[#9aa69a]"
                        }`}
                      >
                        Studio landing page
                      </span>
                    </span>
                  </span>

                  <ArrowUpRight
                    size={17}
                    className={
                      location.pathname === "/"
                        ? "text-[#11160b]/70"
                        : "text-[#d8ff73]"
                    }
                  />
                </Link>

                {items.map((item) => {
                  const Icon = navIconByHref[item.href] ?? FolderKanban;
                  const active = location.pathname.startsWith(item.href);

                  return (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={`group flex items-center justify-between rounded-[1.35rem] border px-4 py-4 transition active:scale-[0.99] ${
                        active
                          ? "border-[#d8ff73]/70 bg-[#d8ff73] text-[#11160b]"
                          : "border-white/10 bg-white/[0.04] text-white"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className={`grid h-10 w-10 place-items-center rounded-full ${
                            active
                              ? "bg-[#11160b]/10"
                              : "bg-white/[0.055] text-[#d8ff73]"
                          }`}
                        >
                          <Icon size={18} />
                        </span>

                        <span>
                          <span className="block text-base font-black">
                            {item.label}
                          </span>
                          <span
                            className={`mt-0.5 block text-[11px] font-bold ${
                              active ? "text-[#11160b]/60" : "text-[#9aa69a]"
                            }`}
                          >
                            Open {item.label.toLowerCase()}
                          </span>
                        </span>
                      </span>

                      <ArrowUpRight
                        size={17}
                        className={
                          active ? "text-[#11160b]/70" : "text-[#d8ff73]"
                        }
                      />
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-auto pt-5">
                <Link
                  to="/contact"
                  className="forge-primary flex items-center justify-center gap-2 rounded-[1.35rem] px-5 py-4 text-sm font-black"
                >
                  Start project
                  <ArrowUpRight size={17} />
                </Link>

                <p className="mx-auto mt-4 max-w-xs text-center text-[11px] font-bold leading-5 text-[#8d9a87]">
                  Premium software, lightweight tools, and launch-ready digital
                  products.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
