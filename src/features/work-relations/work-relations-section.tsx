export function WorkRelationsSection() {
  return (
    <section className="bg-white px-6 py-10 md:py-20 md:px-16 lg:px-24">
      <h2 className="text-center font-black uppercase leading-[1] tracking-tight text-[#E54529] text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl">
        Relaciones basadas en visión,
      </h2>

      {/* NO DEPENDENCIA + descripción al lado */}
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
        <h3 className="font-black uppercase leading-[1] tracking-tight text-[#E54529] text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl">
          No dependencia
        </h3>
        <p className="whitespace-pre-line font-sans text-xs font-semibold uppercase leading-relaxed tracking-[0.3em] text-[#E54529] md:text-sm">
          {"No construimos\ndependencia.\nConstruimos criterio."}
        </p>
      </div>

      {/* Párrafo descriptivo centrado */}
      <p className="mt-4 whitespace-pre-line text-center font-sans text-base font-base leading-snug text-black md:text-lg lg:text-xl">
        {"Ktalisys trabaja como socio estratégico del proyecto.\nAcompañamos, guiamos y estructuramos, pero el\ncrecimiento real nace del compromiso del artista."}
      </p>
    </section>
  );
}
