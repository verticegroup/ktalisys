import Link from "next/link";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { Logo } from "@/components/ui/logo";

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white transition-colors hover:text-white/70"
    >
      {children}
    </a>
  );
}

const LOGO_POSITION = 3;

export function Navbar() {
  const before = NAV_LINKS.slice(0, LOGO_POSITION);
  const after = NAV_LINKS.slice(LOGO_POSITION);

  return (
    <nav className="absolute top-0 left-0 z-50 flex w-full items-center justify-center gap-8 px-12 py-6 font-gilroy md:px-16 lg:px-24">
      {before.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="whitespace-pre-line text-center text-[11px] font-bold uppercase leading-tight tracking-widest text-white transition-colors hover:text-white/70"
        >
          {link.label}
        </Link>
      ))}

      <Link
        href="/"
        className="mx-3 flex items-center gap-2 text-lg font-bold tracking-[0.3em] text-white uppercase"
      >
        <Logo className="h-5 w-5" />
        {SITE_NAME}
      </Link>

      {after.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="whitespace-pre-line text-center text-[11px] font-bold uppercase leading-tight tracking-widest text-white transition-colors hover:text-white/70"
        >
          {link.label}
        </Link>
      ))}

      <div className="ml-6 flex items-center gap-2">
        <SocialIcon href="https://instagram.com" label="Instagram">
          <svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="5" />
            <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
          </svg>
        </SocialIcon>
        <SocialIcon href="https://tiktok.com" label="TikTok">
          <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 448 512">
            <path d="M448 209.9a210.1 210.1 0 01-122.8-39.3v178.8A162.6 162.6 0 11185 188.3v89.9a74.6 74.6 0 1052.2 71.2V0h88a121 121 0 00122.8 121.3z" />
          </svg>
        </SocialIcon>
        <SocialIcon href="https://youtube.com" label="YouTube">
          <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.5 6.19a3.02 3.02 0 00-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 00.5 6.19 31.7 31.7 0 000 12a31.7 31.7 0 00.5 5.81 3.02 3.02 0 002.12 2.14c1.88.55 9.38.55 9.38.55s7.5 0 9.38-.55a3.02 3.02 0 002.12-2.14A31.7 31.7 0 0024 12a31.7 31.7 0 00-.5-5.81zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
          </svg>
        </SocialIcon>
      </div>
    </nav>
  );
}
