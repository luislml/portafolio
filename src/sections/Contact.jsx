import { useState } from "react";
import { MagicCard } from "../components/magicui/MagicCard";
import WordPullUp from "../components/magicui/WordPullUp";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Instagram, Send, CheckCircle2, MessageCircle } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle, submitting, success, error
  const [copied, setCopied] = useState(false);
  const [errors, setErrors] = useState({});

  const copyToClipboard = () => {
    navigator.clipboard.writeText("s.r.l.a10539595@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const validate = (formData) => {
    const newErrors = {};
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || name.trim() === "") {
      newErrors.name = "El nombre es obligatorio";
    }
    if (!email) {
      newErrors.email = "El email es obligatorio";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Formato de email inválido";
    }
    if (!message || message.trim() === "") {
      newErrors.message = "El mensaje no puede estar vacío";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    const formData = new FormData(e.target);
    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("submitting");
    formData.append("access_key", "abd9d286-3949-4cf5-bfae-b2803ce1179c");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        e.target.reset();
        setTimeout(() => setStatus("idle"), 10000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Error enviando el formulario:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-16 bg-black relative scroll-mt-20">
      {/* Background with premium overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1516339901600-2e1a62dc0c45?q=80&w=2000&auto=format&fit=crop"
          alt="Contact Background"
          className="w-full h-full object-cover opacity-20 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Left Column: Info & Socials */}
          <div className="flex flex-col space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <WordPullUp
                className="text-5xl md:text-6xl font-black text-white mb-4 text-left leading-tight"
                words="¿Tienes un Proyecto en Mente?"
              />
              <p className="text-blue-500 font-black uppercase tracking-[0.4em] text-sm">
                Vamos a Trabajar
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-2">
                <h3 className="text-white font-black uppercase tracking-widest text-2xl">Soto Romano Luis Alfredo</h3>
                <p className="text-gray-500 font-light uppercase tracking-[0.2em] text-xs">Ingeniero de Sistemas</p>
              </div>

              <div className="flex flex-col gap-6">
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-4 text-gray-400 hover:text-blue-400 transition-all group w-fit"
                >
                  <div className="p-2.5 bg-white/5 border border-white/10 rounded-none group-hover:border-blue-500/50 transition-colors">
                    {copied ? <CheckCircle2 className="h-4 w-4 text-green-400" /> : <Mail className="h-4 w-4" />}
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-blue-500">Email</span>
                    <span className="text-xs font-medium">{copied ? "¡Copiado!" : "s.r.l.a10539595@gmail.com"}</span>
                  </div>
                </button>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: "LinkedIn", icon: <Linkedin className="h-4 w-4" />, href: "https://www.linkedin.com/in/luis-alfredo-soto-r-35737722a", color: "hover:text-blue-500" },
                    { name: "GitHub", icon: <Github className="h-4 w-4" />, href: "https://github.com/luislml", color: "hover:text-white" },
                    { name: "WhatsApp", icon: <MessageCircle className="h-4 w-4" />, href: "https://wa.me/59178637495", color: "hover:text-green-500" }
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-3.5 bg-white/5 border border-white/10 hover:bg-white/10 transition-all group ${social.color}`}
                    >
                      {social.icon}
                      <span className="text-[9px] font-black uppercase tracking-[0.25em]">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* <div className="pt-8 border-t border-white/10">
                <p className="text-[10px] uppercase tracking-[0.4em] font-black text-white/20">IDENTIFICADOR DE SEÑAL</p>
                <p className="text-[9px] uppercase tracking-[0.2em] font-light text-gray-600">© 2024 TERMINAL PORTFOLIO V2.0</p>
              </div> */}
            </motion.div>
          </div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <MagicCard className="w-full p-6 md:p-8 bg-zinc-950/60 border-white/5 relative overflow-hidden rounded-none backdrop-blur-xl shadow-2xl glowing-border">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center space-y-6 py-10">
                  <div className="h-24 w-24 rounded-none bg-blue-500/10 flex items-center justify-center border border-blue-500/50 shadow-[0_0_50px_rgba(59,130,246,0.3)]">
                    <Send className="h-10 w-10 text-blue-400" />
                  </div>
                  <div className="text-center space-y-2">
                    <h3 className="text-3xl font-black text-white uppercase tracking-widest">¡Enviado!</h3>
                    <p className="text-gray-400 font-light text-sm max-w-sm">
                      Tu mensaje ha sido enviado con éxito.
                    </p>
                  </div>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-8 px-10 py-3 border border-white/20 hover:border-blue-500 hover:text-blue-400 text-white rounded-none text-[10px] font-black transition-all uppercase tracking-[0.3em] bg-transparent"
                  >
                    NUEVO MENSAJE
                  </button>
                </div>
              ) : status === "error" ? (
                <div className="flex flex-col items-center justify-center space-y-6 py-10">
                  <div className="h-20 w-20 rounded-none bg-red-500/10 flex items-center justify-center border border-red-500/50 shadow-[0_0_30px_rgba(239,68,68,0.2)]">
                    <div className="h-10 w-10 text-red-500 flex items-center justify-center text-4xl font-black">!</div>
                  </div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-widest text-center">FALLA DE SEÑAL</h3>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 px-8 py-2 border border-red-500/50 text-red-400 hover:bg-red-500/10 transition-colors text-[10px] font-black uppercase tracking-[0.2em]"
                  >
                    REINTENTAR
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em] ml-1">Nombre y Apellido</label>
                    <input
                      name="name"
                      type="text"
                      className={`w-full bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-none p-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-blue-500 transition-all text-sm`}
                      placeholder="Nombre completo"
                    />
                    {errors.name && <p className="text-[10px] text-red-500 font-bold uppercase tracking-wider ml-1 mt-1">! {errors.name}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em] ml-1">Email</label>
                    <input
                      name="email"
                      type="email"
                      className={`w-full bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-none p-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-blue-500 transition-all text-sm`}
                      placeholder="Email@gmail.com"
                    />
                    {errors.email && <p className="text-[10px] text-red-500 font-bold uppercase tracking-wider ml-1 mt-1">! {errors.email}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em] ml-1">Tu Mensaje</label>
                    <textarea
                      name="message"
                      className={`w-full bg-white/5 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-none p-4 text-white placeholder:text-gray-700 h-32 focus:outline-none focus:border-blue-500 transition-all resize-none text-sm`}
                      placeholder="Tu mensaje..."
                    ></textarea>
                    {errors.message && <p className="text-[10px] text-red-500 font-bold uppercase tracking-wider ml-1 mt-1">! {errors.message}</p>}
                  </div>

                  <button
                    disabled={status === "submitting"}
                    className="w-full py-3.5 bg-blue-600 border border-blue-500/30 text-white font-black rounded-none transition-all hover:bg-blue-700 disabled:opacity-50 uppercase tracking-[0.4em] text-[10px] shadow-[0_0_20px_rgba(37,99,235,0.2)]"
                  >
                    {status === "submitting" ? "CIFRANDO..." : "ENVIAR MENSAJE"}
                  </button>
                </form>
              )}
            </MagicCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
