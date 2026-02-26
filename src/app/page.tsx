"use client";

import { useEffect, useRef, useState, FC, ReactNode } from "react";
import {
  Github, Phone, Play, Pause, ExternalLink,
  Code2, Laptop, Database, Send, Music, Sparkles, ArrowRight, Globe
} from "lucide-react";

// --- 1. CONFIGURACIÓN DE DATOS ---
const DATA = {
  name: "SI FOREVER",
  year: "2026",
  whatsapp: "573102345742",
  githubLaura: "https://github.com/Lau0823",
  githubManuel: "https://github.com/ManuelDRamos",
  musica: "/audio/The Police - Every Breath You Take (Mike y Once - Stranger Things)  Traducido en Ingles y Español.MP3",
  
  portafolio: [
    { 
      n: "si forever", 
      d: "PRODUCTO DIGITAL.",
      link: "https://si-forever1.vercel.app",
      preview: "/sf.png",
      tags: ["Next.js", "IA", "Tailwind"] 
    },
    { 
      n: "PLATAFORMA DIGITAL", 
      d: "Ecosistema robusto para gestión de datos.",
      link: "https://the-vita.com", 
      preview: "/vita.png",
      tags: ["React", "Tailwind", "Firebase"] 
    },
  ],
  fotosCarrusel: [
    "https://i.pinimg.com/736x/56/f4/1d/56f41dae005de9b6a76dde42a0be3442.jpg",
    "https://i.pinimg.com/736x/36/74/cc/3674cc50ecc539dbae197ccbb51d2434.jpg",
  ],
  equipo: [
    {
      nombre: "Laura Jiménez",
      rol: "Diseñadora UX/UI - FRONTEND",
      desc: "Visionaria de la estética digital. Transforma conceptos complejos en interfaces minimalistas.",
      foto: "/lau.png"
    },
    {
      nombre: "Manuel Ramos",
      rol: "Experto en Backend",
      desc: "Especialista en infraestructuras de alto rendimiento y escalabilidad.",
      foto: "/WhatsApp_Image_2026-02-26_at_4.31.15_PM-removebg-preview.png"
    }
  ],
};

