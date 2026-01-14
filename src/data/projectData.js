import bygnet from "../assets/img-projects/bygnet.jpeg";
import delivery from "../assets/img-projects/delivery.png";
import bygtrack from "../assets/img-projects/bygtrack.png";
import agrifresh from "../assets/img-projects/agrifresh.png";
import astroFit from "../assets/img-projects/Astrofit.jpg";
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
    demo: "hhttps://new.agrifresh.housedev.co/login",
    categoria: "fullstack",
  },
  {
    titulo: "App-clima",
    descripcion:
      "Aplicación hecha con React que utiliza una API para mostrar el clima en tiempo real.",
    imagen:
      "https://i.pinimg.com/736x/10/6e/cd/106ecd1bfe5ed1c3defb83ea0f87a334.jpg",
    tecnologias: ["React", "contextAPI", "tailwind"],
    demo: "https://app-clima-om19.onrender.com/",
    codigo: "https://github.com/Lautaro-R-collins/app-clima",
    categoria: "frontend",
  },
  {
    titulo: "Legal Staff",
    descripcion:
      "Web desarrollada con Astro y Tailwind, embudo de marketing para estudios jurídicos.",
    imagen: bygtrack.src,
    tecnologias: ["Astro", "tailwind", "JavaScript"],
    demo: "https://legal-staff.vercel.app/",
    codigo: "https://github.com/Lautaro-R-collins/legal-staff",
    categoria: "frontend",
  },
  {
    titulo: "Agrifresh",
    descripcion:
      "Web desarrollada con Astro y Tailwind, embudo de marketing para Obras Sociales.",
    imagen: agrifresh.src,
    tecnologias: ["Laravel", "Vue.js", "PostgreSQL"],
    demo: "https://obra-social-landing.vercel.app/",
    codigo: "https://github.com/Lautaro-R-collins/obra-social-landing.git",
    categoria: "frontend",
  },
  {
    titulo: "AstroFit",
    descripcion:
      "Web desarrollada con Astro y Tailwind, embudo de marketing para asesorias fitness.",
    imagen: astroFit.src,
    tecnologias: ["Astro", "tailwind", "JavaScript"],
    demo: "https://gym-page-sandy.vercel.app/",
    codigo: "https://github.com/Lautaro-R-collins/GymPage.git",
    categoria: "frontend",
  },
  {
    titulo: "100 days coding in Js",
    descripcion: "100 proyectos, realizados con HTML, CSS y JavaScript.",
    imagen:
      "https://i.pinimg.com/736x/3b/4f/4e/3b4f4e170fcb1795b88f4941f49df0a2.jpg",
    tecnologias: ["Next.js", "Tailwind", "GraphQL"],
    demo: "https://one00-proyects-web.onrender.com/",
    codigo: "https://github.com/Lautaro-R-collins/100-days-of-coding-in-JS",
    categoria: "frontend",
  },
  {
    titulo: "PlaniFy",
    descripcion:
      "App Web para organizar tus proyectos, hecha con React + Vite, TypeScript y Tailwind para los estilos.",
    imagen:
      "https://i.pinimg.com/736x/8f/f0/bb/8ff0bbd0e5844ed254bede44522c8338.jpg",
    tecnologias: ["React", "Vite", "TypeScript", "Tailwind"],
    demo: "https://planify-1tu6.onrender.com/",
    codigo: "https://github.com/Lautaro-R-collins/PlaniFy-organization-app",
    categoria: "frontend",
  },
  {
    titulo: "Verbenas Paisajes",
    descripcion:
      "Pagina estatica desarrollada con Astro y tailwind como reto para una startup.",
    imagen: Verbenas.src,
    tecnologias: ["Astro", "Tailwind", "JavaScript"],
    demo: "https://challenge-neowyze.onrender.com/",
    codigo: "https://github.com/Lautaro-R-collins/challenge-Neowyze.git",
    categoria: "frontend",
  },
  {
    titulo: "API REST",
    descripcion:
      "API RESTful construida con Express y MongoDB para gestionar tareas con operaciones CRUD, Registro de usuarios y login con JWT.",
    imagen: "https://miro.medium.com/1*47S4iWVwTicFkFL4-Z4uAA.png",
    tecnologias: ["Express", "Node.js", "MongoDB", "Mongoose"],
    demo: "https://back-express-todo.onrender.com",
    codigo: "https://github.com/Lautaro-R-collins/Back-express-todo.git",
    categoria: "backend",
  },
];
