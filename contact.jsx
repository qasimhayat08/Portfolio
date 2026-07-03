import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaUser,
  FaComment,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaArrowRight,
  FaCheckCircle,
  FaSpinner
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'hello@yourportfolio.com',
      link: 'mailto:hello@yourportfolio.com'
    },
    {
      icon: <FaPhone />,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: 'San Francisco, CA',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: <FaGithub />, link: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: <FaLinkedin />, link: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: <FaTwitter />, link: 'https://twitter.com/yourusername', label: 'Twitter' },
    { icon: <FaInstagram />, link: 'https://instagram.com/yourusername', label: 'Instagram' }
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id='contact' className="relative w-full min-h-screen py-24 px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1000ms' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl"></div>
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
              Get In Touch
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-8">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Information Sidebar */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <motion.div variants={itemVariants}>
              {/* FIXED: Removed sm:flex-col and added text-center classes */}
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col items-center text-center">
                <h3 className="text-2xl font-bold text-white mb-4 sm:mb-6">Contact Info</h3>
                <p className="text-gray-400 mb-6 sm:mb-8 max-w-md">
                  Feel free to reach out through any of these channels. I typically respond within 24 hours.
                </p>

                <div className="space-y-4 w-full max-w-md">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      className="group flex items-center gap-4 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-blue-500/20 w-full"
                    >
                      <div className="w-12 h-12 flex items-center justify-center bg-blue-500/20 rounded-xl text-blue-400 text-xl group-hover:scale-110 transition-transform flex-shrink-0">
                        {info.icon}
                      </div>
                      <div className="text-left">
                        <p className="text-xs text-gray-500 uppercase tracking-wider">{info.label}</p>
                        <p className="text-white font-medium group-hover:text-blue-400 transition-colors text-sm sm:text-base">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-white/10 w-full max-w-md">
                  <p className="text-sm text-gray-400 mb-4">Connect with me on social media</p>
                  <div className="flex gap-3 flex-wrap justify-center">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-xl hover:bg-blue-500 transition-all duration-300 text-gray-400 hover:text-white group"
                        aria-label={social.label}
                      >
                        <span className="group-hover:scale-110 transition-transform">
                          {social.icon}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Availability Status */}
            <motion.div variants={itemVariants}>
              <div className="bg-green-500/10 backdrop-blur-xl rounded-3xl p-6 border border-green-500/20 text-center sm:text-left">
                <div className="flex flex-col sm:flex-row items-center gap-3 justify-center sm:justify-start">
                  <div className="relative">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-75"></div>
                  </div>
                  <div>
                    <p className="text-green-400 font-semibold">Available for Freelance</p>
                    <p className="text-gray-500 text-sm">Open to new opportunities</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <motion.div variants={itemVariants}>
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-2 text-center sm:text-left">Send a Message</h3>
                <p className="text-gray-400 mb-6 text-center sm:text-left">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                      <FaCheckCircle className="text-5xl text-green-400" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">Message Sent!</h4>
                    <p className="text-gray-400">
                      Thank you for reaching out. I'll get back to you shortly!
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">
                          Your Name
                        </label>
                        <div className="relative">
                          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                            <FaUser />
                          </div>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full pl-10 pr-4 py-3 bg-white/5 border ${
                              errors.name ? 'border-red-500' : 'border-white/10'
                            } rounded-2xl text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none`}
                            placeholder="John Doe"
                          />
                        </div>
                        {errors.name && (
                          <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">
                          Email Address
                        </label>
                        <div className="relative">
                          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                            <FaEnvelope />
                          </div>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full pl-10 pr-4 py-3 bg-white/5 border ${
                              errors.email ? 'border-red-500' : 'border-white/10'
                            } rounded-2xl text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none`}
                            placeholder="john@example.com"
                          />
                        </div>
                        {errors.email && (
                          <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-white/5 border ${
                          errors.subject ? 'border-red-500' : 'border-white/10'
                        } rounded-2xl text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none`}
                        placeholder="Project Inquiry"
                      />
                      {errors.subject && (
                        <p className="mt-1 text-xs text-red-400">{errors.subject}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Message
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-3 text-gray-500">
                          <FaComment />
                        </div>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="6"
                          className={`w-full pl-10 pr-4 py-3 bg-white/5 border ${
                            errors.message ? 'border-red-500' : 'border-white/10'
                          } rounded-2xl text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none resize-none`}
                          placeholder="Tell me about your project..."
                        ></textarea>
                      </div>
                      {errors.message && (
                        <p className="mt-1 text-xs text-red-400">{errors.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full group relative overflow-hidden px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl text-white font-semibold hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      <span className="relative flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <>
                            <FaSpinner className="animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </span>
                    </button>

                    <p className="text-xs text-center text-gray-500">
                      By submitting this form, you agree to our privacy policy.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;