export function FocusFormulasSection() {
  return (
    <section className="bg-black px-8 py-20 md:px-16 lg:px-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-1">
        {/* Primer bloque: NO SEGUIMOS FÓRMULAS */}
        <div className="relative">
          <h2 className="relative text-center font-black uppercase leading-[0.9] tracking-tight text-[#5BA4D9] text-6xl md:text-8xl lg:text-9xl">
            No seguimos fórmulas.
          </h2>

          <span
            className="absolute z-10 rounded-full bg-white px-4 py-1 font-sans text-xs font-semibold text-[#5BA4D9] md:text-sm"
            style={{ left: "23%", top: "1%" }}
          >
            No replicamos modelos genéricos
          </span>

          <span
            className="absolute z-10 rounded-full bg-white px-4 py-1 font-sans text-xs font-semibold text-[#5BA4D9] md:text-sm"
            style={{ right: "35%", bottom: "1%" }}
          >
            No prometemos resultados irreales
          </span>
        </div>

        {/* Segundo bloque: CONSTRUIMOS CRITERIO */}
        <div className="relative">
          <h2 className="relative text-center font-black uppercase leading-[0.9] tracking-tight text-[#5BA4D9] text-6xl md:text-8xl lg:text-9xl">
            Construimos criterio.
          </h2>

          {/* Pill izquierda centrado verticalmente, sobre "TRUIMOS" */}
          <span
            className="absolute z-10 rounded-full bg-white px-4 py-1 font-sans text-xs font-semibold text-[#5BA4D9] md:text-sm"
            style={{ left: "25%", top: "50%", transform: "translateY(-50%)" }}
          >
            No trabajamos sin visión
          </span>

          {/* Pill derecha abajo, sobre "TERIO." */}
          <span
            className="absolute z-10 rounded-full bg-white px-4 py-1 font-sans text-xs font-semibold text-[#5BA4D9] md:text-sm"
            style={{ right: "23%", bottom: "1%" }}
          >
            No aceleramos por acelerar
          </span>
        </div>

        {/* Párrafo debajo centrado */}
        <p className="whitespace-pre-line text-center font-sans text-base font-semibold uppercase leading-relaxed tracking-[0.25em] text-white md:text-lg">
          {"Cada proyecto es único.\nNuestra metodología se adapta,\nno se impone."}
        </p>
      </div>
    </section>
  );
}
