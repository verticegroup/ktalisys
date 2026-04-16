function FlagIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 10 V56" />
      <path d="M16 12 H44 L38 20 L44 28 H16" />
    </svg>
  );
}

function StrategyIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 32 A14 14 0 0 1 44 22 L40 18 M44 22 L40 26" />
      <path d="M44 32 A14 14 0 0 1 20 42 L24 38 M20 42 L24 46" />
      <path d="M22 20 L30 28 L40 20 L46 30" />
      <circle cx="30" cy="28" r="1.5" fill="currentColor" />
    </svg>
  );
}

function GearIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="32" cy="32" r="8" />
      <path d="M32 24 V18 M32 46 V40 M24 32 H18 M46 32 H40 M38 26 L42 22 M22 42 L26 38 M38 38 L42 42 M22 22 L26 26" />
      <path d="M14 22 A20 20 0 0 1 44 14 L40 10 M44 14 L40 18" />
      <path d="M50 42 A20 20 0 0 1 20 50 L24 54 M20 50 L24 46" />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="44" cy="20" r="10" />
      <path d="M38 14 L50 14 M44 8 L44 20" />
      <path d="M14 54 H24 V44 H34 V34 H44 V26" />
      <path d="M48 20 L44 20 L44 16" />
    </svg>
  );
}

const ITEMS = [
  { Icon: FlagIcon, label: "El punto de\npartida." },
  { Icon: StrategyIcon, label: "El enfoque\nestratégico\naplicado." },
  { Icon: GearIcon, label: "El proceso de\ndesarrollo." },
  { Icon: TargetIcon, label: "El objetivo del\nproyecto." },
] as const;

export function ProjectsWhatWeShowSection() {
  return (
    <section className="bg-black px-6 pt-10 pb-6 md:pt-20 md:px-16 lg:px-24">
      <div className="mx-auto max-w-7xl">
        {/* Título */}
        <h2 className="text-center font-black uppercase leading-[1] tracking-tight text-[#f86a0b] text-3xl md:text-5xl lg:text-6xl">
          Qué mostramos en cada proyecto
        </h2>

        {/* 4 columnas con ícono + texto */}
        <div className="mx-auto mt-8 grid max-w-3xl grid-cols-2 gap-4 md:mt-14 md:grid-cols-4 md:gap-2">
          {ITEMS.map(({ Icon, label }, i) => (
            <div key={i} className="flex flex-col items-center gap-3 text-center md:gap-6">
              <div className="h-20 w-20 text-white md:h-24 md:w-24">
                <Icon />
              </div>
              <p className="whitespace-pre-line font-sans text-sm leading-snug text-white md:text-base">
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* Frase inferior */}
        <p className="mt-8 text-center font-sans text-xs uppercase leading-relaxed tracking-[0.3em] text-white md:mt-14 md:text-sm">
          No mostramos métricas vacías. Mostramos decisiones bien tomadas.
        </p>
      </div>
    </section>
  );
}
