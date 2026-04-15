export function ExperienceSection() {
  return (
    <section className="bg-white px-5 py-10 md:py-20 lg:px-10">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
        {/* Columna izquierda: título */}
        <h2 className="font-sans text-sm font-semibold uppercase leading-relaxed tracking-[0.3em] text-black md:text-base lg:self-center">
          Experiencia,
          <br />
          criterio y visión
          <br />
          de industria
        </h2>

        {/* Columna derecha: párrafos */}
        <div className="flex flex-col gap-6 lg:justify-self-end">
          <p className="font-sans text-base leading-snug text-black lg:whitespace-nowrap md:text-lg">
            Ktalisys nace del entendimiento profundo de la<br className="hidden lg:inline" />
            {" "}industria musical, el desarrollo artístico y la<br className="hidden lg:inline" />
            {" "}construcción de proyectos con proyección global.
          </p>
          <p className="font-sans text-base leading-snug text-black lg:whitespace-nowrap md:text-lg">
            Nuestro enfoque combina criterio creativo, estrategia<br className="hidden lg:inline" />
            {" "}de mercado y conocimiento real del negocio musical.
          </p>
        </div>
      </div>
    </section>
  );
}
