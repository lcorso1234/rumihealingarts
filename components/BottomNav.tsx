'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/results", label: "Results" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="pointer-events-none fixed inset-x-0 bottom-[18px] z-50 flex justify-center px-4">
      <div className="pointer-events-auto flex w-full max-w-5xl items-center gap-3 rounded-full bg-slate-900/95 px-4 py-3 shadow-[0_20px_40px_rgba(0,0,0,0.45)] ring-1 ring-cyan-500/40 backdrop-blur-xl">
        <div className="flex items-center gap-3 rounded-full bg-gradient-to-br from-cyan-500 via-fuchsia-500 to-amber-400 px-4 py-2 shadow-[0_0_30px_rgba(34,211,238,0.6)]">
          <span className="rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-white">
            RHA
          </span>
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-black/80">
            Entrepreneur Care
          </span>
        </div>

        <div className="flex flex-1 items-center justify-center gap-3">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] transition ${
                  active
                    ? "bg-gradient-to-br from-cyan-500/60 to-purple-500/60 text-white shadow-[0_0_18px_rgba(129,140,248,0.6)]"
                    : "bg-slate-800/70 text-slate-200 hover:bg-slate-700/70"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="mailto:lawrencecorso1@gmail.com"
            className="flex items-center gap-2 rounded-full bg-gradient-to-br from-fuchsia-500 to-orange-400 px-3 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-[0_0_20px_rgba(249,115,22,0.45)] transition hover:scale-105"
          >
            ✉️ Email
          </a>
          <a
            href="tel:7089326851"
            className="flex items-center gap-2 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 px-3 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-900 shadow-[0_0_20px_rgba(45,212,191,0.45)] transition hover:scale-105"
          >
            📞 Call
          </a>
        </div>
      </div>
    </nav>
  );
}
