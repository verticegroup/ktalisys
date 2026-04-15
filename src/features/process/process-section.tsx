const STEPS = [
  {
    number: "01",
    title: "Diagnóstico",
    description:
      "Evaluamos talento, propuesta artística, mercado y momento del proyecto.",
  },
  {
    number: "02",
    title: "Dirección estratégica",
    description: "Definimos un camino claro, realista y medible.",
  },
  {
    number: "03",
    title: "Ejecución creativa",
    description:
      "Producción musical, narrativa y activos de lanzamiento.",
  },
  {
    number: "04",
    title: "Salida al mercado",
    description:
      "Publicación, validación y crecimiento con foco en oportunidades sostenibles.",
  },
] as const;

export function ProcessSection() {
  return (
    <section className="bg-black px-6 py-10 md:px-16 md:py-20 lg:px-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-start lg:gap-16">
        {/* Título izquierda */}
        <h2 className="shrink-0 font-sans text-3xl font-black uppercase leading-[1.1] tracking-tight text-white md:text-4xl lg:max-w-[260px] lg:text-4xl">
          Nuestra forma
          <br />
          de catalizar
          <br />
          el talento
        </h2>

        {/* Grid de pasos con línea divisora única */}
        <div className="flex-1">
          {/* Mobile: cada paso con su descripción agrupada */}
          <div className="flex flex-col gap-6 md:hidden">
            {STEPS.map((step) => (
              <div key={step.number} className="flex flex-col gap-2">
                <h3 className="font-sans text-sm font-semibold uppercase leading-tight tracking-[0.2em] text-white">
                  {step.number} —
                  <br />
                  {step.title}
                </h3>
                <div className="-mr-6 border-t border-white/30" />
                <p className="font-sans text-sm leading-snug text-white">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* md+: títulos arriba, línea única, descripciones abajo */}
          <div className="hidden md:block">
            <div className="grid grid-cols-2 items-end gap-x-10 lg:grid-cols-4">
              {STEPS.map((step) => (
                <h3
                  key={step.number}
                  className="font-sans text-sm font-semibold uppercase leading-tight tracking-[0.2em] text-white"
                >
                  {step.number} —
                  <br />
                  {step.title}
                </h3>
              ))}
            </div>

            <div className="mt-3 -mr-16 border-t border-white/30 lg:-mr-24" />

            <div className="mt-3 grid grid-cols-2 gap-x-10 gap-y-6 lg:grid-cols-4">
              {STEPS.map((step) => (
                <p
                  key={step.number}
                  className="font-sans text-sm leading-snug text-white"
                >
                  {step.description}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
