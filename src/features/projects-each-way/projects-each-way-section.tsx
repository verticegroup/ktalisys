function ScallopedBlock({ children }: { children: React.ReactNode }) {
  const path =
    "M0 16 L20 16 A16 16 0 0 1 52 16 A16 16 0 0 1 84 16 A16 16 0 0 1 116 16 A16 16 0 0 1 148 16 A16 16 0 0 1 180 16 L200 16 Z";
  return (
    <div className="relative">
      <svg
        className="absolute -top-4 left-0 w-full"
        viewBox="0 0 200 16"
        preserveAspectRatio="none"
        height="16"
      >
        <path d={path} fill="#5BA4D9" />
      </svg>
      <div className="bg-[#5BA4D9] px-5 py-4">{children}</div>
      <svg
        className="absolute -bottom-4 left-0 w-full rotate-180"
        viewBox="0 0 200 16"
        preserveAspectRatio="none"
        height="16"
      >
        <path d={path} fill="#5BA4D9" />
      </svg>
    </div>
  );
}

export function ProjectsEachWaySection() {
  return (
    <section className="bg-black px-6 py-10 md:py-16 md:px-16 lg:px-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-6 lg:flex-row lg:items-center lg:gap-12">
        {/* Izquierda: texto */}
        <div className="flex max-w-sm flex-col gap-4">
          <p className="font-sans text-base leading-snug text-white md:text-lg">
            No replicamos fórmulas ni copiamos procesos.
          </p>
          <p className="whitespace-pre-line font-sans text-base leading-snug text-white md:text-lg">
            {"Cada proyecto requiere una lectura distinta,\nuna estrategia propia y un ritmo adecuado."}
          </p>
        </div>

        {/* Centro: bloque ondulado azul */}
        <ScallopedBlock>
          <p className="whitespace-pre-line text-center font-sans text-xs font-bold uppercase leading-tight tracking-[0.2em] text-[#E54529] md:text-sm">
            {"Cada proyecto\ntiene su propio\ncamino."}
          </p>
        </ScallopedBlock>

        {/* Derecha: texto */}
        <p className="max-w-sm whitespace-pre-line font-sans text-base leading-snug text-white md:text-lg">
          {"Ese es el verdadero trabajo\ndetrás del crecimiento."}
        </p>
      </div>
    </section>
  );
}
