function StarShape({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0l2.5 7.5L22 5.5l-5 5L24 12l-7.5 2.5L22 18.5l-7.5-2L12 24l-2.5-7.5L2 18.5l5-4L0 12l7.5-2.5L2 5.5l7.5 2L12 0z" />
    </svg>
  );
}

function ScallopedPill({
  orientation = "horizontal",
  color,
  className,
  style,
}: {
  orientation?: "horizontal" | "vertical";
  color: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const topPath =
    "M0 16 L20 16 A16 16 0 0 1 52 16 A16 16 0 0 1 84 16 A16 16 0 0 1 116 16 A16 16 0 0 1 148 16 A16 16 0 0 1 180 16 L200 16 Z";

  return (
    <div
      className={`relative ${className ?? ""}`}
      style={{
        ...style,
        transform: orientation === "vertical" ? "rotate(90deg)" : undefined,
      }}
    >
      <svg
        className="absolute -top-4 left-0 w-full"
        viewBox="0 0 200 16"
        preserveAspectRatio="none"
        height="16"
      >
        <path d={topPath} fill={color} />
      </svg>
      <div className="h-full w-full" style={{ backgroundColor: color }} />
      <svg
        className="absolute -bottom-4 left-0 w-full rotate-180"
        viewBox="0 0 200 16"
        preserveAspectRatio="none"
        height="16"
      >
        <path d={topPath} fill={color} />
      </svg>
    </div>
  );
}

function Principle({
  title,
  body,
}: {
  title: string;
  body: React.ReactNode;
}) {
  return (
    <div className="text-left">
      <h3 className="font-sans text-sm font-semibold leading-tight text-white md:text-base">
        {title}
      </h3>
      <p className="font-sans text-sm leading-tight text-white md:text-base">
        {body}
      </p>
    </div>
  );
}

export function WorkPrinciplesSection() {
  return (
    <section className="relative overflow-hidden bg-black px-6 pt-10 pb-1 md:px-16 md:pt-24 md:pb-10 lg:px-24">
      <div className="relative mx-auto max-w-7xl">
        {/* Título gigante centrado */}
        <h2 className="relative z-10 text-center font-black uppercase leading-[0.95] tracking-tight text-[#E54529] text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          <span className="relative inline-block">
            Principios que
            {/* Estrella blanca superpuesta entre "Principios" y "que" */}
            <StarShape
              className="absolute z-30 h-8 w-8 text-white md:h-16 md:w-16"
              style={{ left: "78%", top: "15%", transform: "translate(-50%, -50%)" }}
            />
          </span>
          <br />
          <span className="relative inline-block">
            {/* Forma naranja ondulada debajo-izquierda de "Guían" */}
            <ScallopedPill
              color="#E54529"
              className="absolute -bottom-5 -left-2 z-30 h-4 w-14 md:-bottom-10 md:-left-10 md:h-7 md:w-28"
            />
            Guían cada proyecto
            {/* Forma blanca vertical ondulada a la derecha */}
            <ScallopedPill
              orientation="vertical"
              color="#ffffff"
              className="absolute -top-10 z-30 hidden h-6 w-20 md:block md:h-7 md:w-24"
              style={{ left: "calc(100% + 1rem)" }}
            />
          </span>
        </h2>

        {/* ESTRATEGIA — al lado izquierdo de "Principios que" */}
        <div className="absolute top-[3%] right-[65%] z-20 hidden max-w-[200px] md:block">
          <Principle

            title="Estrategia antes que velocidad"
            body={
              <>
                Preferimos avanzar con<br />
                dirección que moverse<br />
                sin rumbo.
              </>
            }
          />
        </div>

        {/* IDENTIDAD — arriba derecha absoluto */}
        <div className="absolute top-[3%] left-[65%] z-20 hidden max-w-[200px] md:block">
          <Principle

            title="Identidad sobre tendencias"
            body={
              <>
                El mercado cambia.<br />
                La identidad bien<br />
                construida permanece.
              </>
            }
          />
        </div>

        {/* Fila debajo de "Guían cada proyecto": DECISIONES y CRECIMIENTO */}
        <div className="-mt-2 hidden grid-cols-2 gap-8 md:grid">
          <div className="max-w-[320px] justify-self-end text-left">
            <Principle
              title="Decisiones basadas en criterio y data"
              body={<>Creatividad con fundamento, no intuición vacía.</>}
            />
          </div>
          <div className="max-w-[320px] justify-self-start text-left">
            <Principle
              title="Crecimiento sostenible"
              body={
                <>
                  No buscamos picos pasajeros, sino proyectos<br />
                  con recorrido.
                </>
              }
            />
          </div>
        </div>

        {/* Versión móvil: grid 2 columnas debajo del título */}
        <div className="mt-8 grid grid-cols-1 gap-5 md:hidden">
          <Principle

            title="Estrategia antes que velocidad"
            body={<>Preferimos avanzar con dirección que moverse sin rumbo.</>}
          />
          <Principle

            title="Identidad sobre tendencias"
            body={<>El mercado cambia. La identidad bien construida permanece.</>}
          />
          <Principle

            title="Decisiones basadas en criterio y data"
            body={<>Creatividad con fundamento, no intuición vacía.</>}
          />
          <Principle

            title="Crecimiento sostenible"
            body={<>No buscamos picos pasajeros, sino proyectos con recorrido.</>}
          />
        </div>
      </div>
    </section>
  );
}
