import React, { useState } from "react";

const CategoryIcons = {
  "Tecnologías Backend": CategoryIcons["Web Development"],
  "Experiencia Profesional": CategoryIcons["Web Development"],
  "Formación Profesional": CategoryIcons["UI/UX Design & Prototyping"],
  "Trabajo en Equipo": CategoryIcons["Web Development"],
  "Metodologías y Flujo de Trabajo": CategoryIcons["Web Development"],
};


const SkillsList = () => {
  const [openItem, setOpenItem] = useState(null);

  const skills = {
    "Tecnologías Backend": [
      "Trabajo principalmente con Laravel (PHP) para el desarrollo de APIs REST, lógica de negocio y sistemas empresariales. Manejo bases de datos relacionales como MySQL y PostgreSQL, así como validación y procesamiento de datos mediante archivos Excel/CSV. Complemento el backend con conocimientos en Linux, Apache y despliegues en entornos de producción."
    ],

    "Experiencia Profesional": [
      "Cuento con experiencia profesional desarrollando y manteniendo aplicaciones web empresariales en producción. He trabajado en sistemas multiempresa, módulos administrativos, gestión de órdenes y tickets, autenticación, roles y permisos, así como en la corrección de incidencias reales en entornos productivos."
    ],

    "Formación Profesional": [
      "Soy Ingeniero Físico de la Universidad Nacional de Colombia. Mi formación me ha brindado una sólida base en análisis matemático, modelado y resolución de problemas complejos, habilidades que aplico directamente al desarrollo de software y al diseño de soluciones backend robustas."
    ],

    "Trabajo en Equipo": [
      "He trabajado en conjunto con equipos frontend y de soporte, participando en la definición de requerimientos técnicos, integración de APIs y resolución de incidencias. Me caracterizo por una comunicación técnica clara, responsabilidad en producción y enfoque en soluciones mantenibles."
    ],

    "Metodologías y Flujo de Trabajo": [
      "He trabajado bajo metodologías ágiles como Scrum y Kanban, participando en sprints, revisión de código y despliegues controlados. Utilizo control de versiones con Git y sigo flujos de trabajo orientados a la estabilidad del sistema y a la entrega incremental de funcionalidades."
    ],
  };


  const toggleItem = (item) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="flex flex-col items-center text-left mx-auto max-w-6xl px-4">
      <div className="site-container mt-10">
        <h2 class="text-4xl font-bold flex flex-col items-center gap-6 text-center whitespace-nowrap text-white md:flex-row md:items-center md:text-end">
          <span class="hidden h-1.5 grow rounded-lg drop-shadow-[2px_2px_0_#0debd8] bg-[#7836cf] md:block"></span>
          <span class="drop-shadow-[2px_2px_0_#7836cf]">Mas Sobre Mi</span>
        </h2>
        <ul className="mt-4 space-y-4 text-lg">
          {Object.entries(skills).map(([category, items]) => (
            <li key={category} className="w-full">
              <div
                onClick={() => toggleItem(category)}
                className="bg-gray-900 hover:bg-opacity-80 w-full cursor-pointer overflow-hidden rounded-2xl text-left transition-all drop-shadow-[2px_2px_0_#7836cf]"
              >
                <div className="flex items-center gap-3 p-4">
                  {CategoryIcons[category]}
                  <div className="flex grow items-center justify-between gap-2">
                    <div className="max-w-[200px] min-w-0 overflow-hidden md:max-w-none">
                      <span className="block truncate text-lg text-white drop-shadow-[1px_1px_0_#7836cf] font-bold">
                        {category}
                      </span>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`h-6 w-6 shrink-0 transform text-[#6a2cbb] transition-transform ${
                        openItem === category ? "rotate-180" : ""
                      }`}
                    >
                      <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                    </svg>
                  </div>
                </div>

                <div
                  className={`px-4 transition-all duration-300 ${
                    openItem === category
                      ? "max-h-[500px] pb-4 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-[0.8em] text-white">{skills[category]}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default SkillsList;
