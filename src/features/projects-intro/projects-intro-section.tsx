import Image from "next/image";

function KtalisysLogo() {
  return (
    <div className="inline-flex items-center rounded-lg border-2 border-[#5BA4D9] px-4 py-2">
      <span className="font-sans text-2xl font-bold tracking-tight text-[#5BA4D9] md:text-3xl">
        Ktalisys<sup className="text-sm">®</sup>
      </span>
    </div>
  );
}

export function ProjectsIntroSection() {
  return (
    <section className="bg-black px-6 pt-20 pb-10 md:pt-36 md:pb-16 md:px-16 lg:px-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:gap-16">
        {/* Columna izquierda: logo + título + párrafos (centrados en la columna) */}
        <div className="flex flex-col items-center gap-5 text-left md:gap-8">
          <KtalisysLogo />

          <h1 className="whitespace-pre-line font-sans text-base font-semibold uppercase leading-relaxed tracking-[0.3em] text-white md:text-lg">
            {"Proyectos\ndesarrollados\ncon visión"}
          </h1>

          <div className="flex flex-col gap-4">
            <p className="whitespace-pre-line font-sans text-sm leading-snug text-white md:text-base">
              {"En Ktalisys trabajamos con\ntalento que entiende que crecer\nrequiere dirección, estructura y\ndecisiones claras."}
            </p>
            <p className="whitespace-pre-line font-sans text-sm leading-snug text-white md:text-base">
              {"No mostramos todo.\nMostramos lo que representa\nnuestro enfoque."}
            </p>
          </div>
        </div>

        {/* Columna derecha: imagen placeholder */}
        <div className="relative aspect-[4/3] w-full">
          <Image
            src="/aterciopelado.png"
            alt="Proyectos"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
