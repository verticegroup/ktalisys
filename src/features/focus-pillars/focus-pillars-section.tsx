import Image from "next/image";

export function FocusPillarsSection() {
  return (
    <section className="bg-black px-8 py-16 md:px-16 lg:px-24">
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Columna izquierda: mosaico de imágenes con título */}
        <div className="grid grid-cols-[2fr_1fr] gap-3">
          {/* Sección izquierda (2/3): título arriba + 3 imágenes abajo en fila */}
          <div className="flex flex-col gap-3">
            <h2 className="whitespace-pre-line font-black uppercase leading-[1] tracking-tight text-[#5BA4D9] text-4xl md:text-5xl lg:text-7xl">
              {"Los pilares que\nsostienen cada\nproyecto"}
            </h2>
            <div className="grid grid-cols-3 gap-3">
              <div className="relative aspect-square">
                <Image
                  src="/karol g.jpg"
                  alt="Karol G"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square">
                <Image
                  src="/Beele.jpg"
                  alt="Beele"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square">
                <Image
                  src="/Paola Jara.png"
                  alt="Paola Jara"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Imagen 4 — derecha, más alta que todas */}
          <div className="relative h-full min-h-[320px]">
            <Image
              src="/carlos vives.png"
              alt="Carlos Vives"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Columna derecha: 01 — IDENTIDAD ARTÍSTICA + párrafos */}
        <div className="flex flex-col gap-4">
          <h3 className="font-sans text-xs font-semibold uppercase leading-tight tracking-[0.25em] text-white md:text-sm">
            01 —
            <br />
            Identidad artística
          </h3>
          <p className="whitespace-pre-line font-sans text-sm leading-snug text-white md:text-base">
            {"Definimos quién es el artista, qué lo\ndiferencia y por qué debería importar.\nLa identidad no se inventa, se revela y\nse ordena."}
          </p>
          <p className="whitespace-pre-line font-sans text-sm leading-snug text-white md:text-base">
            {"Sin identidad clara, no hay\nposicionamiento posible."}
          </p>
        </div>
      </div>
    </section>
  );
}
