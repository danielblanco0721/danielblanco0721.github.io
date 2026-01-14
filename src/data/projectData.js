import bygnet from "../assets/img-projects/bygnet.jpeg";
import delivery from "../assets/img-projects/delivery.png";
import bygtrack from "../assets/img-projects/bygtrack.png";
import agrifresh from "../assets/img-projects/agrifresh.png";
import quickbite from "../assets/img-projects/quickbite.png";
import secret from "../assets/img-projects/secret.png";

export const proyectos = [
  {
    titulo: "Bygnet Solutions S.A.S",
    descripcion:
      "Aplicación móvil para repartidores que gestiona entregas en tiempo real. Permite registrar entregas exitosas o fallidas con evidencias como fotografías y firma del cliente. El estado de las órdenes se actualiza automáticamente, garantizando control y trazabilidad.",
    imagen: bygnet.src,
    tecnologias: ["React Native", "Laravel", "PostgreSQL"],
    codigo: "https://github.com/danielblanco0721/bygnet.git",
    categoria: "full-stack",
  },
  {
    titulo: "Delivery",
    descripcion:
      "Plataforma web para la gestión de inventarios, ventas y entregas con roles diferenciados (administrador, repartidor y bodeguero). Controla entradas, salidas, kardex y ventas de múltiples compañías. Incluye cargues masivos por CSV y dashboards para análisis de datos.",
    imagen: delivery.src,
    tecnologias: ["Vue.js", "Laravel", "PostgreSQL"],
    demo: "https://delivery.housedev.co/login",
    categoria: "fullstack",
  },
  {
    titulo: "Bygtrack",
    descripcion:
      "Plataforma web orientada al seguimiento y control de órdenes de pedido mediante cargues masivos desde diferentes almacenes. Facilita la visualización del estado de los pedidos y la organización de la información operativa.",
    imagen: bygtrack.src,
    tecnologias: ["Vue.js", "Laravel", "MySQL"],
    demo: "https://bygtrack.hostingbygnet.com/bygtrack/public/",
    categoria: "backend",
  },
  {
    titulo: "Agrifresh",
    descripcion:
      "Plataforma web desarrollada para la gestión de productos agrícolas con múltiples roles de usuario. Permite registrar productos por finca, controlar procesos de desinfección y selección, y gestionar su procesamiento y despacho con trazabilidad completa.",
    imagen: agrifresh.src,
    tecnologias: ["Laravel", "Vue.js", "PostgreSQL"],
    demo: "https://new.agrifresh.housedev.co/login",
    categoria: "fullstack",
  },
  {
    titulo: "QuickBite",
    descripcion:
      "E-commerce de comida rápida que integra un chatbot con inteligencia artificial para la atención automática de usuarios. Permite realizar consultas, gestionar pedidos y mejorar la experiencia de compra de forma interactiva.",
    imagen: quickbite.src,
    tecnologias: ["Python", "Rasa", "MySQL", "IA"],
    demo: "https://tienda-virtual-ia.onrender.com/",
    codigo: "https://github.com/danielblanco0721/tienda_virtual_con_chatbotIA",
    categoria: "backend",
  },
  {
    titulo: "Amigo secreto",
    descripcion:
      "Aplicación que permite ingresar una lista de participantes y realizar automáticamente el sorteo del amigo secreto. Proyecto sencillo enfocado en lógica, automatización y experiencia de usuario.",
    imagen: secret.src,
    tecnologias: ["HTML5", "CSS3"],
    codigo: "https://github.com/danielblanco0721/challenge-amigo-secreto_esp-main",
    categoria: "frontend",
  },
];
