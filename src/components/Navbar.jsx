import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Inicio", id: "hero" },
    { name: "Sobre mí", id: "about" },
    { name: "Proyectos", id: "projects" },
  ];

  const handleScroll = (e, id) => {
    e.preventDefault();
    setIsOpen(false);

    // Pequena demora para permitir que el menu se cierre antes de desplazar
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[1000] w-full border-b border-white/5 bg-black/60 backdrop-blur-lg">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-black text-white tracking-tightest cursor-default group"
        >
          LS<motion.span
            animate={{
              opacity: [1, 0.4, 1],
              textShadow: ["0 0 0px #3b82f6", "0 0 10px #3b82f6", "0 0 0px #3b82f6"]
            }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-blue-500"
          >
            .
          </motion.span>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.id}`}
              onClick={(e) => handleScroll(e, link.id)}
              className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-all hover:scale-105"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "contact")}
            className="px-6 py-2.5 rounded-none border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all"
          >
            Contacto
          </a>
        </div>

        <button
          className="md:hidden relative z-[110] text-white p-2 hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Alternar menú"
        >
          {isOpen ? (
            <X size={24} className="pointer-events-none" />
          ) : (
            <Menu size={24} className="pointer-events-none" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-nav-container"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-full left-0 right-0 border-t border-white/5 bg-black/95 backdrop-blur-2xl overflow-hidden z-[100] shadow-2xl"
          >
            <div className="flex flex-col gap-6 p-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => handleScroll(e, link.id)}
                  className="text-xl font-black text-gray-400 hover:text-white uppercase tracking-widest transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-white/10" />
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, "contact")}
                className="w-full py-4 border border-white/20 text-white text-center text-xs font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all"
              >
                Contacto
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
