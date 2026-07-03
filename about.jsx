import React, { useState, useEffect } from 'react'
import { FaCode, FaLaptopCode, FaMobile, FaServer, FaDatabase, FaCloud, FaAward, FaUsers, FaHeart, FaBrain, FaRocket, FaCheckCircle, FaUserGraduate, FaBriefcase, FaLightbulb, FaQuoteLeft, FaQuoteRight, FaArrowRight } from 'react-icons/fa'
import { GiSkills, GiAchievement } from 'react-icons/gi'
import { MdTimeline, MdWork } from 'react-icons/md'

const About = () => {
  // Skills data with colors
  const skills = [
    { name: 'React.js', level: 90, color: '#61DAFB', icon: '⚛️' },
    { name: 'Node.js', level: 85, color: '#68A063', icon: '🟢' },
    { name: 'JavaScript', level: 92, color: '#F7DF1E', icon: '🟨' },
    { name: 'Python', level: 80, color: '#3776AB', icon: '🐍' },
    { name: 'Tailwind CSS', level: 88, color: '#06B6D4', icon: '🎨' },
    { name: 'MongoDB', level: 75, color: '#47A248', icon: '🍃' },
  ]

  // Stats data
  const stats = [
    { icon: <FaCode className="text-blue-500" />, number: '5+', label: 'Projects' },
    { icon: <FaUsers className="text-purple-500" />, number: '10+', label: 'Clients' },
    { icon: <FaAward className="text-yellow-500" />, number: '3', label: 'Awards' },
    { icon: <FaRocket className="text-red-500" />, number: '2+', label: 'Years' },
  ]

  // Experience timeline
  const experiences = [
    { year: '2024 - Present', title: 'Senior Developer', company: 'Tech Corp', description: 'Building enterprise applications with React and Node.js' },
    { year: '2023 - 2024', title: 'Full Stack Developer', company: 'Web Solutions', description: 'Developed responsive web applications for clients worldwide' },
    { year: '2022 - 2023', title: 'Junior Developer', company: 'StartUp Inc', description: 'Started journey in web development and learned modern frameworks' },
  ]

  // Fun facts
  const funFacts = [
    { icon: '☕', text: 'Coffee Addict' },
    { icon: '🎮', text: 'Gamer' },
    { icon: '📚', text: 'Book Lover' },
    { icon: '🎵', text: 'Music Enthusiast' },
    { icon: '✈️', text: 'Traveler' },
    { icon: '💡', text: 'Problem Solver' },
  ]

  return (
    <section id="about" className='w-full min-h-screen md:py-20 relative overflow-hidden'>
      {/* Decorative Background Elements */}
      <div className='absolute top-0 right-0 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse'></div>
      <div className='absolute bottom-0 left-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-1000'></div>
      
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
        
        {/* Section Header */}
        <div className='text-center mb-12 md:mb-16'>
          <div className='inline-block'>
            <p className='text-blue-600 font-semibold text-sm md:text-base tracking-wider uppercase mb-2'>About Me</p>
            <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold'>
              <span className='bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent'>
                Know Me Better
              </span>
            </h2>
            <div className='relative'>
              <div className='w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full'></div>
              <div className='w-12 h-1.5 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mt-1 rounded-full'></div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className='grid lg:grid-cols-5 gap-8 lg:gap-10'>
          
          {/* Left Column - About Text (3 columns on desktop) */}
          <div className='lg:col-span-3 space-y-8'>
            {/* Profile Card */}
            <div className='bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500'>
              <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6'>
                <div className='relative'>
                  <div className='w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1'>
                    <div className='w-full h-full rounded-full bg-white flex items-center justify-center text-4xl'>
                      👨‍💻
                    </div>
                  </div>
                  <div className='absolute -bottom-1 -right-1 bg-green-500 w-5 h-5 rounded-full border-2 border-white'></div>
                </div>
                <div>
                  <h3 className='text-2xl md:text-3xl font-bold text-gray-800'>
                    Qasim <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>Hayat</span>
                  </h3>
                  <p className='text-gray-500 flex items-center gap-2'>
                    <span className='inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse'></span>
                    Available for work
                  </p>
                </div>
              </div>
              
              <div className='space-y-4'>
                <p className='text-gray-600 text-base md:text-lg leading-relaxed'>
                  I'm a passionate <span className='font-bold text-blue-600'>Full Stack Developer</span> who loves creating 
                  beautiful, functional, and user-friendly web applications. My journey began with curiosity 
                  and has evolved into a mission to craft exceptional digital experiences.
                </p>
                
                <p className='text-gray-600 text-base md:text-lg leading-relaxed'>
                  With expertise in both <span className='font-bold text-purple-600'>frontend</span> and 
                  <span className='font-bold text-blue-600'> backend</span> technologies, 
                  I turn complex problems into elegant solutions that make a difference.
                </p>
              </div>

              {/* Quick Highlights */}
              <div className='grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6'>
                <div className='group bg-gradient-to-br from-blue-50 to-indigo-50 p-3 rounded-xl text-center hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 transform hover:-translate-y-1'>
                  <div className='text-2xl mb-1'>❤️</div>
                  <div className='text-xs font-medium text-gray-700'>Passionate</div>
                </div>
                <div className='group bg-gradient-to-br from-purple-50 to-pink-50 p-3 rounded-xl text-center hover:from-purple-100 hover:to-pink-100 transition-all duration-300 transform hover:-translate-y-1'>
                  <div className='text-2xl mb-1'>🧠</div>
                  <div className='text-xs font-medium text-gray-700'>Creative</div>
                </div>
                <div className='group bg-gradient-to-br from-orange-50 to-red-50 p-3 rounded-xl text-center hover:from-orange-100 hover:to-red-100 transition-all duration-300 transform hover:-translate-y-1'>
                  <div className='text-2xl mb-1'>🚀</div>
                  <div className='text-xs font-medium text-gray-700'>Innovative</div>
                </div>
                <div className='group bg-gradient-to-br from-green-50 to-emerald-50 p-3 rounded-xl text-center hover:from-green-100 hover:to-emerald-100 transition-all duration-300 transform hover:-translate-y-1'>
                  <div className='text-2xl mb-1'>✅</div>
                  <div className='text-xs font-medium text-gray-700'>Reliable</div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
              {stats.map((stat, index) => (
                <div key={index} className='group bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20'>
                  <div className='text-3xl flex justify-center mb-2 group-hover:scale-110 transition-transform duration-300'>
                    {stat.icon}
                  </div>
                  <div className='text-2xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent'>
                    {stat.number}
                  </div>
                  <div className='text-xs sm:text-sm text-gray-500'>{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Fun Facts */}
            <div className='bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-xl border border-white/20'>
              <h4 className='text-xl font-bold text-gray-800 mb-4 flex items-center gap-2'>
                <FaLightbulb className='text-yellow-500' />
                Fun Facts
              </h4>
              <div className='flex flex-wrap gap-3'>
                {funFacts.map((fact, index) => (
                  <span key={index} className='bg-gradient-to-r from-gray-50 to-gray-100 px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:from-blue-50 hover:to-purple-50 transition-all duration-300 transform hover:scale-105'>
                    {fact.icon} {fact.text}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Skills & Experience (2 columns on desktop) */}
          <div className='lg:col-span-2 space-y-8'>
            {/* Skills */}
            <div className='bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500'>
              <h4 className='text-xl font-bold text-gray-800 mb-6 flex items-center gap-2'>
                <GiSkills className='text-blue-600 text-2xl' />
                Tech Skills
              </h4>
              <div className='space-y-5'>
                {skills.map((skill, index) => (
                  <div key={index} className='group'>
                    <div className='flex justify-between items-center mb-1.5'>
                      <div className='flex items-center gap-2'>
                        <span className='text-xl'>{skill.icon}</span>
                        <span className='font-medium text-gray-700 group-hover:text-blue-600 transition-colors'>
                          {skill.name}
                        </span>
                      </div>
                      <span className='text-sm font-bold' style={{ color: skill.color }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className='w-full bg-gray-200 rounded-full h-3 overflow-hidden'>
                      <div 
                        className='h-full rounded-full transition-all duration-1000 ease-out group-hover:scale-x-105'
                        style={{ 
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, ${skill.color}dd, ${skill.color})`,
                          transformOrigin: 'left'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Timeline */}
            <div className='bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500'>
              <h4 className='text-xl font-bold text-gray-800 mb-6 flex items-center gap-2'>
                <MdTimeline className='text-purple-600 text-2xl' />
                Experience
              </h4>
              <div className='space-y-6'>
                {experiences.map((exp, index) => (
                  <div key={index} className='relative pl-6 border-l-2 border-purple-200 hover:border-purple-500 transition-colors'>
                    <div className='absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-purple-500'></div>
                    <div className='text-xs font-semibold text-purple-600 mb-1'>{exp.year}</div>
                    <h5 className='font-bold text-gray-800'>{exp.title}</h5>
                    <p className='text-sm text-gray-600'>{exp.company}</p>
                    <p className='text-xs text-gray-500 mt-1'>{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA - Unique Design */}
        <div className='mt-12 md:mt-16'>
          <div className='relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden'>
            {/* Decorative elements */}
            <div className='absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl'></div>
            <div className='absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl'></div>
            
            <div className='relative z-10 text-center'>
              <FaQuoteLeft className='text-white/30 text-4xl mx-auto mb-4' />
              <h4 className='text-2xl md:text-4xl font-bold text-white mb-3'>
                Ready to Build Something <span className='text-yellow-300'>Amazing</span>?
              </h4>
              <p className='text-white/90 text-base md:text-lg mb-6 max-w-2xl mx-auto'>
                Let's collaborate and create exceptional digital experiences that will make your brand stand out.
              </p>
              <div className='flex flex-wrap gap-4 justify-center'>
                <button className='group px-8 py-3.5 bg-white text-purple-600 font-bold rounded-xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2'>
                  Let's Work Together
                  <FaArrowRight className='group-hover:translate-x-1 transition-transform' />
                </button>
                <button className='px-8 py-3.5 border-2 border-white/50 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300'>
                  View My Work
                </button>
              </div>
              <FaQuoteRight className='text-white/30 text-4xl mx-auto mt-4' />
            </div>
          </div>
        </div>

      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default About