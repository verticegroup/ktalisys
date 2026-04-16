import Image from "next/image";

export function WorkIntroSection() {
  return (
    <section className="bg-black px-6 pt-20 pb-10 md:pt-36 md:pb-16 md:px-16 lg:px-24">
      <div className="mx-auto max-w-7xl">
        {/* Título grande centrado */}
        <h1 className="text-center font-black uppercase leading-[1] tracking-tight text-[#E54529] text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          El talento necesita dirección para avanzar
        </h1>

        {/* 3 columnas: párrafo / imagen / frase */}
        <div className="mt-6 grid grid-cols-1 items-center gap-5 md:mt-12 md:grid-cols-[1fr_auto_1fr] md:gap-4">
          {/* Párrafo izquierda */}
          <p className="text-center font-sans text-sm leading-snug text-white md:text-left md:justify-self-end md:whitespace-nowrap md:text-base">
            En Ktalisys trabajamos con método,<br />
            criterio y visión de mercado para<br />
            acelerar proyectos musicales con<br />
            propósito y proyección real.
          </p>

          {/* Imagen centro con marco de semicírculos arriba y abajo */}
          <div className="flex justify-center">
            <svg width="0" height="0" className="absolute">
              <defs>
                <clipPath id="scallopedImage" clipPathUnits="objectBoundingBox">
                  <path
                    d="M0,0.06 L0.1,0.06 A0.08,0.06 0 0 1 0.26,0.06 A0.08,0.06 0 0 1 0.42,0.06 A0.08,0.06 0 0 1 0.58,0.06 A0.08,0.06 0 0 1 0.74,0.06 A0.08,0.06 0 0 1 0.9,0.06 L1,0.06 L1,0.94 L0.9,0.94 A0.08,0.06 0 0 1 0.74,0.94 A0.08,0.06 0 0 1 0.58,0.94 A0.08,0.06 0 0 1 0.42,0.94 A0.08,0.06 0 0 1 0.26,0.94 A0.08,0.06 0 0 1 0.1,0.94 L0,0.94 Z"
                  />
                </clipPath>
              </defs>
            </svg>
            <div
              className="relative h-24 w-full max-w-72 md:h-32 md:w-80"
              style={{ clipPath: "url(#scallopedImage)" }}
            >
              <Image
                src="/foto1.jpg"
                alt="Cómo trabajamos"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Frase derecha */}
          <p className="whitespace-pre-line text-center font-sans text-sm font-semibold uppercase leading-tight tracking-widest text-white md:text-left md:justify-self-start md:text-base">
            {"El talento no\nse improvisa.\nSe estructura."}
          </p>
        </div>
      </div>
    </section>
  );
}
