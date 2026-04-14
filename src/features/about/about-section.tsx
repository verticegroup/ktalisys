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
          fill="#3B8BD0"
        />
      </svg>
      <div className="bg-[#3B8BD0] px-3 py-2">
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
          fill="#3B8BD0"
        />
      </svg>
    </div>
  );
}

export function AboutSection() {
  return (
    <section className="mt-2 flex justify-center px-12 md:px-16 lg:px-24">
      <div className="relative w-full rounded-lg">
        <Image
          src="/as.png"
          alt="Fondo sección"
          fill
          className="rounded-lg object-cover"
        />
        <div className="absolute inset-0 rounded-lg bg-black/60" />

        <div className="relative z-10 flex min-h-[70vh] items-center px-10 py-16 md:px-16">
          <div className="flex w-full items-start justify-center gap-28">
            {/* Columna izquierda */}
            <div className="flex flex-col">
              {/* Título + bloque azul encima */}
              <div className="relative inline-block">
                <h2 className="whitespace-nowrap text-5xl leading-[0.95] font-black italic uppercase tracking-tight text-white md:text-7xl lg:text-8xl xl:text-9xl">
                  ¿Qué es Ktalisys?
                </h2>

                <div style={{ position: "absolute", top: "98%", left: "70%", transform: "translateY(-40%)", zIndex: 30 }}>
                  <ScallopedBlock>
                    <p className="whitespace-nowrap font-sans text-xs uppercase leading-tight tracking-wider text-[#E84D2E] md:text-sm">
                      Un catalizador<br />para el talento<br />musical.
                    </p>
                  </ScallopedBlock>
                </div>
              </div>

              {/* Texto rojo debajo */}
              <div className="mt-3 pl-10">
                <p className="whitespace-pre-line font-sans text-xs leading-tight uppercase tracking-wider text-[#E84D2E] md:text-xs">
                  {"No somos un sello. Somos\nel punto donde el talento\nencuentra dirección."}
                </p>
              </div>
            </div>

            {/* Columna derecha */}
            <div className="flex max-w-sm flex-col gap-6 pt-4">
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
