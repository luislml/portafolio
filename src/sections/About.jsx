import { MagicCard } from "../components/magicui/MagicCard";
import WordPullUp from "../components/magicui/WordPullUp";
import { motion } from "framer-motion";
import { Monitor, Database, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative w-full min-h-screen flex items-center justify-center py-12 bg-black overflow-hidden scroll-mt-20">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30 animate-slow-zoom"
        style={{ backgroundImage: 'url("/dos.jpg")' }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-transparent to-black" />

      <div className="container px-4 z-10">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <WordPullUp
              className="text-3xl md:text-5xl font-bold text-white mb-6 text-center"
              words="Sobre mí"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col items-center w-full"
          >
            <MagicCard className="relative flex flex-col items-center justify-center p-5 md:p-10 max-w-5xl border-white/5 bg-zinc-900/40 border-l-2 border-l-blue-500/30 rounded-none backdrop-blur-xl shadow-2xl w-full">
              <div className="space-y-4 text-center mb-8 max-w-4xl">
                <p className="text-base md:text-lg text-gray-200 leading-relaxed font-medium">
                  Ingeniero de Sistemas en formación constante, enfocado en el desarrollo de aplicaciones web <span className="text-blue-400">funcionalidades y modernas</span>.
                  Mi base principal es el <span className="text-white font-bold underline decoration-blue-500/50">ecosistema PHP con Laravel</span>,
                  el cual utilizo para construir la lógica y las bases de datos de mis proyectos.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <p className="text-xs md:text-sm text-gray-400 leading-relaxed border-l-2 border-blue-500/10 pl-4 py-1">
                    Me apasiona el frontend y tengo la capacidad de adaptarme a diferentes flujos de trabajo, dominando interfaces personalizadas tanto en <span className="text-white">React </span>como en <span className="text-white">Vue.js</span>
                  </p>
                  <p className="text-xs md:text-sm text-gray-400 leading-relaxed border-l-2 border-blue-500/10 pl-4 py-1">
                    Recientemente completé mi primer gran proyecto: una <span className="text-white font-semibold">API para la gestión de veterinarias</span> con su respectivo frontend en React, lo que me permitió gestionar el ciclo de vida completo del desarrollo de una aplicación, desde la base de datos hasta la experiencia del usuario.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 w-full">
                {[
                  { title: "Backend", desc: "PHP & Laravel. APIs RESTful, rutas, controladores y migraciones.", icon: <Database className="h-5 w-5 text-blue-500" /> },
                  { title: "Frontend React", desc: "Interfaces dinámicas con Tailwind CSS y componentes de MUI.", icon: <Monitor className="h-5 w-5 text-blue-500" /> },
                  { title: "Frontend Vue.js", desc: "Aplicaciones modulares con Vuetify bajo Material Design.", icon: <Monitor className="h-5 w-5 text-blue-500" /> },
                  { title: "Herramientas", desc: "Docker (contenedores), Git (versiones) y entorno Linux.", icon: <ShieldCheck className="h-5 w-5 text-blue-500" /> }
                ].map((item, i) => (
                  <div key={i} className="p-4 relative bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all group overflow-hidden">
                    <div className="absolute top-0 right-0 p-1.5 text-[7px] font-mono text-gray-700 opacity-40 uppercase tracking-tighter">TECH_{i + 1}</div>
                    <div className="mb-3 flex text-blue-500 group-hover:scale-110 transition-transform">{item.icon}</div>
                    <h4 className="text-white font-black text-[10px] mb-1.5 uppercase tracking-widest">{item.title}</h4>
                    <p className="text-gray-500 text-[9px] leading-snug font-medium uppercase tracking-wider">{item.desc}</p>
                  </div>
                ))}
              </div>
            </MagicCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
