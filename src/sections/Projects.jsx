import ProjectCard from "../components/ProjectCard.jsx";
import { motion } from "framer-motion";
import imgp1 from "../assets/p1/1.png";
import imgp2 from "../assets/p1/2.png";
import imgp3 from "../assets/p1/3.png";
import imgp4 from "../assets/p2/1.png";
import imgp5 from "../assets/p2/2.png";
import imgp6 from "../assets/p2/3.png";
import imgp7 from "../assets/p3/1.png";
import imgp8 from "../assets/p3/2.png";
import imgp9 from "../assets/p3/3.png";
import WordPullUp from "../components/magicui/WordPullUp";

export default function Projects() {
  const projects = [
    {
      title: "Veterinary Dashboard",
      description: "Sistema administrativo de alto rendimiento diseñado para modernizar clínicas veterinarias.",
      features: [
        {
          label: "Cloud Infrastructure",
          desc: "Despliegue distribuido utilizando Render (API) y Aiven (MySQL). Nota: Debido al uso de instancias gratuitas, el primer acceso puede demorar unos segundos mientras el servidor sale del estado de reposo."
        },
        {
          label: "Business Intelligence",
          desc: "Motor analítico que procesa KPIs financieros y operativos en tiempo real con Laravel y Next.js 15."
        },
        {
          label: "Arquitectura Enterprise",
          desc: "Backend multi-sede con control de acceso granular (RBAC) y más de 100 permisos gestionados con Spatie."
        },
        {
          label: "Gestión de Datos Pro",
          desc: "CRUD avanzado con validación en esquema vía Zod y persistencia de integridad mediante Soft Deletes."
        },
        {
          label: "Seguridad & UX",
          desc: "Autenticación robusta con NextAuth.js v5 y comunicación protegida por Bearer Tokens (Sanctum)."
        }
      ],
      tags: ["Next.js 15", "React 19", "Laravel", "Tailwind CSS", "MUI"],
      images: [imgp1, imgp2, imgp3],
      link: "https://veterinary-dashboard-pi.vercel.app/",
      credentials: {
        email: "veterinary@example.com",
        password: "password123"
      }
    },
    {
      title: "Veridex Expeditions",
      description: "Plataforma inmersiva de turismo conceptual que explora la fusión entre destinos reales y la mitología del horror cósmico.",
      features: [
        {
          label: "Atmósfera Inmersiva",
          desc: "Experiencia visual dinámica con sistemas de partículas, glassmorphism y transiciones cinematográficas mediante Framer Motion."
        },
        {
          label: "Clima Lovecraftiano",
          desc: "Integración en tiempo real con OpenWeather API para transformar condiciones climáticas reales en descripciones narrativas temáticas."
        },
        {
          label: "Arquitectura React Pro",
          desc: "Navegación animada con React Router, optimización de carga vía Lazy Loading y componentes modulares altamente reutilizables."
        },
      ],
      tags: ["React 18", "Framer Motion", "Tailwind CSS", "Vite"],
      images: [imgp4, imgp5, imgp6],
      link: "https://veridex-expeditions.vercel.app/",
    },
    {
      title: "Luxury Suites Experience",
      description: "Landing page de alta gama para bienes raíces comerciales con integración de tours virtuales inmersivos.",
      features: [
        {
          label: "Experiencia Inmersiva 360°",
          desc: "Motor de visualización equirectangular integrado con Pannellum para tours virtuales de locales en tiempo real."
        },
        {
          label: "Diseño de Ultra-Lujo",
          desc: "Interfaz premium con estética 'Dark Mode', tipografía refinada y micro-interacciones fluidas mediante Framer Motion."
        },
        {
          label: "Gestión de Inventario (CMS)",
          desc: "Panel administrativo robusto para el control de disponibilidad, precios y especificaciones técnicas de las unidades."
        },
        {
          label: "Arquitectura Scalable Frontend",
          desc: "Desarrollado con React 18+ y Vite, optimizado para carga progresiva de recursos multimedia y diseño 100% responsivo."
        }
      ],
      tags: ["Vue.js", "Vuetify", "Framer Motion", "Pannellum", "Tailwind CSS"],
      images: [imgp7, imgp8, imgp9],
      link: "https://landing-sucursal.vercel.app/",
      credentials: {
        email: "admin",
        password: "admin"
      }
    }
  ];

  return (
    <section id="projects" className="py-12 bg-black relative overflow-hidden scroll-mt-20">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <WordPullUp
            className="text-3xl md:text-5xl font-bold text-white mb-6 text-center"
            words="Mis Proyectos"
          />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
