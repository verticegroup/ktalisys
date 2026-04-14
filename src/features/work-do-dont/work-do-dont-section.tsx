import Image from "next/image";

const SI_HACEMOS = [
  "Desarrollo estratégico\nde proyectos musicales.",
  "Dirección artística con\nenfoque de mercado.",
  "Producción alineada\na objetivos.",
  "Aceleración y crecimiento\nestructurado.",
] as const;

const NO_HACEMOS = [
  "Promesas de fama\ninmediata.",
  "Lanzamientos sin\nestrategia.",
  "Producción sin\ndirección.",
  "Trabajos improvisados\no sin visión.",
] as const;

function Column({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <div className="flex flex-col">
      <h3 className="mb-4 font-sans text-xs uppercase tracking-[0.3em] text-white">
        {title}
      </h3>
      <ul className="flex flex-col gap-8">
        {items.map((item) => (
          <li
            key={item}
            className="whitespace-pre-line font-sans text-sm leading-snug text-white md:text-base"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function WorkDoDontSection() {
  return (
    <section className="bg-black px-6 py-10 md:py-16 md:px-16 lg:px-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-8 md:grid-cols-3 md:gap-18">
        <Column title="Sí hacemos" items={SI_HACEMOS} />
        <Column title="No hacemos" items={NO_HACEMOS} />

        {/* Columna 3: imagen del artista — misma altura que las columnas de texto */}
        <div className="relative h-full w-full min-h-[400px]">
          <Image
            src="/Beele.jpg"
            alt="Artista"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
