import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

interface DropdownItem {
  title: string;
  description: string;
  link: string;
  highlight?: string;
}

interface NavDropdownProps {
  show: boolean;
  items: DropdownItem[];
  width?: string;
  layout?: 'grid' | 'list';
}

const dropdownVariants = {
  hidden: {
    opacity: 0,
    y: -5,
    clipPath: 'inset(0% 50% 100% 50%)'
  },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: {
      duration: 0.3,
      ease: 'easeOut',
      staggerChildren: 0.05
    }
  },
  exit: {
    opacity: 0,
    y: -5,
    clipPath: 'inset(0% 50% 100% 50%)',
    transition: {
      duration: 0.2,
      ease: 'easeIn'
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.2 }
  }
};

const NavDropdown: React.FC<NavDropdownProps> = ({ 
  show, 
  items, 
  width = '500px',
  layout = 'list'
}) => {
  return (
    <>
      {/* Invisible hover bridge */}
      {show && (
        <div 
          className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] h-4" 
          style={{ pointerEvents: 'auto' }}
        />
      )}

      <AnimatePresence>
        {show && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`absolute top-[calc(100%+1rem)] -left-44 w-[${width}] bg-black/95 backdrop-blur-md border border-white/10 shadow-2xl overflow-hidden`}
          >
            <div className={`p-6 ${layout === 'grid' ? 'grid grid-cols-2 gap-2' : ''}`}>
              {items.map((item) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                >
                  <Link
                    to={item.link}
                    className="group block p-4 hover:bg-law-red/10 transition-all duration-300 rounded-sm"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-display text-white group-hover:text-law-red transition-colors duration-300">
                        {item.title}
                      </h3>
                      <FaArrowRight className="text-law-red text-sm opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                    <p className="text-sm text-white/60 mb-2">
                      {item.description}
                    </p>
                    {item.highlight && (
                      <div className="text-sm text-law-red font-semibold">
                        {item.highlight}
                      </div>
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavDropdown; 