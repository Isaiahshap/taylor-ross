import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPhone, FaArrowRight } from 'react-icons/fa';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  practiceAreasDropdown: any[];
  resultsDropdown: any[];
  aboutDropdown: any[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  practiceAreasDropdown,
  resultsDropdown,
  aboutDropdown
}) => {
  const [openSection, setOpenSection] = React.useState<string | null>(null);

  // Prevent body scroll when menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "tween",
        duration: 0.3,
        when: "afterChildren"
      }
    },
    open: {
      x: 0,
      transition: {
        type: "tween",
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: { x: 20, opacity: 0 },
    open: { x: 0, opacity: 1 }
  };

  const renderDropdownItems = (items: any[], section: string) => {
    const isOpen = openSection === section;
    
    return (
      <div className="space-y-4">
        <button
          onClick={() => setOpenSection(isOpen ? null : section)}
          className="w-full flex items-center justify-between text-white py-4 font-display tracking-wide"
        >
          {section.toUpperCase()}
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <FaArrowRight className="text-law-red" />
          </motion.div>
        </button>
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="space-y-4 pl-4 pb-4">
                {items.map((item) => (
                  <Link
                    key={item.title}
                    to={item.link}
                    className="block text-white/70 hover:text-law-red transition-colors"
                    onClick={onClose}
                  >
                    <div className="font-display">{item.title}</div>
                    <div className="text-sm text-white/50">{item.description}</div>
                    {item.highlight && (
                      <div className="text-sm text-law-red mt-1">{item.highlight}</div>
                    )}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
            onClick={onClose}
          />
          
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-black border-l border-white/10 z-[70] overflow-y-auto overscroll-contain"
            style={{
              position: 'fixed',
              height: '100dvh'
            }}
          >
            <div className="sticky top-0 bg-black z-10 p-6 border-b border-white/10">
              <div className="flex justify-between items-center">
                <span className="text-2xl font-display text-white">Menu</span>
                <button
                  onClick={onClose}
                  className="text-white/60 hover:text-law-red transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              {renderDropdownItems(practiceAreasDropdown, "practice areas")}
              {renderDropdownItems(resultsDropdown, "results")}
              {renderDropdownItems(aboutDropdown, "about")}
              
              <a 
                href="tel:888-888-8888" 
                className="flex items-center justify-center space-x-2 bg-law-red w-full px-6 py-4 text-white font-display tracking-wider"
                onClick={onClose}
              >
                <FaPhone />
                <span>(888) 888-8888</span>
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu; 