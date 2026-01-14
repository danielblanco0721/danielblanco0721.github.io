import React, { useState } from "react"; 

const CategoryIcons = {
  "Web Development": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-primary h-6 w-6 opacity-70">
      <path d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM20 11H4V19H20V11ZM20 5H4V9H20V5ZM11 6V8H9V6H11ZM7 6V8H5V6H7Z" />
    </svg>
  ),
  "Mobile Development": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-primary h-6 w-6 opacity-70">
      <path d="M7 4V20H17V4H7ZM6 2H18C18.5523 2 19 2.44772 19 3V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2ZM12 17C12.5523 17 13 17.4477 13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17Z" />
    </svg>
  ),
  "UI/UX Design & Prototyping": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-primary h-6 w-6 opacity-70">
      <path d="M5.7646 7.99998L5.46944 7.26944C5.26255 6.75737 5.50995 6.17454 6.02202 5.96765L15.2939 2.22158C15.8059 2.01469 16.3888 2.26209 16.5956 2.77416L22.2147 16.6819C22.4216 17.194 22.1742 17.7768 21.6622 17.9837L12.3903 21.7298C11.8783 21.9367 11.2954 21.6893 11.0885 21.1772L11.0002 20.9586V21H7.00021C6.44792 21 6.00021 20.5523 6.00021 20V19.7303L2.65056 18.377C2.13849 18.1701 1.89109 17.5873 2.09798 17.0752L5.7646 7.99998Z" />
    </svg>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState(null);

  const skills = {
    "¿Qué tecnologías uso?": [
      "Trabajo principalmente en desarrollo backend y web utilizando PHP y Laravel para la construcción de APIs REST, lógica de negocio y sistemas empresariales. Manejo bases de datos como MySQL y PostgreSQL, y complemento el desarrollo con tecnologías frontend como Vue.js, React, Astro y Tailwind CSS para interfaces modernas y eficientes.",
    ],

    "Mi Experiencia": [
      "Cuento con más de año y medio de experiencia en el sector del desarrollo de software, participando en el desarrollo y mantenimiento de aplicaciones web y móviles en producción. He trabajado en sistemas de gestión de entregas, inventarios, ventas y trazabilidad, integrando frontend y backend mediante APIs REST, con enfoque en estabilidad, rendimiento y mantenibilidad.",
    ],

    "Mi formación": [
      "Soy Ingeniero Físico, con una base sólida en análisis matemático, modelamiento y resolución de problemas complejos. Esta formación me permite abordar el desarrollo de software desde una perspectiva analítica y estructurada, complementada con aprendizaje autodidacta continuo en tecnologías web y arquitectura de sistemas.",
    ],

    "¿Cómo trabajo en equipo?": [
      "Trabajo de forma colaborativa en equipos multidisciplinarios, manteniendo una comunicación clara tanto con perfiles técnicos como no técnicos. Me adapto a distintos flujos de trabajo, priorizando código limpio, documentación clara y soluciones sostenibles a largo plazo.",
    ],

    "Metodologías ágiles": [
      "Tengo experiencia trabajando con metodologías ágiles como Scrum y Kanban, participando en planificación de tareas, sprints y entregas iterativas. Utilizo Git y GitHub para control de versiones y mantengo buenas prácticas en despliegues y mantenimiento de aplicaciones.",
    ],
  };

  const toggleItem = (item) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="flex flex-col items-center px-4 text-left">
      <div className="mx-auto w-full max-w-4xl">
        <h2 className="text-white text-center text-4xl font-bold drop-shadow-[2px_2px_0_#7836cf]">
          Sobre mí y mi trabajo
        </h2>

        <ul className="mt-8 space-y-4 text-lg">
          {Object.entries(skills).map(([category]) => (
            <li key={category} className="w-full">
              <div
                onClick={() => toggleItem(category)}
                className="bg-gray-900 hover:bg-opacity-80 w-full cursor-pointer overflow-hidden rounded-2xl transition-all drop-shadow-[2px_2px_0_#7836cf]"
              >
                <div className="flex items-center gap-3 p-4">
                  {CategoryIcons[category]}
                  <div className="flex grow items-center justify-between">
                    <span className="text-lg font-bold text-white drop-shadow-[1px_1px_0_#7836cf]">
                      {category}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`h-6 w-6 text-[#6a2cbb] transition-transform ${
                        openItem === category ? "rotate-180" : ""
                      }`}
                    >
                      <path d="M12 16L6 10L7.4 8.6L12 13.2L16.6 8.6L18 10Z" />
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
                  <p className="text-sm text-gray-300">
                    {skills[category]}
                  </p>
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
