const MENU_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Cómo trabajamos", href: "#como-trabajamos" },
  { label: "Enfoque / Metodología", href: "#enfoque" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Aplicar", href: "#aplicar" },
  { label: "Contacto", href: "#contacto" },
] as const;

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0l2.5 7.5L22 5.5l-5 5L24 12l-7.5 2.5L22 18.5l-7.5-2L12 24l-2.5-7.5L2 18.5l5-4L0 12l7.5-2.5L2 5.5l7.5 2L12 0z" />
    </svg>
  );
}

function KtalisysLogo() {
  return (
    <div className="inline-flex items-center rounded-lg border-2 border-white px-4 py-2">
      <span className="font-sans text-2xl font-bold tracking-tight text-white md:text-3xl">
        Ktalisys<sup className="text-sm">®</sup>
      </span>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-black px-6 pt-10 pb-4 text-white md:px-16 md:pt-16 lg:px-24">
      <div className="mx-auto max-w-7xl">
        {/* Fila superior: 3 columnas */}
        <div className="grid grid-cols-1 items-stretch gap-6 border-b border-white/20 pb-8 md:gap-10 md:pb-0 lg:grid-cols-3 lg:gap-0">
          {/* Columna 1: Logo + descripción */}
          <div className="flex flex-col items-center gap-4 text-center lg:gap-6 lg:border-r lg:border-white/20 lg:pr-10 lg:pb-12">
            <KtalisysLogo />
            <p className="font-sans text-sm font-semibold text-white md:text-base">
              Music Development & Strategy Company
            </p>
            <p className="font-sans text-sm leading-snug text-white md:text-base">
              Ktalisys impulsa talento musical a través
              de estrategia, producción y crecimiento.
              No fabricamos artistas. Catalizamos
              proyectos con visión real de mercado.
            </p>
          </div>

          {/* Columna 2: Menú */}
          <div className="flex flex-col gap-3 lg:gap-4 lg:border-r lg:border-white/20 lg:px-10 lg:pb-12">
            <h4 className="text-center font-sans text-xs uppercase tracking-[0.3em] text-white">
              Menú
            </h4>
            <ul className="flex flex-col gap-2 lg:gap-3">
              {MENU_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-sans text-base text-white transition-colors hover:text-white/70"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: CTA */}
          <div className="flex flex-col justify-center gap-3 lg:gap-4 lg:pb-12 lg:pl-10">
            <h4 className="font-sans text-sm font-semibold uppercase leading-snug tracking-widest text-white">
              ¿Tienes un proyecto musical?
            </h4>
            <p className="font-sans text-sm leading-snug text-white md:text-base">
              Si tu talento está listo para avanzar
              con dirección y visión estratégica,
              este es el siguiente paso.
            </p>
            <a
              href="#aplicar"
              className="inline-flex items-center gap-2 font-sans text-sm font-semibold uppercase tracking-widest text-[#5BA4D9] transition-colors hover:text-[#4a93c8] md:text-base"
            >
              Aplica proyecto
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="12" />
                <path d="M9 8l6 4-6 4V8z" fill="black" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mb-4" />

        {/* Fila media: contacto + tagline + legales */}
        <div className="grid grid-cols-1 gap-5 md:gap-8 md:grid-cols-3 md:items-center">
          {/* Contacto */}
          <div className="flex flex-col gap-2 md:flex-row md:items-start md:gap-8">
            <h5 className="shrink-0 font-sans text-xs uppercase tracking-[0.3em] text-white/70">
              Contacto
            </h5>
            <div className="flex flex-col font-sans text-sm text-white">
              <span>info@ktalisys.com</span>
              <span>Medellín, Colombia</span>
            </div>
          </div>

          {/* Tagline con estrella */}
          <div className="flex items-center justify-center gap-4">
            <StarIcon className="h-10 w-10 text-[#E54529]" />
            <p className="whitespace-pre-line font-sans text-xs font-semibold uppercase leading-tight tracking-[0.2em] text-white md:text-sm">
              {"El talento\nno se fabrica.\nSe cataliza."}
            </p>
          </div>

          {/* Legales */}
          <div className="flex flex-col gap-1 font-sans text-sm text-white md:items-end">
            <a href="#privacidad" className="hover:text-white/70">
              Política de privacidad
            </a>
            <a href="#terminos" className="hover:text-white/70">
              Términos y condiciones
            </a>
          </div>
        </div>

        {/* Separador */}
        <div className="my-4 border-t border-white/20" />

        {/* Copyright */}
        <p className="text-center font-sans text-sm text-white/80">
          © 2026 Ktalisys. All rights reserved. Music Development & Strategy Company.
        </p>
      </div>
    </footer>
  );
}
