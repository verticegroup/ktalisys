import Image from "next/image";

function ScallopedBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {/* Olas arriba */}
      <svg
        className="absolute -top-4 left-0 w-full"
        viewBox="0 0 200 16"
        preserveAspectRatio="none"
        height="16"
      >
        <path
          d="M0 16 L20 16 A16 16 0 0 1 52 16 A16 16 0 0 1 84 16 A16 16 0 0 1 116 16 A16 16 0 0 1 148 16 A16 16 0 0 1 180 16 L200 16 Z"
          fill="#5BA7DA"
        />
      </svg>
      <div className="bg-[#5BA7DA] px-3 py-2">
        {children}
      </div>
      {/* Olas abajo */}
      <svg
        className="absolute -bottom-4 left-0 w-full rotate-180"
        viewBox="0 0 200 16"
        preserveAspectRatio="none"
        height="16"
      >
        <path
          d="M0 16 L20 16 A16 16 0 0 1 52 16 A16 16 0 0 1 84 16 A16 16 0 0 1 116 16 A16 16 0 0 1 148 16 A16 16 0 0 1 180 16 L200 16 Z"
          fill="#5BA7DA"
        />
      </svg>
    </div>
  );
}

export function AboutSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <Image
        src="/as.png"
        alt="Fondo sección"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent md:h-48" />

      <div className="relative z-10 flex min-h-[60vh] items-center px-5 py-8 md:min-h-[70vh] md:py-16 lg:px-10">
        <div className="mx-auto w-full max-w-6xl">
          <div className="flex w-full flex-col items-start justify-center gap-10 lg:flex-row lg:justify-between lg:gap-10">
            {/* Columna izquierda */}
            <div className="flex w-full flex-col lg:w-auto">
              {/* Título + bloque azul encima */}
              <div className="relative inline-block">
                <h2 className="text-5xl leading-[0.95] font-black uppercase tracking-tight text-white md:text-7xl lg:whitespace-nowrap lg:text-8xl xl:text-9xl">
                  ¿Qué es Ktalisys?
                </h2>

                <div className="mt-5 lg:mt-0" style={{ zIndex: 30 }}>
                  <div className="inline-block lg:absolute lg:block" style={{ top: "98%", left: "70%", transform: "translateY(-40%)" }}>
                    <ScallopedBlock>
                      <p className="font-sans text-xs uppercase leading-tight tracking-wider text-[#E54529] md:whitespace-nowrap md:text-sm">
                        Un catalizador<br />para el talento<br />musical.
                      </p>
                    </ScallopedBlock>
                  </div>
                </div>
              </div>

              {/* Texto rojo debajo */}
              <div className="mt-5 lg:mt-3 lg:pl-10">
                <p className="whitespace-pre-line font-sans text-sm leading-snug uppercase tracking-wider text-[#E54529] md:text-xs">
                  {"No somos un sello. Somos\nel punto donde el talento\nencuentra dirección."}
                </p>
              </div>
            </div>

            {/* Columna derecha */}
            <div className="flex w-full max-w-md flex-col gap-5 lg:max-w-sm lg:gap-6 lg:pt-4">
              <p className="font-sans text-base leading-tight text-white md:text-lg">
                Ktalisys es una music development
                & strategy company que impulsa
                proyectos musicales con enfoque
                claro de mercado.
              </p>
              <p className="font-sans text-base leading-tight text-white md:text-lg">
                Acompañamos a los artistas desde
                la visión creativa hasta su salida real
                al público, combinando estrategia,
                producción y crecimiento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}
