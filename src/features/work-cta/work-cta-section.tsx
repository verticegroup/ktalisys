import Image from "next/image";

export function WorkCtaSection() {
  return (
    <section className="-mt-px bg-white px-6 pt-0 pb-10 md:mt-0 md:px-16 md:pt-4 md:pb-20 lg:px-24">
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-16">
        {/* Columna izquierda: gráfico Recurso 23 */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/Recurso%2023.png"
            alt=""
            aria-hidden
            width={320}
            height={320}
            className="h-44 w-44 object-contain md:h-52 md:w-52"
          />
        </div>

        {/* Columna derecha: título + texto + botón */}
        <div className="flex flex-col gap-6">
          <h3 className="whitespace-pre-line font-sans text-sm font-semibold uppercase leading-relaxed tracking-[0.25em] text-[#E54529] md:text-base">
            {"¿Tu proyecto está listo para\navanzar con dirección?"}
          </h3>
          <p className="whitespace-pre-line font-sans text-base leading-snug text-black md:text-lg">
            {"Si tienes talento, visión y disposición\npara construir con método, este es el\nsiguiente paso."}
          </p>
          <a
            href="#aplicar"
            className="inline-flex w-fit items-center bg-[#37ace2] pl-3 pr-6 py-1 font-black uppercase leading-tight text-black transition-colors hover:bg-[#2e9bcc] text-lg md:text-xl"
          >
            <span className="whitespace-pre-line">{"Aplicar\nproyecto"}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
