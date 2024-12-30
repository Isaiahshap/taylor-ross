import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPhone } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-4xl md:text-5xl font-display font-bold text-white tracking-[-0.02em]">
              TAYLOR <span className="text-law-red">&</span> ROSS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <Link to="/practice-areas" className="text-white hover:text-law-red transition-colors font-display tracking-wide">
              PRACTICE AREAS
            </Link>
            <Link to="/results" className="text-white hover:text-law-red transition-colors font-display tracking-wide">
              RESULTS
            </Link>
            <Link to="/about" className="text-white hover:text-law-red transition-colors font-display tracking-wide">
              ABOUT
            </Link>
            <div className="border-l-2 border-law-red h-8" />
            <a 
              href="tel:888-888-8888" 
              className="flex items-center space-x-2 bg-law-red px-6 py-3 hover:bg-white hover:text-black transition-all duration-300"
            >
              <FaPhone className="text-lg" />
              <span className="font-display tracking-wider">(888) 888-8888</span>
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 