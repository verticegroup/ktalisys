import Image from "next/image";

function KtalisysLogo() {
  return (
    <Image
      src="/Recurso%2032.png"
      alt="Ktalisys"
      width={220}
      height={80}
      className="h-14 w-auto object-contain md:h-16"
    />
  );
}

export function ProjectsIntroSection() {
  return (
    <section className="bg-black pt-32 pb-10 md:pt-36 md:pb-16">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-6 px-5 lg:grid-cols-2 lg:gap-16 lg:px-10">
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
