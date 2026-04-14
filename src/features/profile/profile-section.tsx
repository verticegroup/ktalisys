import Image from "next/image";

function StarShape({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 0l2.5 7.5L22 5.5l-5 5L24 12l-7.5 2.5L22 18.5l-7.5-2L12 24l-2.5-7.5L2 18.5l5-4L0 12l7.5-2.5L2 5.5l7.5 2L12 0z" />
    </svg>
  );
}

const profileItems = [
  "Artistas con identidad definida",
  "Proyectos en etapa de crecimiento",
  "Talento listo para profesionalizarse",
  "Equipos creativos con visión a largo plazo",
];

export function ProfileSection() {
  return (
    <section className="relative bg-[#5BA4D9] px-6 py-10 md:py-16 md:px-16 lg:px-32">
      <div className="mx-auto flex max-w-4xl flex-col gap-6 lg:flex-row lg:items-start lg:gap-16">
        {/* Columna izquierda: título + foto */}
        <div className="flex flex-col gap-5 lg:w-1/2 lg:gap-6">
          {/* Título con estrella y texto descriptivo posicionado encima */}
          <div className="relative lg:inline-block">
            <h2 className="whitespace-pre-line text-3xl leading-[0.95] font-black uppercase tracking-tight text-black md:text-5xl lg:text-6xl">
              {"No trabajamos con todos.\ny eso es intencional."}
            </h2>
            {/* Estrella/sol rojo - sobre el final de "intencional" */}
            <StarShape
              className="hidden lg:absolute lg:bottom-0 lg:z-30 lg:block lg:h-14 lg:w-14 lg:text-[#E54529] lg:[left:calc(43%+5.5rem)] xl:h-16 xl:w-16"
            />
            {/* Texto descriptivo al lado de la estrella */}
            <div
              className="relative z-30 mt-6 lg:absolute lg:mt-0 lg:[bottom:-0.5rem] lg:[left:calc(44%+10rem)]"
            >
              <p className="relative font-sans text-sm leading-tight text-white lg:whitespace-nowrap md:text-base">
                {/* Mancha naranja en la esquina superior derecha del texto */}
                <span
                  className="hidden lg:absolute lg:-top-10 lg:-right-24 lg:z-0 lg:block lg:h-8 lg:w-24 lg:rotate-12 lg:bg-[#E54529] xl:-top-12 xl:h-10 xl:w-28"
                  style={{
                    clipPath: `polygon(
                      12% 0%, 88% 0%,
                      88% 10%, 92% 10%, 92% 25%, 96% 25%, 96% 42%, 100% 42%, 100% 58%, 96% 58%, 96% 75%, 92% 75%, 92% 90%, 88% 90%, 88% 100%,
                      12% 100%, 12% 90%, 8% 90%, 8% 75%, 4% 75%, 4% 58%, 0% 58%, 0% 42%, 4% 42%, 4% 25%, 8% 25%, 8% 10%, 12% 10%
                    )`,
                  }}
                />
                <span className="relative z-10">
                  Ktalisys trabaja con artistas y proyectos que entienden<br />
                  que el talento necesita estructura, visión y disciplina<br />
                  para crecer.
                </span>
              </p>
            </div>

            {/* Perfil ideal + lista posicionado debajo del texto descriptivo */}
            <div
              className="relative z-30 mt-5 flex flex-col gap-3 lg:absolute lg:mt-0 lg:[left:calc(44%+10rem)] lg:[top:calc(100%+1.5rem)]"
            >
              <div className="relative inline-flex self-start px-4 py-1.5 lg:-ml-14">
                <svg
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 120 40"
                  preserveAspectRatio="none"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                >
                  <path
                    d="M8 6 C20 3, 50 2, 80 4 C100 5, 115 7, 116 14 C117 22, 112 30, 95 33 C70 36, 40 37, 15 34 C6 33, 3 28, 4 20 C5 12, 7 8, 10 5"
                    className="text-black"
                  />
                </svg>
                <span className="relative font-sans text-sm uppercase tracking-widest text-white md:text-base">
                  Perfil ideal
                </span>
              </div>
              <ul className="flex flex-col gap-2 pb-2 lg:ml-12 lg:gap-7 lg:pb-4">
                {profileItems.map((item) => (
                  <li key={item} className="font-sans text-sm text-white lg:whitespace-nowrap md:text-base">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-2 max-w-md font-sans text-sm font-semibold uppercase leading-tight tracking-wide text-black lg:ml-12 lg:mt-4 md:text-base">
                Si buscas solo exposición,<br />
                este no es el lugar.<br />
                Si buscas dirección, sí.
              </p>
              {/* Logo Ktalisys - vertical, orientado hacia arriba */}
              <div
                className="hidden text-black lg:absolute lg:flex lg:items-center lg:gap-2 lg:[bottom:0] lg:[left:calc(100%+8rem)]"
                style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
              >
                <span className="text-3xl font-bold italic tracking-tight md:text-4xl">Ktalisys</span>
                <svg
                  className="h-10 w-10 md:h-12 md:w-12"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path d="M8 32V8h4v10l10-10h6L17 19l12 13h-6L13 20v12H8z" fill="currentColor" />
                  <rect x="1" y="1" width="38" height="38" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </div>
            </div>
          </div>

          {/* Foto artista con decoraciones */}
          <div className="relative ml-5 w-56 md:w-64">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/karol g.jpg"
                alt="Karol G"
                fill
                className="object-cover"
              />
            </div>
            {/* Estrella sobresaliendo a la mitad en la esquina inferior derecha */}
            <StarShape className="absolute -right-8 bottom-4 z-30 h-16 w-16 text-[#E54529] md:-right-10 md:h-20 md:w-20" />
            {/* Forma vertical escalonada sobresaliendo en la esquina superior izquierda */}
            <span
              className="absolute -left-5 top-8 z-30 h-28 w-10 bg-[#E54529] md:-left-6 md:h-32 md:w-12"
              style={{
                clipPath: `polygon(
                  0% 12%, 0% 88%,
                  10% 88%, 10% 92%, 25% 92%, 25% 96%, 42% 96%, 42% 100%, 58% 100%, 58% 96%, 75% 96%, 75% 92%, 90% 92%, 90% 88%, 100% 88%,
                  100% 12%, 90% 12%, 90% 8%, 75% 8%, 75% 4%, 58% 4%, 58% 0%, 42% 0%, 42% 4%, 25% 4%, 25% 8%, 10% 8%, 10% 12%
                )`,
              }}
            />
          </div>
        </div>

      </div>

      {/* Pie de sección - vacío, logo movido junto al texto */}
      <div className="hidden">
        <div className="flex items-center gap-2 text-black">
          <span className="text-2xl font-bold italic tracking-tight">Ktalisys</span>
        </div>
      </div>
    </section>
  );
}
