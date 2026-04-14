import Image from "next/image";

export function WorkBeforeSection() {
  return (
    <section className="relative bg-black px-8 py-16 md:px-16 lg:px-24">
      <div className="relative mx-auto max-w-6xl">
        {/* Franja naranja con título */}
        <div className="relative h-10 bg-[#E84D2E] px-4 md:h-12">
          <h2 className="flex h-full items-center font-sans text-sm font-semibold uppercase tracking-[0.3em] text-white md:text-base">
            Nuestro trabajo empieza antes de la música
          </h2>
          {/* Imagen micrófono sobresaliendo por encima y por debajo de la franja */}
          <div className="absolute -top-12 right-0 h-64 w-64 md:-top-16 md:h-80 md:w-80">
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
        <div className="mt-8 flex flex-col gap-5 md:max-w-[55%]">
          <p className="whitespace-nowrap font-sans text-sm leading-snug text-white md:text-base">
            Antes de producir, lanzar o promocionar, entendemos<br />
            el proyecto. Analizamos el talento, el momento, el<br />
            mercado y el objetivo real.
          </p>
          <p className="whitespace-nowrap font-sans text-sm leading-snug text-white md:text-base">
            Ktalisys no ofrece soluciones genéricas. Diseñamos<br />
            caminos claros para proyectos que quieren crecer<br />
            con sentido.
          </p>
        </div>
      </div>
    </section>
  );
}
