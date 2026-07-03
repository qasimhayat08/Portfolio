import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import { useEffect } from "react";

export default function OverlayMenu({ isMenuOpen, onClose }) {
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Menu items with their corresponding section IDs
  const menuItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <AnimatePresence mode="wait">
      {isMenuOpen && (
        <motion.div 
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/95 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Close Button */}
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white text-3xl sm:text-4xl hover:text-pink-500 transition-colors z-10 p-2"
            aria-label="Close Menu"
          >
            <FiX />
          </button>

          {/* Navigation Links */}
          <ul className="flex flex-col items-center justify-center gap-4 sm:gap-6 px-4 w-full max-w-md">
            {menuItems.map((item, index) => (
              <motion.li 
                key={item.id}
                className="w-full text-center"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.07 }}
              >
                <a
                  href={`#${item.id}`}
                  onClick={onClose}
                  className="inline-block text-2xl sm:text-3xl md:text-4xl font-bold text-white hover:text-pink-500 transition-all duration-300 px-4 py-2 rounded-lg hover:bg-white/5 w-full"
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Decorative background elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}