import Image from "next/image";

export function WorkConfusionSection() {
  return (
    <section className="relative bg-black">
      <div className="relative flex min-h-[260px] md:min-h-[340px] lg:min-h-[400px]">
        {/* Imagen solo en la mitad izquierda */}
        <div className="relative w-1/2">
          <Image
            src="/platos.jpg"
            alt="Platos"
            fill
            className="object-cover"
            priority
          />
          {/* Gradiente de oscurecimiento sobre el borde derecho de la imagen */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black" />
        </div>

        {/* Texto en la mitad derecha, centrado vertical */}
        <div className="flex w-1/2 items-center">
          <h2 className="whitespace-pre-line pl-3 pr-2 font-black uppercase leading-[1] tracking-tight text-[#E54529] text-2xl sm:pl-4 sm:text-5xl md:pl-8 md:text-7xl lg:text-8xl">
            {"Para evitar\nconfusiones"}
          </h2>
        </div>
      </div>
    </section>
  );
}
