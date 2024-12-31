import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

interface TestimonialCardProps {
  client: string;
  case: string;
  quote: string;
  index: number;
  inView: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ client, case: caseType, quote, index, inView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-black p-8 group hover:bg-black/90 transition-colors duration-300"
    >
      <div className="mb-6 text-law-red group-hover:scale-110 transition-transform duration-300">
        <FaQuoteLeft className="text-4xl" />
      </div>
      <div className="space-y-4">
        <p className="text-white/90 text-xl font-body leading-relaxed">
          "{quote}"
        </p>
        <div className="w-16 h-1 bg-law-red group-hover:w-24 transition-all duration-300" />
        <div>
          <div className="text-white font-display">{client}</div>
          <div className="text-law-red text-sm">{caseType}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard; 