import Image from "next/image";

export function WorkBeforeSection() {
  return (
    <section className="relative bg-black px-6 py-10 md:py-16 md:px-16 lg:px-24">
      <div className="relative mx-auto max-w-6xl">
        {/* Imagen micrófono — DETRÁS de la franja solo en mobile, delante en desktop */}
        <div className="pointer-events-none absolute -top-8 right-0 z-0 h-32 w-32 sm:-top-12 sm:h-64 sm:w-64 md:static md:z-auto md:hidden">
          <Image
            src="/microfono.png"
            alt="Micrófono"
            fill
            className="object-contain object-right"
            priority
          />
        </div>

        {/* Franja naranja con título */}
        <div className="relative z-10 h-10 bg-[#E54529] px-4 md:z-auto md:h-12">
          <h2 className="flex h-full items-center font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white md:text-base md:tracking-[0.3em]">
            Nuestro trabajo empieza antes de la música
          </h2>
          {/* Micrófono original — solo desktop, encima de la franja */}
          <div className="absolute -top-16 right-0 hidden h-80 w-80 md:block">
            <Image
              src="/microfono.png"
              alt="Micrófono"
              fill
              className="object-contain object-right"
              priority
            />
          </div>
        </div>

        {/* Párrafos debajo de la franja */}
        <div className="mt-6 flex flex-col gap-4 md:mt-8 md:gap-5 md:max-w-[55%]">
          <p className="font-sans text-sm leading-snug text-white lg:whitespace-nowrap md:text-base">
            Antes de producir, lanzar o promocionar, entendemos<br />
            el proyecto. Analizamos el talento, el momento, el<br />
            mercado y el objetivo real.
          </p>
          <p className="font-sans text-sm leading-snug text-white lg:whitespace-nowrap md:text-base">
            Ktalisys no ofrece soluciones genéricas. Diseñamos<br />
            caminos claros para proyectos que quieren crecer<br />
            con sentido.
          </p>
        </div>
      </div>
    </section>
  );
}
