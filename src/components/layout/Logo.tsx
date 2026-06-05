import { Link } from "react-router";

function Logo() {
  return (
    <Link
      to="/"
      className="group inline-flex items-center gap-2.5"
      aria-label="Motiora home"
    >
      <span className="relative h-8 w-8">
        <span className="absolute inset-0 rounded-full bg-cyan-300/15 blur-md transition group-hover:bg-cyan-300/25" />
        <span className="absolute inset-[5px] rounded-full border border-cyan-300/30 bg-[#071426]" />
        <span className="absolute left-1/2 top-1/2 h-3.5 w-1 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(0,209,255,0.9)]" />
        <span className="absolute left-1/2 top-1/2 h-3.5 w-1 -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full bg-purple-300 shadow-[0_0_18px_rgba(196,181,253,0.75)]" />
      </span>

      <span className="leading-none">
        <span className="block text-[15px] font-black tracking-[-0.045em] text-white">
          Motiora
        </span>
        <span className="mt-1 hidden text-[9px] font-black uppercase tracking-[0.22em] text-slate-500 sm:block">
          Software
        </span>
      </span>
    </Link>
  );
}

export default Logo;