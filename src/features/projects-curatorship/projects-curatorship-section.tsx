import Image from "next/image";

function BurstShape({
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
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      fill="currentColor"
    >
      <path d="M50 0 L56 10 L67 4 L68 16 L80 14 L76 26 L88 28 L80 37 L90 44 L80 50 L90 56 L80 63 L88 72 L76 74 L80 86 L68 84 L67 96 L56 90 L50 100 L44 90 L33 96 L32 84 L20 86 L24 74 L12 72 L20 63 L10 56 L20 50 L10 44 L20 37 L12 28 L24 26 L20 14 L32 16 L33 4 L44 10 Z" />
    </svg>
  );
}

export function ProjectsCuratorshipSection() {
  return (
    <section className="bg-black px-8 py-16 md:px-16 lg:pr-24 lg:pl-80">
      <div className="mx-auto max-w-7xl">
        {/* Título superior */}
        <h2 className="text-center font-sans text-sm font-semibold uppercase tracking-[0.3em] text-white md:text-base">
          Curaduría antes que exhibición
        </h2>

        {/* Dos columnas: imagen con burst / párrafos */}
        <div className="mt-10 grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Imagen con burst + texto en esquina inferior derecha */}
          <div className="relative w-full">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/estudio.jpg"
                alt="Curaduría"
                fill
                className="object-cover"
              />
            </div>

            {/* Burst + frase superpuesta (el texto se extiende fuera de la forma) */}
            <div className="absolute -right-20 -bottom-10">
              <BurstShape className="h-48 w-48 text-[#E84D2E] md:h-40 md:w-40" />
              <p className="absolute top-1/2 left-0 z-10 -translate-y-1/2 whitespace-nowrap font-sans text-xs font-bold uppercase leading-tight tracking-widest text-white md:text-sm">
                No todos los proyectos<br />son públicos.<br />No todos los procesos<br />necesitan exposición.
              </p>
            </div>
          </div>

          {/* Párrafos a la derecha */}
          <div className="flex flex-col gap-6">
            <p className="whitespace-pre-line font-sans text-sm leading-snug text-white md:text-base">
              {"Cada proyecto que acompaña Ktalisys\nresponde a un proceso estratégico, no\na la improvisación."}
            </p>
            <p className="whitespace-pre-line font-sans text-sm leading-snug text-white md:text-base">
              {"Aquí encontrarás una selección curada\nde proyectos desarrollados bajo nuestro\nenfoque de identidad, visión y mercado."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
