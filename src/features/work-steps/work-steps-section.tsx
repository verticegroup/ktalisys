import Image from "next/image";

const STEPS = [
  {
    number: "01",
    title: "Diagnóstico",
    description: (
      <>
        Analizamos el proyecto<br />
        desde todos los ángulos:<br />
        talento, propuesta artística,<br />
        narrativa, público, contexto<br />
        y momento.
        <br />
        <br />
        Aquí definimos si el proyecto<br />
        está listo y cómo debe<br />
        avanzar.
      </>
    ),
  },
  {
    number: "02",
    title: "Dirección estratégica",
    description: (
      <>
        Construimos una hoja de<br />
        ruta clara: posicionamiento,<br />
        objetivos, enfoque creativo<br />
        y prioridades.
        <br />
        <br />
        Nada se ejecuta sin un<br />
        porqué.
      </>
    ),
  },
  {
    number: "03",
    title: "Desarrollo y ejecución",
    description: (
      <>
        Alineamos producción<br />
        musical, contenido y<br />
        narrativa con la estrategia<br />
        definida. Todo responde a<br />
        una visión común.
      </>
    ),
  },
  {
    number: "04",
    title: "Salida al mercado",
    description: (
      <>
        Llevamos el proyecto al<br />
        público correcto, medimos<br />
        respuesta y ajustamos el<br />
        camino para generar<br />
        oportunidades reales.
      </>
    ),
  },
] as const;

export function WorkStepsSection() {
  return (
    <section className="bg-black py-10 md:py-16">
      <div className="grid grid-cols-1 gap-0 lg:grid-cols-2">
        {/* Columna izquierda: cuadro naranja que llega al borde izquierdo */}
        <div className="relative overflow-hidden bg-[#E54529] min-h-[300px] md:min-h-[500px]">
          <Image
            src="/jessi uribe.png"
            alt="Jessi Uribe"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-end justify-center p-0  md:p-0">
            <h2 className="whitespace-pre-line text-left font-black uppercase leading-[0.95] tracking-tight text-white text-4xl md:text-5xl lg:text-6xl">
              {"Así\ncatalizamos\nel talento"}
            </h2>
          </div>
        </div>

        {/* Columna derecha: PASOS fuera + tabla 2x2 */}
        <div className="flex flex-col gap-4 px-6 pb-12 pt-6 md:px-0 md:pt-0">
          {/* Título "PASOS" fuera de la tabla */}
          <h3 className="text-center font-sans text-xs uppercase tracking-[0.3em] text-white">
            Pasos
          </h3>

          {/* Tabla 2x2 — líneas internas continuas */}
          <div className="grid grid-cols-1 divide-y divide-white/20 border border-white/20 sm:grid-cols-2 sm:divide-x sm:divide-y-0 md:border-y md:border-l md:border-r-0">
            {STEPS.map((step, index) => {
              const isTopRow = index < 2;
              return (
                <div
                  key={step.number}
                  className={`flex flex-col gap-2 p-4 md:gap-3 md:p-8 ${isTopRow ? "sm:border-b sm:border-white/20" : ""}`}
                >
                  <h4 className="font-sans text-xs font-semibold uppercase leading-tight tracking-[0.2em] text-white">
                    {step.number} —
                    <br />
                    {step.title}
                  </h4>
                  <p className="font-sans text-xs leading-snug text-white md:text-sm">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
