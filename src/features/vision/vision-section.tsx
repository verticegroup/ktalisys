import Image from "next/image";

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
    <section className="relative overflow-hidden bg-black px-6 pt-12 pb-0 md:pt-20 md:px-16 lg:px-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-3 lg:items-start lg:gap-12">
        {/* Columna izquierda: forma naranja + frase */}
        <div className="flex flex-col gap-4 md:gap-8">
          <Image
            src="/Recurso%2010.png"
            alt=""
            aria-hidden
            width={160}
            height={60}
            className="h-10 w-28 object-contain md:h-12 md:w-32"
          />
          <p className="ml-auto whitespace-pre-line font-sans text-sm font-semibold uppercase leading-tight tracking-widest text-white md:text-base">
            {"El talento\nno se fabrica.\nSe cataliza."}
          </p>
        </div>

        {/* Columna centro: estrella alineada al inicio del segundo párrafo */}
        <div className="flex justify-center lg:mt-32">
          <Image
            src="/Recurso%2011.png"
            alt=""
            aria-hidden
            width={160}
            height={160}
            className="h-20 w-20 object-contain md:h-36 md:w-36"
          />
        </div>

        {/* Columna derecha: textos */}
        <div className="flex flex-col gap-4 md:gap-6">
          <p className="font-sans text-base leading-snug text-white md:text-lg">
            Ser el catalizador que transforme el talento musical
            en proyectos exitosos, relevantes y competitivos a
            nivel global.
          </p>
          <p className="font-sans text-base leading-snug text-white lg:whitespace-nowrap md:text-lg">
            Creemos en el talento auténtico y en la estrategia<br className="hidden lg:inline" />
            {" "}correcta para que llegue más lejos, más rápido.
          </p>
        </div>
      </div>

      {/* Título grande NUESTRA VISIÓN abajo */}
      <div className="mx-auto mt-8 max-w-7xl text-center md:mt-16">
        <h3 className="relative -mb-[10vw] inline-block -translate-x-6 font-black uppercase leading-[0.75] tracking-tight text-[#E54529] text-[14vw] md:-translate-x-12 lg:-translate-x-20 lg:whitespace-nowrap xl:-translate-x-24">
          Nuestra visión
          <span
            className="absolute z-20 block h-6 w-16 bg-[#5BA4D9] md:h-10 md:w-28 lg:h-14 lg:w-40 xl:h-16 xl:w-48"
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
