'use client';

import Image from 'next/image';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import { motion } from 'framer-motion';
import TypingText from '@/components/TypingText';
import Navbar from '@/components/Navbar';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

import { useState, useEffect } from 'react';
import { FaBriefcase, FaGraduationCap, FaLaptopCode } from 'react-icons/fa';

export default function Home() {
  const [showTyping, setShowTyping] = useState(false);

  useEffect(() => {
    setShowTyping(true);
  }, []);

  return (
    <>
      <Navbar />
      <Analytics />
      <SpeedInsights />

      {/* HERO */}
      <section
        id="inicio"
        className="relative min-h-screen flex flex-col items-center justify-center text-white px-6 text-center overflow-hidden bg-[#1a0e2a]"
      >
        {/* Fondo animado de texto con fade-in */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 3, delay: 1 }}
          className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
        >
          <div className="w-full h-full fade-mask">
            <div className="animate-marquee-loop flex flex-col gap-2 opacity-5">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="text-[48px] text-purple-300 font-bold uppercase leading-none whitespace-nowrap"
                >
                  {"dhanny ".repeat(50)}
                </div>
              ))}
              {[...Array(20)].map((_, i) => (
                <div
                  key={`repeat-${i}`}
                  className="text-[48px] text-purple-300 font-bold uppercase leading-none whitespace-nowrap"
                >
                  {"dhanny ".repeat(50)}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contenido principal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative z-10"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-6xl sm:text-7xl font-bold mb-4 text-purple-400 drop-shadow-[0_0_15px_rgba(192,132,252,0.8)]"
          >
            Daniel Romero Ávila
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {showTyping && (
              <TypingText
                texts={[
                  "Desarrollador Full-Stack · Java · Angular · Next.js",
                  "Estudiando ciberseguridad y pentesting...",
                  "Apasionado por el hardware y los componentes.",
                  "Buscando oportunidades para crecer profesionalmente.",
                ]}
                speed={30}
                pause={3000}
                delayStart={650}
                className="text-xl sm:text-2xl text-purple-100"
              />
            )}
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-8 flex gap-4 justify-center"
          >
            <a
              href="https://www.linkedin.com/in/daniel-romero-%C3%A1vila-972a872a4/"
              target="_blank"
              className="hover:scale-110 transition duration-300 hover:drop-shadow-[0_0_10px_rgba(192,132,252,0.8)]"
            >
              <img src="/icons/icons8-linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/daniromavi"
              target="_blank"
              className="hover:scale-110 transition duration-300 hover:drop-shadow-[0_0_10px_rgba(192,132,252,0.8)]"
            >
              <img src="/icons/github-mark-white.svg" alt="GitHub" className="w-6 h-6" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-6 flex gap-4 flex-wrap justify-center"
          >
            <a
              href="#contacto"
              className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-md shadow transition duration-300 transform hover:scale-110 hover:shadow-[0_0_20px_rgba(236,72,255,0.6)] hover:drop-shadow-[0_0_10px_rgba(236,72,255,0.6)]"
            >
              Contactame
            </a>

            <a
              href="/cv-daniel-romero-avila.pdf"
              download
              className="px-6 py-2 border border-white text-white rounded-md transition duration-300 transform hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
            >
              Descargar CV ⬇
            </a>
          </motion.div>
        </motion.div>


        <a
          href="#sobremi"
          className="absolute bottom-20 animate-bounce text-white text-2xl"
        >
          <span className="transform rotate-90 inline-block">{'>'}</span>
        </a>
      </section>



      {/* SOBRE MÍ */}
      <section id="sobremi" className="bg-[#2e1b47] py-24 px-6 text-white">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">

          {/* Imagen con animación */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
            className="relative w-[400px] h-[500px] rounded-xl overflow-hidden shadow-lg border-2 border-purple-500"
          >
            <Image
              src="/DhannyPortfolio.png"
              alt="Daniel Romero"
              fill
              className="object-cover object-top"
            />
          </motion.div>

          {/* Texto con animación */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1 text-center md:text-left max-w-2xl"
          >
            <h2 className="text-3xl font-bold mb-5 text-purple-300">Sobre mí</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              👋 Soy un desarrollador full-stack con enfoque backend, apasionado por crear soluciones limpias y funcionales.<br /><br />
              💻 Me especializo en Java, Angular y Desarrollo Android, pero también disfruto construir interfaces modernas con Next.js y TypeScript.<br /><br />
              🤖 Integro herramientas de inteligencia artificial en mi flujo de trabajo diario para optimizar procesos, generar ideas y mejorar la productividad.<br /><br />
              🛠️ He desarrollado herramientas como <strong>TankNet</strong>, una app de auditoría de red multiplataforma, además de trabajar con automatizaciones y APIs REST.<br /><br />
              🚀 Busco oportunidades donde crecer profesionalmente, rodeado de personas que compartan la ambición de hacer las cosas bien.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section
        id="proyectos"
        className="bg-[#1a0e2a] py-20 px-6 text-white scroll-mt-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-10 text-center text-purple-300">
            Proyectos Destacados
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch">

            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, delay: 0, type: "spring", stiffness: 300 }}
                viewport={{ once: false }}
                className="h-full"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}

          </div>
        </motion.div>
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
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="grid gap-10 md:grid-cols-3"
          >
            {/* Lenguajes */}
            <motion.div
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 15px rgba(192,132,252,0.2)",
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              className="bg-[#1a0e2a] p-6 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-semibold text-purple-300 text-center mb-4">
                Lenguajes
              </h3>
              <ul className="space-y-3">
                {["Java", "Java (Android)", "Python (Básico)", "C++ (Básico)"].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 group transition duration-200 hover:scale-[1.02]"
                  >
                    <span className="w-2.5 h-2.5 bg-purple-400 rounded-full group-hover:scale-125 transition" />
                    <div className="bg-[#2e1b47] py-2 px-4 rounded-md w-full text-center group-hover:bg-purple-900/30 transition">
                      {item}
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Tecnologías Web */}
            <motion.div
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 15px rgba(192,132,252,0.2)",
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              className="bg-[#1a0e2a] p-6 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-semibold text-purple-300 text-center mb-4">
                Tecnologías Web
              </h3>
              <ul className="space-y-3">
                {["Angular", "CSS (Tailwind)", "Next.js", "React"].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 group transition duration-200 hover:scale-[1.02]"
                  >
                    <span className="w-2.5 h-2.5 bg-purple-400 rounded-full group-hover:scale-125 transition" />
                    <div className="bg-[#2e1b47] py-2 px-4 rounded-md w-full text-center group-hover:bg-purple-900/30 transition">
                      {item}
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Intereses */}
            <motion.div
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 15px rgba(192,132,252,0.2)",
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              className="bg-[#1a0e2a] p-6 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-semibold text-purple-300 text-center mb-4">
                Intereses
              </h3>
              <ul className="space-y-3">
                {["Pentesting", "Ciberseguridad", "Automatización", "Inteligencia Artificial"].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 group transition duration-200 hover:scale-[1.02]"
                  >
                    <span className="w-2.5 h-2.5 bg-purple-400 rounded-full group-hover:scale-125 transition" />
                    <div className="bg-[#2e1b47] py-2 px-4 rounded-md w-full text-center group-hover:bg-purple-900/30 transition">
                      {item}
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section
        id="formacion"

        className="bg-[#1a0e2a] text-white py-20 px-6 rounded-md"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-purple-300 drop-shadow-[0_0_10px_rgba(192,132,252,0.8)]">
            Formación y Experiencia
          </h2>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-purple-700" />

            <div className="space-y-20">
              {[
                {
                  icon: <FaGraduationCap />,
                  title: 'Bachillerato de Ciencias',
                  subtitle: 'IES San Fernando · 2021 – 2023',
                  desc: 'Modalidad de Ciencias, aprobado en convocatoria ordinaria.',
                },
                {
                  icon: <FaLaptopCode className="text-xl" />,
                  title: 'Freelancer',
                  subtitle: '2023 – actualidad',
                  desc: 'Trabajando en proyectos personales y para clientes en pequeño formato en plataformas como GitHub y entornos locales.',
                },
                {
                  icon: <FaLaptopCode className="text-4xl" />,
                  title: 'CFGS Desarrollo de Aplicaciones Multiplataforma (DAM)',
                  subtitle: 'Grupo Studium · 2023 – 2025',
                  desc: 'Programación Java, Android, bases de datos, Python y prácticas integradas.',
                },
                {
                  icon: <FaBriefcase />,
                  title: 'Prácticas IT (becario)',
                  subtitle: 'Ayuntamiento de Constantina · Abr – Jun 2025',
                  desc: 'Soporte y despliegue de sistemas, scripts de automatización y mantenimiento de red municipal.',
                },
                {
                  icon: <FaGraduationCap />,
                  title: 'Academia S4vitar – Ciberseguridad',
                  subtitle: '2025 – actualidad',
                  desc: 'Pentesting, Kali Linux, hacking ético y pruebas de penetración continuas.',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  className="relative w-full"
                >
                  {/* punto */}
                  <div
                    className={`
                absolute top-1/2 left-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-white bg-purple-500 z-10
                ${i % 2 === 0 ? '-translate-x-[calc(50%-24px)]' : 'translate-x-[calc(50%-40px)]'}
              `}
                  />

                  {/* tarjeta */}
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: 'spring', stiffness: 250, damping: 18 }}
                    className={`
                md:w-[calc(50%-3rem)] px-6 py-4 bg-[#2e1b47] border border-purple-700 rounded-xl shadow-lg
                ${i % 2 === 0 ? 'md:ml-auto text-right' : 'md:mr-auto text-left'}
              `}
                  >
                    <div className="flex items-center gap-2 text-purple-400 font-semibold mb-2 text-lg">
                      {item.icon}
                      <span className="text-purple-300 font-bold">{item.title}</span>
                    </div>
                    <p className="text-sm italic text-purple-200 mb-2">{item.subtitle}</p>
                    <p className="text-sm text-purple-100 leading-relaxed">{item.desc}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="contacto"
        className="bg-[#2e1b47] text-white py-24 px-6"
      >
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-300 drop-shadow-[0_0_10px_rgba(192,132,252,0.8)]">
            ¡Ponte en contacto!
          </h2>

          {/*  -------- FORM -------- */}
          <form
            action="https://formsubmit.co/daniromavi@gmail.com"
            method="POST"
            className="space-y-6"
          >
            {/* nombre */}
            <div>
              <label className="block mb-1 text-sm font-medium text-purple-200">
                Nombre
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full rounded-lg bg-[#2e1b47] border border-purple-700 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* email */}
            <div>
              <label className="block mb-1 text-sm font-medium text-purple-200">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-lg bg-[#2e1b47] border border-purple-700 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* mensaje */}
            <div>
              <label className="block mb-1 text-sm font-medium text-purple-200">
                Mensaje
              </label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full rounded-lg bg-[#2e1b47] border border-purple-700 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
              />
            </div>

            {/* botón */}
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(236,72,255,0.5)' }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 font-semibold"
              type="submit"
            >
              Enviar mensaje
            </motion.button>

            {/* opcional: evita redirecciones de formsubmit */}
            <input type="hidden" name="_next" value="https://daniromavi.vercel.app/#contacto" />
            <input type="hidden" name="_captcha" value="Nuevo mensaje desde tu portfolio" />
          </form>
        </div>
      </section>

    </>
  );
}



