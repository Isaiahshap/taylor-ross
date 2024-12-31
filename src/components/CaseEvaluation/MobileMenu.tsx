import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaClock, FaBalanceScale, FaTimes } from 'react-icons/fa';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

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

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setFormData({ name: '', phone: '' }); // Reset form
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000); // Hide message after 3 seconds
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Menu Content */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed right-0 top-0 h-full w-full sm:w-[400px] lg:w-[600px] bg-law-red z-50 overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-white hover:text-black transition-colors duration-300"
            >
              <FaTimes className="text-2xl" />
            </button>

            {/* Content */}
            <div className="p-8 pt-20 lg:p-12 lg:pt-24">
              <h2 className="text-4xl lg:text-5xl font-display text-white mb-8">
                GET YOUR FREE<br />
                <span className="text-black">CASE REVIEW</span>
              </h2>

              {/* Benefits */}
              <div className="space-y-6 mb-12">
                {benefits.map((benefit) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-black/20 p-6 backdrop-blur-sm hover:bg-black/30 transition-colors duration-300"
                  >
                    <benefit.icon className="text-white text-3xl mb-4" />
                    <h3 className="text-xl font-display text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-white/80 text-sm lg:text-base">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Quick Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 p-4 text-white placeholder-white/50 focus:outline-none focus:border-white"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 p-4 text-white placeholder-white/50 focus:outline-none focus:border-white"
                />
                <button
                  type="submit"
                  className="w-full bg-black text-white font-display text-xl uppercase py-4 hover:bg-white hover:text-black transition-all duration-300"
                >
                  Get Free Consultation
                </button>

                {/* Success Message */}
                <AnimatePresence>
                  {showSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="bg-green-500 text-white p-4 rounded-md text-center"
                    >
                      Thank you! We'll contact you shortly.
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu; 