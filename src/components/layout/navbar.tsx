"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/lib/constants";
import { Logo } from "@/components/ui/logo";

function SocialIcon({
  href,
  label,
  children,
  className = "",
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-white transition-colors hover:text-white/70 ${className}`}
    >
      {children}
    </a>
  );
}

function Socials({ size = "h-[18px] w-[18px]" }: { size?: string }) {
  return (
    <>
      <SocialIcon href="https://instagram.com" label="Instagram">
        <svg
          className={size}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      </SocialIcon>
      <SocialIcon href="https://tiktok.com" label="TikTok">
        <svg className={size} fill="currentColor" viewBox="0 0 448 512">
          <path d="M448 209.9a210.1 210.1 0 01-122.8-39.3v178.8A162.6 162.6 0 11185 188.3v89.9a74.6 74.6 0 1052.2 71.2V0h88a121 121 0 00122.8 121.3z" />
        </svg>
      </SocialIcon>
      <SocialIcon href="https://youtube.com" label="YouTube">
        <svg className={size} fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.5 6.19a3.02 3.02 0 00-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 00.5 6.19 31.7 31.7 0 000 12a31.7 31.7 0 00.5 5.81 3.02 3.02 0 002.12 2.14c1.88.55 9.38.55 9.38.55s7.5 0 9.38-.55a3.02 3.02 0 002.12-2.14A31.7 31.7 0 0024 12a31.7 31.7 0 00-.5-5.81zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
        </svg>
      </SocialIcon>
    </>
  );
}

const LOGO_POSITION = 3;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const before = NAV_LINKS.slice(0, LOGO_POSITION);
  const after = NAV_LINKS.slice(LOGO_POSITION);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Header desktop (lg+) */}
      <nav className="absolute top-0 left-0 z-50 hidden w-full py-6 font-gilroy lg:block">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-5 lg:px-10">
          <div className="flex items-center gap-6">
            {before.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="whitespace-pre-line text-center text-[11px] font-bold uppercase leading-tight tracking-widest text-white transition-colors hover:text-white/70"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link href="/" className="flex items-center" aria-label="Ktalisys">
            <Logo className="h-8 w-24 md:h-10 md:w-32 lg:h-12 lg:w-36" />
          </Link>

          <div className="flex items-center gap-6">
            {after.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="whitespace-pre-line text-center text-[11px] font-bold uppercase leading-tight tracking-widest text-white transition-colors hover:text-white/70"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-2">
              <Socials />
            </div>
          </div>
        </div>
      </nav>

      {/* Header mobile/tablet (<lg) */}
      <nav className="absolute top-0 left-0 z-50 flex w-full items-center justify-between px-6 py-4 font-gilroy md:px-10 md:py-5 lg:hidden">
        <Link href="/" className="flex items-center" aria-label="Ktalisys">
          <Logo className="h-8 w-24 md:h-10 md:w-32 lg:h-12 lg:w-36" />
        </Link>

        <button
          type="button"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] text-white"
        >
          <span className="block h-[2px] w-6 bg-current" />
          <span className="block h-[2px] w-6 bg-current" />
          <span className="block h-[2px] w-6 bg-current" />
        </button>
      </nav>

      {/* Drawer mobile/tablet */}
      <div
        className={`fixed inset-0 z-[60] font-gilroy transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/90 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />

        {/* Panel */}
        <div
          className={`relative ml-auto flex h-full w-full max-w-sm flex-col bg-black px-8 py-6 shadow-2xl transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Top: logo + close */}
          <div className="flex items-center justify-between">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="flex items-center"
              aria-label="Ktalisys"
            >
              <Logo className="h-8 w-24 md:h-10 md:w-32 lg:h-12 lg:w-36" />
            </Link>
            <button
              type="button"
              aria-label="Cerrar menú"
              onClick={() => setOpen(false)}
              className="flex h-10 w-10 items-center justify-center text-white"
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Links */}
          <ul className="mt-12 flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-base font-bold uppercase tracking-[0.2em] text-white transition-colors hover:text-[#E54529]"
                >
                  {link.label.replace(/\n/g, " ")}
                </Link>
              </li>
            ))}
          </ul>

          {/* Socials abajo */}
          <div className="mt-auto flex items-center gap-5 pt-8">
            <Socials size="h-5 w-5" />
          </div>
        </div>
      </div>
    </>
  );
}
