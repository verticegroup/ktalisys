import Image from "next/image";


function HeroHeadingLeft() {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="whitespace-pre-line text-4xl leading-[1.1] font-black uppercase tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
        {"Aceleramos el\ntalento musical"}
      </h1>
    </div>
  );
}

function HeroHeadingRight() {
  return (
    <div className="flex flex-col justify-center text-left">
      <p className="whitespace-pre-line text-4xl leading-[1.1] font-black uppercase tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
        {"Hacia el\nmercado"}
      </p>
    </div>
  );
}

function HeroDescription() {
  return (
    <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-center md:gap-16">
      <p className="max-w-lg whitespace-pre-line font-gilroy text-base leading-relaxed text-white md:mr-25 md:text-lg">
        {"Guiamos artistas con visión estratégica, marketing\ny producción musical para convertir talento en\naceptación real y oportunidades sostenibles."}
      </p>

      <div className="flex items-stretch gap-3">
        <a
          href="#como-trabajamos"
          className="flex items-center bg-[#E84D2E] px-4 py-1 font-black text-2xl uppercase leading-tight md:text-3xl text-white transition-colors hover:bg-[#d4432a]"
        >
          <span className="whitespace-pre-line">{"Cómo\ntrabajamos"}</span>
        </a>
        <a
          href="#aplicar"
          className="flex items-center bg-[#3B8BD0] pr-8 pl-4 py-1 font-black text-2xl uppercase leading-tight md:text-3xl text-black transition-colors hover:bg-[#3580c0]"
        >
          <span className="whitespace-pre-line">{"Aplicar\nproyecto"}</span>
        </a>
      </div>

      <p className="-ml-10 whitespace-pre-line text-left font-gilroy text-sm leading-relaxed font-semibold uppercase tracking-widest text-white md:text-base">
        {"El talento\nno se fabrica.\nSe cataliza."}
      </p>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative flex flex-col justify-center gap-10 bg-black px-12 pt-44 pb-4 md:px-16 lg:px-24">
      <div className="flex items-center justify-center gap-5">
        <HeroHeadingLeft />

        <div className="relative hidden w-full max-w-lg self-center md:block xl:max-w-xl 2xl:max-w-2xl">
          <div
            className="relative h-[120px] md:h-[140px] lg:h-[160px] xl:h-[190px] 2xl:h-[220px]"
            style={{
              clipPath: `polygon(
                12% 0%, 88% 0%,
                88% 10%, 92% 10%, 92% 25%, 96% 25%, 96% 42%, 100% 42%, 100% 58%, 96% 58%, 96% 75%, 92% 75%, 92% 90%, 88% 90%, 88% 100%,
                12% 100%, 12% 90%, 8% 90%, 8% 75%, 4% 75%, 4% 58%, 0% 58%, 0% 42%, 4% 42%, 4% 25%, 8% 25%, 8% 10%, 12% 10%
              )`,
            }}
          >
            <Image
              src="/Piso 21.png"
              alt="Piso 21"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>

        <HeroHeadingRight />
      </div>

      <HeroDescription />
    </section>
  );
}
