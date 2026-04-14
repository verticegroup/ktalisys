export function ExperienceSection() {
  return (
    <section className="bg-white px-8 py-20 md:px-16 lg:px-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
        {/* Columna izquierda: título */}
        <h2 className="font-sans text-sm font-semibold uppercase leading-relaxed tracking-[0.3em] text-black md:text-base">
          Experiencia,
          <br />
          criterio y visión
          <br />
          de industria
        </h2>

        {/* Columna derecha: párrafos */}
        <div className="flex flex-col gap-6">
          <p className="whitespace-nowrap font-sans text-base leading-snug text-black md:text-lg">
            Ktalisys nace del entendimiento profundo de la<br />
            industria musical, el desarrollo artístico y la<br />
            construcción de proyectos con proyección global.
          </p>
          <p className="whitespace-nowrap font-sans text-base leading-snug text-black md:text-lg">
            Nuestro enfoque combina criterio creativo, estrategia<br />
            de mercado y conocimiento real del negocio musical.
          </p>
        </div>
      </div>
    </section>
  );
}
