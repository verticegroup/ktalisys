import Image from "next/image";

const PROJECTS = [
  {
    image: "/Beele.jpg",
    tag: "Proyecto / Artista",
    title: "Desarrollo estratégico",
    description:
      "Proyecto musical desarrollado con enfoque de\nposicionamiento, identidad artística y validación\nde mercado.",
  },
  {
    image: "/Paola Jara.png",
    tag: "Proyecto / Artista",
    title: "Desarrollo estratégico",
    description:
      "Proyecto musical desarrollado con enfoque de\nposicionamiento, identidad artística y validación\nde mercado.",
  },
  {
    image: "/foto1.jpg",
    tag: "Proyecto / Artista",
    title: "Desarrollo estratégico",
    description:
      "Proyecto musical desarrollado con enfoque de\nposicionamiento, identidad artística y validación\nde mercado.",
  },
  {
    image: "/carlos vives.png",
    tag: "Proyecto / Artista",
    title: "Desarrollo estratégico",
    description:
      "Proyecto musical desarrollado con enfoque de\nposicionamiento, identidad artística y validación\nde mercado.",
  },
] as const;

function ProjectCard({
  image,
  tag,
  title,
  description,
}: {
  image: string;
  tag: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col bg-[#ffffff]">
      {/* Imagen */}
      <div className="relative aspect-[4/3] w-full">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      {/* Tag naranja */}
      <div className="bg-[#f86a0b] px-4 py-2 text-center">
        <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-white md:text-sm">
          {tag}
        </span>
      </div>

      {/* Contenido inferior */}
      <div className="flex flex-col items-center gap-3 px-6 py-6 text-center">
        <h3 className="font-sans text-sm font-bold uppercase tracking-[0.2em] text-black md:text-base">
          {title}
        </h3>
        <p className="whitespace-pre-line font-sans text-xs leading-snug text-black md:text-sm">
          {description}
        </p>
        <a
          href="#"
          className="mt-3 inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.25em] text-[#5BA4D9] transition-colors hover:text-[#4a93c8] md:text-xs"
        >
          Ver más
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="12" />
            <path d="M9 8l6 4-6 4V8z" fill="white" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export function ProjectsCardsSection() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-10 md:px-16 md:py-20 lg:px-24">
      <div className="mx-auto max-w-7xl">
        {/* "PROYECTOS" gigante al fondo */}
        <h2 className="relative z-0 text-center font-black uppercase leading-[0.9] tracking-tight text-[#f86a0b] text-5xl sm:text-7xl md:text-9xl lg:text-[10rem] xl:text-[12rem]">
          Proyectos
        </h2>

        {/* Cards superpuestas a la mitad del texto */}
        <div className="relative z-10 mx-auto mt-6 grid max-w-3xl grid-cols-1 gap-5 sm:-mt-4 md:-mt-8 md:gap-8 md:grid-cols-2 lg:-mt-10">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
