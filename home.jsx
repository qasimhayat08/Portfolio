import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'
import { HiDownload } from 'react-icons/hi'
import image from "../assets/profileimage.jpeg"

const Home = () => {
  return (
    <section id="home" className='w-full min-h-screen flex items-center justify-center w-100 pt-15'>
      <div className='w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 py-8 md:py-100 lg:py-20'>
        <div className='grid lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-center'>
          {/* Image Section (Left) */}
          <div className='flex justify-center items-center order-2 lg:order-1'>
            <div className='relative group w-full max-w-[500px] mx-auto'>
              {/* Animated Background Circle - Transparent */}
              <div className='absolute inset-0 bg-transparent rounded-full opacity-20 animate-pulse'></div>
              <div className='absolute inset-0 bg-transparent rounded-full opacity-10 animate-spin-slow'></div>

              {/* Profile Container - Shows Name by default, Image on hover */}
              <div className='relative w-full aspect-square rounded-full overflow-hidden border-4 border-white shadow-2xl perspective-1000'>
                {/* Default State - Shows Name */}
                <div className='absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center transition-all duration-700 ease-in-out group-hover:opacity-0 group-hover:scale-110'>
                  <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center px-4 leading-tight'>
                    Qasim<br className='sm:hidden' /> Hayat
                  </h2>
                </div>

                {/* Hover State - Shows Image with Flip Animation */}
                <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out transform group-hover:scale-100 scale-95'>
                  <div className='w-full h-full transform transition-all duration-700 ease-in-out group-hover:rotate-y-180'>
                    <img
                      src={image}
                      alt="Qasim Hayat"
                      className='w-full h-full object-cover'
                    />
                  </div>
                </div>
              </div>

              {/* Floating Badges - Hidden by default, shown on hover */}
              <div className='absolute -top-2 -right-2 sm:-top-3 sm:-right-3 md:-top-4 md:-right-4 bg-white rounded-full shadow-lg px-3 py-1.5 sm:px-4 sm:py-2 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 delay-100'>
                <span className='text-xs sm:text-sm font-semibold text-gray-700'>✨ 5+ Projects</span>
              </div>
              <div className='absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 md:-bottom-4 md:-left-4 bg-white rounded-full shadow-lg px-3 py-1.5 sm:px-4 sm:py-2 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 delay-200'>
                <span className='text-xs sm:text-sm font-semibold text-gray-700'>🚀 3+ Years</span>
              </div>
            </div>
          </div>

          {/* Content Section (Right) - More width */}
          <div className='space-y-6 sm:space-y-8 animate-fade-in-up order-1 lg:order-2 text-center lg:text-left w-full'>
            {/* Greeting */}
            <div className='space-y-2'>
              <p className='text-blue-600 font-semibold text-base sm:text-lg text-white lg:text-xl'>👋 Hello, I'm</p>
              <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-white'>
                Qasim Hayat
              </h1>
              <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-600'>
                <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                  Full Stack Developer
                </span>
              </h2>
            </div>

            {/* Bio */}
            <p className='text-white text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0'>
              I'm a passionate Full Stack Developer specializing in building modern, responsive, and scalable web applications. I work with HTML, CSS, JavaScript, React.js, Node.js, Express.js, Next.js, Python, and WordPress to create high-quality digital experiences. I enjoy solving real-world problems through clean, efficient code and continuously improving my skills to stay current with the latest web technologies.
            </p>

            {/* CTA Buttons */}
            <div className='flex flex-wrap gap-4 justify-center lg:justify-start'>
              <button className='px-8 sm:px-10 py-3.5 sm:py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2 text-sm sm:text-base lg:text-lg'>
                <HiDownload className='text-lg sm:text-xl lg:text-2xl' />
                Download CV
              </button>
              <button className='px-8 sm:px-10 py-3.5 sm:py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 text-sm sm:text-base lg:text-lg'>
                View Projects
              </button>
            </div>

            {/* Social Icons */}
            <div className='flex gap-3 sm:gap-4 lg:gap-5 pt-4 justify-center lg:justify-start'>
              <a href='https://github.com/qasimhayat08' className='p-3 sm:p-3.5 lg:p-4 bg-gray-200 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1'>
                <FaGithub className='text-xl sm:text-2xl lg:text-3xl' />
              </a>
              <a href='https://www.linkedin.com/in/qasim-tarar-07224b414/?skipRedirect=true' className='p-3 sm:p-3.5 lg:p-4 bg-gray-200 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1'>
                <FaLinkedin className='text-xl sm:text-2xl lg:text-3xl' />
              </a>
              <a href='#' className='p-3 sm:p-3.5 lg:p-4 bg-gray-200 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1'>
                <FaTwitter className='text-xl sm:text-2xl lg:text-3xl' />
              </a>
              <a href='mailto:qasimhayat08@example.com' className='p-3 sm:p-3.5 lg:p-4 bg-gray-200 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1'>
                <FaEnvelope className='text-xl sm:text-2xl lg:text-3xl' />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        .animate-spin-slow {
          animation: spin 10s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .delay-100 {
          animation-delay: 0.5s;
        }
        .delay-200 {
          animation-delay: 0.7s;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  )
}

export default Home