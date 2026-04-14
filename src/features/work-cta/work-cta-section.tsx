import { Logo } from "@/components/ui/logo";

export function WorkCtaSection() {
  return (
    <section className="bg-white px-8 py-20 md:px-16 lg:px-24">
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
        {/* Columna izquierda: logo grande */}
        <div className="flex justify-center md:justify-start">
          <Logo className="h-56 w-56 text-black md:h-64 md:w-64" />
        </div>

        {/* Columna derecha: título + texto + botón */}
        <div className="flex flex-col gap-6">
          <h3 className="whitespace-pre-line font-sans text-sm font-semibold uppercase leading-relaxed tracking-[0.25em] text-[#E84D2E] md:text-base">
            {"¿Tu proyecto está listo para\navanzar con dirección?"}
          </h3>
          <p className="whitespace-pre-line font-sans text-base font-bold leading-snug text-black md:text-lg">
            {"Si tienes talento, visión y disposición\npara construir con método, este es el\nsiguiente paso."}
          </p>
          <a
            href="#aplicar"
            className="inline-flex w-fit items-center bg-[#5BA4D9] px-6 py-3 font-black uppercase leading-tight text-black transition-colors hover:bg-[#4a93c8] text-lg md:text-xl"
          >
            <span className="whitespace-pre-line">{"Aplicar\nproyecto"}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
