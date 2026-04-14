import Image from "next/image";

const STAIRS_CLIP = `polygon(
  12% 0%, 88% 0%,
  88% 10%, 92% 10%, 92% 25%, 96% 25%, 96% 42%, 100% 42%, 100% 58%, 96% 58%, 96% 75%, 92% 75%, 92% 90%, 88% 90%, 88% 100%,
  12% 100%, 12% 90%, 8% 90%, 8% 75%, 4% 75%, 4% 58%, 0% 58%, 0% 42%, 4% 42%, 4% 25%, 8% 25%, 8% 10%, 12% 10%
)`;

export function FocusCtaSection() {
  return (
    <section className="bg-black px-6 py-10 md:px-16 md:py-20 lg:px-24">
      <div className="mx-auto flex max-w-5xl justify-center">
        {/* Forma escalonada blanca con contenido adentro */}
        <div
          className="relative flex min-h-[420px] w-full items-center bg-white sm:min-h-[460px] md:h-80 md:min-h-0 lg:h-96"
          style={{ clipPath: STAIRS_CLIP }}
        >
          {/* Imagen al lado derecho (absoluta para que no desplace el texto)
              En mobile aparece más pequeña en la esquina inferior derecha con baja opacidad
              para no tapar el texto. En md+ ocupa la mitad derecha como en desktop. */}
          <div className="pointer-events-none absolute right-0 bottom-0 h-40 w-1/2 opacity-40 sm:h-48 md:inset-y-0 md:h-auto md:opacity-100">
            <Image
              src="/YED.png"
              alt="YED"
              fill
              className="object-cover object-right"
            />
          </div>

          {/* Contenido en el lado izquierdo, centrado verticalmente */}
          <div className="relative z-10 flex flex-col gap-3 px-8 md:gap-4 md:pl-32 md:pr-8 lg:pl-40">
            <h3 className="whitespace-pre-line font-sans text-sm font-semibold uppercase leading-snug tracking-[0.3em] text-[#E54529] md:text-base">
              {"Si este enfoque\nresuena contigo,\nconversemos"}
            </h3>
            <p className="whitespace-pre-line font-sans text-base font-bold leading-snug text-black md:text-lg">
              {"Ktalisys trabaja con\ntalento que está listo\npara construir con\nmétodo y visión."}
            </p>
            <div className="relative flex items-center gap-4">
              <a
                href="#aplicar"
                className="inline-flex bg-[#5BA4D9] px-5 py-3 font-black uppercase leading-tight text-black transition-colors hover:bg-[#4a93c8] text-base md:text-lg"
              >
                <span className="whitespace-pre-line">{"Aplicar\nproyecto"}</span>
              </a>
              {/* Flecha naranja desde el botón */}
              <svg
                className="h-14 w-28 text-[#E54529] md:h-16 md:w-32"
                viewBox="0 0 120 60"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 45 C 40 55, 95 55, 100 25 C 102 15, 90 8, 75 15" />
                <path d="M5 45 L 15 38 M5 45 L 12 52" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
