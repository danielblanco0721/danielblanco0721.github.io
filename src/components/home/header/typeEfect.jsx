import React from "react";
import Typewriter from "typewriter-effect";

const TypewriterComponent = () => {
  return (
    <div className="notranslate mt-5 text-3xl font-bold">
      <Typewriter
        options={{
          strings: [
            "Desarrollo de Software",
            "Backend Engineering",
            "APIs y Lógica de Negocio",
            "Arquitectura Web Escalable",
            "Soluciones Full-Stack"
          ],
          autoStart: true,
          loop: true,
        }}
      />

    </div>
  );
};

export default TypewriterComponent;
