import { motion } from "framer-motion";
import { Github, Linkedin, MessageCircle, Mail } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { name: "GitHub", icon: <Github size={18} />, url: "https://github.com/luisalfredoo" },
        { name: "LinkedIn", icon: <Linkedin size={18} />, url: "https://www.linkedin.com/in/luis-alfredo-soto-r-b1b1b1b1" }, // Asumido o marcador
        { name: "WhatsApp", icon: <MessageCircle size={18} />, url: "https://wa.me/59178637495" },
        { name: "Email", icon: <Mail size={18} />, url: "mailto:luisalfredo@example.com" }
    ];

    return (
        <footer className="bg-black border-t border-white/5 py-12 px-4">
            <div className="container mx-auto flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-center"
                >
                    <p className="text-xs font-black uppercase tracking-[0.4em] text-white mb-2">
                        Luis Alfredo Soto Romano<span className="text-blue-500">.</span>
                    </p>
                    <p className="text-[10px] text-gray-600 uppercase tracking-widest leading-loose">
                        &copy; {currentYear} — Diseñado y Construido con <span className="text-blue-500/80">React & Framer Motion</span>
                        <br />
                        Potosi, Bolivia
                    </p>
                </motion.div>

                <div className="mt-8 flex items-center gap-2">
                    <div className="h-[1px] w-8 bg-white/5" />
                    <div className="h-1 w-1 rounded-full bg-blue-500/50" />
                    <div className="h-[1px] w-8 bg-white/5" />
                </div>
            </div>
        </footer>
    );
}
