const PHASES = [
  {
    number: "Fase 01 —",
    title: "Diagnóstico profundo",
    intro: "Evaluamos:",
    items: [
      "Talento y propuesta artística",
      "Nivel de desarrollo del proyecto",
      "Audiencia potencial y contexto",
      "Oportunidades reales de mercado",
    ],
    footer: "No todos los proyectos están listos. Y\nsaberlo a tiempo también es avanzar.",
  },
  {
    number: "Fase 02 —",
    title: "Dirección y planificación",
    intro: "Definimos:",
    items: [
      "Posicionamiento",
      "Objetivos claros",
      "Prioridades creativas",
      "Estrategia de desarrollo",
    ],
    footer: "Aquí se construye el mapa.",
  },
  {
    number: "Fase 03 —",
    title: "Ejecución alineada",
    intro: "Alineamos:",
    items: [
      "Producción musical",
      "Contenido y narrativa",
      "Identidad visual",
      "Estrategia de lanzamiento",
    ],
    footer: "Todo responde a la misma visión.",
  },
  {
    number: "Fase 04 —",
    title: "Salida al mercado y validación",
    intro: "",
    items: [
      "Lanzamiento estratégico",
      "Análisis de respuesta",
      "Ajustes y optimización",
      "Construcción de oportunidades",
    ],
    footer: "Sin validación, no hay crecimiento real.",
  },
] as const;

function PhaseCell({ phase }: { phase: (typeof PHASES)[number] }) {
  return (
    <div className="flex flex-col gap-4 p-8 md:p-10">
      <div className="font-sans text-xs font-semibold uppercase leading-tight tracking-[0.25em] text-white md:text-sm">
        {phase.number}
        <br />
        {phase.title}
      </div>

      <div className="flex flex-col gap-2 font-sans text-sm text-white md:text-base">
        {phase.intro && <p>{phase.intro}</p>}
        <ul className="flex flex-col gap-1 pl-6">
          {phase.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <p className="whitespace-pre-line font-sans text-sm leading-snug text-white md:text-base">
        {phase.footer}
      </p>
    </div>
  );
}

export function FocusMethodologySection() {
  return (
    <section className="bg-black px-6 py-10 md:py-16 md:px-16 lg:px-24">
      <div className="mx-auto max-w-5xl">
        {/* Título arriba de la tabla */}
        <h3 className="mb-6 text-center font-sans text-xs uppercase tracking-[0.3em] text-[#5BA4D9] md:text-sm">
          Una metodología pensada para avanzar
        </h3>

        {/* Tabla 2x2 con bordes internos y externos */}
        <div className="grid grid-cols-1 divide-y divide-white/20 border border-white/20 md:grid-cols-2 md:divide-x md:divide-y-0">
          {PHASES.map((phase, index) => {
            const isTopRow = index < 2;
            return (
              <div
                key={phase.number}
                className={isTopRow ? "md:border-b md:border-white/20" : ""}
              >
                <PhaseCell phase={phase} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
