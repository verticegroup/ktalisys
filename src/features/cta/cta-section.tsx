export function CtaSection() {
  return (
    <section className="flex justify-center bg-white px-4 py-8 sm:px-6 sm:py-10 md:py-20 md:px-16 lg:px-24">
      <div className="flex w-full max-w-3xl flex-col items-center gap-4 bg-black px-5 py-8 text-center sm:gap-5 sm:px-6 sm:py-10 md:gap-8 md:py-20 md:px-16">
        <p className="font-sans text-[0.7rem] font-semibold uppercase leading-relaxed tracking-[0.25em] text-[#E54529] sm:text-sm sm:tracking-[0.3em] md:whitespace-nowrap md:text-base">
          Si tienes talento, este es<br className="hidden sm:block" />
          <span className="sm:hidden"> </span>el siguiente paso
        </p>

        <p className="font-sans text-sm leading-snug text-white sm:text-base md:whitespace-nowrap md:text-xl lg:text-2xl">
          Si tu proyecto está listo para dejar de improvisar<br className="hidden sm:block" />
          <span className="sm:hidden"> </span>y empezar a construir con visión, conversemos.
        </p>

        <a
          href="#aplicar"
          className="mt-2 inline-block bg-[#5BA4D9] px-3 py-1.5 font-black text-base uppercase tracking-wider text-black transition-colors hover:bg-[#4a93c8] sm:mt-4 sm:px-2 sm:py-1 sm:text-lg md:text-xl"
        >
          Aplicar proyecto
        </a>
      </div>
    </section>
  );
}
