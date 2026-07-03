import React, { useEffect, useState } from 'react';
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin, 
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowUp,
  FaRocket,
  FaArrowRight
} from 'react-icons/fa';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Check scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show button when scrolled past 50% of the page
      if (scrollY > documentHeight * 0.5) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Navigation items with proper IDs
  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  // Social media links
  const socialLinks = [
    { icon: FaFacebook, href: '#', label: 'Facebook' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="relative w-full bg-gray-950 text-white overflow-hidden">
      
      {/* Decorative Top Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        {/* Header with Gradient */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-block">
            <div className="flex items-center gap-2 justify-center">
              <span className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-transparent to-blue-400"></span>
              <FaRocket className="text-blue-400 text-xl sm:text-2xl" />
              <span className="w-8 sm:w-12 h-0.5 bg-gradient-to-l from-transparent to-blue-400"></span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let's Create Something Amazing
            </h2>
            <p className="text-gray-400 mt-2 text-xs sm:text-sm">Built with passion, designed for the future</p>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-8 border-t border-b border-white/5">
          
          {/* Brand */}
          <div className="text-center sm:text-left">
            <h3 className="text-2xl font-bold text-white mb-3">YourBrand</h3>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs mx-auto sm:mx-0">
              Transforming ideas into digital experiences that matter.
            </p>
            <div className="flex justify-center sm:justify-start gap-3 mt-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 flex items-center justify-center bg-white/5 rounded-lg hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-300 text-gray-400 border border-white/5 hover:border-blue-500/30"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Explore Links - WITH ARROW ON HOVER */}
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Explore</h4>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.id}>
       <a 
  href={`#${item.id}`} 
  className="group relative inline-flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 text-sm"
>
  <FaArrowRight 
    className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-blue-400 text-xs group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" 
  />
  <span className="group-hover:translate-x-1.5 transition-all duration-300">{item.name}</span>
</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Connect</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center justify-center sm:justify-start gap-3 text-gray-300">
                <FaEnvelope className="text-blue-400 flex-shrink-0" size={14} />
                <span className="break-all">hello@yourbrand.com</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-3 text-gray-300">
                <FaPhone className="text-blue-400 flex-shrink-0" size={14} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-3 text-gray-300">
                <FaMapMarkerAlt className="text-blue-400 flex-shrink-0" size={14} />
                <span>NY, USA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8">
          <p className="text-sm text-gray-500 text-center md:text-left">
            &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs flex-wrap justify-center">
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">Privacy</a>
            <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">Terms</a>
            <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">Cookies</a>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <span>Made with</span>
            <span className="text-red-500 animate-pulse">❤️</span>
            <span>using React</span>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="group fixed bottom-4 sm:bottom-8 right-4 sm:right-8 z-50 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110"
          aria-label="Back to top"
        >
          <FaArrowUp className="group-hover:-translate-y-1 transition-all duration-300" size={16} />
          <span className="absolute -top-10 sm:-top-12 right-0 text-[10px] sm:text-xs bg-black/80 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10">
            Back to Top ↑
          </span>
        </button>
      )}
    </footer>
  );
};

export default Footer;