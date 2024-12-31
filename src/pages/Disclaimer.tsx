import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaExclamationTriangle, FaArrowRight } from 'react-icons/fa';
import Navbar from '../components/Navbar/Navbar';

const Disclaimer: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <section className="relative py-24" ref={ref}>
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <FaExclamationTriangle className="text-law-red text-5xl mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-display uppercase text-white mb-6">
                Important <span className="text-law-red">Disclaimer</span>
              </h1>
            </motion.div>

            <div className="prose prose-lg prose-invert max-w-none">
              <div className="bg-white/5 p-8 mb-12 border-l-4 border-law-red">
                <h2 className="text-2xl text-white mb-4">Demo Website Notice</h2>
                <p className="text-white/80">
                  This website (Taylor & Ross Law Firm) is a demonstration project and does not represent a real law firm. 
                  It was created as a portfolio piece to showcase web development capabilities. Any resemblance to actual law firms, 
                  cases, or results is purely coincidental.
                </p>
              </div>

              <h3 className="text-xl text-white mb-4">No Legal Services Offered</h3>
              <p className="text-white/70 mb-8">
                This website does not provide legal services, legal advice, or create any attorney-client relationship. 
                All case results, statistics, and client testimonials shown are fictional and used for demonstration purposes only.
              </p>

              <h3 className="text-xl text-white mb-4">Design & Development Credits</h3>
              <p className="text-white/70 mb-8">
                This demo website was designed and developed by Yeshaya Shapiro to showcase modern web development practices, 
                including React, TypeScript, Tailwind CSS, and responsive design principles.
              </p>

              <div className="bg-gradient-to-r from-[#E31837] via-[#8B0000] to-black p-8 mt-12">
                <h3 className="text-2xl text-white mb-4">Need a Similar Website?</h3>
                <p className="text-white/90 mb-6">
                  If you're impressed with this demo and would like to create a professional website for your business, 
                  I'd love to help bring your vision to life.
                </p>
                
                <a 
                  href="https://yeshaya.dev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-black/90 px-8 py-4 text-white font-display text-xl uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300"
                >
                  Visit Yeshaya.dev
                  <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                </a>
              </div>

              <div className="mt-12 text-white/60 text-sm">
                <h4 className="text-white text-lg mb-4">Additional Disclaimers:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All images used are either licensed stock photos or AI-generated images</li>
                  <li>No actual client information or real case data is used on this site</li>
                  <li>This site is not intended to solicit legal services</li>
                  <li>The phone numbers and contact information shown are fictional</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Disclaimer; 