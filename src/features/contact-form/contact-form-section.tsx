export function ContactFormSection() {
  return (
    <section className="relative overflow-hidden bg-black px-8 pt-32 pb-16 md:px-16 lg:px-24">
      {/* Título gigante de fondo */}
      <h1 className="relative z-0 whitespace-nowrap text-center font-black uppercase leading-[0.95] tracking-tight text-[#E84D2E] text-[14vw]">
        Hablemos de tu proyecto
      </h1>

      {/* Dos columnas */}
      <div className="relative z-10 mx-auto mt-10 grid max-w-6xl grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Columna izquierda: texto */}
        <div className="flex flex-col gap-4 text-white">
          <p className="whitespace-pre-line font-sans text-sm leading-snug md:text-base">
            {"Si tienes una propuesta clara o una inquietud\nespecífica, este es el espacio para iniciar la\nconversación."}
          </p>
          <p className="font-black uppercase leading-tight tracking-tight text-white text-8xl md:text-6xl">
            La claridad es el primer paso.
          </p>
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] md:text-sm">
            Contacto directo y consciente
          </p>
          <p className="whitespace-pre-line font-sans text-sm leading-snug md:text-base">
            {"Ktalisys prioriza conversaciones con intención\ny contexto. Este canal está pensado para\nconsultas claras, colaboraciones estratégicas\no proyectos en etapa de desarrollo."}
          </p>
          <p className="whitespace-pre-line font-sans text-sm leading-snug md:text-base">
            {"Si deseas aplicar formalmente con tu proyecto\nmusical, te recomendamos usar el formulario\nde "}
            <a href="#aplicar" className="underline">Aplicar</a>
            {"."}
          </p>

          <div className="mt-4 flex flex-col gap-1">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-[#E84D2E] md:text-sm">
              Información de contacto
            </p>
            <a href="mailto:contacto@ktalisys.com" className="inline-flex items-center gap-2 font-sans text-sm text-[#E84D2E] md:text-base">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
              contacto@ktalisys.com
            </a>
            <p className="inline-flex items-center gap-2 font-sans text-sm text-[#E84D2E] md:text-base">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s-7-7-7-12a7 7 0 1114 0c0 5-7 12-7 12z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              Medellín, Colombia.
            </p>
          </div>

          {/* Frase blanca en negrita con burst */}
          <p className="mt-6 whitespace-pre-line font-black uppercase leading-tight tracking-tight text-white text-base md:text-6xl">
            {"No todas las conversaciones\nson el inicio de un proyecto.\nPero toda buena conversación\nempieza con claridad."}
            <svg className="inline-block h-5 w-5 align-middle text-[#E84D2E]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0l2.5 7.5L22 5.5l-5 5L24 12l-7.5 2.5L22 18.5l-7.5-2L12 24l-2.5-7.5L2 18.5l5-4L0 12l7.5-2.5L2 5.5l7.5 2L12 0z" />
            </svg>
          </p>

          {/* CTA final */}
          <p className="mt-4 font-sans text-base text-white md:text-lg">
            ¿Tienes un proyecto musical en desarrollo?
          </p>
          <a
            href="#aplicar"
            className="inline-flex w-fit items-center bg-[#5BA4D9] px-6 py-3 font-black uppercase leading-tight text-black transition-colors hover:bg-[#4a93c8] text-base md:text-lg"
          >
            Aplicar proyecto
          </a>
        </div>

        {/* Columna derecha: formulario (sobresale sobre el título) */}
        <div className="flex flex-col gap-5 bg-white p-8 md:p-25 lg:-mt-24 xl:-mt-28">
          <input
            type="text"
            placeholder="Nombre completo"
            className="border-b border-black/20 bg-transparent py-2 font-sans text-xs font-semibold uppercase tracking-[0.25em] text-black outline-none placeholder:text-black focus:border-black md:text-sm"
          />

          <input
            type="email"
            placeholder="Email"
            className="border-b border-black/20 bg-transparent py-2 font-sans text-xs font-semibold uppercase tracking-[0.25em] text-black outline-none placeholder:text-black focus:border-black md:text-sm"
          />

          <select
            defaultValue=""
            className="border-b border-black/20 bg-transparent py-2 font-sans text-xs font-semibold uppercase tracking-[0.25em] text-black outline-none focus:border-black md:text-sm"
          >
            <option value="" disabled>
              Desplegable
            </option>
            <option>Opción 1</option>
            <option>Opción 2</option>
            <option>Opción 3</option>
            <option>Opción 4</option>
          </select>

          <textarea
            rows={3}
            placeholder="Mensaje"
            className="border-b border-black/20 bg-transparent py-2 font-sans text-xs font-semibold uppercase tracking-[0.25em] text-black outline-none placeholder:text-black focus:border-black md:text-sm"
          />

          <div className="flex items-center gap-4">
            <button
              type="submit"
              className="bg-[#5BA4D9] px-8 py-3 font-black uppercase tracking-wider text-black transition-colors hover:bg-[#4a93c8] text-base md:text-lg"
            >
              Enviar
            </button>
          </div>

          <p className="whitespace-pre-line font-sans text-xs leading-snug text-black/70 md:text-sm">
            {"Este formulario no garantiza una respuesta inmediata.\nPriorizamos mensajes con contexto y claridad."}
          </p>
        </div>
      </div>
    </section>
  );
}
