import React from 'react';
import { motion } from 'framer-motion';
import { FaBalanceScale } from 'react-icons/fa';

interface AboutHeroProps {
  title: string;
  subtitle: string;
  description: string;
  stats?: Array<{ label: string; value: string }>;
}

const AboutHero: React.FC<AboutHeroProps> = ({ 
  title, 
  subtitle, 
  description, 
  stats
}) => {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-black pt-24 pb-36 md:pt-32 md:pb-44">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/about-pattern.png')] opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-law-red/10 via-transparent to-transparent opacity-40" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="text-6xl md:text-8xl font-display uppercase text-white font-bold tracking-tight">
              {title}{' '}
              <span className="text-law-red relative inline-block group">
                {subtitle}
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="absolute -bottom-2 left-0 h-2 bg-law-red"
                />
                <div className="absolute -inset-x-4 -inset-y-2 bg-law-red/10 scale-0 group-hover:scale-100 transition-transform duration-300" />
              </span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto font-body leading-relaxed mb-16"
          >
            {description}
          </motion.p>

          {stats && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  className="group relative bg-black border-2 border-law-red p-8 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-law-red/0 via-law-red/5 to-law-red/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  
                  <div className="relative flex flex-col items-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.2, delay: 0.8 + index * 0.1 }}
                      className="mb-4"
                    >
                      <FaBalanceScale className="text-law-red text-3xl group-hover:scale-125 transition-transform duration-200" />
                    </motion.div>
                    <span className="font-display text-5xl font-bold text-law-red mb-3 group-hover:scale-110 transition-transform duration-200">
                      {stat.value}
                    </span>
                    <span className="text-white text-lg uppercase tracking-widest font-display group-hover:text-law-red transition-colors duration-200">
                      {stat.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero; 