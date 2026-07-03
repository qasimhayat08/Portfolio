import React from 'react';
import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaWordpress,
} from 'react-icons/fa';
// import { SiExpress, SiElementor, SiDivi } from 'react-icons/si';
import { motion } from 'framer-motion';

const Experience = () => {
  // Logo data with icons and names
  const techLogos = [
    { id: 1, name: 'Python', icon: <FaPython />, color: '#3776AB' },
    { id: 2, name: 'HTML', icon: <FaHtml5 />, color: '#E34F26' },
    { id: 3, name: 'CSS', icon: <FaCss3Alt />, color: '#1572B6' },
    { id: 4, name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
    { id: 5, name: 'React JS', icon: <FaReact />, color: '#61DAFB' },
    { id: 6, name: 'Express JS', icon: <SiExpress />, color: '#FFFFFF' },
    { id: 7, name: 'Node JS', icon: <FaNodeJs />, color: '#339933' },
    { id: 8, name: 'WordPress', icon: <FaWordpress />, color: '#21759B' },
    // { id: 9, name: 'Elementor', icon: <SiElementor />, color: '#92003B' },
    // { id: 10, name: 'Divi', icon: <SiDivi />, color: '#5860E5' },
  ];

  // Double the logos for seamless infinite scroll effect
  const duplicatedLogos = [...techLogos, ...techLogos];

  return (
    <section id='experience' className="relative w-full min-h-screen text-white py-24 px-6 overflow-hidden" style={{ backgroundColor: '#0a0a1a' }}>
      {/* Animated background glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-400 uppercase tracking-[8px] text-sm mb-4 font-mono">
            My Journey
          </p>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
          <p className="text-gray-400 max-w-2xl mx-auto mt-6 leading-8 text-lg">
            Over the years, I've worked with a wide range of technologies to build
            stunning, responsive, and high-performance web applications.
          </p>
        </div>

        {/* Experience Timeline / Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {/* Experience Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="group bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10"
          >
            <div className="text-4xl mb-4">💼</div>
            <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
              Frontend Developer
            </h3>
            <p className="text-sm text-blue-400 mb-4">2022 - Present</p>
            <p className="text-gray-400 leading-7">
              Building modern, responsive UIs with React, Tailwind CSS, and
              interactive animations. Focus on performance and user experience.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">React</span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">Tailwind</span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">Framer</span>
            </div>
          </motion.div>

          {/* Experience Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="group bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10"
          >
            <div className="text-4xl mb-4">⚙️</div>
            <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
              Backend Developer
            </h3>
            <p className="text-sm text-blue-400 mb-4">2023 - Present</p>
            <p className="text-gray-400 leading-7">
              Creating robust APIs, server-side logic, and database integration
              using Node.js, Express, and Python for scalable applications.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs">Node.js</span>
              <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs">Express</span>
              <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs">Python</span>
            </div>
          </motion.div>

          {/* Experience Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="group bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10"
          >
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
              WordPress Specialist
            </h3>
            <p className="text-sm text-blue-400 mb-4">2020 - Present</p>
            <p className="text-gray-400 leading-7">
              Developing custom WordPress themes, using Elementor &amp; Divi,
              optimizing performance, and building client-focused websites.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">WordPress</span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">Elementor</span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">Divi</span>
            </div>
          </motion.div>
        </div>

        {/* Logo Slider Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <p className="text-blue-400 uppercase tracking-[6px] text-sm mb-2 font-mono">
              Technologies I Work With
            </p>
            <h3 className="text-3xl font-bold text-white">Tech Stack</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Infinite Marquee Slider */}
          <div className="relative w-full overflow-hidden py-8">
            {/* Gradient overlays for smooth edges */}
            <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#0a0a1a] to-transparent z-20"></div>
            <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#0a0a1a] to-transparent z-20"></div>

            <motion.div
              className="flex gap-16 items-center whitespace-nowrap"
              animate={{
                x: ['0%', '-50%'],
              }}
              transition={{
                duration: 25,
                ease: 'linear',
                repeat: Infinity,
              }}
            >
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={`${logo.id}-${index}`}
                  className="flex flex-col items-center gap-2 group cursor-pointer"
                >
                  <div
                    className="text-6xl transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                    style={{ color: logo.color }}
                  >
                    {logo.icon}
                  </div>
                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">
                    {logo.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Slider progress indicator */}
          <div className="flex justify-center gap-3 mt-6">
            {techLogos.map((_, idx) => (
              <div
                key={idx}
                className="w-2 h-2 rounded-full bg-gray-600/50"
              />
            ))}
            <div className="w-8 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
 