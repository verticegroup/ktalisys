function BurstShape({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg className={className} style={style} viewBox="0 0 100 100" preserveAspectRatio="none" fill="currentColor">
      <path d="M50 0 L56 10 L67 4 L68 16 L80 14 L76 26 L88 28 L80 37 L90 44 L80 50 L90 56 L80 63 L88 72 L76 74 L80 86 L68 84 L67 96 L56 90 L50 100 L44 90 L33 96 L32 84 L20 86 L24 74 L12 72 L20 63 L10 56 L20 50 L10 44 L20 37 L12 28 L24 26 L20 14 L32 16 L33 4 L44 10 Z" />
    </svg>
  );
}

export function FocusWhatWeSeekSection() {
  return (
    <section className="bg-black px-8 py-20 md:px-16 lg:px-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-10 lg:flex-row lg:items-center lg:justify-center lg:gap-16">
        {/* Izquierda: título con la figura en la primera línea */}
        <h2 className="relative font-sans text-lg font-semibold uppercase leading-relaxed tracking-[0.3em] text-white md:text-xl">
          <span className="relative inline-block">
            Qué buscamos
            <BurstShape
              className="absolute left-full z-10 h-8 w-18 shrink-0 text-[#E84D2E] md:h-10 md:w-18 lg:h-12 lg:w-19"
              style={{ top: "50%", transform: "translateY(-50%)", marginLeft: "0.5rem" }}
            />
          </span>
          <br />
          En cada proyecto
        </h2>

        {/* Derecha: párrafo + garabato */}
        <div className="flex flex-col gap-2">
          <p className="whitespace-pre-line font-sans text-base font-semibold leading-snug text-white md:text-lg">
            {"Proyectos con identidad clara, dirección definida\ny capacidad de competir en el mercado.\nArtistas que entienden su valor y saben hacia\ndónde van."}
          </p>

          {/* Texto con garabato debajo del párrafo */}
          <div className="relative inline-block self-start px-10 py-1">
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 300 80"
              preserveAspectRatio="none"
              fill="none"
              stroke="#5BA4D9"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <path d="M30 40 C30 15, 100 5, 160 10 C220 14, 285 20, 290 42 C293 62, 240 72, 170 70 C100 68, 20 62, 15 42 C12 22, 60 10, 130 8" />
            </svg>
            <span className="relative font-sans text-base font-semibold text-white md:text-lg">
              Eso es crecimiento real.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
