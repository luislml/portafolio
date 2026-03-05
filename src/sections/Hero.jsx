import { motion } from "framer-motion";
import RetroGrid from "../components/magicui/RetroGrid";
import WordPullUp from "../components/magicui/WordPullUp";
import Marquee from "../components/magicui/Marquee";
import TypingAnimation from "../components/magicui/TypingAnimation";

const technologies = [
  "Laravel", "React", "Vue.js", "Tailwind CSS", "Vuetify", "MUI", "MySQL", "Git", "Docker"
];

export default function Hero() {
  return (
    <section id="hero" className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black md:shadow-xl scroll-mt-20">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 animate-slow-zoom"
        style={{ backgroundImage: 'url("/uno.jpg")' }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-transparent to-black" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col items-center z-10"
      >
        <WordPullUp
          className="text-white text-4xl sm:text-6xl md:text-8xl mb-4 tracking-tighter"
          words="Luis Alfredo Soto R."
        />
        <div className="flex flex-col sm:flex-row items-center gap-2 text-base sm:text-lg md:text-2xl text-gray-400 mb-10 px-4 font-light min-h-[3rem]">
          <span>Ingeniero de Sistemas |</span>
          <TypingAnimation
            className="text-white font-semibold"
            texts={["Frontend Developer", "Backend Developer"]}
          />
        </div>
        <a href="#projects" aria-label="Ver mis proyectos" className="hero-button mb-16 group">
          <span className="flex items-center gap-2">
            Ver mis proyectos
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </span>
        </a>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-32 md:bottom-24 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-blue-500/50 to-transparent" />
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-5 h-8 border border-white/20 rounded-full flex justify-center p-1"
        >
          <div className="w-1 h-2 bg-blue-500 rounded-full" />
        </motion.div>
      </motion.div>

      <div className="absolute bottom-12 w-full z-10">
        <Marquee className="[--duration:20s]" pauseOnHover>
          {technologies.map((tech) => (
            <span key={tech} className="text-2xl md:text-3xl font-bold text-white/20 hover:text-white/50 transition-colors mx-8">
              {tech}
            </span>
          ))}
        </Marquee>
      </div>

      <RetroGrid />
    </section>
  );
}
