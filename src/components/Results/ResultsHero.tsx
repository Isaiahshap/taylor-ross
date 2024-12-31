import React from 'react';
import { motion } from 'framer-motion';

interface ResultsHeroProps {
  title: string;
  subtitle: string;
  description: string;
  stats?: Array<{ label: string; value: string }>;
  inView: boolean;
}

const ResultsHero: React.FC<ResultsHeroProps> = ({ 
  title, 
  subtitle, 
  description, 
  stats, 
  inView
}) => {
  return (
    <section className="relative min-h-[75vh] flex items-center bg-black pt-24 md:pt-32">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Main Title */}
          <div className="mb-6">
            <h1 className="text-6xl md:text-8xl font-display uppercase text-white font-bold tracking-tight">
              {title}{' '}
              <span className="text-law-red relative inline-block">
                {subtitle}
                <div className="absolute -bottom-2 left-0 w-full h-2 bg-law-red" />
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto font-body leading-relaxed mb-12">
            {description}
          </p>

          {/* Stats Grid */}
          {stats && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4 }}
                  className="bg-black border-2 border-law-red p-6 group hover:bg-law-red/5 transition-colors duration-300"
                >
                  <div className="flex flex-col items-center">
                    <span className="font-display text-5xl font-bold text-law-red mb-3 group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </span>
                    <span className="text-white text-lg uppercase tracking-widest font-display">
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

export default ResultsHero; 