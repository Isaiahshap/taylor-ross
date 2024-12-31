import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

interface PracticeAreaHeroProps {
  title: string;
  description: string;
  backgroundImage: string;
  stats: {
    value: string;
    label: string;
  }[];
}

const PracticeAreaHero: React.FC<PracticeAreaHeroProps> = ({
  title,
  description,
  backgroundImage,
  stats
}) => {
  return (
    <section className="relative min-h-[80vh] flex items-center pt-32">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/80 z-10" />
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-white mb-6">
              {title}
            </h1>
            <p className="text-xl text-white/80 max-w-xl mb-8 font-body leading-relaxed">
              {description}
            </p>
            <button className="group flex items-center gap-3 bg-law-red px-8 py-4 text-white font-display text-xl uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300">
              Free Consultation
              <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-black/30 backdrop-blur-sm p-8 border border-white/10"
              >
                <div className="text-4xl font-display font-bold text-law-red mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80 font-body">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreaHero; 