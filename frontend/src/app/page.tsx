'use client';

import Image from 'next/image';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import { motion } from 'framer-motion';
import TypingText from '@/components/TypingText';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section
        id="inicio"
        className="min-h-screen flex flex-col items-center justify-center text-white px-6 text-center bg-[#1a0e2a]"
      >
        <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-purple-400 drop-shadow-[0_0_15px_rgba(192,132,252,0.8)]">
          Daniel Romero Ávila
        </h1>

        <TypingText
          texts={[
            "Desarrollador Full-Stack · Java · Spring Boot · Next.js",
            "Estudiando ciberseguridad y pentesting",
            "Apasionado por el hardware y los componentes",
            "Buscando oportunidades para crecer profesionalmente",
          ]}
          speed={30}
          pause={3000}
          className="text-xl sm:text-2xl text-purple-100"
        />

        <div className="mt-8 flex gap-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            className="hover:scale-110 transition"
          >
            <img src="/icons/icons8-linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/TU_USUARIO"
            target="_blank"
            className="hover:scale-110 transition"
          >
            <img src="/icons/github-mark-white.svg" alt="GitHub" className="w-6 h-6" />
          </a>
        </div>

        <div className="mt-6 flex gap-4 flex-wrap justify-center">
          <a
            href="#sobremi"
            className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-md shadow hover:opacity-90 transition"
          >
            Get In Touch
          </a>
          <a
            href="/cv.pdf"
            download
            className="px-6 py-2 border border-white text-white rounded-md hover:bg-white hover:text-black transition"
          >
            Download CV ⬇
          </a>
        </div>

        <a href="#sobremi" className="absolute bottom-10 animate-bounce text-white text-2xl">
          <span className="transform rotate-90 inline-block">{'>'}</span>
        </a>
      </section>

      {/* SOBRE MÍ */}
      <section id="sobremi" className="bg-[#2e1b47] py-20 px-6 text-white">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Tarjeta de foto */}
          <div className="relative w-72 h-[400px] rounded-xl overflow-hidden shadow-lg border-2 border-purple-500">
            <Image
              src="/daniel2.png"
              alt="Daniel Romero"
              fill
              className="object-cover object-top"
            />
          </div>

          {/* Texto */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">Sobre mí</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              👋 Soy un desarrollador full-stack con enfoque backend, apasionado por crear soluciones limpias y funcionales.<br /><br />
              💻 Me especializo en Java y Spring Boot, pero también disfruto construir interfaces modernas con Next.js y TypeScript.<br /><br />
              🛠️ He desarrollado herramientas como <strong>TankNet</strong>, una app de auditoría de red multiplataforma, además de trabajar con automatizaciones y APIs REST.<br /><br />
              🚀 Busco oportunidades donde crecer profesionalmente, rodeado de personas que compartan la ambición de hacer las cosas bien.
            </p>
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section
        id="proyectos"
        className="bg-[#1a0e2a] py-20 px-6 text-white scroll-mt-20"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center text-purple-300">
            Proyectos Destacados
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>

        </div>
      </section>

      {/* SKILLS E INTERESES */}
      <section id="skills" className="py-20 px-6 bg-[#2e1b47] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Habilidades y Conocimientos
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="grid gap-10 md:grid-cols-3"
          >
            {/* Lenguajes */}
            <div className="bg-[#1a0e2a] p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-purple-300 text-center mb-4">Lenguajes</h3>
              <ul className="space-y-3">
                {["Java", "Python (Básico)", "C (Básico)", "C++ (Básico)"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-purple-400 rounded-full"></span>
                    <div className="bg-[#2e1b47] py-2 px-4 rounded-md w-full text-center">
                      {item}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tecnologías Web */}
            <div className="bg-[#1a0e2a] p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-purple-300 text-center mb-4">Tecnologías Web</h3>
              <ul className="space-y-3">
                {["HTML", "CSS (Tailwind)", "Next.js", "React"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-purple-400 rounded-full"></span>
                    <div className="bg-[#2e1b47] py-2 px-4 rounded-md w-full text-center">
                      {item}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Intereses */}
            <div className="bg-[#1a0e2a] p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-purple-300 text-center mb-4">Intereses</h3>
              <ul className="space-y-3">
                {["Pentesting", "Ciberseguridad", "Automatización", "Inteligencia Artificial"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-purple-400 rounded-full"></span>
                    <div className="bg-[#2e1b47] py-2 px-4 rounded-md w-full text-center">
                      {item}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

          </motion.div>
        </div>
      </section>
    </>
  );
}
