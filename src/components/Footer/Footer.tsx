import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaArrowRight } from 'react-icons/fa';
import { useMemo } from 'react';

const FooterLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <Link
    to={to}
    className="group relative text-white/70 hover:text-white transition-colors duration-300 inline-flex items-center px-8 -mx-2"
  >
    <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">
      {children}
    </span>
    <div className="absolute inset-0 bg-law-red transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 -z-0" />
  </Link>
);

const Footer: React.FC = () => {
  const { pathname } = useLocation();
  
  // Memoize the check to prevent unnecessary re-renders
  const showCTA = useMemo(() => pathname !== '/contact', [pathname]);

  return (
    <footer className="relative bg-black">
      {/* Top Red Bar - Hidden on Contact page */}
      {showCTA && (
        <div className="relative py-8 md:py-12">
          {/* Red gradient background with black edges */}
          <div className="absolute inset-0">
            {/* Center red section */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#E31837] via-[#E31837] to-[#E31837]" />
            
            {/* Pattern overlay */}
            <div className="absolute inset-0 bg-[url('/pattern.png')] mix-blend-overlay opacity-10" />
            
            {/* Additional gradients for smoother blending */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30" />
            
            {/* Top and bottom gradients only */}
            <div className="absolute inset-x-0 top-0 h-24 md:h-32 bg-gradient-to-b from-black to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-24 md:h-32 bg-gradient-to-t from-black to-transparent" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 text-center md:text-left">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-display text-white uppercase drop-shadow-lg max-w-2xl">
                Ready to Fight for Your <span className="text-white font-bold">Rights</span>?
              </h3>
              <Link
                to="/contact"
                className="group w-full md:w-auto flex items-center justify-center gap-3 bg-black/90 px-6 sm:px-8 py-4 text-white font-display text-lg sm:text-xl uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 shadow-lg"
              >
                Free Consultation
                <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 max-w-7xl py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 - About */}
          <div className="space-y-6">
            <Link to="/" className="block">
              <span className="text-3xl font-display font-bold text-white tracking-tight">
                TAYLOR <span className="text-law-red">&</span> ROSS
              </span>
            </Link>
            <p className="text-white/70 font-body">
              Aggressive representation for personal injury victims. Over $100 million recovered for our clients.
            </p>
            <div className="flex gap-4">
              {[FaFacebookF, FaTwitter, FaLinkedinIn].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-law-red/10 hover:bg-law-red flex items-center justify-center text-law-red hover:text-white transition-all duration-300"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Practice Areas */}
          <div>
            <h4 className="text-xl font-display text-white mb-6 uppercase">Practice Areas</h4>
            <ul className="space-y-4">
              {[
                { name: 'Car Accidents', path: '/practice-areas/car-accidents' },
                { name: 'Medical Malpractice', path: '/practice-areas/medical-malpractice' },
                { name: 'Truck Accidents', path: '/practice-areas/truck-accidents' },
                { name: 'Workplace Injuries', path: '/practice-areas/workplace-injuries' },
                { name: 'Motorcycle Accidents', path: '/practice-areas/motorcycle-accidents' },
                { name: 'Catastrophic Injuries', path: '/practice-areas/catastrophic-injuries' },
                { name: 'Wrongful Death', path: '/practice-areas/wrongful-death' },
                { name: 'Brain & Spinal Injuries', path: '/practice-areas/brain-and-spinal-injuries' }
              ].map((area) => (
                <li key={area.name}>
                  <FooterLink to={area.path}>
                    {area.name}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Quick Links */}
          <div>
            <h4 className="text-xl font-display text-white mb-6 uppercase">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'About', path: '/about' },
                { name: 'Our Story', path: '/about/our-story' },
                { name: 'Attorneys', path: '/about/attorneys' },
                { name: 'Community Impact', path: '/about/community' },
                { name: 'News & Media', path: '/about/news' },
                { name: 'Results', path: '/results' },
                { name: 'Case Results', path: '/results/case-results' },
                { name: 'Testimonials', path: '/results/testimonials' },
                { name: 'Contact', path: '/contact' },
                { name: 'Privacy Policy', path: '/privacy-policy' },
                { name: 'Terms of Service', path: '/terms-of-service' },
                { name: 'Disclaimer', path: '/disclaimer' }
              ].map((link) => (
                <li key={link.name}>
                  <FooterLink to={link.path}>
                    {link.name}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className="text-xl font-display text-white mb-6 uppercase">Contact Us</h4>
            <ul className="space-y-6">
              <li>
                <a href="tel:888-888-8888" className="flex items-start gap-4 group">
                  <FaPhone className="text-law-red mt-1" />
                  <div>
                    <span className="block text-white/70 group-hover:text-law-red transition-colors duration-300">Phone</span>
                    <span className="text-white font-display text-lg">(888) 888-8888</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:info@taylorross.com" className="flex items-start gap-4 group">
                  <FaEnvelope className="text-law-red mt-1" />
                  <div>
                    <span className="block text-white/70 group-hover:text-law-red transition-colors duration-300">Email</span>
                    <span className="text-white font-display text-lg">info@taylorross.com</span>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-law-red mt-1" />
                <div>
                  <span className="block text-white/70">Address</span>
                  <span className="text-white font-display text-lg">
                    123 Legal Street<br />
                    New York, NY 10001
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 max-w-7xl py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-sm">
            <div>
              © 2024 Yeshaya.dev. All rights reserved. Built by{' '}
              <a 
                href="https://yeshaya.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-law-red hover:text-white transition-colors duration-300"
              >
                Yeshaya.dev
              </a>
            </div>
            <div className="flex gap-6">
              <Link to="/privacy-policy" className="hover:text-law-red transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="hover:text-law-red transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Disclaimer */}
      <div className="bg-black/50 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-7xl py-8">
          <p className="text-white/40 text-xs leading-relaxed">
            Case "worth" is determined from the total settlement amount. The settlement amounts shown are gross numbers before attorney's fees and cost deductions. The % fees will be computed before deducting expenses and costs from the gross settlement. No fees or costs with no recovery.
          </p>
          <p className="text-white/40 text-xs leading-relaxed mt-4">
            The information contained in this Website is provided for informational purposes only, and should not be construed as legal advice on any subject matter. The specific results achieved for clients shared on this website do not imply that similar results may be achieved for other clients.{' '}
            <Link to="/disclaimer" className="text-law-red hover:text-white transition-colors duration-300">
              Read Our Full Disclaimer
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 