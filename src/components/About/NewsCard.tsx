import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCalendar, FaTag } from 'react-icons/fa';

interface NewsCardProps {
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
  link: string;
  index: number;
  inView: boolean;
}

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  date,
  category,
  excerpt,
  image,
  link,
  index,
  inView
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="group relative bg-black"
    >
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div className="p-8">
        <div className="flex items-center gap-6 text-sm text-white/60 mb-4">
          <div className="flex items-center gap-2">
            <FaCalendar className="text-law-red" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaTag className="text-law-red" />
            <span>{category}</span>
          </div>
        </div>
        <h3 className="text-2xl font-display text-white mb-4 group-hover:text-law-red transition-colors duration-300">
          {title}
        </h3>
        <p className="text-white/70 font-body mb-6 line-clamp-3">
          {excerpt}
        </p>
        <Link 
          to={link}
          className="inline-flex items-center text-law-red hover:text-white transition-colors duration-300"
        >
          Read More →
        </Link>
      </div>
    </motion.div>
  );
};

export default NewsCard; 