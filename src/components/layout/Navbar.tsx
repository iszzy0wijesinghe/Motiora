import type { MouseEvent as ReactMouseEvent } from "react";
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
import BrandLogo from "./BrandLogo";

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
      <BrandLogo
        variant="short"
        appearance="light"
        className="h-9 w-9 object-contain transition duration-300 group-hover:scale-105"
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

  const handleMobileLinkClick = (
    event: ReactMouseEvent<HTMLAnchorElement>,
    active: boolean,
  ) => {
    if (active) {
      event.preventDefault();
    }

    setOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

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
      {/* Desktop left command rail */}
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
                className="absolute inset-0 rounded-full bg-[#c9ff3b]"
                transition={{ type: "spring", stiffness: 430, damping: 34 }}
              />
            )}

            <motion.span
              className={`relative z-10 grid h-full w-full place-items-center rounded-full ${
                location.pathname === "/"
                  ? "text-[#101408]"
                  : "bg-white/[0.035] text-[#8d9a87] group-hover:bg-[#c9ff3b]/10 group-hover:text-[#c9ff3b]"
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
                    className="absolute inset-0 rounded-full bg-[#c9ff3b]"
                    transition={{ type: "spring", stiffness: 430, damping: 34 }}
                  />
                )}

                <motion.span
                  className={`relative z-10 grid h-full w-full place-items-center rounded-full ${
                    active
                      ? "text-[#101408]"
                      : "bg-white/[0.035] text-[#8d9a87] group-hover:bg-[#c9ff3b]/10 group-hover:text-[#c9ff3b]"
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
          className={`mx-auto flex h-[54px] items-center justify-between rounded-full px-3 transition duration-300 ${
            scrolled || open
              ? "border border-[#f6f8ef]/12 bg-[#070907]/90 shadow-[0_16px_48px_rgba(0,0,0,0.38)] backdrop-blur-2xl"
              : "border border-[#f6f8ef]/[0.07] bg-[#070907]/58 shadow-[0_12px_36px_rgba(0,0,0,0.22)] backdrop-blur-xl"
          }`}
        >
          <Link
            to="/"
            className="group inline-flex items-center"
            aria-label="Go to Motiora home"
          >
            <BrandLogo
              variant="long"
              appearance="light"
              className="h-[27px] w-auto max-w-[150px] object-contain transition duration-300 group-hover:scale-[1.02]"
            />
          </Link>

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

      {/* Mobile compact full screen menu */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] overflow-y-auto bg-[#070907]/94 px-4 pb-5 pt-[78px] backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
          >
            <div className="pointer-events-none absolute left-[-18%] top-[10%] h-52 w-52 rounded-full bg-[#c9ff3b]/8 blur-3xl" />
            <div className="pointer-events-none absolute bottom-[-12%] right-[-18%] h-56 w-56 rounded-full bg-[#f6c85f]/8 blur-3xl" />

            <motion.div
              className="relative mx-auto max-w-md"
              initial={{ opacity: 0, y: 10, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.985 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
            >
              <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.035] p-3 shadow-xl shadow-black/30">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#c9ff3b]/18 bg-[#c9ff3b]/8 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.18em] text-[#c9ff3b]">
                  <Sparkles size={11} />
                  Navigation
                </div>

                <h2 className="mt-3 text-[24px] font-black leading-[0.98] tracking-[-0.055em] text-white">
                  Move through Motiora.
                </h2>

                <p className="mt-2 text-xs leading-5 text-[#9aa69a]">
                  Explore projects, tools, studio direction, and contact.
                </p>
              </div>

              <nav aria-label="Mobile navigation" className="mt-3 grid gap-1.5">
                <Link
                  to="/"
                  onClick={(event) =>
                    handleMobileLinkClick(event, location.pathname === "/")
                  }
                  className={`group flex items-center justify-between rounded-[1.05rem] border px-3.5 py-3 transition active:scale-[0.99] ${
                    location.pathname === "/"
                      ? "border-[#c9ff3b]/70 bg-[#c9ff3b] text-[#11160b]"
                      : "border-white/10 bg-white/[0.04] text-white"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={`grid h-9 w-9 place-items-center rounded-full ${
                        location.pathname === "/"
                          ? "bg-[#11160b]/10 text-[#11160b]"
                          : "bg-white/[0.055] text-[#c9ff3b]"
                      }`}
                    >
                      <Home size={17} />
                    </span>

                    <span>
                      <span
                        className={`block text-sm font-black ${
                          location.pathname === "/"
                            ? "text-[#11160b]"
                            : "text-white"
                        }`}
                      >
                        Home
                      </span>
                      <span
                        className={`mt-0.5 block text-[10px] font-bold ${
                          location.pathname === "/"
                            ? "text-[#11160b]/65"
                            : "text-[#9aa69a]"
                        }`}
                      >
                        Studio landing page
                      </span>
                    </span>
                  </span>

                  <ArrowUpRight
                    size={16}
                    className={
                      location.pathname === "/"
                        ? "text-[#11160b]/70"
                        : "text-[#c9ff3b]"
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
                      onClick={(event) => handleMobileLinkClick(event, active)}
                      className={`group flex items-center justify-between rounded-[1.05rem] border px-3.5 py-3 transition active:scale-[0.99] ${
                        active
                          ? "border-[#c9ff3b]/70 bg-[#c9ff3b] text-[#11160b]"
                          : "border-white/10 bg-white/[0.04] text-white"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className={`grid h-9 w-9 place-items-center rounded-full ${
                            active
                              ? "bg-[#11160b]/10 text-[#11160b]"
                              : "bg-white/[0.055] text-[#c9ff3b]"
                          }`}
                        >
                          <Icon size={17} />
                        </span>

                        <span>
                          <span
                            className={`block text-sm font-black ${
                              active ? "text-[#11160b]" : "text-white"
                            }`}
                          >
                            {item.label}
                          </span>
                          <span
                            className={`mt-0.5 block text-[10px] font-bold ${
                              active ? "text-[#11160b]/65" : "text-[#9aa69a]"
                            }`}
                          >
                            Open {item.label.toLowerCase()}
                          </span>
                        </span>
                      </span>

                      <ArrowUpRight
                        size={16}
                        className={
                          active ? "text-[#11160b]/70" : "text-[#c9ff3b]"
                        }
                      />
                    </Link>
                  );
                })}
              </nav>

              <Link
                to="/contact"
                onClick={(event) =>
                  handleMobileLinkClick(
                    event,
                    location.pathname.startsWith("/contact"),
                  )
                }
                className="forge-primary mt-3 flex items-center justify-center gap-2 rounded-[1.05rem] px-4 py-3 text-sm font-black"
              >
                Start project
                <ArrowUpRight size={16} />
              </Link>

              <p className="mx-auto mt-3 max-w-xs text-center text-[10px] font-bold leading-5 text-[#8d9a87]">
                Premium software, lightweight tools, and launch-ready digital
                products.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
