import Image from "next/image";


function HeroHeadingLeft() {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="whitespace-normal text-left text-4xl leading-[1.1] font-black uppercase tracking-tight text-white md:whitespace-pre-line md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
        {"Aceleramos el\ntalento musical"}
      </h1>
    </div>
  );
}

function HeroHeadingRight() {
  return (
    <div className="flex flex-col justify-center text-left">
      <p className="whitespace-normal text-4xl leading-[1.1] font-black uppercase tracking-tight text-white md:whitespace-pre-line md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
        {"Hacia el\nmercado"}
      </p>
    </div>
  );
}

function HeroDescription() {
  return (
    <div className="flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between md:gap-6">
      <p className="max-w-lg whitespace-normal text-left font-gilroy text-base leading-relaxed text-white md:whitespace-pre-line md:text-lg">
        {"Guiamos artistas con visión estratégica, marketing\ny producción musical para convertir talento en\naceptación real y oportunidades sostenibles."}
      </p>

      <div className="flex w-full items-stretch gap-3 md:w-auto">
        <a
          href="#como-trabajamos"
          className="flex flex-1 items-center justify-center bg-[#E54529] px-4 py-2 font-black text-2xl uppercase leading-tight text-white transition-colors hover:bg-[#c43d22] md:flex-none md:justify-start md:py-1 md:text-3xl"
        >
          <span className="whitespace-pre-line">{"Cómo\ntrabajamos"}</span>
        </a>
        <a
          href="#aplicar"
          className="flex flex-1 items-center justify-center bg-[#5BA7DA] px-4 py-2 font-black text-2xl uppercase leading-tight text-black transition-colors hover:bg-[#4A96C9] md:flex-none md:justify-start md:pr-8 md:pl-4 md:py-1 md:text-3xl"
        >
          <span className="whitespace-pre-line">{"Aplicar\nproyecto"}</span>
        </a>
      </div>

      <p className="whitespace-normal text-left font-gilroy text-sm leading-relaxed font-semibold uppercase tracking-[0.25em] text-white md:whitespace-pre-line md:text-base md:tracking-widest">
        {"El talento\nno se fabrica.\nSe cataliza."}
      </p>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-black px-5 pt-24 pb-10 md:pt-44 md:pb-0 lg:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col justify-center gap-8 md:gap-10">
        <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center md:gap-5">
          <HeroHeadingLeft />

          <div className="relative w-full max-w-[240px] self-center sm:max-w-[280px] md:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
            <div
              className="relative h-[115px] sm:h-[135px] md:h-[140px] lg:h-[160px] xl:h-[190px] 2xl:h-[220px]"
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
      </div>
    </section>
  );
}
