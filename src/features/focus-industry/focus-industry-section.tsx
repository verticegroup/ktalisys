export function FocusIndustrySection() {
  return (
    <section className="bg-black px-6 pt-10 pb-6 md:pt-16 md:px-16 lg:px-24">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2 lg:gap-16">
          {/* Columna izquierda: título grande */}
          <h2 className="whitespace-pre-line font-black uppercase leading-[1] tracking-tight text-white text-3xl md:text-5xl lg:text-5xl xl:text-6xl">
            {"Un enfoque claro para\nuna industria compleja"}
          </h2>

          {/* Columna derecha: párrafos */}
          <div className="flex flex-col gap-5">
            <p className="font-sans text-base leading-snug text-white md:text-lg">
              La industria musical es competitiva, cambiante y saturada. El talento por sí solo ya no es suficiente.
            </p>
            <p className="font-sans text-base leading-snug text-white md:text-lg">
              En Ktalisys trabajamos desde un enfoque integral donde la creatividad necesita dirección y la estrategia necesita sensibilidad artística.
            </p>
          </div>
        </div>
        {/* Franja azul con frase — alineada al contenido */}
        <div className="mt-6 bg-[#5BA4D9] px-4 py-2 text-center md:mt-10">
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.25em] text-black md:text-base">
            No aceleramos canciones. Aceleramos proyectos.
          </p>
        </div>
      </div>
    </section>
  );
}
