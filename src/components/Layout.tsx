import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-law-navy">
      <header className={`fixed w-full top-0 z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-law-navy/95 backdrop-blur-md shadow-gold-glow border-law-gold/30 py-2' 
          : 'bg-law-navy border-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center group">
              <span className={`font-display font-bold text-law-gold tracking-tight group-hover:text-law-gold-light transition-all duration-300 transform group-hover:scale-105 ${
                isScrolled ? 'text-3xl' : 'text-4xl'
              }`}>
                TAYLOR & ROSS
              </span>
            </Link>
            
            <nav className="hidden md:block pointer-events-auto">
              <ul className="flex space-x-12 font-body text-sm tracking-widest uppercase">
                {['Home', 'About', 'Practice Areas', 'Blog', 'Contact'].map((item) => (
                  <li key={item} className="relative group">
                    <Link 
                      to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                      className={`text-law-white hover:text-law-gold transition-all duration-300 relative py-2 block font-bold ${
                        isScrolled ? 'text-sm' : 'text-base'
                      }`}
                    >
                      {item}
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-law-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                      <span className="absolute top-0 left-0 w-full h-0.5 bg-law-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="hidden md:block">
              <a 
                href="tel:888-888-8888" 
                className={`group relative overflow-hidden bg-law-navy border-2 border-law-gold font-bold uppercase tracking-wider text-law-gold transition-all duration-300 hover:bg-law-gold hover:text-law-navy hover:shadow-gold-glow transform hover:scale-105 ${
                  isScrolled ? 'px-6 py-2 text-base' : 'px-8 py-3 text-lg'
                }`}
              >
                <span className="relative z-10">
                  (888) 888-8888
                </span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-20">
        {children}
      </main>

      <footer className="bg-law-gray text-law-white py-16 border-t-2 border-law-gold/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-display text-law-gold text-xl mb-4">TAYLOR & ROSS</h3>
              <p className="font-body text-sm">
                Dedicated to fighting for justice and maximum compensation for our clients.
              </p>
            </div>
            <div>
              <h4 className="font-body uppercase text-law-gold mb-4">Contact</h4>
              <p className="font-body text-sm">
                123 Legal Avenue<br />
                New York, NY 10001<br />
                Tel: (888) 888-8888
              </p>
            </div>
            <div>
              <h4 className="font-body uppercase text-law-gold mb-4">Practice Areas</h4>
              <ul className="font-body text-sm space-y-2">
                <li>Personal Injury</li>
                <li>Car Accidents</li>
                <li>Medical Malpractice</li>
                <li>Workers' Compensation</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
