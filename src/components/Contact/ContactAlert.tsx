import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaTimes } from 'react-icons/fa';

interface AlertProps {
  type: 'success' | 'error';
  message: string;
  onClose: () => void;
}

const ContactAlert: React.FC<AlertProps> = ({ type, message, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`fixed top-6 right-6 z-50 p-4 rounded shadow-lg flex items-center space-x-3 ${
        type === 'success' ? 'bg-law-red' : 'bg-red-600'
      }`}
    >
      {type === 'success' ? (
        <FaCheck className="text-white text-xl" />
      ) : (
        <FaTimes className="text-white text-xl" />
      )}
      <p className="text-white font-body">{message}</p>
      <button 
        onClick={onClose}
        className="text-white/80 hover:text-white transition-colors"
      >
        <FaTimes />
      </button>
    </motion.div>
  );
};

export default ContactAlert; 