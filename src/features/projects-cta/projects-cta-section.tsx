export function ProjectsCtaSection() {
  return (
    <section className="bg-black px-6 py-10 md:py-16 md:px-16 lg:px-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-y-4 md:gap-y-6 lg:grid-cols-[auto_auto] lg:items-end lg:justify-center lg:gap-x-4">
        {/* Fila 1 — título */}
        <h2 className="font-black uppercase leading-[0.95] tracking-tight text-[#E54529] text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
          ¡Tu proyecto
        </h2>
        {/* Fila 1 — texto derecha */}
        <p className="whitespace-pre-line self-end font-sans text-xs uppercase leading-relaxed tracking-[0.25em] text-[#E54529] md:text-sm lg:-ml-20">
          {"Si tu talento está listo para\nser desarrollado con visión y\nmétodo, este es el siguiente paso."}
        </p>

        {/* Fila 2 — título (alineado al mismo inicio que "¡Tu proyecto") */}
        <h2 className="font-black uppercase leading-[0.95] tracking-tight text-[#E54529] text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
          podría estar aquí?
        </h2>
        {/* Fila 2 — botón */}
        <a
          href="#aplicar"
          className="inline-flex w-fit items-center self-center bg-[#5BA4D9] px-6 py-4 font-black uppercase leading-tight text-black transition-colors hover:bg-[#4a93c8] text-lg md:text-xl"
        >
          Aplicar proyecto
        </a>
      </div>
    </section>
  );
}
