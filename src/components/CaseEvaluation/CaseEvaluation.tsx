import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPhone, FaClock, FaBalanceScale, FaBars } from 'react-icons/fa';
import MobileMenu from './MobileMenu';

const benefits = [
  {
    icon: FaPhone,
    title: "24/7 RESPONSE",
    description: "We're available day and night to take your call and start your case immediately."
  },
  {
    icon: FaClock,
    title: "FAST ACTION",
    description: "Time is critical in injury cases. We begin working on your case the moment you contact us."
  },
  {
    icon: FaBalanceScale,
    title: "FREE CONSULTATION",
    description: "Get expert legal advice at no cost. Only pay if we win your case."
  }
];

const CaseEvaluation: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-law-red via-law-red to-black">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30" />
      <div className="absolute inset-0 bg-[url('/pattern.png')] mix-blend-overlay opacity-10" />
      
      {/* Menu Toggle Button - Now visible on all screens */}
      <button
        onClick={() => setIsMobileMenuOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-law-red text-white p-4 rounded-full shadow-lg hover:bg-black transition-colors duration-300 group"
      >
        <FaBars className="text-2xl group-hover:scale-110 transition-transform duration-300" />
      </button>

      {/* Slide-in Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />

      {/* Main Content */}
      <div className="relative container mx-auto px-4 sm:px-6 max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display uppercase text-white mb-6">
            Get Your <span className="text-black">Free</span> Case Review
          </h2>
          <p className="text-white text-lg sm:text-xl max-w-3xl mx-auto font-body">
            Don't wait. Every moment matters in personal injury cases. Contact us now for your 
            free consultation with our experienced attorneys.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-black/30 backdrop-blur-sm p-8 border border-white/10"
            >
              <benefit.icon className="text-white text-4xl mb-6" />
              <h3 className="text-xl font-display text-white mb-4">{benefit.title}</h3>
              <p className="text-white/80 font-body">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-black/40 backdrop-blur-sm p-8 md:p-12 max-w-3xl mx-auto border border-white/10"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-white/10 border border-white/20 p-4 text-white placeholder-white/50 focus:outline-none focus:border-white"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-white/10 border border-white/20 p-4 text-white placeholder-white/50 focus:outline-none focus:border-white"
              />
            </div>
            <textarea
              placeholder="Briefly describe your case"
              rows={4}
              className="w-full bg-white/10 border border-white/20 p-4 text-white placeholder-white/50 focus:outline-none focus:border-white"
            />
            <button
              type="submit"
              className="w-full bg-white text-black font-display text-xl uppercase py-4 hover:bg-law-red hover:text-white transition-all duration-300"
            >
              Get Free Consultation
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default CaseEvaluation; 