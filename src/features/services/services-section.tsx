const SERVICES = [
  {
    title: "Estrategia artística",
    description:
      "Definimos posicionamiento, narrativa,\npúblico y objetivos claros antes de\ncualquier lanzamiento.",
  },
  {
    title: "Producción musical",
    description:
      "Desarrollamos música alineada al\nmercado sin sacrificar identidad\nni esencia.",
  },
  {
    title: "Marketing & crecimiento",
    description:
      "Construimos visibilidad, validamos\naudiencias y transformamos\nlanzamientos en oportunidades\nreales.",
  },
  {
    title: "Aceleración",
    description:
      "Reducimos la curva entre talento,\nmercado y resultados.",
  },
] as const;

function ServiceRow({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="border-t border-black/20 px-5 py-6 first:border-t-0 lg:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-3 md:grid md:grid-cols-[1fr_minmax(0,22rem)] md:items-start md:gap-10">
        <h3 className="font-gilroy text-sm font-semibold uppercase tracking-widest text-black md:text-base lg:text-lg">
          {title}
        </h3>
        <p className="whitespace-pre-line text-left font-sans text-sm leading-snug text-black/80 md:text-base lg:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}

export function ServicesSection() {
  return (
    <section className="mt-6 bg-white">
      <div className="mx-auto w-full max-w-6xl px-5 pt-8 pb-2 md:pt-12 md:pb-4 lg:px-10">
        <h2 className="text-center text-5xl leading-[0.95] font-black uppercase tracking-tight text-[#E77533] md:text-7xl lg:text-8xl lg:whitespace-nowrap xl:text-9xl">
          Del talento a la aceptación real
        </h2>
      </div>

      <div className="mt-6 flex w-full flex-col border-b border-black/20 md:mt-10">
        {SERVICES.map((service) => (
          <ServiceRow
            key={service.title}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}
