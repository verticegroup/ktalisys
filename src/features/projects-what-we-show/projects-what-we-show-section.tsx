import Image from "next/image";

const ITEMS = [
  { src: "/Recurso%2046.png", label: "El punto de\npartida." },
  { src: "/Recurso%2047.png", label: "El enfoque\nestratégico\naplicado." },
  { src: "/Recurso%2045.png", label: "El proceso de\ndesarrollo." },
  { src: "/Recurso%2048.png", label: "El objetivo del\nproyecto." },
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
          {ITEMS.map(({ src, label }, i) => (
            <div key={i} className="flex flex-col items-center gap-3 text-center md:gap-6">
              <Image
                src={src}
                alt=""
                aria-hidden
                width={96}
                height={96}
                className="h-20 w-20 object-contain md:h-24 md:w-24"
              />
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
