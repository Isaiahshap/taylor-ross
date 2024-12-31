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

  // Enhanced animations
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.2 }
    },
    exit: { 
      opacity: 0,
      transition: { delay: 0.2, duration: 0.2 }
    }
  };

  const menuVariants = {
    hidden: { x: '100%', opacity: 0.5 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: { 
      x: '100%',
      opacity: 0.5,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 0.6
      }
    }
  };

  const benefitContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const benefitItemVariants = {
    hidden: { 
      opacity: 0,
      x: -20,
      rotateY: 40
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15
      }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const formItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setFormData({ name: '', phone: '' });
    await new Promise(resolve => setTimeout(resolve, 3000));
    if (showSuccess) setShowSuccess(false);
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed right-0 top-0 h-full w-full sm:w-[400px] lg:w-[600px] bg-law-red z-50 overflow-y-auto"
          >
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-6 right-6 text-white hover:text-black transition-colors duration-300"
            >
              <FaTimes className="text-2xl" />
            </motion.button>

            <div className="p-8 pt-20 lg:p-12 lg:pt-24">
              <motion.h2 
                variants={titleVariants}
                initial="hidden"
                animate="visible"
                className="text-4xl lg:text-5xl font-display text-white mb-8"
              >
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  GET YOUR FREE
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-black"
                >
                  CASE REVIEW
                </motion.span>
              </motion.h2>

              <motion.div 
                variants={benefitContainerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-6 mb-12"
              >
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    variants={benefitItemVariants}
                    className="bg-black/20 p-6 backdrop-blur-sm hover:bg-black/30 transition-all duration-300 transform hover:translate-x-2"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <img src="/logo.png" alt="Taylor & Ross Logo" className="h-8 w-auto -mt-0.5" />
                      <benefit.icon className="text-white text-3xl mb-4" />
                    </motion.div>
                    <h3 className="text-xl font-display text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-white/80 text-sm lg:text-base">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.form 
                variants={formVariants}
                initial="hidden"
                animate="visible"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <motion.div variants={formItemVariants}>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 p-4 text-white placeholder-white/50 focus:outline-none focus:border-white transition-all duration-300"
                  />
                </motion.div>

                <motion.div variants={formItemVariants}>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 p-4 text-white placeholder-white/50 focus:outline-none focus:border-white transition-all duration-300"
                  />
                </motion.div>

                <motion.div variants={formItemVariants}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-black text-white font-display text-xl uppercase py-4 hover:bg-white hover:text-black transition-all duration-300"
                  >
                    Get Free Consultation
                  </motion.button>
                </motion.div>

                <AnimatePresence>
                  {showSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      className="bg-green-500 text-white p-4 rounded-md text-center"
                    >
                      Thank you! We'll contact you shortly.
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu; 