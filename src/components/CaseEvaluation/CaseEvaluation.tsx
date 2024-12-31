import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPhone, FaClock, FaBalanceScale, FaCheck, FaTimes, FaBars } from 'react-icons/fa';
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

interface FormData {
  name: string;
  phone: string;
  description: string;
}

interface AlertProps {
  type: 'success' | 'error';
  message: string;
  onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ type, message, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`fixed top-6 right-6 z-50 p-4 rounded shadow-lg flex items-center space-x-3 ${
        type === 'success' ? 'bg-green-600' : 'bg-red-600'
      }`}
    >
      {type === 'success' ? (
        <FaCheck className="text-white text-xl" />
      ) : (
        <FaTimes className="text-white text-xl" />
      )}
      <p className="text-white font-body">{message}</p>
      <button 
        onClick={onClose}
        className="text-white/80 hover:text-white transition-colors"
      >
        <FaTimes />
      </button>
    </motion.div>
  );
};

const CaseEvaluation: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    description: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Always show success message for demo
    setAlert({
      type: 'success',
      message: 'Thank you! Our legal team will contact you within 24 hours.'
    });

    // Reset form
    setFormData({ name: '', phone: '', description: '' });
    setIsSubmitting(false);
  };

  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-[#E31837] via-[#8B0000] to-black">
      <AnimatePresence>
        {alert && (
          <Alert
            type={alert.type}
            message={alert.message}
            onClose={() => setAlert(null)}
          />
        )}
      </AnimatePresence>
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
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full bg-white/10 border border-white/20 p-4 text-white placeholder-white/50 focus:outline-none focus:border-white"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                className="w-full bg-white/10 border border-white/20 p-4 text-white placeholder-white/50 focus:outline-none focus:border-white"
              />
            </div>
            <textarea
              placeholder="Briefly describe your case"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              rows={4}
              className="w-full bg-white/10 border border-white/20 p-4 text-white placeholder-white/50 focus:outline-none focus:border-white"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full font-display text-xl uppercase py-4 transition-all duration-300 ${
                isSubmitting 
                  ? 'bg-white/50 text-black cursor-not-allowed' 
                  : 'bg-white text-black hover:bg-law-red hover:text-white'
              }`}
            >
              {isSubmitting ? 'Submitting...' : 'Get Free Consultation'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default CaseEvaluation; 