export function WorkRelationsSection() {
  return (
    <section className="bg-white px-6 pt-10 pb-0 md:py-20 md:px-16 lg:px-24">
      <div className="mx-auto w-full md:w-fit md:max-w-full">
        <h2 className="text-center font-black uppercase leading-[1] tracking-tight text-[#fc300f] text-4xl sm:text-5xl md:text-left md:text-5xl lg:text-6xl xl:text-7xl">
          Relaciones basadas en visión,
        </h2>

        {/* NO DEPENDENCIA + descripción al lado */}
        <div className="flex flex-col items-center justify-center gap-3 md:flex-row md:flex-wrap md:items-center md:justify-start md:gap-10">
          <h3 className="text-center font-black uppercase leading-[1] tracking-tight text-[#fc300f] text-4xl sm:text-5xl md:text-left md:text-5xl lg:text-6xl xl:text-7xl">
            No dependencia
          </h3>
          <p className="whitespace-pre-line text-center font-sans text-sm font-semibold uppercase leading-relaxed tracking-[0.3em] text-[#fc300f] md:text-left md:text-sm">
            {"No construimos\ndependencia.\nConstruimos criterio."}
          </p>
        </div>

        {/* Párrafo descriptivo centrado */}
        <p className="mx-auto mt-4 max-w-md whitespace-normal text-center font-sans text-base font-base leading-snug text-black md:max-w-none md:whitespace-pre-line md:text-lg lg:text-xl">
          {"Ktalisys trabaja como socio estratégico del proyecto.\nAcompañamos, guiamos y estructuramos, pero el\ncrecimiento real nace del compromiso del artista."}
        </p>
      </div>
    </section>
  );
}
