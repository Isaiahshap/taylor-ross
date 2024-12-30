import React from 'react';
import { motion } from 'framer-motion';

interface ResultCardProps {
  amount: string;
  type: string;
  delay?: number;
}

const ResultCard: React.FC<ResultCardProps> = ({ amount, type, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="relative group"
    >
      <div className="relative z-10">
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
          className="flex flex-col"
        >
          <span className="font-display text-7xl font-bold text-law-red mb-4 group-hover:scale-105 transition-transform duration-500 tracking-tight">
            {amount}
          </span>
          <div className="space-y-3">
            <div className="h-[2px] w-16 bg-law-red/80 group-hover:w-24 transition-all duration-500" />
            <span className="block text-sm uppercase tracking-[0.25em] text-white/90 font-display">
              {type}
            </span>
          </div>
        </motion.div>
      </div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-law-red/5 blur-3xl group-hover:bg-law-red/10 transition-all duration-700" />
      <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-black/80 blur-2xl" />
      <div className="absolute inset-0 bg-gradient-to-t from-law-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </motion.div>
  );
};

export default ResultCard; 