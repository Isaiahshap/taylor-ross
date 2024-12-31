import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPhone, FaArrowRight, FaHome, FaGavel, FaTrophy, FaUsers, FaBlog } from 'react-icons/fa';

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
        type: "spring",
        stiffness: 300,
        damping: 30,
        when: "afterChildren"
      }
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const renderDropdownItems = (items: any[], section: string) => {
    const isOpen = openSection === section;
    
    return (
      <div className="space-y-4">
        <button
          onClick={() => setOpenSection(isOpen ? null : section)}
          className="w-full flex items-center justify-between text-white py-4 font-display tracking-wide"
        >
          <div className="flex items-center gap-3">
            {section === "practice areas" && <FaGavel className="text-law-red" />}
            {section === "results" && <FaTrophy className="text-law-red" />}
            {section === "about" && <FaUsers className="text-law-red" />}
            {section.toUpperCase()}
          </div>
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
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="overflow-hidden"
            >
              <div className="space-y-6 pl-4 pb-4">
                {items.map((item) => (
                  <Link
                    key={item.title}
                    to={item.link}
                    className="block group"
                    onClick={onClose}
                  >
                    <div className="font-display text-white group-hover:text-law-red transition-colors duration-300">
                      {item.title}
                    </div>
                    <div className="text-sm text-white/50 group-hover:text-white/70 transition-colors duration-300">
                      {item.description}
                    </div>
                    {item.highlight && (
                      <div className="text-sm text-law-red mt-1 font-semibold">
                        {item.highlight}
                      </div>
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
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[60]"
            onClick={onClose}
          />
          
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-black border-l border-white/10 z-[70] overflow-y-auto overscroll-contain"
            style={{
              height: '100dvh'
            }}
          >
            <div className="sticky top-0 bg-black/95 backdrop-blur-md z-10 p-6 border-b border-white/10">
              <div className="flex justify-between items-center">
                <Link 
                  to="/"
                  onClick={onClose}
                  className="flex items-start gap-3 text-2xl font-display text-white hover:text-law-red transition-colors duration-300"
                >
                  <img src="/logo.png" alt="Taylor & Ross Logo" className="h-8 w-auto -mt-0.5" />
                  TAYLOR & ROSS
                </Link>
                <button
                  onClick={onClose}
                  className="text-white/60 hover:text-law-red transition-colors duration-300"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              <Link
                to="/"
                onClick={onClose}
                className="flex items-center gap-3 text-white hover:text-law-red transition-colors duration-300 font-display tracking-wide"
              >
                <FaHome className="text-law-red" />
                HOME
              </Link>
              
              {renderDropdownItems(practiceAreasDropdown, "practice areas")}
              {renderDropdownItems(resultsDropdown, "results")}
              {renderDropdownItems(aboutDropdown, "about")}
              
              <Link
                to="/blog"
                onClick={onClose}
                className="flex items-center gap-3 text-white hover:text-law-red transition-colors duration-300 font-display tracking-wide"
              >
                <FaBlog className="text-law-red" />
                BLOG
              </Link>
              
              <a 
                href="tel:888-888-8888" 
                className="flex items-center justify-center gap-3 bg-law-red w-full px-6 py-4 text-white font-display tracking-wider hover:bg-white hover:text-black transition-all duration-300"
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