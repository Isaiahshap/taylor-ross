import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaQuoteLeft } from 'react-icons/fa';

interface MediaMentionProps {
  outlet: string;
  logo: string;
  title: string;
  date: string;
  link: string;
  quote?: string;
  index: number;
  inView: boolean;
}

const MediaMention: React.FC<MediaMentionProps> = ({
  outlet,
  logo,
  title,
  date,
  link,
  quote,
  index,
  inView
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="group relative bg-black overflow-hidden"
    >
      <div className="flex items-center gap-6 p-6 relative z-10">
        <div className="w-24 h-24 flex-shrink-0 relative">
          <img
            src={logo}
            alt={outlet}
            className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-50 group-hover:opacity-0 transition-opacity duration-500" />
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-display text-white group-hover:text-law-red transition-colors duration-300 truncate">
            {title}
          </h3>
          <div className="flex items-center gap-4 mt-2">
            <span className="text-white/60 text-sm">{outlet}</span>
            <span className="text-white/60 text-sm">•</span>
            <span className="text-white/60 text-sm">{date}</span>
          </div>
        </div>
        
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 w-10 h-10 bg-law-red/10 rounded-full flex items-center justify-center group-hover:bg-law-red transition-colors duration-300"
        >
          <FaExternalLinkAlt className="text-law-red group-hover:text-white group-hover:scale-125 transition-all duration-300" />
        </a>
      </div>

      {quote && (
        <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 p-6 flex items-center">
          <div className="relative">
            <FaQuoteLeft className="absolute -top-4 -left-4 text-law-red/20 text-4xl" />
            <p className="text-white/90 font-body italic leading-relaxed">
              "{quote}"
            </p>
          </div>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-r from-law-red/0 via-law-red/5 to-law-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

export default MediaMention; 