import { MagicCard } from "./magicui/MagicCard";
import { motion } from "framer-motion";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

export default function ProjectCard({ title, description, features, tags, credentials, images = [], link, index }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Tomamos las primeras 3 imágenes para el diseño Bento
  const bentoImages = images.slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true, margin: "-100px" }}
      className="h-full"
    >
      <MagicCard
        className="group relative flex flex-col h-full overflow-hidden border border-white/5 bg-zinc-950/50 hover:bg-zinc-900/40 transition-all duration-500 rounded-none glowing-border"
        gradientColor="#1a1a1a"
      >
        <div className="flex flex-col h-full relative z-10">
          {/* Diseño Bento de Imágenes */}
          <div className="relative h-64 p-3 grid grid-cols-3 grid-rows-2 gap-3 overflow-hidden">
            <div className="col-span-2 row-span-2 overflow-hidden rounded-none border border-white/10 shadow-2xl relative">
              <img
                src={bentoImages[0]}
                alt={`${title} main`}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="col-span-1 row-span-1 overflow-hidden rounded-none border border-white/10 shadow-lg relative">
              <img
                src={bentoImages[1]}
                alt={`${title} 2`}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125"
              />
            </div>
            <div className="col-span-1 row-span-1 overflow-hidden rounded-none border border-white/10 shadow-lg relative">
              <img
                src={bentoImages[2]}
                alt={`${title} 3`}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125"
              />
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center z-30 rounded-none m-4"
            >
              <span className="px-6 py-2 bg-white text-black font-extrabold rounded-full text-[10px] uppercase tracking-[0.2em] transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.4)]">
                EXPLORAR TRABAJO
              </span>
            </button>
          </div>

          <div className="p-6 pt-2 flex flex-col flex-grow">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-2 w-2 rounded-full bg-blue-500 transition-all duration-500 group-hover:scale-[1.8] group-hover:shadow-[0_0_12px_rgba(59,130,246,1)] shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
              <h3 className="text-xl font-black text-white group-hover:text-blue-400 transition-colors duration-500 tracking-tightest">
                {title}
              </h3>
            </div>

            <p className="text-gray-400 text-xs leading-relaxed mb-4 font-light line-clamp-3 group-hover:text-gray-200 transition-colors duration-500">
              {description}
            </p>
          </div>
        </div>
      </MagicCard>
      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={{ title, description, features, tags, credentials, images, link }}
      />
    </motion.div>
  );
}
