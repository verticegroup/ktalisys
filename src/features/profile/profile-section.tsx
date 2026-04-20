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
    <section className="relative overflow-hidden bg-[#37abe2] px-6 py-10 md:py-16 md:px-16 lg:px-32">
      <div className="mx-auto flex max-w-4xl flex-col gap-6 lg:flex-row lg:items-start lg:gap-16">
        {/* Columna izquierda: título + foto */}
        <div className="flex flex-col gap-5 lg:w-1/2 lg:gap-6">
          {/* Título con estrella y texto descriptivo posicionado encima */}
          <div className="relative lg:inline-block">
            <div className="relative inline-block">
              <h2 className="whitespace-pre-line text-3xl leading-[0.95] font-black uppercase tracking-tight text-black md:text-5xl lg:text-6xl">
                {"No trabajamos con todos.\ny eso es intencional."}
              </h2>
              {/* Gráfico Recurso 4 - sobre el final de "intencional" */}
              <Image
                src="/Recurso%204.png"
                alt=""
                aria-hidden
                width={64}
                height={64}
                className="absolute bottom-0 left-[calc(43%+3.5rem)] right-auto z-30 block h-10 w-10 object-contain md:left-[calc(43%+5rem)] md:h-12 md:w-12 lg:left-[calc(43%+7rem)] lg:h-14 lg:w-14 xl:h-16 xl:w-16"
              />
            </div>
            {/* Texto descriptivo al lado de la estrella */}
            <div
              className="relative z-30 mt-6 lg:absolute lg:mt-0 lg:[bottom:-0.5rem] lg:[left:calc(44%+10rem)]"
            >
              <p className="relative font-sans text-sm leading-snug text-white md:text-base lg:whitespace-nowrap lg:leading-tight">
                {/* Gráfico Recurso 5 al lado derecho del texto */}
                <Image
                  src="/Recurso%205.png"
                  alt=""
                  aria-hidden
                  width={240}
                  height={80}
                  className="absolute right-0 -top-10 z-0 block h-10 w-28 object-contain md:-right-24 md:-top-12 md:h-12 md:w-40 lg:-top-14 lg:-right-40 lg:h-14 lg:w-44 xl:-top-16 xl:h-16 xl:w-52"
                />
                <span className="relative z-10">
                  Ktalisys trabaja con artistas y proyectos que entienden<br className="hidden lg:inline" />
                  {" "}que el talento necesita estructura, visión y disciplina<br className="hidden lg:inline" />
                  {" "}para crecer.
                </span>
              </p>
            </div>

            {/* Foto artista (solo mobile, va arriba de "Perfil ideal") */}
            <div className="relative z-20 mt-6 ml-5 w-56 md:w-64 lg:hidden">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/karol g.jpg"
                  alt="Karol G"
                  fill
                  className="object-cover"
                />
              </div>
              <Image
                src="/Recurso%208.png"
                alt=""
                aria-hidden
                width={96}
                height={96}
                className="absolute -right-8 bottom-4 z-30 h-16 w-16 object-contain md:-right-10 md:h-20 md:w-20"
              />
              <Image
                src="/Recurso%207.png"
                alt=""
                aria-hidden
                width={80}
                height={160}
                className="absolute -left-5 top-8 z-30 h-28 w-10 object-contain md:-left-6 md:h-32 md:w-12"
              />
            </div>

            {/* Perfil ideal + lista posicionado debajo del texto descriptivo */}
            <div
              className="relative z-30 mt-5 flex flex-col gap-3 lg:absolute lg:mt-0 lg:[left:calc(44%+10rem)] lg:[top:calc(100%+1.5rem)]"
            >
              <div className="relative inline-flex self-start px-5 py-2 lg:-ml-14">
                <Image
                  src="/Recurso%206.png"
                  alt=""
                  aria-hidden
                  fill
                  className="absolute -inset-x-1 -inset-y-0.5 object-fill"
                />
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
              {/* Logo Ktalisys (Recurso 9) - vertical, parte inferior derecha */}
              <Image
                src="/Recurso%209.png"
                alt="Ktalisys"
                width={80}
                height={220}
                className="hidden object-contain lg:absolute lg:block lg:h-24 lg:w-auto lg:[bottom:0] lg:[left:calc(100%+8rem)] xl:h-28"
              />
            </div>
          </div>

          {/* Foto artista con decoraciones (solo desktop, en mobile va arriba de Perfil ideal) */}
          <div className="relative ml-5 hidden w-56 md:w-64 lg:block">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/karol g.jpg"
                alt="Karol G"
                fill
                className="object-cover"
              />
            </div>
            {/* Gráfico Recurso 8 sobresaliendo en la esquina inferior derecha */}
            <Image
              src="/Recurso%208.png"
              alt=""
              aria-hidden
              width={96}
              height={96}
              className="absolute -right-8 bottom-4 z-30 h-16 w-16 object-contain md:-right-10 md:h-20 md:w-20"
            />
            {/* Gráfico Recurso 7 sobresaliendo en la esquina superior izquierda */}
            <Image
              src="/Recurso%207.png"
              alt=""
              aria-hidden
              width={80}
              height={160}
              className="absolute -left-5 top-8 z-30 h-28 w-10 object-contain md:-left-6 md:h-32 md:w-12"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
