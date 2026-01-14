import bygnet from "../assets/img-projects/bygnet.jpeg";
import delivery from "../assets/img-projects/delivery.png";
import bygtrack from "../assets/img-projects/bygtrack.png";
import quickbite from "../assets/img-projects/quickbite.png";

export const proyectos = [
  {
      titulo: "Bygnet Solutions S.A.S",
      imagen: bygnet.src,
      tecnologias: ["React Native", "Laravel", "PostgreSQL"],
      codigo: "https://github.com/danielblanco0721/bygnet.git",
      categoria: "full-stack",
    },
    {
      titulo: "Delivery",
      imagen: delivery.src,
      tecnologias: ["Vue.js", "Laravel", "PostgreSQL"],
      demo: "https://delivery.housedev.co/login",
      categoria: "fullstack",
    },
    {
      titulo: "Bygtrack",
      imagen: bygtrack.src,
      tecnologias: ["Vue.js", "Laravel", "MySQL"],
      demo: "https://bygtrack.hostingbygnet.com/bygtrack/public/",
      categoria: "backend",
    },
    {
        titulo: "QuickBite",
        imagen: quickbite.src,
        tecnologias: ["Python", "Rasa", "MySQL", "IA"],
        demo: "https://tienda-virtual-ia.onrender.com/",
        codigo: "https://github.com/danielblanco0721/tienda_virtual_con_chatbotIA",
        categoria: "backend",
      },
];
