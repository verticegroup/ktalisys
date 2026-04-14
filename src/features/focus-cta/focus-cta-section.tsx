import Image from "next/image";

const STAIRS_CLIP = `polygon(
  12% 0%, 88% 0%,
  88% 10%, 92% 10%, 92% 25%, 96% 25%, 96% 42%, 100% 42%, 100% 58%, 96% 58%, 96% 75%, 92% 75%, 92% 90%, 88% 90%, 88% 100%,
  12% 100%, 12% 90%, 8% 90%, 8% 75%, 4% 75%, 4% 58%, 0% 58%, 0% 42%, 4% 42%, 4% 25%, 8% 25%, 8% 10%, 12% 10%
)`;

export function FocusCtaSection() {
  return (
    <section className="bg-black px-8 py-20 md:px-16 lg:px-24">
      <div className="mx-auto flex max-w-5xl justify-center">
        {/* Forma escalonada blanca con contenido adentro */}
        <div
          className="relative flex h-72 w-full items-center bg-white md:h-80 lg:h-96"
          style={{ clipPath: STAIRS_CLIP }}
        >
          {/* Imagen al lado derecho (absoluta para que no desplace el texto) */}
          <div className="absolute inset-y-0 right-0 w-1/2">
            <Image
              src="/YED.png"
              alt="YED"
              fill
              className="object-cover object-right"
            />
          </div>

          {/* Contenido en el lado izquierdo, centrado verticalmente */}
          <div className="relative z-10 flex flex-col gap-4 pl-24 pr-8 md:pl-32 lg:pl-40">
            <h3 className="whitespace-pre-line font-sans text-sm font-semibold uppercase leading-snug tracking-[0.3em] text-[#E84D2E] md:text-base">
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
                className="h-14 w-28 text-[#E84D2E] md:h-16 md:w-32"
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
