import React from 'react';
import { motion } from 'framer-motion';

interface StatsCardProps {
  label: string;
  value: string;
  index: number;
  inView: boolean;
  onRedBg?: boolean;
}

const StatsCard: React.FC<StatsCardProps> = ({ label, value, index, inView, onRedBg = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`p-4 sm:p-6 md:p-8 group ${
        onRedBg 
          ? "bg-black hover:bg-black/90" 
          : "bg-black hover:bg-black/90"
      } transition-colors duration-300`}
    >
      <div className="mb-3 sm:mb-4 md:mb-6 text-law-red group-hover:scale-110 transition-transform duration-300">
        <div className="text-2xl sm:text-3xl md:text-4xl font-display">{value}</div>
      </div>
      <div className="text-sm sm:text-base md:text-lg text-white/80 font-body">
        {label}
      </div>
    </motion.div>
  );
};

export default StatsCard; 