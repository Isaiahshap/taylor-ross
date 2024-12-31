import React from 'react';
import { motion } from 'framer-motion';

interface VictoryCardProps {
  amount: string;
  type: string;
  desc: string;
  index: number;
  inView: boolean;
}

const VictoryCard: React.FC<VictoryCardProps> = ({ amount, type, desc, index, inView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-black p-8 group hover:bg-black/90 transition-colors duration-300"
    >
      <div className="mb-6 text-law-red group-hover:scale-110 transition-transform duration-300">
        <div className="text-6xl font-display">{amount}</div>
      </div>
      <div className="space-y-4">
        <h3 className="text-2xl font-display text-white group-hover:text-law-red transition-colors duration-300 uppercase tracking-wider">
          {type}
        </h3>
        <div className="w-16 h-1 bg-law-red group-hover:w-24 transition-all duration-300" />
        <p className="text-white/80 font-body leading-relaxed">
          {desc}
        </p>
      </div>
    </motion.div>
  );
};

export default VictoryCard; 