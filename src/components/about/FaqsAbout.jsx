import React, { useState } from "react";

const CategoryIcons = {
  "Tecnologías Backend": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-primary h-6 w-6 opacity-70">
      <path d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM20 11H4V19H20V11ZM20 5H4V9H20V5Z" />
    </svg>
  ),

  "Experiencia Profesional": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-primary h-6 w-6 opacity-70">
      <path d="M7 2H17V6H22V22H2V6H7V2ZM9 4V6H15V4H9Z" />
    </svg>
  ),

  "Formación Profesional": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-primary h-6 w-6 opacity-70">
      <path d="M12 2L1 7L12 12L23 7L12 2ZM1 17L12 22L23 17V9L12 14L1 9V17Z" />
    </svg>
  ),

  "Trabajo en Equipo y Comunicación": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-primary h-6 w-6 opacity-70">
      <path d="M16 11C17.6569 11 19 9.65685 19 8C19 6.34315 17.6569 5 16 5C14.3431 5 13 6.34315 13 8C13 9.65685 14.3431 11 16 11ZM8 11C9.65685 11 11 9.65685 11 8C11 6.34315 9.65685 5 8 5C6.34315 5 5 6.34315 5 8C5 9.65685 6.34315 11 8 11ZM8 13C5.79086 13 2 14.7909 2 17V19H14V17C14 14.7909 10.2091 13 8 13ZM16 13C15.724 13 15.438 13.018 15.148 13.05C16.804 14.143 18 15.792 18 17V19H22V17C22 14.7909 18.2091 13 16 13Z" />
    </svg>
  ),

  "Metodologías y Flujo de Trabajo": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-primary h-6 w-6 opacity-70">
      <path d="M3 3H21V7H3V3ZM3 9H21V13H3V9ZM3 15H21V21H3V15Z" />
    </svg>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState(null);

  const skills = {
    "Tecnologías Backend": [
      "Me especializo en desarrollo backend utilizando Laravel (PHP) para la construcción de APIs REST, lógica de negocio y sistemas empresariales en producción. Trabajo con bases de datos relacionales como MySQL y PostgreSQL, manejo autenticación, roles y permisos, procesamiento de archivos Excel/CSV y validación de datos. Administro entornos Linux con Apache y participo en despliegues y mantenimiento de servidores. El frontend lo utilizo como complemento mediante Vue.js, React y Tailwind CSS."
    ],

    "Experiencia Profesional": [
      "Cuento con más de año y medio de experiencia en el sector del desarrollo de software, participando en el desarrollo y mantenimiento de aplicaciones web y móviles en entornos productivos. He trabajado en sistemas de gestión de entregas, inventarios, ventas y trazabilidad, con arquitecturas multiempresa, dashboards administrativos e integraciones mediante APIs REST. Además, tengo experiencia en la optimización y despliegue de aplicaciones móviles para Android y iOS."
    ],


    "Formación Profesional": [
      "Soy Ingeniero Físico, con una sólida formación en matemáticas, análisis de datos, modelado y resolución de problemas complejos. Esta base me permite diseñar soluciones de software estructuradas, eficientes y escalables, abordando los sistemas desde una perspectiva analítica y lógica."
    ],

    "Trabajo en Equipo y Comunicación": [
      "He trabajado en equipos multidisciplinarios junto a desarrolladores frontend, backend, soporte técnico y áreas administrativas. Me caracterizo por una comunicación clara, capacidad de análisis, responsabilidad en entornos productivos y enfoque en soluciones mantenibles, documentadas y alineadas con las necesidades del negocio."
    ],

    "Metodologías y Flujo de Trabajo": [
      "Trabajo bajo metodologías ágiles como Scrum y Kanban, participando en planificación de tareas, gestión de sprints y control de versiones con Git. Tengo experiencia en ambientes de desarrollo, pruebas y producción, priorizando la estabilidad del sistema, la mejora continua y la entrega de soluciones funcionales."
    ],
  };

  const toggleItem = (item) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 text-left flex flex-col items-center">
      <div className="mt-10 w-full">
        <h2 className="text-4xl font-bold flex flex-col items-center gap-6 text-center text-white md:flex-row md:items-center md:text-end">
          <span className="hidden h-1.5 grow rounded-lg bg-[#7836cf] drop-shadow-[2px_2px_0_#0debd8] md:block"></span>
          <span className="drop-shadow-[2px_2px_0_#7836cf]">Más sobre mí</span>
        </h2>

        <ul className="mt-6 space-y-4 text-lg">
          {Object.entries(skills).map(([category]) => (
            <li key={category} className="w-full">
              <div
                onClick={() => toggleItem(category)}
                className="w-full cursor-pointer overflow-hidden rounded-2xl bg-gray-900 transition-all hover:bg-opacity-80 drop-shadow-[2px_2px_0_#7836cf]"
              >
                <div className="flex items-center gap-3 p-4">
                  {CategoryIcons[category]}
                  <div className="flex grow items-center justify-between gap-2">
                    <span className="text-lg font-bold text-white drop-shadow-[1px_1px_0_#7836cf]">
                      {category}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`h-6 w-6 text-[#6a2cbb] transition-transform ${openItem === category ? "rotate-180" : ""
                        }`}
                    >
                      <path d="M12 15.9999L5.636 9.6359L7.05 8.2217L12 13.1714L16.95 8.2217L18.364 9.6359L12 15.9999Z" />
                    </svg>
                  </div>
                </div>

                <div
                  className={`px-4 transition-all duration-300 ${openItem === category
                      ? "max-h-[500px] pb-4 opacity-100"
                      : "max-h-0 opacity-0"
                    }`}
                >
                  <p className="text-sm text-gray-300">{skills[category]}</p>
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
