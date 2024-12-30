import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Hero: React.FC = () => {
  const [videoError, setVideoError] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center pt-24">
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

      <div className="relative container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[7rem] md:text-[9rem] leading-[0.85] font-display font-bold text-white mb-6 tracking-[-0.02em]">
              FIGHTING
              <span className="block">FOR YOUR</span>
              <span className="text-law-red relative inline-block border-b-8 border-law-red">RIGHTS</span>
            </h1>
            <p className="text-xl text-white/80 max-w-xl mb-8 font-body">
              When negligence changes your life, you need attorneys who will fight relentlessly 
              for the compensation you deserve. Over $100 Million recovered for our clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                to="/contact"
                className="group relative overflow-hidden bg-law-red text-white px-12 py-5 text-lg font-display tracking-wider transition-all duration-300 before:absolute before:inset-0 before:-z-10 before:translate-y-full before:bg-black before:transition-transform before:duration-300 hover:before:translate-y-0"
              >
                <span>FREE CASE REVIEW</span>
                <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              <a
                href="tel:888-888-8888"
                className="flex items-center justify-center space-x-2 border-2 border-white text-white px-12 py-5 text-lg font-display tracking-wider hover:bg-white hover:text-black transition-all duration-300"
              >
                <span>(888) 888-8888</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-6">
              {[
                { amount: "$15.5M", type: "Medical Malpractice" },
                { amount: "$8.2M", type: "Auto Accident" },
                { amount: "$12.1M", type: "Wrongful Death" },
                { amount: "$9.8M", type: "Workplace Injury" }
              ].map((result) => (
                <div 
                  key={result.type} 
                  className="group relative bg-gradient-to-br from-black/90 to-black/70 backdrop-blur-sm p-6 border-l-4 border-law-red overflow-hidden hover:border-l-8 transition-all duration-300"
                >
                  <div className="relative z-10">
                    <div className="font-display text-4xl font-bold text-law-red mb-1 group-hover:scale-110 transition-transform duration-300">
                      {result.amount}
                    </div>
                    <div className="text-sm uppercase tracking-wider text-white/90 font-display">
                      {result.type}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-law-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 