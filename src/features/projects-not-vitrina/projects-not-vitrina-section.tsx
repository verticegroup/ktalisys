import Image from "next/image";

export function ProjectsNotVitrinaSection() {
  return (
    <section className="bg-black px-8 py-10 md:px-10 lg:px-10">
      <div className="mx-auto grid max-w-4xl grid-cols-1 items-stretch md:grid-cols-[2fr_1fr]">
        {/* Izquierda: bloque naranja con texto */}
        <div className="flex flex-col justify-center gap-5 bg-[#E54529] px-8 py-8 md:px-10 md:py-10">
          <p className="whitespace-pre-line font-sans text-sm leading-snug text-black md:text-base">
            {"Esta no es una vitrina de artistas firmados.\nNo es un ranking de éxitos.\nNo es una promesa de resultados inmediatos."}
          </p>
          <p className="whitespace-pre-line font-sans text-sm leading-snug text-black md:text-base">
            {"Es una muestra del tipo de proyectos que\ndesarrollamos y del criterio con el que trabajamos."}
          </p>
        </div>

        {/* Derecha: imagen */}
        <div className="relative min-h-[200px] w-full md:min-h-0">
          <Image
            src="/Piso 21.png"
            alt="Piso 21"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
