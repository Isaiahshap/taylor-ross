import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPhone, FaArrowRight } from 'react-icons/fa';
import NavDropdown from './NavDropdown';
import MobileMenu from './MobileMenu';

interface DropdownItem {
  title: string;
  description: string;
  link: string;
  highlight?: string;
}

const practiceAreasDropdown: DropdownItem[] = [
  {
    title: "Car Accidents",
    description: "Expert representation for auto accident victims",
    link: "/practice-areas/car-accidents"
  },
  {
    title: "Truck Accidents",
    description: "Specialized handling of commercial vehicle cases",
    link: "/practice-areas/truck-accidents"
  },
  {
    title: "Medical Malpractice",
    description: "Fighting against healthcare negligence",
    link: "/practice-areas/medical-malpractice"
  },
  {
    title: "Workplace Injuries",
    description: "Protecting workers' rights and compensation",
    link: "/practice-areas/workplace-injuries"
  },
  {
    title: "Slip & Fall",
    description: "Premises liability expertise",
    link: "/practice-areas/slip-and-fall"
  },
  {
    title: "Product Liability",
    description: "Hold manufacturers accountable",
    link: "/practice-areas/product-liability"
  },
  {
    title: "Wrongful Death",
    description: "Compassionate representation for families",
    link: "/practice-areas/wrongful-death"
  },
  {
    title: "Motorcycle Accidents",
    description: "Specialized advocacy for riders",
    link: "/practice-areas/motorcycle-accidents"
  },
  {
    title: "Brain & Spinal Injuries",
    description: "Expert catastrophic injury handling",
    link: "/practice-areas/catastrophic-injuries"
  }
];

const resultsDropdown = [
  {
    title: "Case Results",
    description: "View our track record of multi-million dollar victories",
    link: "/results/case-results",
    highlight: "$100M+ Recovered"
  },
  {
    title: "Client Testimonials",
    description: "Read what our satisfied clients have to say",
    link: "/results/testimonials",
    highlight: "500+ 5-Star Reviews"
  },
  {
    title: "Notable Victories",
    description: "Explore our biggest wins and landmark cases",
    link: "/results/notable-victories",
    highlight: "Featured Cases"
  },
  {
    title: "Settlement Timeline",
    description: "Understanding the journey to maximum compensation",
    link: "/results/settlement-process",
    highlight: "Process Overview"
  }
];

const aboutDropdown = [
  {
    title: "Our Story",
    description: "Learn about our firm's history and commitment to justice",
    link: "/about/our-story",
    highlight: "25+ Years of Excellence"
  },
  {
    title: "Our Attorneys",
    description: "Meet our team of experienced trial lawyers",
    link: "/about/attorneys",
    highlight: "Award-Winning Team"
  },
  {
    title: "Community Impact",
    description: "See how we give back to our local community",
    link: "/about/community",
    highlight: "Making a Difference"
  },
  {
    title: "News & Media",
    description: "Latest updates, press releases, and media coverage",
    link: "/about/news",
    highlight: "Featured Stories"
  }
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showResultsDropdown, setShowResultsDropdown] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden text-white p-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {/* Practice Areas Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <div className="flex justify-center items-center space-x-1">
                <Link 
                  to="/practice-areas" 
                  className="text-white hover:text-law-red transition-colors font-display tracking-wide"
                >
                  PRACTICE AREAS
                </Link>
                <motion.div
                  animate={{ rotate: showDropdown ? 0 : 180 }}
                  transition={{ duration: 0.2 }}
                  className="text-law-red"
                >
                  <FaArrowRight className="rotate-90 text-xs" />
                </motion.div>
              </div>
              <div className="absolute left-0">
                <NavDropdown 
                  show={showDropdown}
                  items={practiceAreasDropdown}
                  width="600px"
                  layout="grid"
                />
              </div>
            </div>

            {/* Results Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShowResultsDropdown(true)}
              onMouseLeave={() => setShowResultsDropdown(false)}
            >
              <div className="flex justify-center items-center space-x-1">
                <Link 
                  to="/results" 
                  className="text-white hover:text-law-red transition-colors font-display tracking-wide"
                >
                  RESULTS
                </Link>
                <motion.div
                  animate={{ rotate: showResultsDropdown ? 0 : 180 }}
                  transition={{ duration: 0.2 }}
                  className="text-law-red"
                >
                  <FaArrowRight className="rotate-90 text-xs" />
                </motion.div>
              </div>
              <div className="absolute left-0">
                <NavDropdown 
                  show={showResultsDropdown}
                  items={resultsDropdown}
                  width="600px"
                  layout="grid"
                />
              </div>
            </div>

            {/* About Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShowAboutDropdown(true)}
              onMouseLeave={() => setShowAboutDropdown(false)}
            >
              <div className="flex justify-center items-center space-x-1">
                <Link 
                  to="/about" 
                  className="text-white hover:text-law-red transition-colors font-display tracking-wide"
                >
                  ABOUT
                </Link>
                <motion.div
                  animate={{ rotate: showAboutDropdown ? 0 : 180 }}
                  transition={{ duration: 0.2 }}
                  className="text-law-red"
                >
                  <FaArrowRight className="rotate-90 text-xs" />
                </motion.div>
              </div>
              <div className="absolute left-0">
                <NavDropdown 
                  show={showAboutDropdown}
                  items={aboutDropdown}
                  width="600px"
                  layout="grid"
                />
              </div>
            </div>

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
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        practiceAreasDropdown={practiceAreasDropdown}
        resultsDropdown={resultsDropdown}
        aboutDropdown={aboutDropdown}
      />
    </motion.nav>
  );
}

export default Navbar; 