import Image from "next/image";

function ScallopedBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative inline-block px-6 py-5 md:px-8 md:py-6">
      <Image
        src="/Recurso%203.png"
        alt=""
        aria-hidden
        fill
        className="pointer-events-none absolute inset-0 z-0 object-fill"
      />
      <div className="relative z-10">{children}</div>
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
          <p className="whitespace-pre-line text-center font-sans text-xs font-bold uppercase leading-tight tracking-[0.2em] text-[#f86a0b] md:text-sm">
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
