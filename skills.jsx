import React, { useState } from 'react'
import { 
  FaReact, FaNodeJs, FaPython, FaJs, FaHtml5, FaCss3Alt, 
  FaGit, FaGithub, FaDatabase, FaServer, FaCloud, FaMobile,
  FaLaptopCode, FaCode, FaRocket, FaStar, FaCheckCircle
} from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs, SiMongodb, SiExpress, SiFirebase, SiTypescript } from 'react-icons/si'
import { motion } from 'framer-motion'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  // Skills Data
  const skillCategories = {
    frontend: {
      name: 'Frontend',
      icon: <FaLaptopCode />,
      skills: [
        { name: 'React.js', icon: <FaReact className="text-cyan-400" />, level: 90, color: '#61DAFB' },
        { name: 'Next.js', icon: <SiNextdotjs />, level: 85, color: '#000000' },
        { name: 'JavaScript', icon: <FaJs className="text-yellow-400" />, level: 92, color: '#F7DF1E' },
        { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" />, level: 80, color: '#3178C6' },
        { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" />, level: 95, color: '#E34F26' },
        { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" />, level: 90, color: '#1572B6' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500" />, level: 88, color: '#06B6D4' },
      ]
    },
    backend: {
      name: 'Backend',
      icon: <FaServer />,
      skills: [
        { name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, level: 85, color: '#68A063' },
        { name: 'Express.js', icon: <SiExpress />, level: 82, color: '#000000' },
        { name: 'Python', icon: <FaPython className="text-blue-400" />, level: 80, color: '#3776AB' },
        { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" />, level: 75, color: '#FFCA28' },
      ]
    },
    database: {
      name: 'Database',
      icon: <FaDatabase />,
      skills: [
        { name: 'MongoDB', icon: <SiMongodb className="text-green-600" />, level: 75, color: '#47A248' },
        { name: 'MySQL', icon: <FaDatabase className="text-blue-500" />, level: 70, color: '#4479A1' },
        { name: 'PostgreSQL', icon: <FaDatabase className="text-blue-400" />, level: 65, color: '#336791' },
      ]
    },
    tools: {
      name: 'Tools & Others',
      icon: <FaCode />,
      skills: [
        { name: 'Git', icon: <FaGit className="text-orange-600" />, level: 85, color: '#F05032' },
        { name: 'GitHub', icon: <FaGithub />, level: 85, color: '#181717' },
        { name: 'Docker', icon: <FaCloud className="text-blue-500" />, level: 60, color: '#2496ED' },
        { name: 'AWS', icon: <FaCloud className="text-orange-400" />, level: 55, color: '#FF9900' },
      ]
    }
  }

  // Get all skills for filtering
  const getAllSkills = () => {
    const all = []
    Object.values(skillCategories).forEach(category => {
      category.skills.forEach(skill => {
        all.push({ ...skill, category: category.name })
      })
    })
    return all
  }

  const filteredSkills = activeCategory === 'all' 
    ? getAllSkills() 
    : skillCategories[activeCategory]?.skills || []

  const categories = [
    { id: 'all', label: 'All Skills', icon: <FaCode /> },
    { id: 'frontend', label: 'Frontend', icon: <FaLaptopCode /> },
    { id: 'backend', label: 'Backend', icon: <FaServer /> },
    { id: 'database', label: 'Database', icon: <FaDatabase /> },
    { id: 'tools', label: 'Tools', icon: <FaCode /> },
  ]

  return (
    <section id="skills" className='w-full min-h-screen py-12 md:py-20 relative overflow-hidden'>
      {/* Background Decorations */}
      <div className='absolute top-20 left-10 w-72 h-72 bg-blue-300/20 rounded-full filter blur-3xl'></div>
      <div className='absolute bottom-20 right-10 w-96 h-96 bg-purple-300/20 rounded-full filter blur-3xl'></div>
      
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
        
        {/* Section Header */}
        <div className='text-center mb-12 md:mb-16'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className='text-blue-600 font-semibold text-sm md:text-base tracking-wider uppercase mb-2 flex items-center justify-center gap-2'>
              <FaCode className="text-lg" />
              My Expertise
            </p>
            <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold'>
              <span className='bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent'>
                Skills & Technologies
              </span>
            </h2>
            <div className='relative'>
              <div className='w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full'></div>
              <div className='w-12 h-1.5 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mt-1 rounded-full'></div>
            </div>
          </motion.div>
        </div>

        {/* Category Filters */}
        <motion.div 
          className='flex flex-wrap justify-center gap-3 md:gap-4 mb-12'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-blue-50 border border-gray-200'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-white/20 transition-all duration-300"
            >
              {/* Category Badge */}
              {skill.category && (
                <div className="absolute top-3 right-3 text-xs font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 px-2 py-1 rounded-full">
                  {skill.category}
                </div>
              )}
              
              <div className="flex items-center gap-4 mb-3">
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">{skill.name}</h4>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400 text-sm" />
                    <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
                  </div>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                <motion.div 
                  className="h-full rounded-full"
                  style={{ 
                    width: `${skill.level}%`,
                    background: `linear-gradient(90deg, ${skill.color}dd, ${skill.color})`
                  }}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
              </div>
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
                   style={{ 
                     background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${skill.color}20, transparent 60%)`
                   }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-16'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {[
            { icon: <FaRocket className="text-blue-500" />, number: '15+', label: 'Projects' },
            { icon: <FaCode className="text-purple-500" />, number: '10+', label: 'Technologies' },
            { icon: <FaCheckCircle className="text-green-500" />, number: '50+', label: 'Features Built' },
            { icon: <FaStar className="text-yellow-500" />, number: '100%', label: 'Client Satisfaction' },
          ].map((stat, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-4xl flex justify-center mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Tech Stack Badges */}
        <motion.div 
          className='mt-12 text-center'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-gray-600 font-medium mb-4">Tech Stack I Work With</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['React', 'Node.js', 'JavaScript', 'Python', 'MongoDB', 'Express', 'Tailwind', 'Git', 'Docker', 'AWS'].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Custom Styles */}
      <style jsx>{`
        /* Smooth hover effect for cards */
        .group {
          --mouse-x: 50%;
          --mouse-y: 50%;
        }
      `}</style>
    </section>
  )
}

export default Skills