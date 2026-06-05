import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { navItems } from "../../data/site";

function Footer() {
  return (
    <footer className="border-t border-[#f6f8ef]/[0.08] bg-[#070907]/75 lg:pl-[86px]">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 md:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <p className="text-[20px] font-black tracking-[-0.05em] text-white">
            Motiora
          </p>

          <p className="mt-4 max-w-lg text-sm leading-7 text-[#8d9a87]">
            A software company building client systems, business platforms,
            public tools, and future-ready digital products.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 md:text-right">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-sm font-bold text-[#8d9a87] transition hover:text-[#d8ff73] md:justify-end"
          >
            Home
            <ArrowUpRight
              size={13}
              className="opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
            />
          </Link>

          {navItems
            .filter((item) => item.href !== "/")
            .map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="group inline-flex items-center gap-2 text-sm font-bold text-[#8d9a87] transition hover:text-[#d8ff73] md:justify-end"
              >
                {item.label}
                <ArrowUpRight
                  size={13}
                  className="opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                />
              </Link>
            ))}
        </div>
      </div>

      <div className="border-t border-[#f6f8ef]/[0.08] px-5 py-5 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6f7c6e]">
        © {new Date().getFullYear()} Motiora. Built with force and clarity.
      </div>
    </footer>
  );
}

export default Footer;