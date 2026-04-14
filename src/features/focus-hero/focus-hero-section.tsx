import Image from "next/image";

export function FocusHeroSection() {
  return (
    <section className="bg-black px-8 md:px-16 lg:px-24">
      <div className="mx-auto flex max-w-5xl flex-col items-center">
        {/* Imagen con lado derecho redondeado y texto encima */}
        <div className="relative h-56 w-full overflow-hidden rounded-r-full md:h-64 lg:h-72">
          <Image
            src="/Beele.png"
            alt="Beele"
            fill
            className="object-cover"
            priority
          />
          {/* Sombra oscura sobre la imagen para resaltar el texto */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          {/* Frase en la esquina inferior izquierda */}
          <p className="absolute bottom-1 left-1 font-sans text-sm font-bold uppercase tracking-[0.25em] text-[#5BA4D9] md:bottom-1 md:left-1 md:text-base">
            El talento no se fabrica. Se cataliza.
          </p>
        </div>

        {/* Párrafo debajo del cilindro */}
        <p className="mt-3 w-full self-start whitespace-pre-line font-sans text-base font-base text-white md:text-lg">
          {"Nuestro enfoque conecta creatividad, mercado y visión para transformar talento musical\nen proyectos con proyección real."}
        </p>
      </div>
    </section>
  );
}
