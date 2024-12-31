import React from 'react';
import { motion } from 'framer-motion';

interface ProcessStepProps {
  phase: string;
  duration: string;
  index: number;
  inView: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ phase, duration, index, inView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-black/20 p-6 rounded group hover:bg-black/30 transition-all duration-300"
    >
      <div className="flex justify-between items-center">
        <div className="space-y-2">
          <div className="text-xl font-display text-white group-hover:text-law-red transition-colors duration-300">
            {phase}
          </div>
          <div className="w-12 h-1 bg-law-red group-hover:w-20 transition-all duration-300" />
        </div>
        <div className="text-law-red font-display text-lg">
          {duration}
        </div>
      </div>
    </motion.div>
  );
};

export default ProcessStep; 