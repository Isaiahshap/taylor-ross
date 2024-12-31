import React from 'react';
import { motion } from 'framer-motion';

interface PracticeAreaStatsProps {
  area: string;
  total: string;
  cases: string;
  index: number;
  inView: boolean;
}

const PracticeAreaStats: React.FC<PracticeAreaStatsProps> = ({ area, total, cases, index, inView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-black p-8 group hover:bg-black/90 transition-colors duration-300"
    >
      <h3 className="text-2xl font-display text-white mb-4">{area}</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="text-4xl font-display text-law-red">{total}</div>
          <div className="text-white/80">Total Recovered</div>
        </div>
        <div>
          <div className="text-4xl font-display text-law-red">{cases}</div>
          <div className="text-white/80">Cases Won</div>
        </div>
      </div>
    </motion.div>
  );
};

export default PracticeAreaStats; 