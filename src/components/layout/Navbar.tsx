import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  FolderKanban,
  Home,
  Info,
  Mail,
  Menu,
  Wrench,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { navItems } from "../../data/site";

const navIconByHref: Record<string, LucideIcon> = {
  "/projects": FolderKanban,
  "/tools": Wrench,
  "/about": Info,
  "/contact": Mail,
};

function Mark() {
  return (
    <Link to="/" className="group grid h-11 w-11 place-items-center rounded-full">
      <span className="relative h-9 w-9">
        <span className="absolute inset-0 rounded-full bg-[#d8ff73]/12 blur-md transition group-hover:bg-[#d8ff73]/20" />
        <span className="absolute inset-[5px] rounded-full border border-[#d8ff73]/25 bg-[#0d130d]" />
        <span className="absolute left-1/2 top-1/2 h-4 w-1 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full bg-[#d8ff73] shadow-[0_0_18px_rgba(216,255,115,0.8)]" />
        <span className="absolute left-1/2 top-1/2 h-4 w-1 -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full bg-[#f6c85f] shadow-[0_0_18px_rgba(246,200,95,0.55)]" />
      </span>
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

  return (
    <>
      {/* Desktop left command rail */}
      <aside className="fixed bottom-4 left-4 top-4 z-50 hidden w-[64px] flex-col items-center justify-between rounded-[2rem] border border-[#f6f8ef]/10 bg-[#070907]/78 px-2 py-3 shadow-[0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur-2xl lg:flex">
        <Mark />

        <nav aria-label="Main navigation" className="flex flex-col items-center gap-2">
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
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 lg:hidden">
        <nav
          className={`mx-auto flex h-[54px] items-center justify-between rounded-full px-3 transition duration-300 ${
            scrolled || open
              ? "border border-[#f6f8ef]/10 bg-[#070907]/86 shadow-[0_18px_58px_rgba(0,0,0,0.34)] backdrop-blur-2xl"
              : "border border-[#f6f8ef]/[0.055] bg-[#070907]/44 backdrop-blur-xl"
          }`}
        >
          <div className="flex items-center gap-2">
            <Mark />
            <span className="text-sm font-black tracking-[-0.04em] text-white">
              Motiora
            </span>
          </div>

          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.035] text-white"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="mx-auto mt-2 rounded-[1.4rem] border border-white/10 bg-[#070907]/96 p-2 shadow-2xl shadow-black/45 backdrop-blur-2xl"
            >
              <div className="grid gap-1.5">
                <Link
                  to="/"
                  className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-black ${
                    location.pathname === "/"
                      ? "bg-[#d8ff73] text-[#11160b]"
                      : "bg-white/[0.035] text-slate-300"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <Home size={17} />
                    Home
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.16em] opacity-60">
                    Open
                  </span>
                </Link>

                {items.map((item) => {
                  const Icon = navIconByHref[item.href] ?? FolderKanban;
                  const active = location.pathname.startsWith(item.href);

                  return (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-black ${
                        active
                          ? "bg-[#d8ff73] text-[#11160b]"
                          : "bg-white/[0.035] text-slate-300"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <Icon size={17} />
                        {item.label}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.16em] opacity-60">
                        Open
                      </span>
                    </Link>
                  );
                })}

                <Link
                  to="/contact"
                  className="forge-primary mt-1 flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-black"
                >
                  Start project
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

export default Navbar;