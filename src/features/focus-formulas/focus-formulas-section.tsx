export function FocusFormulasSection() {
  return (
    <section className="overflow-hidden bg-black px-6 py-10 md:px-16 md:py-20 lg:px-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 md:gap-1">
        {/* Primer bloque: NO SEGUIMOS FÓRMULAS */}
        <div className="relative">
          <h2 className="relative text-center font-black uppercase leading-[0.9] tracking-tight text-[#5BA4D9] text-4xl md:text-8xl lg:text-9xl">
            No seguimos fórmulas.
          </h2>

          <span
            className="hidden rounded-full bg-white px-4 py-1 font-sans text-xs font-semibold text-[#5BA4D9] md:absolute md:z-10 md:inline md:text-sm"
            style={{ left: "23%", top: "1%" }}
          >
            No replicamos modelos genéricos
          </span>

          <span
            className="hidden rounded-full bg-white px-4 py-1 font-sans text-xs font-semibold text-[#5BA4D9] md:absolute md:z-10 md:inline md:text-sm"
            style={{ right: "35%", bottom: "1%" }}
          >
            No prometemos resultados irreales
          </span>
        </div>

        {/* Segundo bloque: CONSTRUIMOS CRITERIO */}
        <div className="relative">
          <h2 className="relative text-center font-black uppercase leading-[0.9] tracking-tight text-[#5BA4D9] text-4xl md:text-8xl lg:text-9xl">
            Construimos criterio.
          </h2>

          {/* Pill izquierda centrado verticalmente, sobre "TRUIMOS" */}
          <span
            className="hidden rounded-full bg-white px-4 py-1 font-sans text-xs font-semibold text-[#5BA4D9] md:absolute md:z-10 md:inline md:text-sm"
            style={{ left: "25%", top: "50%", transform: "translateY(-50%)" }}
          >
            No trabajamos sin visión
          </span>

          {/* Pill derecha abajo, sobre "TERIO." */}
          <span
            className="hidden rounded-full bg-white px-4 py-1 font-sans text-xs font-semibold text-[#5BA4D9] md:absolute md:z-10 md:inline md:text-sm"
            style={{ right: "23%", bottom: "1%" }}
          >
            No aceleramos por acelerar
          </span>
        </div>

        {/* Píldoras visibles en mobile (versión simplificada) */}
        <div className="mt-2 flex flex-wrap justify-center gap-2 md:hidden">
          {[
            "No replicamos modelos genéricos",
            "No prometemos resultados irreales",
            "No trabajamos sin visión",
            "No aceleramos por acelerar",
          ].map((text) => (
            <span
              key={text}
              className="rounded-full bg-white px-3 py-1 font-sans text-[10px] font-semibold text-[#5BA4D9]"
            >
              {text}
            </span>
          ))}
        </div>

        {/* Párrafo debajo centrado */}
        <p className="mt-3 whitespace-pre-line text-center font-sans text-base font-semibold uppercase leading-relaxed tracking-[0.25em] text-white md:mt-0 md:text-lg">
          {"Cada proyecto es único.\nNuestra metodología se adapta,\nno se impone."}
        </p>
      </div>
    </section>
  );
}
