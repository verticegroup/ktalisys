function StarShape({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 0l2.5 7.5L22 5.5l-5 5L24 12l-7.5 2.5L22 18.5l-7.5-2L12 24l-2.5-7.5L2 18.5l5-4L0 12l7.5-2.5L2 5.5l7.5 2L12 0z" />
    </svg>
  );
}

const STAIRS_CLIP = `polygon(
  12% 0%, 88% 0%,
  88% 10%, 92% 10%, 92% 25%, 96% 25%, 96% 42%, 100% 42%, 100% 58%, 96% 58%, 96% 75%, 92% 75%, 92% 90%, 88% 90%, 88% 100%,
  12% 100%, 12% 90%, 8% 90%, 8% 75%, 4% 75%, 4% 58%, 0% 58%, 0% 42%, 4% 42%, 4% 25%, 8% 25%, 8% 10%, 12% 10%
)`;

export function VisionSection() {
  return (
    <section className="relative bg-black px-8 pt-20 pb-0 md:px-16 lg:px-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-3 lg:items-start">
        {/* Columna izquierda: forma naranja + frase */}
        <div className="flex flex-col gap-8">
          <span
            className="block h-10 w-28 bg-[#E84D2E] md:h-12 md:w-32"
            style={{ clipPath: STAIRS_CLIP }}
          />
          <p className="ml-auto whitespace-pre-line font-sans text-sm font-semibold uppercase leading-tight tracking-widest text-white md:text-base">
            {"El talento\nno se fabrica.\nSe cataliza."}
          </p>
        </div>

        {/* Columna centro: estrella alineada al inicio del segundo párrafo */}
        <div className="flex justify-center lg:mt-32">
          <StarShape className="h-28 w-28 text-white md:h-36 md:w-36" />
        </div>

        {/* Columna derecha: textos */}
        <div className="flex flex-col gap-6">
          <p className="font-sans text-base leading-snug text-white md:text-lg">
            Ser el catalizador que transforme el talento musical
            en proyectos exitosos, relevantes y competitivos a
            nivel global.
          </p>
          <p className="whitespace-nowrap font-sans text-base leading-snug text-white md:text-lg">
            Creemos en el talento auténtico y en la estrategia<br />
            correcta para que llegue más lejos, más rápido.
          </p>
        </div>
      </div>

      {/* Título grande NUESTRA VISIÓN abajo */}
      <div className="mx-auto mt-16 max-w-7xl text-center">
        <h3 className="relative -mb-[10vw] inline-block whitespace-nowrap font-black uppercase leading-[0.75] tracking-tight text-[#E84D2E] text-[14vw]">
          Nuestra visión
          <span
            className="absolute z-20 block h-14 w-40 bg-[#5BA4D9] md:h-16 md:w-48"
            style={{
              clipPath: STAIRS_CLIP,
              right: "-25%",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          />
        </h3>
      </div>
    </section>
  );
}
