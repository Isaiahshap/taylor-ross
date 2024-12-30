import React from 'react';
import { motion } from 'framer-motion';

interface StatCardProps {
  number: string;
  label: string;
  delay: number;
}

const StatCard: React.FC<StatCardProps> = ({ number, label, delay }) => {
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { delay, duration: 0.8, ease: [0.215, 0.610, 0.355, 1.000] }
        }
      }}
      className="relative group transform transition-all duration-300 hover:scale-105"
    >
      <div className="absolute inset-0 bg-law-gold/5 transform -skew-x-12 group-hover:bg-law-gold/10 transition-all duration-300" />
      <div className="relative bg-law-navy/40 backdrop-blur-md p-8 border-2 border-law-gold/30 group-hover:border-law-gold/50">
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ delay: delay + 0.2, duration: 0.5 }}
          className="text-4xl font-bold text-law-gold mb-3"
        >
          {number}
        </motion.div>
        <div className="text-white/90 uppercase tracking-[0.2em] text-sm font-medium">{label}</div>
      </div>
    </motion.div>
  );
};

export default StatCard; 