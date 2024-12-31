import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CTAButton from '../common/CTAButton';
import ResultCard from './ResultCard';
import { Link } from 'react-router-dom';

const resultCards = [
  { 
    amount: "$15.5M", 
    type: "Medical Malpractice",
    href: "/practice-areas/medical-malpractice",
    delay: 0.3
  },
  { 
    amount: "$8.2M", 
    type: "Auto Accident",
    href: "/practice-areas/car-accidents",
    delay: 0.4
  },
  { 
    amount: "$12.1M", 
    type: "Wrongful Death",
    href: "/practice-areas/wrongful-death",
    delay: 0.5
  },
  { 
    amount: "$9.8M", 
    type: "Workplace Injury",
    href: "/practice-areas/workplace-injuries",
    delay: 0.6
  }
];

const Hero: React.FC = () => {
  const [videoError, setVideoError] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-24 md:pt-32 md:pb-32">
      {/* Background Video or Fallback */}
      <div className="absolute inset-0 bg-black">
        {!videoError ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            onError={() => setVideoError(true)}
            className="w-full h-full object-cover opacity-40"
          >
            <source src="/videos/law-background.mp4" type="video/mp4" />
          </video>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-black via-law-dark to-black opacity-40" />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-[4rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] leading-[0.85] font-display font-bold text-white mb-6 tracking-[-0.02em]">
              FIGHTING
              <span className="block">FOR YOUR</span>
              <span className="text-law-red relative inline-block border-b-4 sm:border-b-8 border-law-red">RIGHTS</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-xl mx-auto lg:mx-0 mb-8 font-body">
              When negligence changes your life, you need attorneys who will fight relentlessly 
              for the compensation you deserve. Over $100 Million recovered for our clients.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-6">
              <CTAButton to="/contact" variant="primary" icon>
                FREE CASE REVIEW
              </CTAButton>
              <CTAButton href="tel:888-888-8888" variant="secondary">
                (888) 888-8888
              </CTAButton>
            </div>
          </motion.div>

          {/* Mobile/Tablet Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="block lg:hidden"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {resultCards.map((result) => (
                <Link 
                  key={result.type}
                  to={result.href}
                  className="group cursor-pointer"
                >
                  <ResultCard
                    amount={result.amount}
                    type={result.type}
                    delay={result.delay}
                    isMobile={true}
                  />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Desktop Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-6">
              {resultCards.map((result) => (
                <Link 
                  key={result.type}
                  to={result.href}
                  className="group cursor-pointer"
                >
                  <ResultCard
                    amount={result.amount}
                    type={result.type}
                    delay={result.delay}
                    isMobile={false}
                  />
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 