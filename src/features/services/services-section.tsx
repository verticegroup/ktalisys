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
    <div className="grid grid-cols-[1.5fr_1fr] items-start border-t border-black/20 py-6">
      <h3 className="font-gilroy text-sm font-semibold uppercase tracking-widest text-black md:text-base">
        {title}
      </h3>
      <p className="whitespace-pre-line text-left font-sans text-sm leading-snug text-black/80 md:text-base">
        {description}
      </p>
    </div>
  );
}

export function ServicesSection() {
  return (
    <section className="mt-6 bg-white px-6 md:px-16 lg:px-24">
      <div className="w-full bg-white py-8 md:py-12">
        <h2 className="text-center text-[7vw] leading-[0.95] font-black uppercase tracking-tight text-[#E54529] lg:whitespace-nowrap">
          Del talento a la aceptación real
        </h2>

        <div className="mx-auto mt-6 flex max-w-3xl flex-col md:mt-10">
          {SERVICES.map((service) => (
            <ServiceRow
              key={service.title}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
