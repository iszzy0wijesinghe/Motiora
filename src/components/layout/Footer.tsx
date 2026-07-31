import {
  ArrowUpRight,
  ExternalLink,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Link, useLocation } from "react-router";
import { navItems } from "../../data/site";
import BrandLogo from "./BrandLogo";

const FILEGRIP_URL = "https://filegrip.cc";

const productLinks = [
  {
    label: "FileGrip",
    description: "Production online file tools",
    href: FILEGRIP_URL,
    external: true,
  },
  {
    label: "Projects",
    description: "Selected Motiora work",
    href: "/projects",
    external: false,
  },
  {
    label: "Tools",
    description: "Products and utilities",
    href: "/tools",
    external: false,
  },
];

function Footer() {
  const { pathname } = useLocation();
  const currentYear = new Date().getFullYear();

  const siteLinks = [
    {
      label: "Home",
      href: "/",
    },
    ...navItems.filter(
      (item) =>
        item.href !== "/" &&
        item.href !== "/projects" &&
        item.href !== "/tools",
    ),
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-[#060806] lg:pl-[86px]">
      {/* Background lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-190px] top-[-210px] h-[400px] w-[400px] rounded-full bg-[#c9ff3b]/[0.03] blur-[115px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-240px] right-[-190px] h-[430px] w-[430px] rounded-full bg-[#f6c85f]/[0.018] blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] [background-size:80px_80px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid gap-9 py-10 sm:py-12 md:grid-cols-2 lg:grid-cols-[1.3fr_0.68fr_1fr] lg:gap-12 lg:py-14">
          {/* Brand column */}
          <div>
            <Link
              to="/"
              aria-label="Motiora home"
              className="group inline-flex rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9ff3b]/60 focus-visible:ring-offset-4 focus-visible:ring-offset-[#060806]"
            >
              <BrandLogo
                variant="long"
                appearance="light"
                className="h-auto w-[148px] object-contain transition-transform duration-300 group-hover:scale-[1.012] sm:w-[165px] lg:w-[180px]"
              />
            </Link>

            <p className="mt-4 max-w-md text-[11px] font-normal leading-[1.8] text-[#818b7f] sm:text-[12px]">
              Motiora Software Solutions designs and develops business systems,
              digital platforms, public tools, and scalable software products.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.065] bg-white/[0.018] px-2.5 py-1.5 text-[8px] font-normal text-[#899487] sm:text-[9px]">
                <ShieldCheck size={11} className="text-[#c9ff3b]" />
                Product engineering
              </span>

              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.065] bg-white/[0.018] px-2.5 py-1.5 text-[8px] font-normal text-[#899487] sm:text-[9px]">
                <Sparkles size={11} className="text-[#f6c85f]" />
                Built in Sri Lanka
              </span>
            </div>

            <div className="mt-6 grid gap-2.5">
              <Link
                to="/contact"
                className="group inline-flex w-fit items-center gap-2 text-[11px] font-normal text-[#a5afa2] transition-colors duration-300 hover:text-[#c9ff3b] sm:text-[12px]"
              >
                <Mail size={13} />

                Contact Motiora

                <ArrowUpRight
                  size={12}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <span className="inline-flex items-center gap-2 text-[10px] font-normal text-[#667064] sm:text-[11px]">
                <MapPin size={12} className="text-[#758072]" />
                Sri Lanka
              </span>
            </div>
          </div>

          {/* Site navigation */}
          <div>
            <p className="text-[8px] font-normal uppercase tracking-[0.18em] text-[#5e695c] sm:text-[9px]">
              Explore
            </p>

            <nav
              aria-label="Footer navigation"
              className="mt-3.5 grid grid-cols-2 gap-1.5 md:grid-cols-1"
            >
              {siteLinks.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname === item.href ||
                      pathname.startsWith(`${item.href}/`);

                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`group flex min-h-8 items-center justify-between rounded-[0.65rem] border px-2.5 py-1.5 text-[10px] font-normal transition duration-300 sm:min-h-9 sm:text-[11px] ${
                      isActive
                        ? "border-[#c9ff3b]/12 bg-[#c9ff3b]/[0.04] text-[#c9ff3b]"
                        : "border-transparent text-[#818b7f] hover:border-white/[0.055] hover:bg-white/[0.018] hover:text-white"
                    }`}
                  >
                    <span>{item.label}</span>

                    <ArrowUpRight
                      size={11}
                      className={`shrink-0 transition-transform duration-300 ${
                        isActive
                          ? "text-[#c9ff3b]"
                          : "text-[#4e584c] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#c9ff3b]"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Products and work */}
          <div className="md:col-span-2 lg:col-span-1">
            <p className="text-[8px] font-normal uppercase tracking-[0.18em] text-[#5e695c] sm:text-[9px]">
              Products and work
            </p>

            <div className="mt-3.5 grid gap-1.5 sm:grid-cols-3 lg:grid-cols-1">
              {productLinks.map((item) => {
                const isActive =
                  !item.external &&
                  (pathname === item.href ||
                    pathname.startsWith(`${item.href}/`));

                const content = (
                  <>
                    <div className="min-w-0">
                      <p
                        className={`text-[10px] font-normal transition-colors duration-300 sm:text-[11px] ${
                          isActive
                            ? "text-[#c9ff3b]"
                            : "text-[#bdc6ba] group-hover:text-white"
                        }`}
                      >
                        {item.label}
                      </p>

                      <p className="mt-0.5 truncate text-[8px] font-normal text-[#606a5e] sm:text-[9px]">
                        {item.description}
                      </p>
                    </div>

                    {item.external ? (
                      <ExternalLink
                        size={12}
                        className="shrink-0 text-[#ff7a24] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    ) : (
                      <ArrowUpRight
                        size={12}
                        className="shrink-0 text-[#525c50] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#c9ff3b]"
                      />
                    )}
                  </>
                );

                const linkClasses = `group flex min-h-[48px] items-center justify-between gap-3 rounded-[0.8rem] border px-3 py-2 transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9ff3b]/50 ${
                  isActive
                    ? "border-[#c9ff3b]/12 bg-[#c9ff3b]/[0.035]"
                    : "border-white/[0.05] bg-white/[0.014] hover:-translate-y-0.5 hover:border-white/[0.09] hover:bg-white/[0.025]"
                }`;

                return item.external ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className={linkClasses}
                  >
                    {content}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={linkClasses}
                  >
                    {content}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/[0.05]">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p className="text-center text-[8px] font-normal leading-5 text-[#5c665a] sm:text-[9px] md:text-left">
            © {currentYear} Motiora Software Solutions. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 md:justify-end">
            <Link
              to="/privacy"
              className="text-[8px] font-normal text-[#626c60] transition-colors duration-300 hover:text-[#c9ff3b] sm:text-[9px]"
            >
              Privacy
            </Link>

            <Link
              to="/contact"
              className="text-[8px] font-normal text-[#626c60] transition-colors duration-300 hover:text-[#c9ff3b] sm:text-[9px]"
            >
              Support
            </Link>

            <span className="hidden h-3 w-px bg-white/[0.075] sm:block" />

            <span className="inline-flex items-center gap-1.5 text-[7px] font-normal uppercase tracking-[0.12em] text-[#515b4f] sm:text-[8px]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c9ff3b] shadow-[0_0_8px_rgba(201,255,59,0.35)]" />
              Systems in motion
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;