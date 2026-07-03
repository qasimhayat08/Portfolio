import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaStar, 
  FaQuoteLeft, 
  FaQuoteRight,
  FaUserCircle,
  FaLinkedin,
  FaTwitter,
  FaGithub
} from 'react-icons/fa';
import { SiUpwork, SiFiverr } from 'react-icons/si';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      quote: 'Working with this developer was an absolute game-changer for our business. The attention to detail and commitment to delivering high-quality code is unmatched. They transformed our outdated platform into a modern, blazing-fast application that our users love.',
      rating: 5,
      platform: 'LinkedIn',
      platformIcon: <FaLinkedin className="text-blue-400" />,
      date: 'March 2024'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Product Manager, DesignHub',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      quote: 'One of the most talented developers I\'ve ever had the pleasure of working with. They don\'t just write code—they craft solutions. Their ability to understand complex requirements and deliver elegant, scalable solutions is truly remarkable.',
      rating: 5,
      platform: 'Upwork',
      platformIcon: <SiUpwork className="text-green-400" />,
      date: 'January 2024'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Founder, CreativeFlow',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      quote: 'Absolutely phenomenal work! The React applications built by this developer are not only visually stunning but also incredibly performant. They brought our vision to life and exceeded all our expectations. Highly recommended!',
      rating: 5,
      platform: 'Twitter',
      platformIcon: <FaTwitter className="text-blue-400" />,
      date: 'December 2023'
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'CTO, CloudNine Solutions',
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
      quote: 'This developer has an exceptional ability to solve complex problems with clean, maintainable code. They\'re not just a developer—they\'re a true problem solver who adds immense value to any project they touch.',
      rating: 5,
      platform: 'GitHub',
      platformIcon: <FaGithub className="text-white" />,
      date: 'November 2023'
    },
    {
      id: 5,
      name: 'Lisa Park',
      role: 'Marketing Director, BrandWise',
      image: 'https://randomuser.me/api/portraits/women/33.jpg',
      quote: 'The WordPress solutions provided were nothing short of exceptional. Our website\'s performance improved dramatically, and the custom features built were exactly what we needed. A truly skilled professional!',
      rating: 5,
      platform: 'Fiverr',
      platformIcon: <SiFiverr className="text-green-500" />,
      date: 'October 2023'
    },
    {
      id: 6,
      name: 'James Wilson',
      role: 'Lead Developer, CodeCraft',
      image: 'https://randomuser.me/api/portraits/men/52.jpg',
      quote: 'An outstanding developer who brings both technical excellence and creative problem-solving to every project. Their expertise in modern JavaScript frameworks and attention to performance optimization is second to none.',
      rating: 5,
      platform: 'LinkedIn',
      platformIcon: <FaLinkedin className="text-blue-400" />,
      date: 'September 2023'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        className={`inline-block ${
          index < rating ? 'text-yellow-400' : 'text-gray-600'
        }`}
        size={16}
      />
    ));
  };

  return (
    <section id='testimonials' className="relative w-full min-h-screen py-24 px-6 overflow-hidden bg-gradient-to-b from-[#0a0a1a] via-[#0f0f2a] to-[#0a0a1a]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-blue-400 uppercase tracking-[8px] text-sm font-mono bg-blue-400/10 px-6 py-2 rounded-full border border-blue-400/20">
              Client Testimonials
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            What People Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-8">
            Real feedback from real clients I've had the pleasure of working with
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Decorative Gradient */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-blue-500/5 transition-all duration-500"></div>
              
              {/* Quote Icons */}
              <div className="absolute top-4 right-4 text-blue-400/20 group-hover:text-blue-400/40 transition-colors duration-500">
                <FaQuoteRight size={30} />
              </div>
              <div className="absolute bottom-4 left-4 text-purple-400/20 group-hover:text-purple-400/40 transition-colors duration-500">
                <FaQuoteLeft size={30} />
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Rating and Platform */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {renderStars(testimonial.rating)}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    {testimonial.platformIcon}
                    <span>{testimonial.platform}</span>
                  </div>
                </div>

                {/* Quote */}
                <p className="text-gray-300 leading-7 mb-6 text-sm">
                  "{testimonial.quote}"
                </p>

                {/* User Info */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-blue-400/30 group-hover:border-blue-400/60 transition-all duration-300">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Online Status Indicator */}
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-[#0a0a1a]"></div>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg group-hover:text-blue-400 transition-colors">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-500 text-xs">{testimonial.date}</p>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-blue-500/10 blur-xl transition-all duration-500 -z-10"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: 'Happy Clients', value: '50+' },
            { label: 'Projects Completed', value: '100+' },
            { label: 'Years Experience', value: '5+' },
            { label: '5-Star Reviews', value: '100%' }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wider group-hover:text-white transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >



         <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl sm:rounded-full px-5 sm:px-8 py-5 sm:py-6 border border-blue-500/20 w-full max-w-md sm:max-w-2xl mx-auto">

         
  <p className="text-gray-300 text-center text-sm sm:text-base">
    <span className="text-white font-semibold block sm:inline">Ready to work together?</span>
    <span className="hidden sm:inline"> </span>
    <span className="block sm:inline">Let's create something amazing!</span>
  </p>
  <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mt-4">
    <a 
      href="#" 
      className="w-full sm:w-auto px-5 sm:px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 text-center"
    >
      Get in Touch
    </a>
    <a 
      href="#" 
      className="w-full sm:w-auto px-5 sm:px-6 py-2.5 border border-white/20 text-white rounded-full text-sm font-semibold hover:bg-white/10 transition-all duration-300 text-center"
    >
      View Portfolio
    </a>
  </div>
</div>




        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;