export default function JSForever2026() {
  const [opened, setOpened] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [currentFoto, setCurrentFoto] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!opened) return;
    const interval = setInterval(() => setCurrentFoto(p => (p + 1) % DATA.fotosCarrusel.length), 5000);
    return () => clearInterval(interval);
  }, [opened]);

  const handleOpen = () => {
    setOpened(true);
    setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
        }
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#FBFBFD] text-[#1D1D1F] selection:bg-black selection:text-white font-sans antialiased overflow-x-hidden w-full">
      <audio ref={audioRef} src={DATA.musica} loop />

      {/* --- PANTALLA DE INICIO (SPLASH) --- */}
      {!opened && (
        <div className="fixed inset-0 z-[200] bg-white flex flex-col items-center justify-center p-6 text-center">
          <div className="flex flex-col items-center space-y-8 md:space-y-12 animate-in fade-in zoom-in duration-1000">
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter italic uppercase">SI FOREVER</h1>
            <button onClick={handleOpen} className="bg-black text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-all text-sm md:text-base">
              ENTRAR 2026
            </button>
          </div>
        </div>
      )}

      {/* --- CONTENIDO PRINCIPAL --- */}
      <main className={`transition-all duration-[1500ms] ${opened ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* BARRA DE NAVEGACIÓN RESPONSIVE */}
        <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-5xl">
          <div className="bg-white/70 backdrop-blur-xl border border-white/20 rounded-full px-5 md:px-8 py-3 md:py-4 flex items-center justify-between shadow-lg shadow-black/5">
            <span className="text-sm md:text-lg font-black italic tracking-tighter uppercase">SI FOREVER</span>
            <div className="hidden md:flex gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-neutral-500">
              <a href="#team" className="hover:text-black transition-colors">Equipo</a>
              <a href="#portafolio" className="hover:text-black transition-colors">Portafolio</a>
              <a href="#contacto" className="hover:text-black transition-colors">Contacto</a>
            </div>
            <Sparkles size={18} className="text-neutral-300" />
          </div>
        </nav>

        {/* SECCIÓN HERO ADAPTADA */}
        <section className="relative h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-40">
                {DATA.fotosCarrusel.map((img, i) => (
                    <img key={i} src={img} className={`absolute inset-0 w-full h-full object-cover grayscale transition-opacity duration-[3000ms] ${currentFoto === i ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`} />
                ))}
            </div>
            <div className="relative z-10 text-center space-y-4 md:space-y-6 max-w-full overflow-hidden">
                <h2 className="text-[18vw] md:text-[10rem] font-black leading-[0.85] tracking-tighter italic uppercase break-words">SI FOREVER</h2>
                <p className="text-xl md:text-4xl font-bold tracking-tight text-neutral-800 italic max-w-2xl mx-auto px-4">
                  Hacemos cosas increíbles a nivel digital.
                </p>
            </div>
        </section>

        {/* SECCIÓN PORTAFOLIO */}
        <section id="portafolio" className="py-24 md:py-40 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-6">
                <div>
                    <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-neutral-400 mb-2 md:mb-4 block">Selected Projects</span>
                    <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-none">El Laboratorio</h2>
                </div>
                <p className="text-neutral-500 max-w-xs font-medium text-base md:text-lg italic">Proyectos que desafían los estándares convencionales del frontend y backend.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
              {DATA.portafolio.map((p, i) => (
                <div key={i} className="group relative flex flex-col">
                  <div className="relative aspect-video overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] bg-neutral-100 mb-6 md:mb-8 border border-neutral-100 shadow-sm transition-all duration-700 group-hover:shadow-2xl group-hover:-translate-y-2">
                    <img 
                      src={p.preview} 
                      alt={p.n} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                        <a 
                          href={p.link} 
                          target="_blank" 
                          className="bg-white text-black px-6 md:px-8 py-2 md:py-3 rounded-full font-black uppercase tracking-tighter flex items-center gap-2 scale-90 group-hover:scale-100 transition-transform text-xs md:text-sm"
                        >
                          Visitar Sitio <ExternalLink size={16} />
                        </a>
                    </div>
                  </div>

                  <div className="px-2 md:px-4">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-4 gap-3">
                        <h4 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter leading-none">{p.n}</h4>
                        <div className="flex flex-wrap gap-2">
                            {p.tags.map(t => (
                                <span key={t} className="text-[8px] md:text-[10px] font-black border border-neutral-200 px-3 py-1 rounded-full uppercase text-neutral-400">{t}</span>
                            ))}
                        </div>
                    </div>
                    <p className="text-lg md:text-xl text-neutral-500 font-medium leading-relaxed max-w-md italic mb-6">
                        {p.d}
                    </p>
                    <a href={p.link} target="_blank" className="inline-flex items-center gap-2 text-[10px] md:text-sm font-black uppercase tracking-widest text-black group-hover:gap-4 transition-all">
                        Ver Caso de Estudio <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECCIÓN EQUIPO */}
        <section id="team" className="max-w-7xl mx-auto py-24 md:py-32 px-6 md:px-8">
            <h3 className="text-4xl md:text-5xl font-black italic uppercase mb-12 md:mb-20 tracking-tighter">Nuestro Team</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
                {DATA.equipo.map((member, i) => (
                    <div key={i} className="group">
                        <div className="aspect-[3/4] overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-neutral-100 mb-6 md:mb-10 shadow-xl transition-all duration-700 group-hover:shadow-2xl">
                            <img src={member.foto} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" />
                        </div>
                        <h4 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter leading-none mb-2">{member.nombre}</h4>
                        <p className="text-[10px] md:text-xs font-black text-neutral-400 uppercase tracking-[0.3em] mb-4">{member.rol}</p>
                        <p className="text-lg md:text-xl text-neutral-600 font-medium italic leading-relaxed">{member.desc}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* PIE DE PÁGINA RECORREGIDO CON 2 GITHUBS */}
        <footer id="contacto" className="py-24 md:py-40 px-6 text-center border-t border-neutral-100 bg-white">
            <h2 className="text-5xl md:text-9xl font-black italic tracking-tighter uppercase mb-16 md:mb-24 leading-[0.85]">Construyamos <br/> el futuro</h2>
            
            <div className="flex flex-col items-center gap-6 max-w-md mx-auto">
                {/* Botón Principal WhatsApp */}
                <a href={`https://wa.me/${DATA.whatsapp}`} className="w-full bg-black text-white px-10 py-5 rounded-full font-black uppercase tracking-tighter hover:bg-neutral-800 transition-all text-sm md:text-base flex items-center justify-center gap-3">
                  <Send size={18} /> WhatsApp Contact
                </a>
                
                {/* Contenedor de GitHubs Adaptable */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                  <a href={DATA.githubLaura} target="_blank" className="w-full bg-neutral-100 text-black px-6 py-4 rounded-full font-black uppercase tracking-tighter hover:bg-neutral-200 transition-all text-[11px] md:text-xs flex items-center justify-center gap-2">
                    <Github size={16} /> GitHub Laura
                  </a>
                  <a href={DATA.githubManuel} target="_blank" className="w-full bg-neutral-100 text-black px-6 py-4 rounded-full font-black uppercase tracking-tighter hover:bg-neutral-200 transition-all text-[11px] md:text-xs flex items-center justify-center gap-2">
                    <Github size={16} /> GitHub Manuel
                  </a>
                </div>
            </div>

            <p className="mt-24 md:mt-40 text-[8px] md:text-[10px] font-black uppercase tracking-[0.5em] md:tracking-[1em] text-neutral-300">
              SI FOREVER STUDIO • {DATA.year}
            </p>
        </footer>

        {/* CONTROLES DE MÚSICA ADAPTADOS */}
        <button onClick={() => { 
            audioRef.current?.paused ? (audioRef.current.play(), setPlaying(true)) : (audioRef.current?.pause(), setPlaying(false))
          }} 
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 w-14 h-14 md:w-16 md:h-16 bg-black text-white rounded-full flex items-center justify-center shadow-2xl z-[150] active:scale-90 hover:scale-110 transition-all border border-white/10">
          {playing ? <Pause size={20}/> : <Music size={20}/>}
        </button>
      </main>

      {/* ESTILOS GLOBALES CORREGIDOS */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
        :root { font-family: 'Inter', sans-serif; scroll-behavior: smooth; }
        body { 
          background-color: #FBFBFD; 
          margin: 0; 
          padding: 0; 
          overflow-x: hidden;
          width: 100%;
        }
        h1, h2, h3, h4, h5 { letter-spacing: -0.06em; line-height: 0.9; }
        
        /* Prevenir que el splash screen se mueva */
        .fixed { width: 100%; }
      `}</style>
    </div>
  );
}