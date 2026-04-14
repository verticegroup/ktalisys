export function CtaSection() {
  return (
    <section className="flex justify-center bg-white px-6 py-10 md:py-20 md:px-16 lg:px-24">
      <div className="flex w-full max-w-3xl flex-col items-center gap-5 bg-black px-6 py-10 text-center md:gap-8 md:py-20 md:px-16">
        {/* Texto naranja */}
        <p className="font-sans text-sm font-semibold uppercase leading-relaxed tracking-[0.3em] text-[#E54529] md:whitespace-nowrap md:text-base">
          Si tienes talento, este es<br />
          el siguiente paso
        </p>

        {/* Texto blanco */}
        <p className="font-sans text-base leading-snug text-white md:whitespace-nowrap md:text-xl lg:text-2xl">
          Si tu proyecto está listo para dejar de improvisar<br />
          y empezar a construir con visión, conversemos.
        </p>

        {/* Botón Aplicar Proyecto */}
        <a
          href="#aplicar"
          className="mt-4 inline-block bg-[#5BA4D9] px-6 py-3 font-black text-lg uppercase tracking-wider text-black transition-colors hover:bg-[#4a93c8] md:text-xl"
        >
          Aplicar proyecto
        </a>
      </div>
    </section>
  );
}
