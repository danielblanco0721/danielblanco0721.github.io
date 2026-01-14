import bygnet from "../assets/img-projects/bygnet.jpeg";
import delivery from "../assets/img-projects/delivery.png";
import bygtrack from "../assets/img-projects/bygtrack.png";
import agrifresh from "../assets/img-projects/agrifresh.png";
import quickbite from "../assets/img-projects/quickbite.png";
import Verbenas from "../assets/img-projects/challenge-newyze.png";

export const proyectos = [
  {
    titulo: "Bygnet Solutions S.A.S",
    descripcion:
      "Aplicación móvil para repartidores que gestiona entregas pendientes en tiempo real. Permite registrar entregas exitosas o no entregadas, incluyendo evidencias como fotos y firma del cliente. Cada acción actualiza automáticamente el estado de las órdenes, mejorando el control y la trazabilidad del proceso.",
    imagen: bygnet.src,
    tecnologias: ["React Native", "Laravel", "PostgreSQL"],
    codigo: "https://github.com/danielblanco0721/bygnet.git",
    categoria: "full-stack",
  },
  {
    titulo: "Delivery",
    descripcion:
      "Plataforma web diseñada para la gestión integral de inventarios, ventas y entregas, con autenticación y permisos diferenciados por roles (administrador, repartidor y bodeguero). El sistema gestiona la entrada, salida, kardex y entrega de productos de diversas compañías, controlando los valores asociados a cada operación. Además, incorpora cargues masivos desde archivos CSV y dashboards dinámicos que facilitan el monitoreo y análisis de la información.",
    imagen: delivery.src,
    tecnologias: ["Vue.js", "Laravel", "PostgreSQL"],
    demo: "https://delivery.housedev.co/login",
    categoria: "fullstack",
  },
  {
    titulo: "Bygtrack",
    descripcion:
      "Plataforma Web diseñada para el control y seguimineto de ordenes de pedido desde archivos masivos provenientes de diferentes almacenes .",
    imagen:bygtrack.src,
    tecnologias: ["Vue.js", "Laravel", "MySQL"],
    demo: "https://bygtrack.hostingbygnet.com/bygtrack/public/",
    categoria: "backend",
  },
  {
    titulo: "Agrifresh",
    descripcion:
      "Plataforma web desarrollada con Laravel y Vue.js para la gestión de productos agrícolas con múltiples roles de usuario. Permite registrar productos de diferentes fincas, controlar procesos de desinfección y selección, y gestionar su procesamiento y despacho. La plataforma asegura trazabilidad y control en toda la cadena productiva hasta su comercialización.",
    imagen: agrifresh.src,
    tecnologias: ["Laravel", "Vue.js", "PostgreSQL"],
    demo: "https://new.agrifresh.housedev.co/login",
    categoria: "fullstack",
  },
  {
    titulo: "QuickBite",
    descripcion:
      "E-coomerce de comida rapida que integra un chatbot con IA ",
    imagen: quickbite.src,
    tecnologias: ["Python", "Rasa", "MySQL", "IA"],
    demo: "https://tienda-virtual-ia.onrender.com/",
    codigo: "https://github.com/danielblanco0721/tienda_virtual_con_chatbotIA",
    categoria: "backend",
  },
  
];
