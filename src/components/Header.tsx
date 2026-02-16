"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Container from "@/components/Container";

type NavLink = { label: string; href: string };
type Cta = { label?: string; href?: string; newTab?: boolean };

type Props = {
  logoText?: string;
  links?: NavLink[];
  cta?: Cta;
};

function isExternal(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export default function Header({
  logoText = "Primartech",
  links = [],
  cta,
}: Props) {
  const [open, setOpen] = useState(false);

  // close on desktop resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // lock scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="font-semibold tracking-tight text-slate-900">
          {logoText}
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-600 hover:text-slate-900"
            >
              {l.label}
            </Link>
          ))}

          {cta?.label && (
            <a
              href={cta.href || "#"}
              target={cta.newTab || isExternal(cta.href || "") ? "_blank" : undefined}
              rel={cta.newTab || isExternal(cta.href || "") ? "noreferrer" : undefined}
              className="rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-500/20"
            >
              {cta.label}
            </a>
          )}
        </nav>

        {/* Mobile toggler */}
        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-3 py-2 shadow-sm"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`h-0.5 w-5 bg-slate-900 transition ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-slate-900 transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-slate-900 transition ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </Container>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="lg:hidden border-t border-black/10 bg-white">
          <Container className="py-4">
            <nav className="flex flex-col gap-2">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}

              {cta?.label && (
                <a
                  href={cta.href || "#"}
                  target={cta.newTab || isExternal(cta.href || "") ? "_blank" : undefined}
                  rel={cta.newTab || isExternal(cta.href || "") ? "noreferrer" : undefined}
                  className="mt-2 inline-flex w-fit rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700"
                  onClick={() => setOpen(false)}
                >
                  {cta.label}
                </a>
              )}
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}