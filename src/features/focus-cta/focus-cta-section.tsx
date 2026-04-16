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
          className="relative flex w-full flex-col bg-white py-10 md:h-80 md:min-h-0 md:flex-row md:items-center md:py-0 lg:h-96"
          style={{ clipPath: STAIRS_CLIP }}
        >
          {/* Imagen: en mobile ocupa la mitad inferior como bloque propio; en md+ absoluta a la derecha */}
          <div className="pointer-events-none relative mt-4 h-56 w-full md:absolute md:inset-y-0 md:right-0 md:mt-0 md:h-auto md:w-1/2">
            <Image
              src="/YED.png"
              alt="YED"
              fill
              className="object-contain object-bottom md:object-cover md:object-right"
            />
          </div>

          {/* Contenido */}
          <div className="relative z-10 order-first flex flex-col gap-3 px-[16%] md:order-none md:gap-4 md:px-0 md:pl-32 md:pr-8 lg:pl-40">
            <h3 className="whitespace-pre-line font-sans text-base font-semibold uppercase leading-snug tracking-[0.3em] text-[#fd300f] md:text-base">
              {"Si este enfoque\nresuena contigo,\nconversemos"}
            </h3>
            <p className="whitespace-pre-line font-sans text-base font-bold leading-snug text-black md:text-lg">
              {"Ktalisys trabaja con\ntalento que está listo\npara construir con\nmétodo y visión."}
            </p>
            <div className="relative flex items-center gap-4">
              <a
                href="#aplicar"
                className="inline-flex bg-[#5BA4D9] pl-2 pr-5 py-1 font-black uppercase leading-tight text-black transition-colors hover:bg-[#37ace2] text-2xl md:text-xl"
              >
                <span className="whitespace-pre-line">{"Aplicar\nproyecto"}</span>
              </a>
              {/* Flecha naranja desde el botón */}
              <svg
                className="h-14 w-28 text-[#fd300f] md:h-16 md:w-32"
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
