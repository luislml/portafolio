import { motion, AnimatePresence } from "framer-motion";
import {
    X, ChevronLeft, ChevronRight, Boxes, ExternalLink, Lock,
    BarChart3, Building2, Database, ShieldCheck,
    Cloud, Sparkles, Zap, Atom, Compass, Gem, Layers, Layout
} from "lucide-react";
import { useState, useEffect } from "react";

export default function ProjectModal({ isOpen, onClose, project }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Prevenir scroll en el body cuando el modal está abierto
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    if (!project) return null;

    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[1100] flex items-center justify-center p-4 md:p-8">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/90 backdrop-blur-md"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-6xl max-h-[95vh] bg-zinc-950 border border-white/10 rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            aria-label="Cerrar modal"
                            className="absolute top-4 right-4 z-[1110] p-2 bg-black/50 hover:bg-white/10 rounded-full text-white transition-colors"
                        >
                            <X size={24} />
                        </button>

                        {/* Image Section */}
                        <div className="relative w-full md:w-[55%] bg-zinc-900/50 flex flex-col items-center justify-center group h-[45vh] md:h-auto border-b md:border-b-0 md:border-r border-white/10 overflow-hidden">
                            <div className="w-full h-full overflow-y-auto overflow-x-hidden flex items-start justify-center p-6 scrollbar-hide">
                                <motion.img
                                    key={currentImageIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    src={project.images[currentImageIndex]}
                                    alt={`${project.title} view ${currentImageIndex + 1}`}
                                    className="w-full h-auto object-contain shadow-2xl transition-all duration-500"
                                />
                            </div>

                            {/* Navigation Controls */}
                            {project.images.length > 1 && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        aria-label="Imagen anterior"
                                        className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-black/60 hover:bg-white text-black rounded-full transition-all opacity-0 group-hover:opacity-100 shadow-xl z-20 active:scale-90"
                                    >
                                        <ChevronLeft size={24} />
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        aria-label="Imagen siguiente"
                                        className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-black/60 hover:bg-white text-black rounded-full transition-all opacity-0 group-hover:opacity-100 shadow-xl z-20 active:scale-90"
                                    >
                                        <ChevronRight size={24} />
                                    </button>

                                    {/* Indicators */}
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                        {project.images.map((_, i) => (
                                            <div
                                                key={i}
                                                className={`h-1.5 transition-all rounded-full ${i === currentImageIndex ? "w-8 bg-blue-500" : "w-2 bg-white/30"
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Info Section */}
                        <div className="w-full md:w-[45%] p-8 md:p-10 pt-20 md:pt-12 overflow-y-auto flex flex-col">
                            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tightest leading-none">
                                {project.title}
                            </h2>
                            <div className="h-1 w-12 bg-blue-500 mb-6" />

                            {project.link && project.link !== "#" && (
                                <div className="mb-8">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-bold text-sm transition-colors mb-4 group/link"
                                    >
                                        <span>Ver proyecto</span>
                                        <ExternalLink size={16} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                                    </a>

                                    {project.credentials && (
                                        <div className="p-4 bg-zinc-900/80 border border-white/5 rounded-xl space-y-2">
                                            <div className="flex items-center gap-2 text-[10px] text-gray-500 uppercase tracking-widest mb-1">
                                                <Lock size={12} />
                                                <span>Credenciales de acceso</span>
                                            </div>
                                            <div className="flex justify-between items-center text-xs">
                                                <span className="text-gray-400">Email:</span>
                                                <span className="text-white font-mono selection:bg-blue-500/30">{project.credentials.email}</span>
                                            </div>
                                            <div className="flex justify-between items-center text-xs">
                                                <span className="text-gray-400">Password:</span>
                                                <span className="text-white font-mono selection:bg-blue-500/30">{project.credentials.password}</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}

                            <p className="text-gray-400 text-base leading-relaxed mb-10 font-light">
                                {project.description}
                            </p>

                            {/* Features List */}
                            {project.features && (
                                <div className="space-y-8 mb-12">
                                    {project.features.map((feature, i) => {
                                        const Icon = {
                                            "Cloud Infrastructure": Cloud,
                                            "Business Intelligence": BarChart3,
                                            "Arquitectura Enterprise": Building2,
                                            "Gestión de Datos Pro": Database,
                                            "Seguridad & UX": ShieldCheck,
                                            "Atmósfera Inmersiva": Sparkles,
                                            "Clima Lovecraftiano": Zap,
                                            "Arquitectura React Pro": Atom,
                                            "Experiencia Inmersiva 360°": Compass,
                                            "Diseño de Ultra-Lujo": Gem,
                                            "Gestión de Inventario (CMS)": Layers,
                                            "Arquitectura Scalable Frontend": Layout
                                        }[feature.label] || Boxes;


                                        return (
                                            <div key={i} className="flex gap-5 group/item">
                                                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-blue-500/5 border border-white/5 flex items-center justify-center text-blue-400 group-hover/item:bg-blue-500 group-hover/item:text-white transition-all duration-300">
                                                    <Icon size={24} />
                                                </div>
                                                <div>
                                                    <h4 className="text-white font-bold text-base mb-1 uppercase tracking-wider">{feature.label}</h4>
                                                    <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}

                            {/* Tech Stack */}
                            {project.tags && (
                                <div className="mb-10">
                                    <h4 className="text-gray-500 font-bold text-[10px] uppercase tracking-[0.2em] mb-4">Tech Stack</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="px-3 py-1 bg-zinc-900 border border-white/5 text-[10px] font-medium text-gray-400 rounded-full hover:border-blue-500/50 hover:text-white transition-colors">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Removed Visitar Proyecto button */}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
