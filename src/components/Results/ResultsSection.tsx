import React from 'react';
import { motion } from 'framer-motion';

interface ResultsSectionProps {
  title: string;
  subtitle: string;
  lightText?: boolean;
  inView: boolean;
}

const ResultsSection: React.FC<ResultsSectionProps> = ({ title, subtitle, lightText = true, inView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <h2 className={`text-4xl font-display uppercase ${lightText ? 'text-white' : 'text-black'}`}>
        {title} <span className={lightText ? 'text-law-red' : 'text-white'}>{subtitle}</span>
      </h2>
    </motion.div>
  );
};

export default ResultsSection; 